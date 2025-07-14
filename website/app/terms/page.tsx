import Link from 'next/link'
import { Scale, BookOpen, Users, AlertTriangle } from 'lucide-react'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Scale className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600">
              Terms and conditions for using the Christian Sermon Dataset platform and services.
            </p>
          </div>
        </div>
      </section>

      {/* Key Terms Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Educational Use</h3>
                <p className="text-gray-600">
                  Platform designed for research, education, and non-commercial theological study.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">User Responsibilities</h3>
                <p className="text-gray-600">
                  Users must comply with fair use guidelines and respect content creators' rights.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Limitations</h3>
                <p className="text-gray-600">
                  Service provided "as is" with no commercial warranties or guarantees.
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Effective Date: January 15, 2025</h3>
                <p className="text-blue-800">
                  These Terms of Service govern your use of the Christian Sermon Dataset website and services operated by Gospel Sounders.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-6">
                By accessing or using the Christian Sermon Dataset platform, you agree to be bound by these Terms of Service and our Privacy Policy. If you disagree with any part of these terms, you may not access or use our services.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Description of Service</h2>
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What We Provide</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Access to a database of Christian sermon transcripts</li>
                  <li>Search and filtering capabilities</li>
                  <li>Download functionality for individual transcripts</li>
                  <li>Online reading interface</li>
                  <li>Ministry and church information</li>
                  <li>Research and educational tools</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Acceptable Use</h2>
              
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">✅ Permitted Uses</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Academic research and study</li>
                    <li>Theological education and training</li>
                    <li>Personal spiritual growth and learning</li>
                    <li>Non-commercial research projects</li>
                    <li>Citation in academic papers and dissertations</li>
                    <li>AI training for educational purposes</li>
                    <li>Comparative denominational studies</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-red-900 mb-3">❌ Prohibited Uses</h3>
                  <ul className="list-disc list-inside text-red-700 space-y-2">
                    <li>Commercial use or resale of content</li>
                    <li>Redistribution without proper attribution</li>
                    <li>Claiming ownership of original content</li>
                    <li>Using content to defame or misrepresent creators</li>
                    <li>Automated scraping or bulk downloading</li>
                    <li>Violating copyright or intellectual property rights</li>
                    <li>Creating competing commercial platforms</li>
                    <li>Using content for malicious or harmful purposes</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">4. User Responsibilities</h2>
              <p className="text-gray-600 mb-6">
                As a user of our platform, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
                <li>Use the service in compliance with all applicable laws</li>
                <li>Respect the intellectual property rights of content creators</li>
                <li>Provide proper attribution when citing or referencing content</li>
                <li>Not attempt to circumvent security measures</li>
                <li>Report any bugs or security issues responsibly</li>
                <li>Respect the religious and spiritual nature of the content</li>
                <li>Not use the service to harm others or spread misinformation</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Intellectual Property</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-yellow-900 mb-4">Important Note</h3>
                <p className="text-yellow-800 mb-4">
                  We do not claim ownership of the original sermon content. All sermons, teachings, and related materials remain the property of their respective creators.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Our Rights</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Website design, structure, and organization</li>
                    <li>Database architecture and search functionality</li>
                    <li>Original analysis and categorization</li>
                    <li>Platform features and tools</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Content Creators' Rights</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Original sermon content and teachings</li>
                    <li>Video and audio recordings</li>
                    <li>Speaker names and ministry identities</li>
                    <li>Right to request content removal</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Content Accuracy and Disclaimers</h2>
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Provided "As Is"</h3>
                <p className="text-gray-600 mb-4">
                  The Christian Sermon Dataset is provided for educational and research purposes. We make no warranties regarding:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Accuracy of transcripts (automated transcription may contain errors)</li>
                  <li>Completeness of content or metadata</li>
                  <li>Availability of specific sermons or features</li>
                  <li>Theological accuracy or denominational representation</li>
                  <li>Continuous service availability</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                To the maximum extent permitted by law, Gospel Sounders and its contributors shall not be liable for:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
                <li>Any direct, indirect, incidental, or consequential damages</li>
                <li>Loss of data, profits, or business opportunities</li>
                <li>Damages arising from use or inability to use the service</li>
                <li>Third-party content or actions</li>
                <li>Errors or omissions in transcripts</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Service Modifications</h2>
              <p className="text-gray-600 mb-6">
                We reserve the right to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
                <li>Modify or discontinue the service at any time</li>
                <li>Update these terms of service</li>
                <li>Remove content upon request from creators</li>
                <li>Implement new features or restrictions</li>
                <li>Suspend or terminate user access for violations</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Termination</h2>
              <div className="bg-red-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-red-900 mb-4">Account Termination</h3>
                <p className="text-red-800 mb-4">
                  We may terminate or suspend your access to our service immediately, without prior notice, for any reason including:
                </p>
                <ul className="list-disc list-inside text-red-700 space-y-2">
                  <li>Violation of these Terms of Service</li>
                  <li>Misuse of the platform or content</li>
                  <li>Engaging in prohibited activities</li>
                  <li>Legal requirements or court orders</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Governing Law</h2>
              <p className="text-gray-600 mb-6">
                These Terms of Service are governed by the laws of the United States. Any disputes will be resolved in accordance with U.S. legal jurisdiction.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Changes to Terms</h2>
              <p className="text-gray-600 mb-6">
                We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated effective date. Continued use of the service after changes constitutes acceptance of the new terms.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">12. Contact Information</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li><strong>Email:</strong> <a href="mailto:legal@gospelsounders.org" className="text-blue-600 hover:underline">legal@gospelsounders.org</a></li>
                  <li><strong>Subject Line:</strong> "Terms of Service Inquiry"</li>
                  <li><strong>Website:</strong> <a href="https://gospelsounders.github.io/sermon-transcripts" className="text-blue-600 hover:underline">Christian Sermon Dataset</a></li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">13. Severability</h2>
              <p className="text-gray-600 mb-6">
                If any provision of these Terms of Service is found to be unenforceable or invalid, the remaining provisions will continue to be valid and enforceable.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">14. Entire Agreement</h2>
              <p className="text-gray-600 mb-6">
                These Terms of Service, together with our Privacy Policy and Fair Use Policy, constitute the entire agreement between you and Gospel Sounders regarding the use of our service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions About These Terms?</h2>
            <p className="text-xl text-gray-600 mb-8">
              We're here to help clarify any questions about using our platform and services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:legal@gospelsounders.org"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Contact Legal Team
              </a>
              <Link 
                href="/fair-use"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                View Fair Use Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}