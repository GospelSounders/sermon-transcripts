import Link from 'next/link'
import { Shield, BookOpen, Scale, Users } from 'lucide-react'

export default function FairUsePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Fair Use Policy & Legal Information
            </h1>
            <p className="text-xl text-gray-600">
              Understanding our commitment to ethical use of Christian sermon content for research and education.
            </p>
          </div>
        </div>
      </section>

      {/* Fair Use Principles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Fair Use Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Educational Purpose</h3>
                <p className="text-gray-600">
                  Content is used solely for educational and research purposes, supporting theological studies and academic inquiry.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Transformative Use</h3>
                <p className="text-gray-600">
                  Transcripts are processed, structured, and made searchable, creating new value for research applications.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Non-Commercial</h3>
                <p className="text-gray-600">
                  All content is provided free of charge with no commercial intent or monetary benefit.
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Framework</h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">U.S. Copyright Law - Section 107</h3>
                <p className="text-blue-800 mb-4">
                  Our use of sermon transcripts falls under the Fair Use provision of U.S. Copyright Law (17 U.S.C. § 107), which permits the use of copyrighted material for purposes such as:
                </p>
                <ul className="list-disc list-inside text-blue-800 space-y-2">
                  <li>Criticism, comment, news reporting, teaching</li>
                  <li>Scholarship or research</li>
                  <li>Educational purposes</li>
                  <li>Transformative applications</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Four Factor Analysis</h2>
              
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">1. Purpose and Character of Use</h3>
                  <p className="text-gray-600 mb-4">
                    <strong>Educational and Research Use:</strong> The Christian Sermon Dataset is designed exclusively for:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Theological research and academic study</li>
                    <li>AI training for religious content understanding</li>
                    <li>Comparative denominational analysis</li>
                    <li>Accessibility for hearing-impaired individuals</li>
                    <li>Preservation of Christian teachings for future generations</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2. Nature of Copyrighted Work</h3>
                  <p className="text-gray-600 mb-4">
                    <strong>Public Religious Discourse:</strong> The transcribed sermons are:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Publicly broadcast religious teachings</li>
                    <li>Intended for wide distribution and sharing</li>
                    <li>Educational and spiritual in nature</li>
                    <li>Available on public platforms (YouTube)</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3. Amount and Substantiality</h3>
                  <p className="text-gray-600 mb-4">
                    <strong>Necessary Portion for Research:</strong> We use complete transcripts because:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Partial transcripts would not serve research purposes</li>
                    <li>Complete context is essential for theological analysis</li>
                    <li>Fragmented content cannot support academic inquiry</li>
                    <li>Full transcripts enable comprehensive topic classification</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4. Effect on Market Value</h3>
                  <p className="text-gray-600 mb-4">
                    <strong>No Market Harm:</strong> Our use does not negatively impact the original work because:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>We direct users to original YouTube channels</li>
                    <li>Text transcripts do not replace video content</li>
                    <li>We serve different audiences (researchers vs. worshippers)</li>
                    <li>Our platform promotes rather than competes with original content</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Attribution & Credit</h2>
              <p className="text-gray-600 mb-6">
                We are committed to proper attribution and respect for content creators:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
                <li>All transcripts include original video titles and speaker names</li>
                <li>Direct links to original YouTube channels are provided</li>
                <li>Ministry names and descriptions are prominently displayed</li>
                <li>No attempt is made to claim ownership of original content</li>
                <li>Clear distinction between our platform and original creators</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Content Removal Policy</h2>
              <p className="text-gray-600 mb-6">
                We respect the rights of content creators. If you are a content creator and wish to have your material removed from our dataset:
              </p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <h3 className="text-lg font-bold text-yellow-900 mb-3">Removal Request Process</h3>
                <ol className="list-decimal list-inside text-yellow-800 space-y-2">
                  <li>Contact us at <a href="mailto:contact@gospelsounders.org" className="underline">contact@gospelsounders.org</a></li>
                  <li>Provide specific details about the content to be removed</li>
                  <li>Include proof of ownership or authority to request removal</li>
                  <li>We will respond within 48 hours and remove content within 7 days</li>
                </ol>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">User Responsibilities</h2>
              <p className="text-gray-600 mb-6">
                Users of this dataset must:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
                <li>Use content only for legitimate research or educational purposes</li>
                <li>Provide proper attribution when citing or referencing transcripts</li>
                <li>Not use content for commercial purposes</li>
                <li>Respect the spiritual and religious nature of the content</li>
                <li>Report any concerns or issues to our team</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">International Considerations</h2>
              <p className="text-gray-600 mb-6">
                While our primary legal framework is U.S. Copyright Law, we recognize that:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
                <li>Some content may originate from international sources</li>
                <li>Educational fair use principles exist in many jurisdictions</li>
                <li>Religious content often enjoys broader usage rights</li>
                <li>We will comply with legitimate international removal requests</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Disclaimer</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  <strong>Legal Disclaimer:</strong> This fair use policy is provided for informational purposes and represents our good faith interpretation of applicable law. It does not constitute legal advice. The Christian Sermon Dataset is a research project created in good faith to support theological education and research.
                </p>
                <p className="text-gray-600">
                  We believe our use of copyrighted material falls clearly within the bounds of fair use, but we respect the rights of content creators and will address any legitimate concerns promptly and professionally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions or Concerns?</h2>
            <p className="text-xl text-gray-600 mb-8">
              We are committed to ethical use of content and open to dialogue with content creators and users.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:contact@gospelsounders.org"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Contact Us
              </a>
              <Link 
                href="/about"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}