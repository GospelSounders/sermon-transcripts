# Gospel Sounders Sermon Transcript Collection

**Making Christian sermons searchable and accessible in text format for research and study**

This repository contains transcripts from multiple Christian YouTube channels, converted from video to searchable text format to facilitate theological research, sermon study, and spiritual growth.

## 🎯 Mission Statement

**Why Sermon Transcripts Matter:**
- **Accessibility**: Enable text-based access to sermon content for the hearing impaired
- **Research**: Allow theological students and researchers to search across multiple sermons
- **Study**: Help believers dive deeper into specific topics across different messages
- **Preservation**: Create a searchable archive of important Christian teachings
- **Global Access**: Make sermons available to those with limited internet bandwidth

## 📊 Current Collection

### Available Channels
- **[Newlife SDA Church Nairobi](https://www.youtube.com/@newlifesdachurchnairobi)** - 2,200+ video transcripts ⭐
- **[Nairobi Central SDA](https://www.youtube.com/@nairobicentralsda)** - 730+ video transcripts
- **[Pioneer Loudcry](https://www.youtube.com/@PTLPMTV)** - 197+ video transcripts
- **[Young Evangelists Ministry](https://www.youtube.com/@youngevangelistsministry8232)** - 82+ video transcripts

### Statistics
- **Total Available**: 3,200+ sermons and teachings from 4 SDA churches
- **Languages**: English, Swahili
- **Topics**: Complete SDA theology, worship, prophecy, health, education, music ministry
- **Format**: Full text with timestamps

## 🗂️ Repository Structure

```
📁 sermon-transcripts/
├── 📄 README.md              # This file
├── 📄 requirements.txt       # Python dependencies
├── 📁 scripts/              # Download and processing tools
│   ├── interactive_downloader.py    # Multi-channel downloader
│   ├── download_transcripts_batch.py # Single channel downloader
│   └── ...                 # Other utility scripts
├── 📁 output/              # Transcript collections
│   ├── 📁 newlife-sda/             # Newlife SDA Church transcripts
│   ├── 📁 nairobi-central-sda/     # Nairobi Central SDA transcripts  
│   ├── 📁 pioneer-loudcry/         # Pioneer Loudcry transcripts
│   └── 📁 young-evangelists/       # Young Evangelists Ministry transcripts
└── 📁 .github/workflows/    # GitHub Pages automation
```

## 🔍 How to Use This Collection

### 1. Browse Transcripts
- Navigate to any output folder: `newlife-sda/`, `nairobi-central-sda/`, `pioneer-loudcry/`, or `young-evangelists/`
- Each `.txt` file contains a full sermon transcript
- Filenames follow the pattern: `{SERMON_TITLE}_{VIDEO_ID}.txt`

### 2. Search Content
**Current Options (Manual):**
- Use GitHub's search feature to find keywords across all transcripts
- Download specific files and search locally
- Browse by filename to find topics of interest

**Future Options (Planned):**
- 🚧 **Website Search**: Full-text search across all sermons
- 🚧 **Topic Indexing**: Browse sermons by biblical books, themes
- 🚧 **Ministry Filtering**: Filter by specific preachers or channels
- 🚧 **Date Sorting**: Browse chronologically

### 3. User Journey Examples

#### 🔍 **Researcher**: "I want to study what these ministries teach about prophecy"
1. **Current**: Search GitHub files for "prophecy" keyword
2. **Future**: Use website search with topic filter for "Prophecy"

#### ⛪ **Pastor**: "Looking for sermon ideas on health message"
1. **Current**: Browse `output/` folders for health-related filenames
2. **Future**: Filter by topic "Health" and see all relevant sermons

#### 📚 **Student**: "Need sermons about Daniel's prophecies"
1. **Current**: Search files for "Daniel" across both ministry folders
2. **Future**: Bible book filter + keyword search

## 🛠️ Technical Information

### For Contributors

#### Adding New Transcripts
```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Run interactive downloader
cd scripts/
python interactive_downloader.py

# 3. Follow menu prompts to select channels
```

#### Repository Maintenance
- Transcripts are automatically organized by ministry
- Progress files track download status
- Resume capability prevents duplicate downloads

### For Developers

#### Planned Website Features
- **Search Engine**: Full-text search across all transcripts
- **Ministry Pages**: Dedicated pages for each channel
- **Topic Taxonomy**: Categorization by biblical themes
- **Responsive Design**: Mobile-friendly interface
- **Direct Links**: Deep links to specific sermon sections

## 🌐 Website (Coming Soon)

**Live Site**: [gospelsounders.github.io/sermon-transcripts](https://gospelsounders.github.io/sermon-transcripts)

### Planned User Features
- 🔍 **Smart Search**: Find sermons by keyword, topic, or Bible verse
- 📋 **Browse by Ministry**: Explore content from specific channels
- 📅 **Chronological View**: Browse sermons by date
- 🏷️ **Topic Tags**: Discover related content
- 📱 **Mobile Optimized**: Access on any device

### Current Development Status
- ✅ **Transcript Collection**: Automated downloading and processing
- ✅ **Repository Structure**: Organized by ministry and topic
- 🚧 **Website Development**: Building search interface
- 🚧 **Content Indexing**: Categorizing by themes and topics
- 🚧 **GitHub Pages**: Automated deployment pipeline

## 📈 Next Steps

### Phase 1: Content Enhancement (Current)
- [x] Set up automated transcript downloads
- [x] Organize by ministry/channel
- [ ] Add metadata extraction (speaker names, dates, topics)
- [ ] Implement content categorization

### Phase 2: Website Development
- [ ] Create GitHub Pages site with search functionality
- [ ] Build ministry-specific landing pages
- [ ] Implement topic-based browsing
- [ ] Add mobile-responsive design

### Phase 3: Advanced Features
- [ ] Full-text search with highlighting
- [ ] Related sermon recommendations
- [ ] Bible verse cross-referencing
- [ ] Export capabilities (PDF, EPUB)

## 🤝 Contributing

### Ways to Help
1. **Report Issues**: Found transcription errors or missing content?
2. **Suggest Features**: Ideas for better organization or search?
3. **Add Channels**: Know other ministries that would benefit?
4. **Improve Scripts**: Enhance automation or accuracy?

### Contact
- **Issues**: Use GitHub Issues for bug reports and feature requests
- **Discussions**: Use GitHub Discussions for general questions

## 📜 Legal & Ethical Considerations

- **Fair Use**: Transcripts are provided for educational and research purposes
- **Attribution**: Original video sources are always credited
- **Accuracy**: Transcripts are generated automatically and may contain errors
- **Copyright**: All content belongs to original creators/ministries

## 🙏 Acknowledgments

- **Young Evangelists Ministry** - For their commitment to biblical education
- **Pioneer Loudcry** - For their dedication to prophetic truth
- **YouTube Transcript API** - For making automated transcription possible
- **GitHub Pages** - For hosting this searchable collection

---

*"Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth." - 2 Timothy 2:15*