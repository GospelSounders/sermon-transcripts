'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

interface Ministry {
  name: string
  sermon_count: number
}

interface SummaryData {
  total_sermons: number
  total_ministries: number
  languages: string[]
  topics: string[]
  ministries: { [key: string]: Ministry }
}

export default function MinistriesPage() {
  const [summaryData, setSummaryData] = useState<SummaryData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('/sermon-transcripts/data/summary.json')
      .then(response => response.json())
      .then((data: SummaryData) => {
        setSummaryData(data)
        setIsLoading(false)
      })
      .catch(error => {
        console.error('Error loading summary data:', error)
        setIsLoading(false)
      })
  }, [])

  const staticMinistryInfo: { [key: string]: { desc: string, tags: string[], url: string } } = {
    "young-evangelists": {
      desc: "Committed to biblical education and spiritual growth, focusing on Adventist theology, health message, and true education principles.",
      tags: ["Health Message", "True Education", "Biblical Studies", "Evangelism"],
      url: "https://www.youtube.com/@youngevangelistsministry8232"
    },
    "pioneer-loudcry": {
      desc: "Dedicated to prophetic truth and the three angels' messages, providing deep theological content in both English and Swahili.",
      tags: ["Prophecy", "Three Angels", "End Times", "Biblical Truth"],
      url: "https://www.youtube.com/@PTLPMTV"
    },
    "newlife-sda": {
      desc: "Major Seventh-day Adventist church in Nairobi with extensive sermon collection covering worship, doctrine, and community life.",
      tags: ["Sabbath School", "Divine Service", "Youth Ministry", "Community"],
      url: "https://www.youtube.com/@newlifesdachurchnairobi"
    },
    "nairobi-central-sda": {
      desc: "Central SDA church serving the heart of Nairobi with comprehensive worship services, music ministry, and biblical teachings.",
      tags: ["Worship", "Music Ministry", "Biblical Teaching", "Urban Ministry"],
      url: "https://www.youtube.com/@nairobicentralsda"
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p>Loading ministries...</p>
        </div>
      </div>
    )
  }

  if (!summaryData) {
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
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              All Ministries & Churches
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore {summaryData.total_sermons} sermon transcripts from {summaryData.total_ministries} Christian churches and ministries.
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
              {Object.entries(summaryData.ministries).map(([slug, ministry]) => {
                const info = staticMinistryInfo[slug]
                if (!info) return null
                
                return (
                  <div key={slug} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{ministry.name}</h3>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {ministry.sermon_count} Sermons
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{info.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {info.tags.map(tag => (
                        <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Link 
                        href={`/${slug}`} 
                        className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
                      >
                        View Transcripts
                      </Link>
                      <a 
                        href={info.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        YouTube
                      </a>
                    </div>
                  </div>
                )
              })}
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
                <div className="text-4xl font-bold text-blue-600 mb-2">{summaryData.total_sermons}</div>
                <div className="text-gray-600">Available Transcripts</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{summaryData.total_ministries}</div>
                <div className="text-gray-600">Churches & Ministries</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{summaryData.languages.length}</div>
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