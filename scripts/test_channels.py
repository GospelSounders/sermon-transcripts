#!/usr/bin/env python3

from interactive_downloader import get_channel_videos, CHANNELS

def test_channel_detection():
    """Test channel video detection"""
    print("Testing channel video detection...")
    
    for key, channel in CHANNELS.items():
        print(f"\n🎯 Testing {channel['name']}...")
        print(f"URL: {channel['url']}")
        
        try:
            videos = get_channel_videos(channel['url'])
            if videos:
                print(f"✅ Found {len(videos)} videos")
                print(f"First video: {videos[0]['title']} ({videos[0]['id']})")
            else:
                print("❌ No videos found")
        except Exception as e:
            print(f"❌ Error: {e}")

if __name__ == "__main__":
    test_channel_detection()