"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Twitter } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md border-b border-primary-cyan/20" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-2 sm:py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-primary-cyan to-solana-purple rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xs">V</span>
            </div>
            <span className="font-orbitron font-bold text-base sm:text-lg md:text-xl">VANTA.CASH</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-300 hover:text-primary-cyan transition-colors relative group py-2">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-cyan transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/mix" className="text-gray-300 hover:text-primary-cyan transition-colors relative group py-2">
              Mix
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-cyan transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/docs" className="text-gray-300 hover:text-primary-cyan transition-colors relative group py-2">
              Docs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-cyan transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-cyan hover:bg-primary-cyan/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex flex-col pt-20 pb-6 px-6 md:hidden">
          <nav className="flex flex-col space-y-6 items-center text-center">
            <Link
              href="/"
              className="text-xl font-orbitron text-white hover:text-primary-cyan transition-colors w-full py-3 border-b border-primary-cyan/20"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/mix"
              className="text-xl font-orbitron text-white hover:text-primary-cyan transition-colors w-full py-3 border-b border-primary-cyan/20"
              onClick={() => setIsOpen(false)}
            >
              Mix
            </Link>
            <Link
              href="/docs"
              className="text-xl font-orbitron text-white hover:text-primary-cyan transition-colors w-full py-3 border-b border-primary-cyan/20"
              onClick={() => setIsOpen(false)}
            >
              Docs
            </Link>
          </nav>
          <div className="mt-auto"></div>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden z-30 mobile-nav">
        <div className="flex justify-around items-center py-3">
          <Link href="/" className="flex flex-col items-center text-xs text-gray-300 hover:text-primary-cyan">
            <div className="w-6 h-6 mb-1 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <span>Home</span>
          </Link>
          <Link href="/mix" className="flex flex-col items-center text-xs text-gray-300 hover:text-primary-cyan">
            <div className="w-6 h-6 mb-1 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <span>Mix</span>
          </Link>
          <Link href="/docs" className="flex flex-col items-center text-xs text-gray-300 hover:text-primary-cyan">
            <div className="w-6 h-6 mb-1 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <span>Docs</span>
          </Link>
          <Link
            href="https://x.com/VantaCash"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-xs text-gray-300 hover:text-primary-cyan"
          >
            <div className="w-6 h-6 mb-1 flex items-center justify-center">
              <Twitter className="w-5 h-5" />
            </div>
            <span>Twitter</span>
          </Link>
        </div>
      </div>
    </>
  )
}
