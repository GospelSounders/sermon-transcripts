import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Christian Sermon Dataset - Research & Analysis Platform",
  description: "Comprehensive dataset of 3,200+ Christian sermon transcripts from multiple denominations for theological research, AI training, and academic study",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-gray-900">
                <span className="text-3xl">📊</span>
                <span>Christian Sermon Dataset</span>
              </Link>
              <nav className="flex gap-6">
                <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Home
                </Link>
                <Link href="/search" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Search
                </Link>
                <Link href="/ministries" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  All Ministries
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  About
                </Link>
              </nav>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-bold mb-4">Christian Sermon Dataset</h4>
                <p className="text-gray-300">Comprehensive multi-denominational sermon dataset for theological research, AI training, and academic study.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/search" className="text-gray-300 hover:text-white transition-colors">Search Sermons</Link></li>
                  <li><Link href="/young-evangelists" className="text-gray-300 hover:text-white transition-colors">Young Evangelists</Link></li>
                  <li><Link href="/pioneer-loudcry" className="text-gray-300 hover:text-white transition-colors">Pioneer Loudcry</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#legal" className="text-gray-300 hover:text-white transition-colors">Fair Use</a></li>
                  <li><a href="#legal" className="text-gray-300 hover:text-white transition-colors">Attribution</a></li>
                  <li><a href="#legal" className="text-gray-300 hover:text-white transition-colors">Copyright</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-300 mb-2">&copy; 2025 Christian Sermon Dataset. Research and educational use only. All content belongs to original creators.</p>
              <p className="text-gray-400 italic">&ldquo;Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.&rdquo; - 2 Timothy 2:15</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
