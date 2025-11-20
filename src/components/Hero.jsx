import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-slate-950">
      {/* Cyber gradient aura background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl opacity-50" style={{ background: 'radial-gradient(closest-side, rgba(59,130,246,0.35), transparent)' }} />
        <div className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-40" style={{ background: 'radial-gradient(closest-side, rgba(168,85,247,0.35), transparent)' }} />
      </div>

      {/* Spline 3D animation */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-blue-200/80 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
          Synaptix • AI Automation Agency
        </div>

        <h1 className="text-balance bg-gradient-to-br from-blue-200 via-white to-purple-200 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl">
          Rewiring Your Business for Efficiency
        </h1>
        
        <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-blue-200/80 sm:text-lg">
          We design, automate, and deploy intelligence into your workflows — transforming manual drudgery into AI‑powered velocity.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#consult"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(56,189,248,0.35)] transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
          >
            <span className="relative z-10">Book a Free Consultation</span>
            <span className="absolute inset-0 -z-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-10" />
          </a>
          <span className="text-xs text-blue-300/70">Avg. setup time: under 14 days</span>
        </div>
      </div>

      {/* Glass card badges */}
      <div className="pointer-events-none relative z-10 mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-4 px-6 sm:grid-cols-3">
        {[
          { label: 'Human-in-the-loop', value: 'Audited automations' },
          { label: 'Secure by design', value: 'SOC2-ready stack' },
          { label: 'ROI-first', value: 'Payback in weeks' },
        ].map((item) => (
          <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left text-blue-200/80 backdrop-blur-xl">
            <p className="text-xs text-blue-300/70">{item.label}</p>
            <p className="mt-1 text-sm font-semibold text-blue-100">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero
