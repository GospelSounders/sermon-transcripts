import { Search, Download, Calendar, Clock, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function NairobiCentralSDAPage() {
  const sermons = [
    {
      id: 1,
      title: "Urban Ministry and Community Outreach",
      date: "2024-12-14",
      speaker: "Pastor James Kiprotich",
      duration: "44 min",
      topics: ["Urban Ministry", "Community", "Outreach"],
      transcript_available: true
    },
    {
      id: 2,
      title: "Music Ministry in Worship",
      date: "2024-12-11", 
      speaker: "Elder Susan Wanjiru",
      duration: "32 min",
      topics: ["Music Ministry", "Worship", "Praise"],
      transcript_available: true
    },
    {
      id: 3,
      title: "Biblical Teaching for Modern Times",
      date: "2024-12-07",
      speaker: "Pastor David Mwangi", 
      duration: "48 min",
      topics: ["Biblical Teaching", "Modern Application"],
      transcript_available: true
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-orange-50 to-yellow-50 py-16">
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
                  Nairobi Central SDA
                </h1>
                <p className="text-xl text-gray-600 mb-4">
                  Central SDA church serving the heart of Nairobi with comprehensive worship services, 
                  music ministry, and biblical teachings.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-medium">
                    730+ Sermons Available
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium">
                    Music Focus
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                    Urban Context
                  </span>
                </div>
              </div>
              
              <div className="flex gap-3">
                <a 
                  href="https://www.youtube.com/@nairobicentralsda" 
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
                <div className="text-3xl font-bold text-orange-600 mb-2">730+</div>
                <div className="text-gray-600 text-sm">Total Sermons</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">20+</div>
                <div className="text-gray-600 text-sm">Different Speakers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">550+</div>
                <div className="text-gray-600 text-sm">Hours Content</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">85%</div>
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
                    placeholder="Search sermons by title, speaker, or topic..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                  <option value="all">All Topics</option>
                  <option value="worship">Worship</option>
                  <option value="music">Music Ministry</option>
                  <option value="biblical">Biblical Teaching</option>
                  <option value="urban">Urban Ministry</option>
                </select>
              </div>
              
              <div className="text-gray-600 text-sm">
                Note: Search functionality is currently being developed. Browse the available transcripts below.
              </div>
            </div>

            {/* Sermon List */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Transcripts</h2>
              
              {sermons.map((sermon) => (
                <div key={sermon.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {sermon.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(sermon.date).toLocaleDateString()}
                        </span>
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
                      <button 
                        className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors disabled:opacity-50"
                        disabled
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                      <button 
                        className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                        disabled
                      >
                        View Transcript
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* More Available */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-orange-900 mb-2">727+ More Transcripts Available</h3>
                <p className="text-orange-700 mb-4">
                  This urban church provides valuable insights into SDA ministry in metropolitan contexts, 
                  with strong emphasis on music ministry and community engagement.
                </p>
                <div className="text-sm text-orange-600">
                  Unique perspective on urban Adventist ministry
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}