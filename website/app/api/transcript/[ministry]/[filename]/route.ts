import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import path from 'path'

export async function GET(
  request: NextRequest,
  { params }: { params: { ministry: string; filename: string } }
) {
  try {
    const { ministry, filename } = params
    
    // Security check: ensure filename doesn't contain path traversal
    if (filename.includes('..') || filename.includes('/') || filename.includes('\\')) {
      return NextResponse.json({ error: 'Invalid filename' }, { status: 400 })
    }

    // Ensure filename ends with .txt
    const safeFilename = filename.endsWith('.txt') ? filename : `${filename}.txt`
    
    // Map ministry slugs to output directories
    const ministryMap: { [key: string]: string } = {
      'young-evangelists': 'young-evangelists',
      'pioneer-loudcry': 'pioneer-loudcry',
      'newlife-sda': 'newlife-sda',
      'nairobi-central-sda': 'nairobi-central-sda',
      'motswedi-sda': 'motswedi-sda',
      'conroe-sda': 'conroe-sda',
      'gaborone-central-sda': 'gaborone-central-sda',
      'repentance-holiness': 'repentance-holiness',
      'nader-mansour': 'nader-mansour'
    }

    const outputDir = ministryMap[ministry]
    if (!outputDir) {
      return NextResponse.json({ error: 'Ministry not found' }, { status: 404 })
    }

    // Construct the file path
    const filePath = path.join(process.cwd(), '..', 'output', outputDir, safeFilename)
    
    // Read the file
    const fileContent = await readFile(filePath, 'utf-8')
    
    // Parse the transcript file
    const lines = fileContent.split('\n')
    let title = ''
    let videoId = ''
    let url = ''
    let fullTranscript = ''
    let timestampedTranscript = ''
    
    // Parse metadata
    for (let i = 0; i < Math.min(lines.length, 10); i++) {
      const line = lines[i]
      if (line.startsWith('Title:')) {
        title = line.replace('Title:', '').trim()
      } else if (line.startsWith('Video ID:')) {
        videoId = line.replace('Video ID:', '').trim()
      } else if (line.startsWith('URL:')) {
        url = line.replace('URL:', '').trim()
      }
    }
    
    // Parse transcript sections
    let currentSection = ''
    let inFullTranscript = false
    let inTimestampedTranscript = false
    
    for (const line of lines) {
      if (line.trim() === 'FULL TRANSCRIPT:') {
        inFullTranscript = true
        inTimestampedTranscript = false
        continue
      } else if (line.trim() === 'TIMESTAMPED TRANSCRIPT:') {
        inFullTranscript = false
        inTimestampedTranscript = true
        continue
      } else if (line.trim().startsWith('=')) {
        inFullTranscript = false
        inTimestampedTranscript = false
        continue
      }
      
      if (inFullTranscript) {
        fullTranscript += line + '\n'
      } else if (inTimestampedTranscript) {
        timestampedTranscript += line + '\n'
      }
    }
    
    // Clean up transcripts
    fullTranscript = fullTranscript.trim()
    timestampedTranscript = timestampedTranscript.trim()
    
    const response = {
      title: title || safeFilename.replace('.txt', ''),
      videoId: videoId || '',
      url: url || '',
      fullTranscript,
      timestampedTranscript,
      filename: safeFilename
    }
    
    return NextResponse.json(response)
    
  } catch (error) {
    console.error('Error reading transcript:', error)
    return NextResponse.json({ error: 'Transcript not found' }, { status: 404 })
  }
}