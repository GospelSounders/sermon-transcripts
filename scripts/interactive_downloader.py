#!/usr/bin/env python3

import os
import json
import re
import time
import random
from youtube_transcript_api import YouTubeTranscriptApi
from youtube_transcript_api._errors import TranscriptsDisabled, NoTranscriptFound, VideoUnavailable
import yt_dlp

# Channel configurations
CHANNELS = {
    "1": {
        "name": "Young Evangelists",
        "url": "https://www.youtube.com/@youngevangelistsministry8232",
        "output_dir": "../output/young-evangelists",
        "video_list_file": "young_evangelists_videos.json",
        "progress_file": "young_evangelists_progress.json"
    },
    "2": {
        "name": "Pioneer Loudcry",
        "url": "https://www.youtube.com/@PTLPMTV",
        "output_dir": "../output/pioneer-loudcry",
        "video_list_file": "pioneer_loudcry_videos.json",
        "progress_file": "pioneer_loudcry_progress.json"
    },
    "3": {
        "name": "Newlife SDA Church",
        "url": "https://www.youtube.com/@newlifesdachurchnairobi",
        "output_dir": "../output/newlife-sda",
        "video_list_file": "newlife_sda_videos.json",
        "progress_file": "newlife_sda_progress.json"
    },
    "4": {
        "name": "Nairobi Central SDA",
        "url": "https://www.youtube.com/@nairobicentralsda",
        "output_dir": "../output/nairobi-central-sda",
        "video_list_file": "nairobi_central_sda_videos.json",
        "progress_file": "nairobi_central_sda_progress.json"
    },
    "5": {
        "name": "Motswedi SDA Church",
        "url": "https://www.youtube.com/@motswediadventistchurch9178",
        "output_dir": "../output/motswedi-sda",
        "video_list_file": "motswedi_sda_videos.json",
        "progress_file": "motswedi_sda_progress.json"
    },
    "6": {
        "name": "Conroe SDA Church",
        "url": "https://www.youtube.com/@ConroeSDAChurch",
        "output_dir": "../output/conroe-sda",
        "video_list_file": "conroe_sda_videos.json",
        "progress_file": "conroe_sda_progress.json"
    },
    "7": {
        "name": "Gaborone Central SDA",
        "url": "https://www.youtube.com/@gaboronecentralsdachurch",
        "output_dir": "../output/gaborone-central-sda",
        "video_list_file": "gaborone_central_sda_videos.json",
        "progress_file": "gaborone_central_sda_progress.json"
    },
    "8": {
        "name": "Repentance And Holiness (Owuor)",
        "url": "https://www.youtube.com/c/repentpreparetheway",
        "output_dir": "../output/repentance-holiness",
        "video_list_file": "repentance_holiness_videos.json",
        "progress_file": "repentance_holiness_progress.json"
    },
    "9": {
        "name": "Nader Mansour",
        "url": "https://www.youtube.com/@NaderMansour",
        "output_dir": "../output/nader-mansour",
        "video_list_file": "nader_mansour_videos.json",
        "progress_file": "nader_mansour_progress.json"
    }
}

def display_menu():
    """Display the main menu"""
    print("\n" + "="*50)
    print("  YouTube Transcript Downloader")
    print("="*50)
    print("Available Channels:")
    for key, channel in CHANNELS.items():
        print(f"  {key}. {channel['name']}")
    print("  A. Download from all channels")
    print("  S. Show download status")
    print("  0. Exit")
    print("="*50)

def get_channel_videos(channel_url):
    """Get all video URLs from a YouTube channel"""
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
                    if entry and 'id' in entry and len(entry['id']) == 11:
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
        delay = random.uniform(2, 5)
        print(f"  Waiting {delay:.1f}s to avoid rate limiting...")
        time.sleep(delay)
        
        transcript_list = YouTubeTranscriptApi.get_transcript(video_id)
        
        # Combine all transcript segments
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

def save_video_list(videos, filename):
    """Save video list to JSON file"""
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(videos, f, indent=2, ensure_ascii=False)

def load_video_list(filename):
    """Load video list from JSON file"""
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        return None

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

def get_existing_transcripts(output_dir):
    """Get set of video IDs that already have transcripts"""
    if not os.path.exists(output_dir):
        return set()
    
    existing_ids = set()
    for filename in os.listdir(output_dir):
        if filename.endswith('.txt'):
            # Extract video ID from filename (format: title_VIDEO_ID.txt)
            parts = filename.split('_')
            if len(parts) >= 2:
                video_id = parts[-1].replace('.txt', '')
                if len(video_id) == 11:  # YouTube video ID length
                    existing_ids.add(video_id)
    
    return existing_ids

