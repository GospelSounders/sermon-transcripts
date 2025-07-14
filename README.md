# YouTube Transcript Downloader for Young Evangelists Ministry

This repository contains scripts to download transcripts from all videos on the Young Evangelists Ministry YouTube channel: https://www.youtube.com/@youngevangelistsministry8232

## Current Status

✅ **Completed:**
- Found 82 videos on the channel
- Created video list extraction script
- Built transcript downloading scripts with rate limiting
- Implemented progress tracking and resume capability

⚠️ **Current Issue:**
YouTube is blocking requests due to IP-based rate limiting. This is common when running from cloud servers or after making too many requests.

## Files Created

1. **`get_video_list.py`** - Extracts all video IDs and titles from the channel
2. **`video_list.json`** - Complete list of 82 videos with IDs and titles
3. **`download_transcripts_batch.py`** - Main transcript downloader with rate limiting
4. **`youtube_transcript_downloader.py`** - Original all-in-one script
5. **`test_single_video.py`** - Test script for single video

## Usage Instructions

### Step 1: Get Video List (Already Done)
```bash
python3 get_video_list.py
```
This creates `video_list.json` with all 82 videos.

### Step 2: Download Transcripts
```bash
python3 download_transcripts_batch.py
```

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

```bash
pip3 install youtube-transcript-api yt-dlp
```

## Notes

- Some videos may not have transcripts available
- Automatically generated transcripts may have errors
- Respect YouTube's terms of service
- Consider fair use when using downloaded content