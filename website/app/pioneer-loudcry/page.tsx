import { Search, Download, Calendar, Clock, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function PioneerLoudcryPage() {
  const sermons = [
    {
      id: 1,
      title: "The Three Angels' Messages in the Last Days",
      date: "2024-12-15",
      speaker: "Pastor John Kamau",
      duration: "58 min",
      topics: ["Three Angels", "Prophecy", "End Times"],
      transcript_available: true,
      language: "English"
    },
    {
      id: 2,
      title: "Ujumbe wa Malaika Watatu (Swahili)",
      date: "2024-12-12", 
      speaker: "Mchungaji Peter Mwangi",
      duration: "45 min",
      topics: ["Three Angels", "Prophecy"],
      transcript_available: true,
      language: "Swahili"
    },
    {
      id: 3,
      title: "Biblical Truth vs Modern Deceptions",
      date: "2024-12-08",
      speaker: "Elder Grace Njeri", 
      duration: "52 min",
      topics: ["Biblical Truth", "Prophecy", "End Times"],
      transcript_available: true,
      language: "English"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-purple-50 to-red-50 py-16">
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
                  Pioneer Loudcry
                </h1>
                <p className="text-xl text-gray-600 mb-4">
                  Dedicated to prophetic truth and the three angels&apos; messages, providing deep theological 
                  content in both English and Swahili.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">
                    197+ Sermons Available
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                    Bilingual Content
                  </span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-medium">
                    Prophecy Focus
                  </span>
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
                <div className="text-3xl font-bold text-purple-600 mb-2">197+</div>
                <div className="text-gray-600 text-sm">Total Sermons</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
                <div className="text-gray-600 text-sm">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">150+</div>
                <div className="text-gray-600 text-sm">Hours Content</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">90%</div>
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
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option value="all">All Languages</option>
                  <option value="english">English</option>
                  <option value="swahili">Swahili</option>
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
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {sermon.title}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          sermon.language === 'English' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {sermon.language}
                        </span>
                      </div>
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
                        className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
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
              
              {/* More Coming Soon */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">194+ More Transcripts Available</h3>
                <p className="text-purple-700 mb-4">
                  This ministry focuses on prophetic messages and the three angels&apos; messages. 
                  Content available in both English and Swahili for broader accessibility.
                </p>
                <div className="text-sm text-purple-600">
                  Specialized in end-time prophecy and biblical truth
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}