def process_channel(channel_config):
    """Process a single channel"""
    print(f"\n🎯 Processing {channel_config['name']}...")
    print(f"Channel URL: {channel_config['url']}")
    
    # Create output directory
    os.makedirs(channel_config['output_dir'], exist_ok=True)
    
    # Load or fetch video list
    videos = load_video_list(channel_config['video_list_file'])
    
    if videos:
        print(f"📋 Loaded {len(videos)} videos from saved list")
    else:
        print(f"🔍 Getting video list from channel...")
        videos = get_channel_videos(channel_config['url'])
        
        if not videos:
            print("❌ No videos found or error occurred")
            return
        
        save_video_list(videos, channel_config['video_list_file'])
        print(f"📋 Found {len(videos)} videos and saved list")
    
    # Check existing transcripts
    existing_ids = get_existing_transcripts(channel_config['output_dir'])
    progress = load_progress(channel_config['progress_file'])
    processed_ids = set(progress['successful'] + progress['failed'])
    
    # Combine existing files and processed IDs
    skip_ids = existing_ids.union(processed_ids)
    remaining_videos = [v for v in videos if v['id'] not in skip_ids]
    
    print(f"📊 Status:")
    print(f"  Total videos: {len(videos)}")
    print(f"  Already downloaded: {len(existing_ids)}")
    print(f"  Previously failed: {len(progress['failed'])}")
    print(f"  Remaining to download: {len(remaining_videos)}")
    
    if not remaining_videos:
        print("✅ All videos have been processed!")
        return
    
    # Ask for confirmation
    response = input(f"\n▶️ Download {len(remaining_videos)} remaining transcripts? (y/n): ").lower()
    if response != 'y':
        print("⏸️ Skipping this channel.")
        return
    
    # Process remaining videos
    successful_ids = progress['successful'][:]
    failed_ids = progress['failed'][:]
    batch_size = 10
    
    for i, video in enumerate(remaining_videos, 1):
        print(f"\n[{i}/{len(remaining_videos)}] Processing: {video['title']}")
        print(f"Video ID: {video['id']}")
        
        if download_transcript(video['id'], video['title'], channel_config['output_dir']):
            successful_ids.append(video['id'])
        else:
            failed_ids.append(video['id'])
        
        # Save progress every 10 videos
        if i % batch_size == 0:
            save_progress(successful_ids, failed_ids, channel_config['progress_file'])
            print(f"💾 Progress saved. Successful: {len(successful_ids)}, Failed: {len(failed_ids)}")
            
            if i < len(remaining_videos):  # Don't sleep after the last batch
                print("⏸️ Taking a 2-minute break between batches...")
                time.sleep(120)
    
    # Final save
    save_progress(successful_ids, failed_ids, channel_config['progress_file'])
    
    print(f"\n✅ {channel_config['name']} Summary:")
    print(f"  Successfully downloaded: {len(successful_ids)} transcripts")
    print(f"  Failed: {len(failed_ids)} transcripts")
    print(f"  Output directory: {channel_config['output_dir']}")

def show_status():
    """Show download status for all channels"""
    print("\n📊 Download Status Report")
    print("=" * 50)
    
    for channel_config in CHANNELS.values():
        print(f"\n🎯 {channel_config['name']}:")
        
        # Check if video list exists
        videos = load_video_list(channel_config['video_list_file'])
        if not videos:
            print("  ❌ No video list found. Run channel scan first.")
            continue
        
        # Check existing transcripts
        existing_ids = get_existing_transcripts(channel_config['output_dir'])
        progress = load_progress(channel_config['progress_file'])
        
        total_videos = len(videos)
        downloaded = len(existing_ids)
        failed = len(progress['failed'])
        remaining = total_videos - downloaded - failed
        
        print(f"  📋 Total videos: {total_videos}")
        print(f"  ✅ Downloaded: {downloaded}")
        print(f"  ❌ Failed: {failed}")
        print(f"  ⏳ Remaining: {remaining}")
        print(f"  📁 Output: {channel_config['output_dir']}")

def main():
    """Main interactive loop"""
    print("🎬 YouTube Transcript Downloader - Multi-Channel Edition")
    
    while True:
        display_menu()
        choice = input("\nSelect an option (0-9, A, S): ").strip().upper()
        
        if choice == "0":
            print("👋 Goodbye!")
            break
        elif choice in ["1", "2", "3", "4", "5", "6", "7", "8", "9"]:
            process_channel(CHANNELS[choice])
        elif choice == "A":
            print("\n🚀 Processing all channels...")
            for channel_config in CHANNELS.values():
                process_channel(channel_config)
        elif choice == "S":
            show_status()
        else:
            print("❌ Invalid choice. Please try again.")

if __name__ == "__main__":
    main()