import React from 'react'

const ProblemSolution = () => {
  const items = [
    {
      title: 'Manual Drudgery',
      points: ['Spreadsheet chaos', 'Copy-paste ops', 'Human bottlenecks'],
      tone: 'problem',
    },
    {
      title: 'AI-Powered Velocity',
      points: ['Agents that execute', 'Automated CRM + ops', 'Data flowing in real-time'],
      tone: 'solution',
    },
  ]

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-fuchsia-500/5" />
      <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((card) => (
          <div
            key={card.title}
            className={`group rounded-3xl border p-8 backdrop-blur-xl transition-colors ${
              card.tone === 'problem'
                ? 'border-red-400/10 bg-white/5 hover:bg-white/10'
                : 'border-emerald-400/10 bg-white/5 hover:bg-white/10'
            }`}
          >
            <h3 className={`text-2xl font-semibold ${card.tone === 'problem' ? 'text-red-200' : 'text-emerald-200'}`}>{card.title}</h3>
            <ul className="mt-4 space-y-2">
              {card.points.map((p) => (
                <li key={p} className="flex items-center gap-2 text-blue-200/80">
                  <span className={`h-1.5 w-1.5 rounded-full ${card.tone === 'problem' ? 'bg-red-400' : 'bg-emerald-400'}`} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProblemSolution
