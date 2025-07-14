'use client'

import { useState, useEffect } from 'react'
import { X, Download, ExternalLink, Clock, User } from 'lucide-react'

interface TranscriptData {
  title: string
  videoId: string
  url: string
  fullTranscript: string
  timestampedTranscript: string
  filename: string
}

interface TranscriptReaderProps {
  ministry: string
  filename: string
  onClose: () => void
}

export default function TranscriptReader({ ministry, filename, onClose }: TranscriptReaderProps) {
  const [transcript, setTranscript] = useState<TranscriptData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<'full' | 'timestamped'>('full')

  useEffect(() => {
    async function fetchTranscript() {
      try {
        const response = await fetch(`/sermon-transcripts/output/${ministry}/${filename}`)
        if (!response.ok) {
          throw new Error('Failed to fetch transcript')
        }
        const fileContent = await response.text()
        
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
        
        const data = {
          title: title || filename.replace('.txt', ''),
          videoId: videoId || '',
          url: url || '',
          fullTranscript,
          timestampedTranscript,
          filename
        }
        
        setTranscript(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchTranscript()
  }, [ministry, filename])

  const handleDownload = () => {
    if (!transcript) return
    
    const content = `${transcript.title}\n\n${transcript.fullTranscript}`
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${transcript.title}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
          <div className="flex items-center justify-center">
            <div className="animate-spin w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full"></div>
            <span className="ml-3 text-gray-600">Loading transcript...</span>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-red-600">Error</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={onClose}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    )
  }

  if (!transcript) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full h-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900 mb-2">{transcript.title}</h2>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {ministry.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {transcript.filename}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
            {transcript.url && (
              <a
                href={transcript.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                YouTube
              </a>
            )}
            <button
              onClick={onClose}
              className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
            >
              <X className="w-4 h-4" />
              Close
            </button>
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="px-6 py-4 border-b">
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('full')}
              className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                viewMode === 'full'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Full Transcript
            </button>
            <button
              onClick={() => setViewMode('timestamped')}
              className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                viewMode === 'timestamped'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Timestamped
            </button>
          </div>
        </div>

        {/* Transcript Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="prose prose-sm max-w-none">
            <pre className="whitespace-pre-wrap text-sm leading-relaxed text-gray-800 font-mono">
              {viewMode === 'full' ? transcript.fullTranscript : transcript.timestampedTranscript}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t bg-gray-50">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>Transcript from {ministry.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
            <span>Click Download to save as text file</span>
          </div>
        </div>
      </div>
    </div>
  )
}