import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-2 sm:mt-4 rounded-xl bg-white/10 backdrop-blur border border-white/10 shadow-sm">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 text-white">
            {/* Logo */}
            <div className="text-xl sm:text-2xl font-bold">ShadowQueen</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#home" className="text-white/90 hover:text-white transition-colors">Home</a>
              <a
                href="https://github.com/creation22"
                target="_blank"
                rel="noreferrer"
                className="text-white/90 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <div className="flex items-center gap-3">
                <a
                  href="#login"
                  className="px-3 py-1.5 rounded-md border border-white/20 hover:border-white/40 text-white/90 hover:text-white transition-colors text-sm"
                >
                  Login
                </a>
                <a
                  href="#signup"
                  className="px-3 py-1.5 rounded-md bg-white/20 hover:bg-white/30 text-white transition-colors text-sm"
                >
                  Sign up
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden px-4 pb-4 bg-white/5 rounded-b-lg border-t border-white/10">
              <div className="flex flex-col gap-2 pt-3">
                <a 
                  href="#home" 
                  className="block w-full px-3 py-2 rounded-md text-white/90 hover:text-white hover:bg-white/10 transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="https://github.com/creation22"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full px-3 py-2 rounded-md text-white/90 hover:text-white hover:bg-white/10 transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  GitHub
                </a>
                <a
                  href="#login"
                  className="block w-full px-3 py-2 rounded-md border border-white/20 hover:border-white/40 text-white/90 hover:text-white transition-colors text-center text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </a>
                <a
                  href="#signup"
                  className="block w-full px-3 py-2 rounded-md bg-white/20 hover:bg-white/30 text-white transition-colors text-center text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign up
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
