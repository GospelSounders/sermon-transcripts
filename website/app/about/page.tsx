import Link from 'next/link'
import { Github, Mail, BookOpen, Database, Users, Shield } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              About the Christian Sermon Dataset
            </h1>
            <p className="text-xl text-gray-600">
              A comprehensive, open-access collection of Christian sermon transcripts designed for theological research, AI training, and academic study.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Research Focus</h3>
                <p className="text-gray-600">
                  Enable comprehensive theological research and analysis of contemporary Christian teaching patterns.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Open Access</h3>
                <p className="text-gray-600">
                  Provide free, structured access to sermon content for students, researchers, and developers.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Community Driven</h3>
                <p className="text-gray-600">
                  Built by researchers and developers passionate about preserving and sharing Christian teachings.
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                The Christian Sermon Dataset was created to bridge the gap between traditional Christian teachings and modern research methodologies. We believe that by making sermon content searchable, analyzable, and accessible, we can:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
                <li>Preserve important Christian teachings for future generations</li>
                <li>Enable theological students to study patterns across different ministries</li>
                <li>Support researchers in understanding denominational differences</li>
                <li>Provide training data for AI systems focused on religious content</li>
                <li>Make sermon content accessible to those with hearing impairments</li>
                <li>Allow global access to teachings through text-based formats</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Dataset Specifications</h2>
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Content Coverage</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• 119+ transcribed sermons</li>
                      <li>• 9 churches and ministries</li>
                      <li>• Multiple Christian denominations</li>
                      <li>• English and Swahili languages</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technical Details</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Plain text format (UTF-8)</li>
                      <li>• Structured JSON metadata</li>
                      <li>• Topic classification</li>
                      <li>• Speaker identification</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Research Applications</h2>
              <p className="text-gray-600 mb-6">
                This dataset enables a wide range of research applications including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Academic Research</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Theological analysis and comparison</li>
                    <li>• Denominational studies</li>
                    <li>• Linguistic analysis of religious discourse</li>
                    <li>• Historical documentation of teachings</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technology Development</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• AI model training for religious content</li>
                    <li>• Natural language processing applications</li>
                    <li>• Sentiment analysis in religious context</li>
                    <li>• Automated topic classification</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Sources & Collection</h2>
              <p className="text-gray-600 mb-6">
                Our transcripts are sourced from publicly available YouTube channels of Christian churches and ministries. We use automated transcript extraction combined with manual verification to ensure accuracy. All content is attributed to its original creators and used under fair use principles for educational and research purposes.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Quality Assurance</h2>
              <p className="text-gray-600 mb-6">
                We maintain high standards for our dataset through:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
                <li>Automated quality checks for transcript accuracy</li>
                <li>Manual review of metadata and classifications</li>
                <li>Regular updates and corrections based on user feedback</li>
                <li>Verification of source attribution and permissions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Project Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">BO</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Brian Onang'o</h3>
                <p className="text-blue-600 font-medium mb-3">Lead Developer & Data Architect</p>
                <p className="text-gray-600 text-sm mb-4">
                  Responsible for dataset architecture, transcript processing pipelines, and research platform development.
                </p>
                <div className="flex justify-center gap-3">
                  <a href="https://github.com/gospelsounders" target="_blank" className="text-gray-600 hover:text-blue-600">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="mailto:contact@gospelsounders.org" className="text-gray-600 hover:text-blue-600">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Research Assistant</h3>
                <p className="text-green-600 font-medium mb-3">Data Processing & Analysis</p>
                <p className="text-gray-600 text-sm mb-4">
                  Automated transcript extraction, data cleaning, and initial research applications development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Involved</h2>
            <p className="text-xl text-gray-600 mb-8">
              We welcome collaboration from researchers, developers, and institutions interested in Christian sermon analysis.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://github.com/gospelsounders/sermon-transcripts" 
                target="_blank"
                className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
              <a 
                href="mailto:contact@gospelsounders.org"
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </a>
              <Link 
                href="/fair-use"
                className="flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Shield className="w-5 h-5" />
                Fair Use Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}