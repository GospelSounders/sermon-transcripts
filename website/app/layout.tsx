import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Christian Sermon Dataset - Research & Analysis Platform",
  description: "Comprehensive dataset of 343+ Christian sermon transcripts from multiple denominations for theological research, AI training, and academic study",
  keywords: "Christian sermons, theology, research, dataset, AI training, academic study, biblical analysis, denominational studies",
  authors: [{ name: "Gospel Sounders" }],
  creator: "Gospel Sounders",
  publisher: "Gospel Sounders",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://gospelsounders.github.io'),
  alternates: {
    canonical: '/sermon-transcripts',
  },
  openGraph: {
    title: "Christian Sermon Dataset - Research & Analysis Platform",
    description: "Comprehensive dataset of 343+ Christian sermon transcripts from multiple denominations for theological research, AI training, and academic study",
    url: 'https://gospelsounders.github.io/sermon-transcripts',
    siteName: 'Christian Sermon Dataset',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/sermon-transcripts/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Christian Sermon Dataset - Research & Analysis Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Christian Sermon Dataset - Research & Analysis Platform",
    description: "Comprehensive dataset of 343+ Christian sermon transcripts from multiple denominations for theological research, AI training, and academic study",
    images: ['/sermon-transcripts/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/sermon-transcripts/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/sermon-transcripts/favicon.ico" />
        <link rel="apple-touch-icon" href="/sermon-transcripts/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <Header />
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
                  <li><Link href="/ministries" className="text-gray-300 hover:text-white transition-colors">Browse All Ministries</Link></li>
                  <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About the Dataset</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><Link href="/fair-use" className="text-gray-300 hover:text-white transition-colors">Fair Use Policy</Link></li>
                  <li><Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
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
