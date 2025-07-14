#!/usr/bin/env python3

import json
import yt_dlp
import re

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

def main():
    channel_url = "https://www.youtube.com/@youngevangelistsministry8232"
    output_file = "video_list.json"
    
    print(f"Getting video list from channel: {channel_url}")
    videos = get_channel_videos(channel_url)
    
    if not videos:
        print("No videos found or error occurred")
        return
    
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(videos, f, indent=2, ensure_ascii=False)
    
    print(f"Found {len(videos)} videos")
    print(f"Video list saved to {output_file}")
    
    # Show first few videos
    print("\nFirst 5 videos:")
    for i, video in enumerate(videos[:5], 1):
        print(f"{i}. {video['title']} ({video['id']})")

if __name__ == "__main__":
    main()