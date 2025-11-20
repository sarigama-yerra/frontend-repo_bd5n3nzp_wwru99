import React from 'react'

const metrics = [
  { label: 'Hours Saved', value: '12,400+' },
  { label: 'Revenue Generated', value: '$8.2M+' },
  { label: 'Avg. ROI', value: '5.7x' },
  { label: 'Cycle Time Reduction', value: '72%' },
]

const Trust = () => {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-16">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(60%_40%_at_50%_50%,rgba(168,85,247,0.12),transparent)]" />
      <div className="grid grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-blue-100 backdrop-blur-xl sm:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="">
            <div className="text-2xl font-extrabold tracking-tight sm:text-3xl">{m.value}</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-blue-300/70">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Trust
