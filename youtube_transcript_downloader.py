#!/usr/bin/env python3

import os
import json
import re
import time
import random
from youtube_transcript_api import YouTubeTranscriptApi
from youtube_transcript_api._errors import TranscriptsDisabled, NoTranscriptFound, VideoUnavailable
import yt_dlp

def get_channel_videos(channel_url):
    """Get all video URLs from a YouTube channel"""
    # Convert channel URL to videos URL
    videos_url = channel_url + "/videos"
    
    ydl_opts = {
        'quiet': True,
        'extract_flat': True,
        'playlistend': None,
    }
    
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        try:
            info = ydl.extract_info(videos_url, download=False)
            videos = []
            
            if 'entries' in info:
                for entry in info['entries']:
                    if entry and 'id' in entry and len(entry['id']) == 11:  # Valid YouTube video ID
                        videos.append({
                            'id': entry['id'],
                            'title': entry.get('title', 'Unknown Title'),
                            'url': f"https://www.youtube.com/watch?v={entry['id']}"
                        })
            
            return videos
        except Exception as e:
            print(f"Error extracting channel info: {e}")
            return []

def sanitize_filename(filename):
    """Sanitize filename for saving to disk"""
    filename = re.sub(r'[^\w\s-]', '', filename)
    filename = re.sub(r'[-\s]+', '-', filename)
    return filename.strip('-')

def download_transcript(video_id, video_title, output_dir):
    """Download transcript for a single video"""
    try:
        # Add delay to avoid rate limiting
        time.sleep(random.uniform(1, 3))
        
        transcript_list = YouTubeTranscriptApi.get_transcript(video_id)
        
        # Combine all transcript segments into one text
        full_transcript = ""
        for segment in transcript_list:
            full_transcript += segment['text'] + " "
        
        # Save transcript to file
        safe_title = sanitize_filename(video_title)
        filename = f"{safe_title}_{video_id}.txt"
        filepath = os.path.join(output_dir, filename)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(f"Title: {video_title}\n")
            f.write(f"Video ID: {video_id}\n")
            f.write(f"URL: https://www.youtube.com/watch?v={video_id}\n")
            f.write("-" * 50 + "\n\n")
            f.write(full_transcript)
        
        print(f"✓ Downloaded transcript: {safe_title}")
        return True
        
    except TranscriptsDisabled:
        print(f"⚠ Transcripts disabled for: {video_title}")
        return False
    except NoTranscriptFound:
        print(f"⚠ No transcript found for: {video_title}")
        return False
    except VideoUnavailable:
        print(f"⚠ Video unavailable: {video_title}")
        return False
    except Exception as e:
        error_msg = str(e)
        if "blocking requests" in error_msg or "IP" in error_msg:
            print(f"⚠ Rate limited - waiting 30 seconds...")
            time.sleep(30)
            return False
        print(f"✗ Error downloading {video_title}: {e}")
        return False

def save_video_list(videos, filename):
    """Save video list to JSON file for resume capability"""
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(videos, f, indent=2, ensure_ascii=False)

def load_video_list(filename):
    """Load video list from JSON file"""
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        return None

def main():
    channel_url = "https://www.youtube.com/@youngevangelistsministry8232"
    output_dir = "young_evangelists_transcripts"
    video_list_file = "video_list.json"
    
    # Create output directory
    os.makedirs(output_dir, exist_ok=True)
    
    # Try to load existing video list
    videos = load_video_list(video_list_file)
    
    if videos:
        print(f"Loaded {len(videos)} videos from saved list")
    else:
        print(f"Getting video list from channel: {channel_url}")
        videos = get_channel_videos(channel_url)
        
        if not videos:
            print("No videos found or error occurred")
            return
        
        # Save video list for future use
        save_video_list(videos, video_list_file)
        print(f"Found {len(videos)} videos and saved list to {video_list_file}")
    
    # Check which transcripts already exist
    existing_files = set(os.listdir(output_dir)) if os.path.exists(output_dir) else set()
    
    # Download transcripts
    successful = 0
    failed = 0
    skipped = 0
    
    for i, video in enumerate(videos, 1):
        safe_title = sanitize_filename(video['title'])
        expected_filename = f"{safe_title}_{video['id']}.txt"
        
        if expected_filename in existing_files:
            print(f"[{i}/{len(videos)}] ⏭ Skipping (already exists): {video['title']}")
            skipped += 1
            continue
            
        print(f"[{i}/{len(videos)}] Processing: {video['title']}")
        
        if download_transcript(video['id'], video['title'], output_dir):
            successful += 1
        else:
            failed += 1
    
    print(f"\nSummary:")
    print(f"Successfully downloaded: {successful} transcripts")
    print(f"Skipped (already existed): {skipped} transcripts")
    print(f"Failed: {failed} transcripts")
    print(f"Output directory: {output_dir}")

if __name__ == "__main__":
    main()