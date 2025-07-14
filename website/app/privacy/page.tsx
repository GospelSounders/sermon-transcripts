import Link from 'next/link'
import { Shield, Database, Eye, Users } from 'lucide-react'

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              How we collect, use, and protect your information when you use the Christian Sermon Dataset.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Minimal Data Collection</h3>
                <p className="text-gray-600">
                  We collect only essential information needed to provide our research platform services.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent Use</h3>
                <p className="text-gray-600">
                  We are transparent about what data we collect and how it&apos;s used to improve our services.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">No Personal Data Sales</h3>
                <p className="text-gray-600">
                  We never sell, rent, or share your personal information with third parties for commercial purposes.
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Last Updated: January 15, 2025</h3>
                <p className="text-blue-800">
                  This Privacy Policy explains how Gospel Sounders (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and protects information when you use the Christian Sermon Dataset website and services.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Information We Collect</h2>
              
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">1. Information You Provide</h3>
                  <p className="text-gray-600 mb-4">
                    Currently, our platform operates as a read-only research database. We do not require user registration or collect personal information such as:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Names, email addresses, or contact information</li>
                    <li>Account credentials or passwords</li>
                    <li>Personal preferences or settings</li>
                    <li>Payment information (all content is free)</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2. Automatically Collected Information</h3>
                  <p className="text-gray-600 mb-4">
                    When you visit our website, we may automatically collect certain technical information:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>IP address and general location information</li>
                    <li>Browser type and version</li>
                    <li>Device type and operating system</li>
                    <li>Pages visited and time spent on site</li>
                    <li>Referring website or search terms</li>
                    <li>Date and time of visits</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3. Cookies and Similar Technologies</h3>
                  <p className="text-gray-600 mb-4">
                    We use minimal cookies and similar technologies:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                    <li><strong>Analytics Cookies:</strong> To understand how visitors use our site</li>
                    <li><strong>No Advertising Cookies:</strong> We do not use cookies for advertising</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Information</h2>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Legitimate Purposes</h3>
                <p className="text-gray-600 mb-4">
                  We use collected information solely for:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Providing access to our research database</li>
                  <li>Improving website performance and user experience</li>
                  <li>Understanding usage patterns to enhance our services</li>
                  <li>Ensuring website security and preventing abuse</li>
                  <li>Complying with legal requirements</li>
                  <li>Responding to user inquiries and support requests</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Information Sharing</h2>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-green-900 mb-4">We Do Not Sell Your Data</h3>
                <p className="text-green-800 mb-4">
                  We never sell, rent, or trade your personal information to third parties for commercial purposes.
                </p>
              </div>

              <p className="text-gray-600 mb-6">
                We may share information in the following limited circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
                <li><strong>Service Providers:</strong> With trusted third-party services that help us operate our website (e.g., hosting, analytics)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and users</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale</li>
                <li><strong>Consent:</strong> When you have given explicit consent</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Security</h2>
              
              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Safeguards</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>HTTPS encryption for all data transmission</li>
                    <li>Secure hosting infrastructure</li>
                    <li>Regular security updates and monitoring</li>
                    <li>Access controls and authentication</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Data Minimization</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>We collect only necessary information</li>
                    <li>Data is retained only as long as needed</li>
                    <li>Regular deletion of outdated information</li>
                    <li>No storage of sensitive personal data</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights</h2>
              
              <p className="text-gray-600 mb-6">
                You have the following rights regarding your information:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Access & Transparency</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Request information about data we collect</li>
                    <li>Understand how your data is used</li>
                    <li>Access our privacy practices</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Control & Deletion</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Opt-out of non-essential cookies</li>
                    <li>Request deletion of your data</li>
                    <li>Correct inaccurate information</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Services</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-yellow-900 mb-4">External Links</h3>
                <p className="text-yellow-800 mb-4">
                  Our website contains links to YouTube channels and other external sites. We are not responsible for the privacy practices of these external sites.
                </p>
                <p className="text-yellow-800">
                  We encourage you to read the privacy policies of any external sites you visit.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Children&apos;s Privacy</h2>
              
              <p className="text-gray-600 mb-6">
                Our service is not designed for or directed at children under 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will delete it immediately.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">International Users</h2>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <p className="text-blue-800 mb-4">
                  <strong>Global Access:</strong> Our service is accessible worldwide, but our primary legal framework is based in the United States.
                </p>
                <p className="text-blue-800">
                  <strong>GDPR Compliance:</strong> For users in the European Union, we comply with GDPR requirements including the right to access, rectify, and erase personal data.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
              
              <p className="text-gray-600 mb-6">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &quot;Last Updated&quot; date. We encourage you to review this policy periodically.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li><strong>Email:</strong> <a href="mailto:privacy@gospelsounders.org" className="text-blue-600 hover:underline">privacy@gospelsounders.org</a></li>
                  <li><strong>Subject Line:</strong> &quot;Privacy Policy Inquiry&quot;</li>
                  <li><strong>Response Time:</strong> We aim to respond within 48 hours</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions About Your Privacy?</h2>
            <p className="text-xl text-gray-600 mb-8">
              We are committed to protecting your privacy and are happy to address any concerns.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:privacy@gospelsounders.org"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Contact Privacy Team
              </a>
              <Link 
                href="/fair-use"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Fair Use Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}