'use client'

import { useState, useEffect } from 'react'
import { Search, Download, Calendar, Clock, ExternalLink, Eye } from 'lucide-react'
import Link from 'next/link'
import TranscriptReader from '../components/TranscriptReader'

interface Sermon {
  id: string
  title: string
  video_id: string
  url: string
  speaker: string
  date: string
  duration: string
  topics: string[]
  transcript_available: boolean
  language: string
  filename: string
}

interface MinistryData {
  info: {
    name: string
    description: string
  }
  sermons: Sermon[]
  stats: {
    total_sermons: number
    languages: string[]
    topics: string[]
  }
}

export default function PioneerLoudcryPage() {
  const [ministryData, setMinistryData] = useState<MinistryData | null>(null)
  const [filteredSermons, setFilteredSermons] = useState<Sermon[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTopic, setSelectedTopic] = useState('all')
  const [isLoading, setIsLoading] = useState(true)
  const [selectedTranscript, setSelectedTranscript] = useState<{ ministry: string; filename: string } | null>(null)

  useEffect(() => {
    // Load ministry data
    fetch('/data/pioneer-loudcry.json')
      .then(response => response.json())
      .then((data: MinistryData) => {
        setMinistryData(data)
        setFilteredSermons(data.sermons.slice(0, 10)) // Show first 10 sermons
        setIsLoading(false)
      })
      .catch(error => {
        console.error('Error loading ministry data:', error)
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {
    if (!ministryData) return

    let filtered = ministryData.sermons

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(sermon => 
        sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sermon.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sermon.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    // Filter by topic
    if (selectedTopic !== 'all') {
      filtered = filtered.filter(sermon => 
        sermon.topics.includes(selectedTopic)
      )
    }

    setFilteredSermons(filtered.slice(0, 20)) // Limit to 20 results
  }, [searchQuery, selectedTopic, ministryData])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p>Loading sermons...</p>
        </div>
      </div>
    )
  }

  if (!ministryData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">Error loading ministry data</p>
          <Link href="/" className="text-blue-600 hover:underline mt-2 inline-block">← Back to Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-red-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
                ← Back to Dataset
              </Link>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {ministryData.info.name}
                </h1>
                <p className="text-xl text-gray-600 mb-4">
                  {ministryData.info.description}
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-medium">
                    {ministryData.stats.total_sermons} Sermons Available
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                    All Transcribed
                  </span>
                  {ministryData.stats.languages.map((language) => (
                    <span key={language} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">
                      {language}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3">
                <a 
                  href="https://www.youtube.com/@PTLPMTV" 
                  target="_blank"
                  className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  YouTube Channel
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">{ministryData.stats.total_sermons}</div>
                <div className="text-gray-600 text-sm">Total Sermons</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">{ministryData.stats.languages.length}</div>
                <div className="text-gray-600 text-sm">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">{ministryData.stats.topics.length}</div>
                <div className="text-gray-600 text-sm">Topics Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
                <div className="text-gray-600 text-sm">Transcribed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Search and Filter */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search sermons by title, speaker, or topic..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <select 
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="all">All Topics</option>
                  {ministryData.stats.topics.map((topic) => (
                    <option key={topic} value={topic}>{topic}</option>
                  ))}
                </select>
              </div>
              
              <div className="text-gray-600 text-sm">
                Note: Search functionality is currently being developed. Browse the available transcripts below.
              </div>
            </div>

            {/* Sermon List */}
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Available Transcripts</h2>
                <div className="text-sm text-gray-600">
                  Showing {filteredSermons.length} of {ministryData.stats.total_sermons} sermons
                </div>
              </div>
              
              {filteredSermons.map((sermon) => (
                <div key={sermon.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {sermon.title || `Sermon ${sermon.video_id}`}
                        </h3>
                        {sermon.language !== 'English' && (
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                            {sermon.language}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                        {sermon.date && (
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(sermon.date).toLocaleDateString()}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {sermon.duration}
                        </span>
                        <span>by {sermon.speaker}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {sermon.topics.map((topic, index) => (
                          <span 
                            key={index}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <a
                        href={sermon.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        YouTube
                      </a>
                      <button 
                        onClick={() => setSelectedTranscript({ ministry: 'pioneer-loudcry', filename: sermon.filename })}
                        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                      >
                        <Eye className="w-4 h-4" />
                        Read
                      </button>
                      <button 
                        onClick={async () => {
                          try {
                            const response = await fetch(`/sermon-transcripts/output/pioneer-loudcry/${sermon.filename}`)
                            if (response.ok) {
                              const fileContent = await response.text()
                              const blob = new Blob([fileContent], { type: 'text/plain' })
                              const url = URL.createObjectURL(blob)
                              const a = document.createElement('a')
                              a.href = url
                              a.download = sermon.filename
                              document.body.appendChild(a)
                              a.click()
                              document.body.removeChild(a)
                              URL.revokeObjectURL(url)
                            }
                          } catch (error) {
                            console.error('Download failed:', error)
                          }
                        }}
                        className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              {filteredSermons.length === 0 && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">No sermons found</h3>
                  <p className="text-yellow-700">
                    Try adjusting your search query or topic filter.
                  </p>
                </div>
              )}

              {ministryData.stats.total_sermons > 20 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">More Sermons Available</h3>
                  <p className="text-blue-700 mb-4">
                    This ministry has {ministryData.stats.total_sermons} total sermons. 
                    Use the search and filter options above to find specific content.
                  </p>
                </div>
              )}
            </div>

            {/* Download Options */}
            <div className="mt-12 bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bulk Download Options</h3>
              <p className="text-gray-600 mb-4">
                For researchers and academics, we provide bulk download options for all transcripts from this ministry.
              </p>
              <div className="flex flex-wrap gap-3">
                <button 
                  className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50"
                  disabled
                >
                  Download All (JSON)
                </button>
                <button 
                  className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50"
                  disabled
                >
                  Download All (CSV)
                </button>
                <button 
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                  disabled
                >
                  API Documentation
                </button>
              </div>
              <div className="mt-3 text-sm text-gray-500">
                Note: Bulk download features are being developed and will be available soon.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transcript Reader Modal */}
      {selectedTranscript && (
        <TranscriptReader
          ministry={selectedTranscript.ministry}
          filename={selectedTranscript.filename}
          onClose={() => setSelectedTranscript(null)}
        />
      )}
    </div>
  )
}