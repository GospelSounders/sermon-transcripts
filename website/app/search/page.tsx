'use client'

import { useState } from 'react'
import { Search, Filter, Clock, BookOpen } from 'lucide-react'

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedMinistry, setSelectedMinistry] = useState('all')
  const [selectedTopic, setSelectedTopic] = useState('all')
  const [isLoading, setIsLoading] = useState(false)

  const ministries = [
    { id: 'all', name: 'All Ministries' },
    { id: 'newlife-sda', name: 'Newlife SDA Church Nairobi' },
    { id: 'nairobi-central-sda', name: 'Nairobi Central SDA' },
    { id: 'pioneer-loudcry', name: 'Pioneer Loudcry' },
    { id: 'young-evangelists', name: 'Young Evangelists Ministry' }
  ]

  const topics = [
    { id: 'all', name: 'All Topics' },
    { id: 'prophecy', name: 'Prophecy' },
    { id: 'health', name: 'Health Message' },
    { id: 'sabbath', name: 'Sabbath' },
    { id: 'education', name: 'Education' },
    { id: 'evangelism', name: 'Evangelism' },
    { id: 'worship', name: 'Worship' },
    { id: 'youth', name: 'Youth Ministry' }
  ]

  const popularTopics = [
    'Daniel and Revelation',
    'Three Angels Messages',
    'Health and Healing',
    'Sabbath Truth',
    'Last Day Events',
    'True Education',
    'Spirit of Prophecy',
    'Sanctuary'
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate search delay
    setTimeout(() => {
      setIsLoading(false)
      // Here you would implement actual search functionality
      alert(`Searching for: "${searchQuery}" in ${selectedMinistry} ministry, topic: ${selectedTopic}`)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Search Sermon Transcripts
            </h1>
            <p className="text-xl text-gray-600 mb-8 text-center">
              Find specific teachings, topics, and insights across 3,200+ sermons
            </p>

            <form onSubmit={handleSearch} className="space-y-6">
              {/* Main Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for keywords, Bible verses, topics..."
                  className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ministry
                  </label>
                  <select 
                    value={selectedMinistry}
                    onChange={(e) => setSelectedMinistry(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {ministries.map(ministry => (
                      <option key={ministry.id} value={ministry.id}>{ministry.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Topic
                  </label>
                  <select 
                    value={selectedTopic}
                    onChange={(e) => setSelectedTopic(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {topics.map(topic => (
                      <option key={topic.id} value={topic.id}>{topic.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                    Searching...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    Search Transcripts
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Popular Search Topics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {popularTopics.map((topic, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSearchQuery(topic)
                    setSelectedTopic('all')
                  }}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-left border border-gray-200 hover:border-blue-300"
                >
                  <div className="flex items-center gap-2 text-blue-600 mb-2">
                    <BookOpen className="w-4 h-4" />
                    <span className="font-medium text-sm">Quick Search</span>
                  </div>
                  <div className="text-gray-900 font-medium">{topic}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Search Across Our Complete Collection
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">3,200+</div>
                <div className="text-gray-600">Searchable Transcripts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                <div className="text-gray-600">SDA Churches</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Hours of Content</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Free Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              How to Get the Best Search Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Use Specific Keywords</h3>
                <p className="text-gray-600 text-sm">
                  Search for specific Bible verses, theological terms, or topic names for best results
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Filter by Ministry</h3>
                <p className="text-gray-600 text-sm">
                  Narrow your search to specific churches or ministries to find relevant content
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Browse by Topic</h3>
                <p className="text-gray-600 text-sm">
                  Use topic filters to explore sermons on specific theological subjects
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}