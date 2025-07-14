'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-2 text-xl md:text-2xl font-bold text-gray-900">
            <span className="text-2xl md:text-3xl">📊</span>
            <span className="hidden sm:inline">Christian Sermon Dataset</span>
            <span className="sm:hidden">CSD</span>
          </Link>
          <nav className="hidden md:flex gap-6">
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
          <button 
            className="md:hidden flex flex-col gap-1 p-2" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={`w-6 h-0.5 bg-gray-700 transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
        <nav className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="py-2 space-y-1 border-t border-gray-200">
            <Link 
              href="/" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/search" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Search
            </Link>
            <Link 
              href="/ministries" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              All Ministries
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}