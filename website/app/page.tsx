import { Search, CheckCircle, Building, Globe } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Making Christian Sermons <br />
              <span className="text-blue-600">Searchable & Accessible</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover, search, and study sermon transcripts from multiple Christian ministries. 
              All converted to text format for easy research and spiritual growth.
            </p>
            <div className="flex gap-4 justify-center mb-12">
              <Link href="/search" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Search className="w-5 h-5" />
                Search Sermons
              </Link>
              <a href="#ministries" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Browse Ministries
              </a>
            </div>
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">3,200+</div>
                <div className="text-gray-600">Sermon Transcripts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">4</div>
                <div className="text-gray-600">SDA Churches</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-gray-600">Free Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white" id="mission">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Democratizing access to Christian teachings through searchable text
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "♿", title: "Accessibility", desc: "Enable text-based access to sermon content for the hearing impaired and those with different learning preferences." },
              { icon: "🔬", title: "Research", desc: "Allow theological students and researchers to search across multiple sermons and compare teachings." },
              { icon: "📖", title: "Study", desc: "Help believers dive deeper into specific topics across different messages and speakers." },
              { icon: "🏛️", title: "Preservation", desc: "Create a searchable archive of important Christian teachings for future generations." },
              { icon: "🌍", title: "Global Access", desc: "Make sermons available to those with limited internet bandwidth through text format." },
              { icon: "🕊️", title: "Truth", desc: "Facilitate the sharing of biblical truth through organized, searchable content." }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section className="py-20 bg-gray-50" id="ministries">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Ministries</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore sermon collections from these dedicated Christian ministries
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Featured Ministry */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-200">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Newlife SDA Church Nairobi</h3>
                <div className="flex gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">2,200+ Sermons</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Largest Collection</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Major SDA church in Nairobi with extensive sermon collection covering all aspects of 
                Seventh-day Adventist worship, doctrine, and community life.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Sabbath School", "Divine Service", "Youth Ministry", "Community"].map(tag => (
                  <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{tag}</span>
                ))}
              </div>
              <div className="flex gap-3">
                <Link href="/newlife-sda" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Browse Collection
                </Link>
                <a href="https://www.youtube.com/@newlifesdachurchnairobi" target="_blank" className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Visit Channel
                </a>
              </div>
            </div>

            {/* Other Ministries */}
            {[
              {
                name: "Nairobi Central SDA",
                count: "730+ Sermons",
                desc: "Central SDA church serving the heart of Nairobi with comprehensive worship services, music ministry, and biblical teachings.",
                tags: ["Worship", "Music Ministry", "Biblical Teaching", "Urban Ministry"],
                slug: "nairobi-central-sda",
                url: "https://www.youtube.com/@nairobicentralsda"
              },
              {
                name: "Pioneer Loudcry",
                count: "197+ Sermons", 
                desc: "Dedicated to prophetic truth and the three angels' messages, providing deep theological content in both English and Swahili.",
                tags: ["Prophecy", "Three Angels", "End Times", "Biblical Truth"],
                slug: "pioneer-loudcry",
                url: "https://www.youtube.com/@PTLPMTV"
              },
              {
                name: "Young Evangelists Ministry",
                count: "82+ Sermons",
                desc: "Committed to biblical education and spiritual growth, focusing on Adventist theology, health message, and true education principles.",
                tags: ["Health Message", "True Education", "Biblical Studies", "Evangelism"],
                slug: "young-evangelists", 
                url: "https://www.youtube.com/@youngevangelistsministry8232"
              }
            ].map((ministry, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{ministry.name}</h3>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">{ministry.count}</span>
                </div>
                <p className="text-gray-600 mb-4">{ministry.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {ministry.tags.map(tag => (
                    <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Link href={`/${ministry.slug}`} className="bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700 transition-colors text-sm">
                    Browse Collection
                  </Link>
                  <a href={ministry.url} target="_blank" className="border border-gray-300 text-gray-700 px-4 py-2 rounded font-medium hover:bg-gray-50 transition-colors text-sm">
                    Visit Channel
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Journey Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How People Use This Collection</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real examples of how researchers, pastors, and students find value
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔍",
                title: "Theological Researcher",
                question: "I want to study what these ministries teach about prophecy",
                current: "Search GitHub files for \"prophecy\" keyword",
                future: "Use website search with topic filter for \"Prophecy\""
              },
              {
                icon: "⛪",
                title: "Pastor",
                question: "Looking for sermon ideas on health message",
                current: "Browse output/ folders for health-related filenames",
                future: "Filter by topic \"Health\" and see all relevant sermons"
              },
              {
                icon: "📚",
                title: "Bible Student", 
                question: "Need sermons about Daniel's prophecies",
                current: "Search files for \"Daniel\" across both ministry folders",
                future: "Bible book filter + keyword search"
              }
            ].map((journey, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="text-4xl mb-4">{journey.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{journey.title}</h3>
                <p className="text-blue-600 mb-4 italic">&ldquo;{journey.question}&rdquo;</p>
                <div className="space-y-3">
                  <div className="bg-yellow-100 p-3 rounded">
                    <span className="font-medium text-yellow-800">Current:</span>
                    <span className="text-yellow-700 ml-2">{journey.current}</span>
                  </div>
                  <div className="bg-green-100 p-3 rounded">
                    <span className="font-medium text-green-800">Future:</span>
                    <span className="text-green-700 ml-2">{journey.future}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Status */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Development Roadmap</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what&apos;s complete and what&apos;s coming next
            </p>
          </div>
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                Phase 1: Content Collection (Complete)
              </h3>
              <ul className="text-green-700 space-y-2">
                <li>• Automated transcript downloads</li>
                <li>• Organization by ministry/channel</li>
                <li>• Repository structure setup</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                <Building className="w-6 h-6" />
                Phase 2: Website Development (In Progress)
              </h3>
              <ul className="text-blue-700 space-y-2">
                <li>• GitHub Pages site with search functionality</li>
                <li>• Ministry-specific landing pages</li>
                <li>• Topic-based browsing</li>
                <li>• Mobile-responsive design</li>
              </ul>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
                <Globe className="w-6 h-6" />
                Phase 3: Advanced Features (Planned)
              </h3>
              <ul className="text-purple-700 space-y-2">
                <li>• Full-text search with highlighting</li>
                <li>• Related sermon recommendations</li>
                <li>• Bible verse cross-referencing</li>
                <li>• Export capabilities (PDF, EPUB)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}