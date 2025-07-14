import { Search, Download, Calendar, Clock, ExternalLink, Star } from 'lucide-react'
import Link from 'next/link'

export default function NewlifeSDAPage() {
  // Sample data - this would normally come from your data source
  const sermons = [
    {
      id: 1,
      title: "Divine Service - The Sanctuary Message",
      date: "2024-12-15",
      speaker: "Pastor Samuel Njoroge",
      duration: "52 min",
      topics: ["Sanctuary", "Divine Service", "Prophecy"],
      transcript_available: true
    },
    {
      id: 2,
      title: "Sabbath School - Daniel Chapter 7",
      date: "2024-12-14", 
      speaker: "Elder Grace Wanjiku",
      duration: "35 min",
      topics: ["Sabbath School", "Daniel", "Prophecy"],
      transcript_available: true
    },
    {
      id: 3,
      title: "Youth Ministry - Living for Christ",
      date: "2024-12-13",
      speaker: "Pastor David Kimani", 
      duration: "28 min",
      topics: ["Youth Ministry", "Christian Living"],
      transcript_available: true
    },
    {
      id: 4,
      title: "Community Outreach Planning",
      date: "2024-12-12",
      speaker: "Elder Mary Muthoni",
      duration: "33 min",
      topics: ["Community", "Outreach", "Mission"],
      transcript_available: true
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
                ← Back to Dataset
              </Link>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h1 className="text-4xl font-bold text-gray-900">
                    Newlife SDA Church Nairobi
                  </h1>
                  <div className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    <Star className="w-4 h-4" />
                    Largest Collection
                  </div>
                </div>
                <p className="text-xl text-gray-600 mb-4">
                  Major Seventh-day Adventist church in Nairobi with extensive sermon collection covering worship, 
                  doctrine, and community life. Representative sample of contemporary SDA teaching.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                    2,200+ Sermons Available
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                    Multiple Languages
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">
                    Complete Services
                  </span>
                </div>
              </div>
              
              <div className="flex gap-3">
                <a 
                  href="https://www.youtube.com/@newlifesdachurchnairobi" 
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
                <div className="text-3xl font-bold text-blue-600 mb-2">2,200+</div>
                <div className="text-gray-600 text-sm">Total Sermons</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-gray-600 text-sm">Different Speakers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1,800+</div>
                <div className="text-gray-600 text-sm">Hours Content</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-gray-600 text-sm">Transcribed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Types Available</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🛐</div>
                <div className="font-medium text-gray-900">Sabbath School</div>
                <div className="text-sm text-gray-600">Weekly lessons</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">⛪</div>
                <div className="font-medium text-gray-900">Divine Service</div>
                <div className="text-sm text-gray-600">Main worship</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">👥</div>
                <div className="font-medium text-gray-900">Youth Ministry</div>
                <div className="text-sm text-gray-600">Young adults</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🤝</div>
                <div className="font-medium text-gray-900">Community</div>
                <div className="text-sm text-gray-600">Outreach events</div>
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
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="all">All Service Types</option>
                  <option value="sabbath-school">Sabbath School</option>
                  <option value="divine-service">Divine Service</option>
                  <option value="youth">Youth Ministry</option>
                  <option value="community">Community</option>
                </select>
              </div>
              
              <div className="text-gray-600 text-sm">
                Note: Search functionality is currently being developed. Browse the available transcripts below.
              </div>
            </div>

            {/* Recent Sermons */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Transcripts</h2>
              
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
                        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
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
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">2,196+ More Transcripts Available</h3>
                <p className="text-blue-700 mb-4">
                  This is our largest collection! We have over 2,200 sermons from this ministry 
                  spanning multiple years of worship services, Sabbath schools, and community events.
                </p>
                <div className="text-sm text-blue-600">
                  Showing recent 4 sermons - bulk access coming soon for researchers
                </div>
              </div>
            </div>

            {/* Bulk Download */}
            <div className="mt-12 bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Research Access</h3>
              <p className="text-gray-600 mb-4">
                As our largest collection, this dataset is particularly valuable for research into contemporary 
                SDA church life, worship patterns, and theological emphasis in East African contexts.
              </p>
              <div className="flex flex-wrap gap-3">
                <button 
                  className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50"
                  disabled
                >
                  Request Research Access
                </button>
                <button 
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                  disabled
                >
                  Dataset Documentation
                </button>
              </div>
              <div className="mt-3 text-sm text-gray-500">
                Note: Research access portal is being developed for academic and institutional use.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}