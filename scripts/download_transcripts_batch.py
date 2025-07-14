#!/usr/bin/env python3

import os
import json
import re
import time
import random
from youtube_transcript_api import YouTubeTranscriptApi
from youtube_transcript_api._errors import TranscriptsDisabled, NoTranscriptFound, VideoUnavailable

def sanitize_filename(filename):
    """Sanitize filename for saving to disk"""
    filename = re.sub(r'[^\w\s-]', '', filename)
    filename = re.sub(r'[-\s]+', '-', filename)
    return filename.strip('-')

def download_transcript(video_id, video_title, output_dir):
    """Download transcript for a single video"""
    try:
        # Add random delay to avoid rate limiting
        delay = random.uniform(2, 5)
        print(f"  Waiting {delay:.1f}s to avoid rate limiting...")
        time.sleep(delay)
        
        transcript_list = YouTubeTranscriptApi.get_transcript(video_id)
        
        # Combine all transcript segments into one text
        full_transcript = ""
        timestamps = []
        
        for segment in transcript_list:
            timestamps.append(f"[{segment['start']:.1f}s] {segment['text']}")
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
            f.write("FULL TRANSCRIPT:\n")
            f.write(full_transcript)
            f.write("\n\n" + "=" * 50 + "\n\n")
            f.write("TIMESTAMPED TRANSCRIPT:\n")
            f.write("\n".join(timestamps))
        
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
        if "blocking requests" in error_msg.lower() or "ip" in error_msg.lower():
            print(f"⚠ Rate limited - waiting 60 seconds...")
            time.sleep(60)
            return False
        print(f"✗ Error downloading {video_title}: {e}")
        return False

def load_video_list(filename):
    """Load video list from JSON file"""
    with open(filename, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_progress(successful_ids, failed_ids, progress_file):
    """Save progress to file"""
    progress = {
        'successful': successful_ids,
        'failed': failed_ids,
        'timestamp': time.time()
    }
    with open(progress_file, 'w', encoding='utf-8') as f:
        json.dump(progress, f, indent=2)

def load_progress(progress_file):
    """Load progress from file"""
    try:
        with open(progress_file, 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        return {'successful': [], 'failed': []}

def main():
    video_list_file = "video_list.json"
    output_dir = "../output/young-evangelists"
    progress_file = "download_progress.json"
    
    if not os.path.exists(video_list_file):
        print(f"Error: {video_list_file} not found. Run get_video_list.py first.")
        return
    
    # Create output directory
    os.makedirs(output_dir, exist_ok=True)
    
    # Load video list and progress
    videos = load_video_list(video_list_file)
    progress = load_progress(progress_file)
    
    processed_ids = set(progress['successful'] + progress['failed'])
    
    print(f"Loaded {len(videos)} videos")
    print(f"Already processed: {len(processed_ids)} videos")
    print(f"Remaining: {len(videos) - len(processed_ids)} videos")
    
    # Filter out already processed videos
    remaining_videos = [v for v in videos if v['id'] not in processed_ids]
    
    if not remaining_videos:
        print("All videos have been processed!")
        return
    
    # Process remaining videos in batches
    batch_size = 10
    successful_ids = progress['successful'][:]
    failed_ids = progress['failed'][:]
    
    for i, video in enumerate(remaining_videos, 1):
        print(f"\n[{i}/{len(remaining_videos)}] Processing: {video['title']}")
        print(f"Video ID: {video['id']}")
        
        if download_transcript(video['id'], video['title'], output_dir):
            successful_ids.append(video['id'])
        else:
            failed_ids.append(video['id'])
        
        # Save progress every 10 videos
        if i % batch_size == 0:
            save_progress(successful_ids, failed_ids, progress_file)
            print(f"\nProgress saved. Successful: {len(successful_ids)}, Failed: {len(failed_ids)}")
            
            # Longer break between batches
            print("Taking a 2-minute break between batches...")
            time.sleep(120)
    
    # Final save
    save_progress(successful_ids, failed_ids, progress_file)
    
    print(f"\nFinal Summary:")
    print(f"Successfully downloaded: {len(successful_ids)} transcripts")
    print(f"Failed: {len(failed_ids)} transcripts")
    print(f"Output directory: {output_dir}")

if __name__ == "__main__":
    main()