import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export default function MinistriesPage() {
  const ministries = [
    {
      name: "Young Evangelists Ministry",
      count: "44 Sermons",
      desc: "Committed to biblical education and spiritual growth, focusing on Adventist theology, health message, and true education principles.",
      tags: ["Health Message", "True Education", "Biblical Studies", "Evangelism"],
      slug: "young-evangelists",
      url: "https://www.youtube.com/@youngevangelistsministry8232",
      status: "active"
    },
    {
      name: "Pioneer Loudcry",
      count: "75 Sermons", 
      desc: "Dedicated to prophetic truth and the three angels' messages, providing deep theological content in both English and Swahili.",
      tags: ["Prophecy", "Three Angels", "End Times", "Biblical Truth"],
      slug: "pioneer-loudcry",
      url: "https://www.youtube.com/@PTLPMTV",
      status: "active"
    },
    {
      name: "Newlife SDA Church Nairobi",
      count: "0 Sermons (Coming Soon)",
      desc: "Major Seventh-day Adventist church in Nairobi with extensive sermon collection covering worship, doctrine, and community life.",
      tags: ["Sabbath School", "Divine Service", "Youth Ministry", "Community"],
      slug: "newlife-sda",
      url: "https://www.youtube.com/@newlifesdachurchnairobi",
      status: "coming-soon"
    },
    {
      name: "Nairobi Central SDA",
      count: "0 Sermons (Coming Soon)",
      desc: "Central SDA church serving the heart of Nairobi with comprehensive worship services, music ministry, and biblical teachings.",
      tags: ["Worship", "Music Ministry", "Biblical Teaching", "Urban Ministry"],
      slug: "nairobi-central-sda",
      url: "https://www.youtube.com/@nairobicentralsda",
      status: "coming-soon"
    },
    {
      name: "Motswedi SDA Church",
      count: "Coming Soon",
      desc: "Seventh-day Adventist church in Botswana providing worship services and biblical teachings in both English and Setswana.",
      tags: ["Multilingual", "Worship", "Biblical Teaching", "Community"],
      slug: "motswedi-sda",
      url: "https://www.youtube.com/@motswediadventistchurch9178",
      status: "coming-soon"
    },
    {
      name: "Conroe SDA Church",
      count: "Coming Soon",
      desc: "Seventh-day Adventist church in Texas providing worship services, biblical teachings, and community outreach programs.",
      tags: ["Worship", "Biblical Teaching", "Community", "Outreach"],
      slug: "conroe-sda",
      url: "https://www.youtube.com/@ConroeSDAChurch",
      status: "coming-soon"
    },
    {
      name: "Gaborone Central SDA",
      count: "Coming Soon",
      desc: "Central Seventh-day Adventist church in Gaborone, Botswana, serving the community with worship and biblical education.",
      tags: ["Worship", "Biblical Education", "Community", "Multilingual"],
      slug: "gaborone-central-sda",
      url: "https://www.youtube.com/@gaboronecentralsdachurch",
      status: "coming-soon"
    },
    {
      name: "Repentance And Holiness (Owuor)",
      count: "Coming Soon",
      desc: "Ministry focused on repentance, holiness, and prophetic messages, emphasizing spiritual revival and biblical truth.",
      tags: ["Repentance", "Holiness", "Prophecy", "Revival"],
      slug: "repentance-holiness",
      url: "https://www.youtube.com/c/repentpreparetheway",
      status: "coming-soon"
    },
    {
      name: "Nader Mansour",
      count: "Coming Soon",
      desc: "Biblical teaching and Christian discipleship content, focusing on practical Christian living and spiritual growth.",
      tags: ["Biblical Teaching", "Discipleship", "Christian Living", "Spiritual Growth"],
      slug: "nader-mansour",
      url: "https://www.youtube.com/@NaderMansour",
      status: "coming-soon"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              All Ministries & Churches
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore sermon transcripts from diverse Christian churches and ministries across multiple denominations.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/search" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Search All Sermons
              </Link>
              <Link href="/" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {ministries.map((ministry, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{ministry.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      ministry.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {ministry.count}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{ministry.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {ministry.tags.map(tag => (
                      <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Link 
                      href={`/${ministry.slug}`} 
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
                    >
                      View Transcripts
                    </Link>
                    <a 
                      href={ministry.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      YouTube
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Dataset Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">119+</div>
                <div className="text-gray-600">Available Transcripts</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">9</div>
                <div className="text-gray-600">Churches & Ministries</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">2</div>
                <div className="text-gray-600">Languages</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Free Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}