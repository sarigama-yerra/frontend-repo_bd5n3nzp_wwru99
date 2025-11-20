import React from 'react'
import { Bot, Workflow, Zap, LineChart } from 'lucide-react'

const services = [
  {
    icon: Bot,
    title: 'Custom Chatbots',
    desc: 'Fine-tuned assistants for support, sales, and operations integrated with your data.',
  },
  {
    icon: Workflow,
    title: 'CRM Automation',
    desc: 'Auto-enrich, route, and follow-up in HubSpot, Salesforce, and beyond.',
  },
  {
    icon: LineChart,
    title: 'Lead Gen Workflows',
    desc: 'Outbound sequencing, inbox triage, and calendar booking — end to end.',
  },
  {
    icon: Zap,
    title: 'Zapier/Make Integrations',
    desc: 'Bulletproof workflows that connect every app in your stack.',
  },
]

const Services = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-blue-100 sm:text-4xl">What We Deliver</h2>
        <p className="mt-3 text-blue-200/80">Modular services designed to compound efficiency.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/10">
            <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 p-3 text-cyan-300 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-blue-100">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-blue-200/80">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
