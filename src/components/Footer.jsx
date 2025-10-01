import React from 'react'

const Footer = () => {
    return (
        <footer className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur">
            <div className="mx-auto max-w-6xl px-4 py-10">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-between">
                    <div className="text-center md:text-left">
                        <div className="text-xl font-semibold">ShadowQueen</div>
                        <div className="text-white/60 text-sm">Built by Srajan Gupta • All rights reserved</div>
                    </div>

                    <div className="flex items-center gap-4 text-sm">
                        <a href="mailto:creation2224@gmail.com" className="text-white/80 hover:text-white transition-colors">Email</a>
                        <span className="text-white/20">•</span>
                        <a href="https://github.com/creation22" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition-colors">GitHub</a>
                        <span className="text-white/20">•</span>
                        <a href="https://www.linkedin.com/in/ssrajangupta22/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition-colors">LinkedIn</a>
                        <span className="text-white/20">•</span>
                        <a href="https://twitter.com/_creation22" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition-colors">Twitter</a>
                    </div>

                    <div className="flex items-center gap-3">
                        <a
                            href="https://buymeacoffee.com/creation22"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20 transition-colors"
                        >
                            <span>☕ Buy me a coffee</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer