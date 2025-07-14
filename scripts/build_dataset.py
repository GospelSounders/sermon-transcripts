#!/usr/bin/env python3
"""
Build script to process transcript files and generate JSON data files for the website.
This script reads all transcript files from the output directory and creates
structured JSON files for each ministry and a summary file.
"""

import os
import json
import re
from datetime import datetime
from pathlib import Path

# Ministry configurations
MINISTRIES = {
    'young-evangelists': {
        'name': 'Young Evangelists Ministry',
        'description': 'Committed to biblical education and spiritual growth, focusing on Adventist theology, health message, and true education principles.',
        'output_dir': 'young-evangelists'
    },
    'pioneer-loudcry': {
        'name': 'Pioneer Loudcry',
        'description': 'Dedicated to prophetic truth and the three angels\' messages, providing deep theological content in both English and Swahili.',
        'output_dir': 'pioneer-loudcry'
    },
    'newlife-sda': {
        'name': 'Newlife SDA Church Nairobi',
        'description': 'Major Seventh-day Adventist church in Nairobi with extensive sermon collection covering worship, doctrine, and community life.',
        'output_dir': 'newlife-sda'
    },
    'nairobi-central-sda': {
        'name': 'Nairobi Central SDA',
        'description': 'Central SDA church serving the heart of Nairobi with comprehensive worship services, music ministry, and biblical teachings.',
        'output_dir': 'nairobi-central-sda'
    },
    'motswedi-sda': {
        'name': 'Motswedi SDA Church',
        'description': 'Seventh-day Adventist church in Botswana providing worship services and biblical teachings in both English and Setswana.',
        'output_dir': 'motswedi-sda'
    },
    'conroe-sda': {
        'name': 'Conroe SDA Church',
        'description': 'Seventh-day Adventist church in Texas providing worship services, biblical teachings, and community outreach programs.',
        'output_dir': 'conroe-sda'
    },
    'gaborone-central-sda': {
        'name': 'Gaborone Central SDA',
        'description': 'Central Seventh-day Adventist church in Gaborone, Botswana, serving the community with worship and biblical education.',
        'output_dir': 'gaborone-central-sda'
    },
    'repentance-holiness': {
        'name': 'Repentance And Holiness (Owuor)',
        'description': 'Ministry focused on repentance, holiness, and prophetic messages, emphasizing spiritual revival and biblical truth.',
        'output_dir': 'repentance-holiness'
    },
    'nader-mansour': {
        'name': 'Nader Mansour',
        'description': 'Biblical teaching and Christian discipleship content, focusing on practical Christian living and spiritual growth.',
        'output_dir': 'nader-mansour'
    }
}

def extract_video_id_from_filename(filename):
    """Extract YouTube video ID from filename."""
    # Video ID is typically the last part before .txt, after the last underscore
    name_without_ext = filename.replace('.txt', '')
    parts = name_without_ext.split('_')
    if len(parts) >= 2:
        potential_id = parts[-1]
        # YouTube video IDs are typically 11 characters
        if len(potential_id) == 11:
            return potential_id
    return None

