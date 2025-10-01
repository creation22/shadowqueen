import React, { memo } from 'react'

const items = [
  { label: 'Players', value: '20K+' },
  { label: 'Games Played', value: '150K+' },
  { label: 'Avg. Match Time', value: '7m 42s' },
  { label: 'Global Win Rate', value: '51.3%' },
]

const Stats = memo(() => {
  return (
    <section className="relative z-10 py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">Shadow Queen in numbers</h3>
          <p className="text-white/60 mt-2 text-sm sm:text-base">Live snapshot of how the realm is playing.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item) => (
            <div
              key={item.label}
              className="relative rounded-2xl border border-white/10 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(56,189,248,0.10),transparent_50%)] bg-black/30 p-4 sm:p-6 backdrop-blur hover:bg-black/40 transition-colors"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white drop-shadow" >{item.value}</div>
              <div className="mt-2 text-xs sm:text-sm uppercase tracking-wide text-white/60">{item.label}</div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_20px_rgba(153,213,234,0.15)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default Stats