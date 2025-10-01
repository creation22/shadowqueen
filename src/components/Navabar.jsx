import React from 'react'

const Navabar = () => {
  return (
    <nav className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 rounded-full bg-white/10 backdrop-blur border border-white/10 shadow-sm">
          <div className="flex items-center justify-between px-6 py-3 text-white">
            <div className="text-2xl font-bold">Shadow Queen</div>
            <div className="flex items-center gap-6">
              <a href="#home" className="text-white/90 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-white/90 hover:text-white transition-colors">About</a>
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navabar