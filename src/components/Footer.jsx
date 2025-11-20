import React from 'react'
import { Twitter, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-blue-200/80 backdrop-blur-xl sm:flex-row">
        <div className="text-center sm:text-left">
          <div className="text-lg font-semibold text-blue-100">Synaptix</div>
          <div className="text-sm">Automation that compounds.</div>
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#consult" className="hover:text-white">Consultation</a>
          <a href="#" className="hover:text-white">Case Studies</a>
        </nav>
        <div className="flex items-center gap-3 text-blue-100">
          <a href="#" aria-label="Twitter" className="rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10">
            <Twitter className="h-4 w-4" />
          </a>
          <a href="#" aria-label="LinkedIn" className="rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Email" className="rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-blue-300/60">© {new Date().getFullYear()} Synaptix. All rights reserved.</p>
    </footer>
  )
}

export default Footer