def parse_transcript_file(filepath):
    """Parse a single transcript file and extract metadata."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract metadata from the header
        lines = content.split('\n')
        title = ""
        video_id = ""
        url = ""
        
        # Parse the header section
        for line in lines[:10]:  # Check first 10 lines for metadata
            if line.startswith('Title:'):
                title = line.replace('Title:', '').strip()
            elif line.startswith('Video ID:'):
                video_id = line.replace('Video ID:', '').strip()
            elif line.startswith('URL:'):
                url = line.replace('URL:', '').strip()
        
        # If we don't have video ID, try to extract from filename
        if not video_id:
            video_id = extract_video_id_from_filename(os.path.basename(filepath))
        
        # If we don't have URL, construct it from video ID
        if not url and video_id:
            url = f"https://www.youtube.com/watch?v={video_id}"
        
        # Extract the full transcript content
        full_transcript = ""
        transcript_started = False
        
        for line in lines:
            if line.strip() == "FULL TRANSCRIPT:":
                transcript_started = True
                continue
            elif line.strip().startswith("="):
                transcript_started = False
                continue
            elif transcript_started:
                full_transcript += line + "\n"
        
        # Clean up the transcript
        full_transcript = full_transcript.strip()
        
        # Basic topic detection based on title and content
        topics = detect_topics(title, full_transcript)
        
        # Extract speaker information
        speaker = extract_speaker(title, full_transcript)
        
        # Detect language (simple heuristic)
        language = detect_language(full_transcript)
        
        # Generate a unique ID
        sermon_id = f"{video_id}_{hash(title) % 10000}" if video_id else f"sermon_{hash(title) % 10000}"
        
        return {
            'id': sermon_id,
            'title': title or os.path.basename(filepath).replace('.txt', ''),
            'video_id': video_id or '',
            'url': url or '',
            'speaker': speaker,
            'date': '',  # Could be extracted from filename or content if available
            'duration': '',  # Could be calculated from timestamp data
            'topics': topics,
            'transcript_available': True,
            'language': language,
            'filename': os.path.basename(filepath)
        }
    
    except Exception as e:
        print(f"Error parsing {filepath}: {e}")
        return None

def detect_topics(title, content):
    """Detect topics based on title and content."""
    topics = []
    
    # Convert to lowercase for matching
    text = (title + " " + content).lower()
    
    # Topic keywords mapping
    topic_keywords = {
        'Biblical Teaching': ['bible', 'scripture', 'biblical', 'gospel', 'word of god', 'testament'],
        'Prophecy': ['prophecy', 'prophetic', 'revelation', 'daniel', 'ezekiel', 'end times', 'second coming'],
        'Health Message': ['health', 'healing', 'nutrition', 'diet', 'wellness', 'medical', 'disease'],
        'True Education': ['education', 'learning', 'study', 'knowledge', 'wisdom', 'teaching'],
        'Evangelism': ['evangelism', 'mission', 'witness', 'outreach', 'soul winning', 'baptism'],
        'Sabbath': ['sabbath', 'saturday', 'rest', 'holy day', 'commandment'],
        'Three Angels': ['three angels', 'angel', 'message', 'babylon', 'beast', 'mark'],
        'End Times': ['end times', 'last days', 'final events', 'judgment', 'tribulation'],
        'Worship': ['worship', 'praise', 'music', 'choir', 'hymn', 'song'],
        'Community': ['community', 'fellowship', 'church', 'family', 'unity'],
        'Youth Ministry': ['youth', 'young', 'children', 'teen', 'kid'],
        'Stewardship': ['stewardship', 'tithe', 'offering', 'money', 'finance'],
        'Prayer': ['prayer', 'pray', 'praying', 'intercession'],
        'Repentance': ['repentance', 'repent', 'forgiveness', 'sin', 'confession'],
        'Holiness': ['holiness', 'sanctification', 'holy', 'righteousness', 'purity'],
        'Revival': ['revival', 'awakening', 'spiritual', 'renewal', 'reformation'],
        'Discipleship': ['discipleship', 'disciple', 'following', 'christian living'],
        'Biblical Studies': ['study', 'lesson', 'class', 'cornerstone', 'book club']
    }
    
    for topic, keywords in topic_keywords.items():
        if any(keyword in text for keyword in keywords):
            topics.append(topic)
    
    # Default topic if none detected
    if not topics:
        topics = ['Biblical Teaching']
    
    return topics

def extract_speaker(title, content):
    """Extract speaker information from title or content."""
    # Look for common speaker patterns
    speaker_patterns = [
        r'Pr\.?\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)',
        r'Pastor\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)',
        r'Ev\.?\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)',
        r'Dr\.?\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)',
        r'Eld\.?\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)',
        r'Bro\.?\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)',
        r'Sis\.?\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)'
    ]
    
    text = title + " " + content[:500]  # Check title and first 500 chars
    
    for pattern in speaker_patterns:
        match = re.search(pattern, text)
        if match:
            return match.group(0).strip()
    
    return "Unknown Speaker"

def detect_language(content):
    """Simple language detection based on common words."""
    # Check for common Swahili words
    swahili_words = ['na', 'ya', 'wa', 'ni', 'kwa', 'za', 'katika', 'hii', 'hiyo', 'yetu', 'wetu', 'sisi', 'yeye']
    
    # Count Swahili words in first 1000 characters
    text_sample = content[:1000].lower()
    swahili_count = sum(1 for word in swahili_words if word in text_sample)
    
    # If we find several Swahili words, classify as Swahili
    if swahili_count >= 3:
        return 'Swahili'
    else:
        return 'English'

def process_ministry(ministry_key, ministry_config, output_dir, website_dir):
    """Process all transcripts for a single ministry."""
    ministry_path = os.path.join(output_dir, ministry_config['output_dir'])
    
    if not os.path.exists(ministry_path):
        print(f"Directory not found: {ministry_path}")
        return None
    
    sermons = []
    
    # Process all .txt files in the ministry directory
    for filename in os.listdir(ministry_path):
        if filename.endswith('.txt'):
            filepath = os.path.join(ministry_path, filename)
            sermon = parse_transcript_file(filepath)
            if sermon:
                sermons.append(sermon)
    
    if not sermons:
        print(f"No sermons found for {ministry_key}")
        return None
    
    # Sort sermons by title
    sermons.sort(key=lambda x: x['title'])
    
    # Collect all topics and languages
    all_topics = set()
    all_languages = set()
    
    for sermon in sermons:
        all_topics.update(sermon['topics'])
        all_languages.add(sermon['language'])
    
    # Create ministry data structure
    ministry_data = {
        'info': {
            'name': ministry_config['name'],
            'description': ministry_config['description']
        },
        'sermons': sermons,
        'stats': {
            'total_sermons': len(sermons),
            'languages': sorted(list(all_languages)),
            'topics': sorted(list(all_topics))
        }
    }
    
    # Write ministry JSON file
    ministry_json_path = os.path.join(website_dir, 'public', 'data', f'{ministry_key}.json')
    os.makedirs(os.path.dirname(ministry_json_path), exist_ok=True)
    
    with open(ministry_json_path, 'w', encoding='utf-8') as f:
        json.dump(ministry_data, f, indent=2, ensure_ascii=False)
    
    print(f"Generated {ministry_json_path} with {len(sermons)} sermons")
    
    return ministry_data

def create_summary_file(all_ministries, website_dir):
    """Create a summary file with overall statistics."""
    total_sermons = 0
    all_topics = set()
    all_languages = set()
    ministry_summary = {}
    
    for ministry_key, ministry_data in all_ministries.items():
        if ministry_data:
            total_sermons += ministry_data['stats']['total_sermons']
            all_topics.update(ministry_data['stats']['topics'])
            all_languages.update(ministry_data['stats']['languages'])
            
            ministry_summary[ministry_key] = {
                'name': ministry_data['info']['name'],
                'sermon_count': ministry_data['stats']['total_sermons']
            }
    
    summary = {
        'total_sermons': total_sermons,
        'total_ministries': len([m for m in all_ministries.values() if m]),
        'languages': sorted(list(all_languages)),
        'topics': sorted(list(all_topics)),
        'generated_at': datetime.now().isoformat(),
        'ministries': ministry_summary
    }
    
    summary_path = os.path.join(website_dir, 'public', 'data', 'summary.json')
    with open(summary_path, 'w', encoding='utf-8') as f:
        json.dump(summary, f, indent=2, ensure_ascii=False)
    
    print(f"Generated summary file: {summary_path}")
    return summary

def main():
    """Main function to process all ministries."""
    script_dir = os.path.dirname(os.path.abspath(__file__))
    output_dir = os.path.join(script_dir, '..', 'output')
    website_dir = os.path.join(script_dir, '..', 'website')
    
    print("Starting dataset build process...")
    print(f"Output directory: {output_dir}")
    print(f"Website directory: {website_dir}")
    
    all_ministries = {}
    
    # Process each ministry
    for ministry_key, ministry_config in MINISTRIES.items():
        print(f"\nProcessing {ministry_key}...")
        ministry_data = process_ministry(ministry_key, ministry_config, output_dir, website_dir)
        all_ministries[ministry_key] = ministry_data
    
    # Create summary file
    print("\nCreating summary file...")
    summary = create_summary_file(all_ministries, website_dir)
    
    print(f"\nBuild complete!")
    print(f"Total ministries processed: {len([m for m in all_ministries.values() if m])}")
    print(f"Total sermons: {summary['total_sermons']}")
    print(f"Languages: {', '.join(summary['languages'])}")
    print(f"Topics: {len(summary['topics'])}")

if __name__ == "__main__":
    main()