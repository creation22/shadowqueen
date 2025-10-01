import React from 'react'

const Navabar = () => {
  return (
    <nav className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 rounded-full bg-white/10 backdrop-blur border border-white/10 shadow-sm">
          <div className="flex items-center justify-between px-6 py-3 text-white">
            <div className="text-2xl font-bold">ShadowQueen</div>
            <div className="flex items-center gap-6">
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
                  className="px-4 py-2 rounded-full border border-white/20 hover:border-white/40 text-white/90 hover:text-white transition-colors"
                >
                  Login
                </a>
                <a
                  href="#signup"
                  className="px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navabar