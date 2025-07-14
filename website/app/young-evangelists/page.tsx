import { Search, Download, Calendar, Clock, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function YoungEvangelistsPage() {
  // This would normally come from your data source
  const sermons = [
    {
      id: 1,
      title: "The Health Message in the Last Days",
      date: "2024-12-15",
      speaker: "Pastor John Doe",
      duration: "45 min",
      topics: ["Health Message", "Last Day Events"],
      transcript_available: true
    },
    {
      id: 2,
      title: "True Education Principles",
      date: "2024-12-08", 
      speaker: "Elder Mary Smith",
      duration: "38 min",
      topics: ["True Education", "Character Development"],
      transcript_available: true
    },
    {
      id: 3,
      title: "Biblical Stewardship and Tithing",
      date: "2024-12-01",
      speaker: "Pastor John Doe", 
      duration: "42 min",
      topics: ["Stewardship", "Biblical Studies"],
      transcript_available: true
    }
    // Add more sample sermons as needed
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
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
                  Young Evangelists Ministry
                </h1>
                <p className="text-xl text-gray-600 mb-4">
                  Committed to biblical education and spiritual growth, focusing on Adventist theology, 
                  health message, and true education principles.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                    82+ Sermons Available
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                    All Transcribed
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">
                    SDA Theology Focus
                  </span>
                </div>
              </div>
              
              <div className="flex gap-3">
                <a 
                  href="https://www.youtube.com/@youngevangelistsministry8232" 
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
                <div className="text-3xl font-bold text-green-600 mb-2">82+</div>
                <div className="text-gray-600 text-sm">Total Sermons</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-gray-600 text-sm">Different Speakers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">60+</div>
                <div className="text-gray-600 text-sm">Hours Content</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
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
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="all">All Topics</option>
                  <option value="health">Health Message</option>
                  <option value="education">True Education</option>
                  <option value="evangelism">Evangelism</option>
                  <option value="biblical">Biblical Studies</option>
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
                        className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
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
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">More Transcripts Coming Soon</h3>
                <p className="text-blue-700 mb-4">
                  We&apos;re working on transcribing the remaining 79+ sermons from this ministry. 
                  Check back soon for updates!
                </p>
                <div className="text-sm text-blue-600">
                  Current progress: 3 of 82+ sermons transcribed
                </div>
              </div>
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
    </div>
  )
}