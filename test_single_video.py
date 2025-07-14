#!/usr/bin/env python3

import json
from download_transcripts_batch import download_transcript
import os

def test_single_video():
    # Test with first video from the list
    with open('video_list.json', 'r') as f:
        videos = json.load(f)
    
    if not videos:
        print("No videos found")
        return
    
    test_video = videos[0]
    output_dir = "test_transcripts"
    os.makedirs(output_dir, exist_ok=True)
    
    print(f"Testing with video: {test_video['title']}")
    print(f"Video ID: {test_video['id']}")
    
    success = download_transcript(test_video['id'], test_video['title'], output_dir)
    
    if success:
        print("✓ Test successful!")
    else:
        print("✗ Test failed")

if __name__ == "__main__":
    test_single_video()