'use client'

import Link from 'next/link'

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">
              Quote<span className="text-[#2EE4D4]">Linker</span>
            </span>
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-white/80 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-white/80 hover:text-white transition-colors">
              Resources
            </Link>
            <button
              onClick={() => {
                const formSection = document.querySelector('#quote-form')
                formSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-[#2EE4D4] text-black font-semibold px-6 py-2 rounded-full hover:bg-opacity-90 transition-all"
            >
              Get My Free Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 