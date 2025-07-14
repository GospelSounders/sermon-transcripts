# YouTube Transcript Downloader - Multi-Channel Edition

This repository contains scripts to download transcripts from multiple YouTube channels:
- **Young Evangelists Ministry**: https://www.youtube.com/@youngevangelistsministry8232
- **Pioneer Loudcry**: https://www.youtube.com/@PTLPMTV

## Quick Start

### 1. Install Dependencies
```bash
pip install -r requirements.txt
```

### 2. Run Interactive Downloader
```bash
python interactive_downloader.py
```

**NEW:** The interactive script supports multiple channels:
- **Young Evangelists Ministry** (@youngevangelistsministry8232)
- **Pioneer Loudcry** (@PTLPMTV)

### 3. Alternative: Single Channel Download
```bash
python download_transcripts_batch.py
```

## Current Status

✅ **Completed:**
- Found 82 videos on the channel
- Created video list extraction script
- Built transcript downloading scripts with rate limiting
- Implemented progress tracking and resume capability

⚠️ **Current Issue:**
YouTube is blocking requests due to IP-based rate limiting. This is common when running from cloud servers or after making too many requests.

## Files Overview

### Main Scripts
1. **`interactive_downloader.py`** - **NEW!** Interactive multi-channel transcript downloader
2. **`download_transcripts_batch.py`** - Single channel batch downloader (Young Evangelists only)
3. **`get_video_list.py`** - Extracts video IDs and titles from any channel

### Data Files
4. **`video_list.json`** - Young Evangelists videos (82 videos)
5. **`requirements.txt`** - Python dependencies

### Utility Scripts
6. **`youtube_transcript_downloader.py`** - Original all-in-one script
7. **`test_single_video.py`** - Test script for single video

## Detailed Usage Instructions

### Prerequisites
```bash
# Install Python dependencies
pip install -r requirements.txt
```

### Step 1: Get Video List (Already Done)
```bash
python get_video_list.py
```
This creates `video_list.json` with all 82 videos.

### Step 2: Download Transcripts
```bash
python download_transcripts_batch.py
```

**Note:** If you get `ModuleNotFoundError`, make sure you installed the dependencies first with `pip install -r requirements.txt`

## Interactive Downloader Features

The new `interactive_downloader.py` script provides:

### 🎯 **Multi-Channel Support**
- **Young Evangelists Ministry** - Original channel with 82 videos
- **Pioneer Loudcry** - New channel (@PTLPMTV)
- Option to download from both channels

### 🔍 **Smart Duplicate Detection**
- Automatically skips videos that already have transcripts
- Checks both existing files and download progress
- Shows detailed status for each channel

### 📊 **Progress Tracking**
- Separate progress files for each channel
- Resume capability if interrupted
- Batch processing with rate limiting

### 🎮 **Interactive Menu**
```
Available Channels:
  1. Young Evangelists
  2. Pioneer Loudcry  
  3. Download from both channels
  4. Show download status
  0. Exit
```

### 📁 **Organized Output**
- `young_evangelists_transcripts/` - Young Evangelists videos
- `pioneer_loudcry_transcripts/` - Pioneer Loudcry videos
- Separate video lists and progress files for each channel

## Alternative Solutions for IP Blocking

Since YouTube is currently blocking requests, here are alternative approaches:

### Option 1: Use VPN or Proxy
- Install and configure a VPN
- Run the scripts through a proxy service
- Use residential IP addresses instead of cloud/datacenter IPs

### Option 2: Use YouTube Data API
- Get YouTube Data API v3 key from Google Cloud Console
- Modify scripts to use official API (has quota limits)
- More reliable but requires API setup

### Option 3: Browser-Based Solutions
- Use browser extensions like "YouTube Transcript" 
- Manually download a few at a time
- Use browser automation tools like Selenium

### Option 4: Third-Party Services
- Use services like AssemblyAI for audio transcription
- Download audio files first, then transcribe
- Higher accuracy but costs money

### Option 5: Wait and Retry
- YouTube blocks are often temporary (24-48 hours)
- Try running from a different location/network
- Use longer delays between requests

## Script Features

### Rate Limiting Protection
- Random delays between requests (2-5 seconds)
- Exponential backoff on rate limits
- Batch processing with longer breaks

### Resume Capability
- Saves progress to `download_progress.json`
- Skips already downloaded transcripts
- Can resume from where it left off

### Error Handling
- Handles videos without transcripts
- Manages disabled/unavailable videos
- Detailed error reporting

### Output Format
- Saves both full transcript and timestamped version
- Includes video metadata (title, ID, URL)
- Sanitized filenames for cross-platform compatibility

## Expected Output

When successful, the script will create:
- `young_evangelists_transcripts/` directory
- 82 transcript files (one per video)
- Files named as `{sanitized_title}_{video_id}.txt`

## Video Statistics

- **Total Videos:** 82
- **Channel:** Young Evangelists Ministry
- **Video Types:** Mix of sermons, teachings, and ministry content
- **Date Range:** Various dates (many from 2025)

## Next Steps

1. **Try from different network:** Run scripts from a residential internet connection
2. **Use VPN:** Connect through a VPN service before running
3. **Wait 24 hours:** YouTube blocks are often temporary
4. **Manual approach:** Download a few transcripts manually to test availability
5. **API approach:** Set up YouTube Data API for more reliable access

## Dependencies

Install all required packages:
```bash
pip install -r requirements.txt
```

Or install manually:
```bash
pip install youtube-transcript-api==1.1.1 yt-dlp==2025.6.30
```

## Notes

- Some videos may not have transcripts available
- Automatically generated transcripts may have errors
- Respect YouTube's terms of service
- Consider fair use when using downloaded content