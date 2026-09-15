import Reveal, { SectionHeading } from './Reveal'
import { Briefcase, Layers } from 'lucide-react'

const domains = [
  'Banking',
  'Customer Service',
  'Self-Service IVR',
  'Voice Applications',
  'Cloud Contact Centers',
]

const platforms = [
  'Amazon Connect',
  'Avaya Orchestration Designer',
  'Cisco CVP',
  'VoiceXML',
  'Java',
  'REST APIs',
]

export default function Experience() {
  return (
    <section className="section-pad relative bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="Contact Center Expertise"
          subtitle="16+ years of experience in IVR and Contact Center technologies."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr_1fr]">
          <Reveal>
            <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-navy-500/20 to-navy-800/40 p-8 ring-1 ring-white/10 shadow-card">
              <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-navy-500/30 blur-3xl" />
              <span className="font-display text-6xl font-extrabold gradient-text-blue">
                16+
              </span>
              <p className="mt-2 text-lg font-semibold text-white">
                Years of Experience
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300/80">
                Delivering reliable IVR and contact center solutions across enterprise
                and cloud platforms — from legacy voice applications to modern Amazon
                Connect deployments.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl glass p-8 shadow-card">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-500/25 ring-1 ring-white/10">
                  <Briefcase className="h-5 w-5 text-navy-200" />
                </span>
                <h3 className="font-display text-lg font-bold text-white">Domains</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {domains.map((d) => (
                  <li key={d} className="flex items-center gap-3 text-slate-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-aws-orange" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="h-full rounded-3xl glass p-8 shadow-card">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-500/25 ring-1 ring-white/10">
                  <Layers className="h-5 w-5 text-navy-200" />
                </span>
                <h3 className="font-display text-lg font-bold text-white">Platforms</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {platforms.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-slate-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-navy-300" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
