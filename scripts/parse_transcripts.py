#!/usr/bin/env python3

import os
import json
import re
from datetime import datetime
from pathlib import Path
import urllib.parse

def extract_video_id_from_filename(filename):
    """Extract YouTube video ID from filename"""
    # Common patterns: video_id.txt or title_video_id.txt
    pattern = r'([a-zA-Z0-9_-]{11})\.txt$'
    match = re.search(pattern, filename)
    if match:
        return match.group(1)
    return None

def parse_transcript_file(file_path):
    """Parse a single transcript file and extract metadata"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Initialize sermon data
        sermon = {
            "id": "",
            "title": "",
            "video_id": "",
            "url": "",
            "speaker": "Unknown Speaker",
            "date": "",
            "duration": "",
            "topics": [],
            "transcript_available": True,
            "language": "English",
            "full_transcript": "",
            "timestamped_transcript": ""
        }
        
        # Extract video ID from filename
        filename = os.path.basename(file_path)
        video_id = extract_video_id_from_filename(filename)
        if video_id:
            sermon["video_id"] = video_id
            sermon["url"] = f"https://www.youtube.com/watch?v={video_id}"
            sermon["id"] = video_id
        
        # Parse content sections
        lines = content.split('\n')
        current_section = None
        full_transcript_lines = []
        timestamped_lines = []
        
        for line in lines:
            line = line.strip()
            
            # Extract title
            if line.startswith('Title:'):
                sermon["title"] = line.replace('Title:', '').strip()
            
            # Extract video ID from content
            elif line.startswith('Video ID:'):
                vid_id = line.replace('Video ID:', '').strip()
                if vid_id:
                    sermon["video_id"] = vid_id
                    sermon["url"] = f"https://www.youtube.com/watch?v={vid_id}"
                    sermon["id"] = vid_id
            
            # Extract URL
            elif line.startswith('URL:'):
                sermon["url"] = line.replace('URL:', '').strip()
            
            # Detect sections
            elif line == 'FULL TRANSCRIPT:':
                current_section = 'full'
            elif line == 'TIMESTAMPED TRANSCRIPT:':
                current_section = 'timestamped'
            elif line.startswith('=='):
                current_section = None
            
            # Collect transcript content
            elif current_section == 'full' and line:
                full_transcript_lines.append(line)
            elif current_section == 'timestamped' and line:
                timestamped_lines.append(line)
        
        # Set transcript content
        sermon["full_transcript"] = '\n'.join(full_transcript_lines)
        sermon["timestamped_transcript"] = '\n'.join(timestamped_lines)
        
        # Extract date from filename if possible (format: 2025-04-17-12-50-08_B2HPDq0TyQM.txt)
        date_pattern = r'(\d{4}-\d{2}-\d{2})'
        date_match = re.search(date_pattern, filename)
        if date_match:
            sermon["date"] = date_match.group(1)
        
        # Estimate duration from transcript length (rough estimation)
        word_count = len(sermon["full_transcript"].split())
        estimated_minutes = max(1, word_count // 150)  # Assuming 150 words per minute
        sermon["duration"] = f"{estimated_minutes} min"
        
        # Detect language based on content
        swahili_indicators = ["kwa", "na", "ya", "wa", "ni", "kusema", "siku", "mtu", "watu", "Mungu"]
        transcript_lower = sermon["full_transcript"].lower()
        swahili_count = sum(1 for word in swahili_indicators if word.lower() in transcript_lower)
        if swahili_count >= 3:
            sermon["language"] = "Swahili"
        
        # Extract topics from title and content
        topics = extract_topics_from_content(sermon["title"], sermon["full_transcript"])
        sermon["topics"] = topics
        
        # Extract speaker from content (look for common patterns)
        speaker = extract_speaker_from_content(sermon["full_transcript"], sermon["title"])
        if speaker:
            sermon["speaker"] = speaker
        
        return sermon
        
    except Exception as e:
        print(f"Error parsing {file_path}: {e}")
        return None

def extract_topics_from_content(title, transcript):
    """Extract relevant topics from title and transcript"""
    topics = []
    
    # Common topic keywords
    topic_keywords = {
        "Health Message": ["health", "nutrition", "diet", "healing", "medicine", "remedy", "herbs"],
        "Prophecy": ["prophecy", "daniel", "revelation", "end times", "second coming", "signs"],
        "True Education": ["education", "learning", "teaching", "school", "knowledge"],
        "Three Angels": ["three angels", "first angel", "second angel", "third angel", "babylon"],
        "Sabbath": ["sabbath", "sabbath school", "seventh day"],
        "Biblical Teaching": ["bible", "scripture", "biblical", "testament"],
        "Evangelism": ["evangelism", "mission", "outreach", "gospel"],
        "Youth Ministry": ["youth", "young", "children"],
        "Worship": ["worship", "praise", "music", "song"],
        "Community": ["community", "outreach", "fellowship"],
        "Stewardship": ["tithe", "tithing", "stewardship", "offering"],
        "End Times": ["last days", "final", "crisis", "judgment"]
    }
    
    content = (title + " " + transcript).lower()
    
    for topic, keywords in topic_keywords.items():
        if any(keyword in content for keyword in keywords):
            topics.append(topic)
    
    # Limit to top 4 topics to avoid clutter
    return topics[:4] if topics else ["Biblical Teaching"]

def extract_speaker_from_content(transcript, title):
    """Extract speaker name from transcript or title"""
    # Look for common patterns
    patterns = [
        r'by ([A-Z][a-z]+ [A-Z][a-z]+)',  # "by John Doe"
        r'Pastor ([A-Z][a-z]+ [A-Z][a-z]+)',  # "Pastor John Doe"
        r'Elder ([A-Z][a-z]+ [A-Z][a-z]+)',  # "Elder John Doe"
        r'Ev\.? ([A-Z][a-z]+ [A-Z][a-z]+)',  # "Ev. John Doe"
        r'Evangelist ([A-Z][a-z]+ [A-Z][a-z]+)',  # "Evangelist John Doe"
        r'Mchungaji ([A-Z][a-z]+ [A-Z][a-z]+)',  # "Mchungaji John Doe" (Swahili)
    ]
    
    # Check title first
    for pattern in patterns:
        match = re.search(pattern, title)
        if match:
            return match.group(1)
    
    # Check first 500 characters of transcript
    transcript_start = transcript[:500]
    for pattern in patterns:
        match = re.search(pattern, transcript_start)
        if match:
            return match.group(1)
    
    return None

def process_ministry_folder(ministry_path, ministry_name):
    """Process all transcript files in a ministry folder"""
    if not os.path.exists(ministry_path):
        print(f"Ministry folder not found: {ministry_path}")
        return []
    
    sermons = []
    files = [f for f in os.listdir(ministry_path) if f.endswith('.txt')]
    
    print(f"Processing {len(files)} files for {ministry_name}...")
    
    for filename in files:
        file_path = os.path.join(ministry_path, filename)
        sermon = parse_transcript_file(file_path)
        if sermon:
            sermons.append(sermon)
    
    # Sort by date (newest first)
    sermons.sort(key=lambda x: x.get('date', ''), reverse=True)
    
    return sermons

def generate_ministry_data():
    """Generate JSON data for all ministries"""
    base_path = os.path.join(os.path.dirname(__file__), '..', 'output')
    
    # Ministry mapping
    ministries = {
        "young-evangelists": {
            "name": "Young Evangelists Ministry",
            "description": "Committed to biblical education and spiritual growth, focusing on Adventist theology, health message, and true education principles.",
            "folder": "young-evangelists"
        },
        "pioneer-loudcry": {
            "name": "Pioneer Loudcry",
            "description": "Dedicated to prophetic truth and the three angels' messages, providing deep theological content in both English and Swahili.",
            "folder": "pioneer-loudcry"
        },
        "newlife-sda": {
            "name": "Newlife SDA Church Nairobi",
            "description": "Major Seventh-day Adventist church in Nairobi with extensive sermon collection covering worship, doctrine, and community life.",
            "folder": "newlife-sda"
        },
        "nairobi-central-sda": {
            "name": "Nairobi Central SDA",
            "description": "Central SDA church serving the heart of Nairobi with comprehensive worship services, music ministry, and biblical teachings.",
            "folder": "nairobi-central-sda"
        }
    }
    
    all_data = {}
    
    for ministry_id, ministry_info in ministries.items():
        ministry_path = os.path.join(base_path, ministry_info["folder"])
        sermons = process_ministry_folder(ministry_path, ministry_info["name"])
        
        all_data[ministry_id] = {
            "info": ministry_info,
            "sermons": sermons,
            "stats": {
                "total_sermons": len(sermons),
                "languages": list(set(s.get("language", "English") for s in sermons)),
                "topics": list(set(topic for s in sermons for topic in s.get("topics", []))),
                "date_range": {
                    "earliest": min((s.get("date", "") for s in sermons if s.get("date")), default=""),
                    "latest": max((s.get("date", "") for s in sermons if s.get("date")), default="")
                }
            }
        }
    
    return all_data

def main():
    """Main function"""
    print("Christian Sermon Dataset - Transcript Parser")
    print("=" * 50)
    
    # Generate ministry data
    data = generate_ministry_data()
    
    # Create website data directory
    website_data_dir = os.path.join(os.path.dirname(__file__), '..', 'website', 'public', 'data')
    os.makedirs(website_data_dir, exist_ok=True)
    
    # Save individual ministry files
    for ministry_id, ministry_data in data.items():
        output_file = os.path.join(website_data_dir, f'{ministry_id}.json')
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(ministry_data, f, indent=2, ensure_ascii=False)
        print(f"Saved {ministry_data['stats']['total_sermons']} sermons for {ministry_data['info']['name']}")
    
    # Save combined dataset
    combined_file = os.path.join(website_data_dir, 'all_ministries.json')
    with open(combined_file, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    # Generate summary statistics
    total_sermons = sum(len(ministry_data['sermons']) for ministry_data in data.values())
    all_languages = set()
    all_topics = set()
    
    for ministry_data in data.values():
        all_languages.update(ministry_data['stats']['languages'])
        all_topics.update(ministry_data['stats']['topics'])
    
    summary = {
        "total_sermons": total_sermons,
        "total_ministries": len(data),
        "languages": sorted(list(all_languages)),
        "topics": sorted(list(all_topics)),
        "generated_at": datetime.now().isoformat(),
        "ministries": {
            ministry_id: {
                "name": ministry_data['info']['name'],
                "sermon_count": ministry_data['stats']['total_sermons']
            } for ministry_id, ministry_data in data.items()
        }
    }
    
    summary_file = os.path.join(website_data_dir, 'summary.json')
    with open(summary_file, 'w', encoding='utf-8') as f:
        json.dump(summary, f, indent=2, ensure_ascii=False)
    
    print(f"\nDataset Summary:")
    print(f"Total Sermons: {total_sermons}")
    print(f"Total Ministries: {len(data)}")
    print(f"Languages: {', '.join(all_languages)}")
    print(f"Data saved to: {website_data_dir}")

if __name__ == "__main__":
    main()