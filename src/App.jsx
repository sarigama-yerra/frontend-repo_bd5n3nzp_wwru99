import React from 'react'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import Services from './components/Services'
import Trust from './components/Trust'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* subtle grid pattern */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
          <span className="text-sm font-semibold tracking-wide text-blue-100">Synaptix</span>
        </div>
        <a href="#consult" className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs text-blue-100 backdrop-blur-xl hover:bg-white/10">Book Consultation</a>
      </header>

      <main className="relative z-10">
        <Hero />
        <ProblemSolution />
        <div id="services">
          <Services />
        </div>
        <Trust />

        {/* Consultation CTA */}
        <section id="consult" className="mx-auto max-w-3xl px-6 pb-20">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-blue-100">Get your free automation blueprint</h3>
            <p className="mt-2 text-blue-200/80">Tell us your goals. We’ll map a 2-week plan to measurable ROI.</p>
            <form className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Name" />
              <input className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Work Email" />
              <input className="sm:col-span-2 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Company / Website" />
              <button type="button" className="sm:col-span-2 mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(56,189,248,0.35)] transition-transform hover:scale-[1.01]">Book a Free Consultation</button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
