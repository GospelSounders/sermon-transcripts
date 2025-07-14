# Gospel Sounders - Sermon Transcripts Makefile
# Automates common tasks for downloading transcripts and managing the project

.PHONY: help install dev build deploy clean download-all download-young download-pioneer download-newlife download-central

# Default target
help:
	@echo "Gospel Sounders - Sermon Transcripts"
	@echo "Available commands:"
	@echo ""
	@echo "  install          Install project dependencies"
	@echo "  dev              Start development server"
	@echo "  build            Build website for production"
	@echo "  deploy           Deploy to GitHub Pages"
	@echo "  clean            Clean build artifacts"
	@echo ""
	@echo "  download-all     Download transcripts from all ministries"
	@echo "  download-young   Download from Young Evangelists Ministry"
	@echo "  download-pioneer Download from Pioneer Loudcry"
	@echo "  download-newlife Download from Newlife SDA Church"
	@echo "  download-central Download from Nairobi Central SDA"
	@echo ""
	@echo "  setup-env        Set up Python virtual environment"
	@echo "  install-python   Install Python dependencies"

# Website Development
install:
	@echo "Installing website dependencies..."
	cd website && pnpm install

dev:
	@echo "Starting development server..."
	cd website && pnpm run dev

build:
	@echo "Building website for production..."
	cd website && pnpm run build

deploy: build
	@echo "Deploying to GitHub Pages..."
	git add -A
	git commit -m "Deploy website updates 🚀"
	git push origin master

clean:
	@echo "Cleaning build artifacts..."
	cd website && rm -rf .next out
	rm -rf _site

# Python Environment Setup
setup-env:
	@echo "Setting up Python virtual environment..."
	python3 -m venv venv
	@echo "Virtual environment created. Activate with: source venv/bin/activate"

install-python:
	@echo "Installing Python dependencies..."
	pip install youtube-transcript-api yt-dlp requests beautifulsoup4

# Transcript Downloads
download-all:
	@echo "Starting interactive downloader for all ministries..."
	cd scripts && python interactive_downloader.py

download-young:
	@echo "Downloading transcripts from Young Evangelists Ministry..."
	cd scripts && echo "1" | python interactive_downloader.py

download-pioneer:
	@echo "Downloading transcripts from Pioneer Loudcry..."
	cd scripts && echo "2" | python interactive_downloader.py

download-newlife:
	@echo "Downloading transcripts from Newlife SDA Church..."
	cd scripts && echo "3" | python interactive_downloader.py

download-central:
	@echo "Downloading transcripts from Nairobi Central SDA..."
	cd scripts && echo "4" | python interactive_downloader.py

# Project Info
info:
	@echo "Gospel Sounders - Sermon Transcript Collection"
	@echo "============================================="
	@echo ""
	@echo "Repository: https://github.com/gospelsounders/sermon-transcripts"
	@echo "Website: https://gospelsounders.github.io/sermon-transcripts/"
	@echo ""
	@echo "Ministries:"
	@echo "  - Young Evangelists Ministry (82+ sermons)"
	@echo "  - Pioneer Loudcry (197+ sermons)"
	@echo "  - Newlife SDA Church Nairobi (2,200+ sermons)"
	@echo "  - Nairobi Central SDA (730+ sermons)"
	@echo ""
	@echo "Total: 3,200+ sermon transcripts"

# Git Helpers
status:
	@echo "Git repository status:"
	@git status --short
	@echo ""
	@echo "Recent commits:"
	@git log --oneline -5

push:
	@echo "Pushing changes to GitHub..."
	git add -A
	@read -p "Enter commit message: " msg; git commit -m "$$msg"
	git push origin master

# Quick Commands
quick-build: clean install build
	@echo "Quick build completed!"

quick-deploy: quick-build deploy
	@echo "Quick deployment completed!"

# Development Workflow
watch:
	@echo "Starting file watcher for development..."
	cd website && pnpm run dev &
	@echo "Development server started in background"
	@echo "Press Ctrl+C to stop"
	trap 'kill %1' SIGINT; wait

# Help for specific commands
help-download:
	@echo "Download Commands Help"
	@echo "====================="
	@echo ""
	@echo "download-all     - Interactive menu to select ministry"
	@echo "download-young   - Young Evangelists Ministry"
	@echo "download-pioneer - Pioneer Loudcry (PTLPMTV)"
	@echo "download-newlife - Newlife SDA Church Nairobi"
	@echo "download-central - Nairobi Central SDA"
	@echo ""
	@echo "Note: Downloads respect rate limits and can be resumed"

help-dev:
	@echo "Development Commands Help"
	@echo "========================"
	@echo ""
	@echo "install - Install pnpm dependencies for website"
	@echo "dev     - Start Next.js development server on localhost:3000"
	@echo "build   - Build static site for GitHub Pages"
	@echo "deploy  - Build and deploy to GitHub Pages"
	@echo "clean   - Remove build artifacts and cache"