import Reveal, { SectionHeading } from './Reveal'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'GS Connect Labs migrated our legacy Avaya IVR to Amazon Connect with zero downtime. Call handling times dropped and our self-service rate jumped within weeks.',
    name: 'Priya Nair',
    role: 'VP, Customer Operations',
    company: 'Meridian Bank',
    initials: 'PN',
  },
  {
    quote:
      'The Lex-powered voice bot they built understands our customers remarkably well. The serverless architecture has been rock solid and cost-efficient.',
    name: 'David Chen',
    role: 'Director of Engineering',
    company: 'Northwind Retail',
    initials: 'DC',
  },
  {
    quote:
      'Deep Amazon Connect expertise and genuinely agile delivery. They felt like part of our team and delivered ahead of schedule, every sprint.',
    name: 'Aisha Rahman',
    role: 'Head of Digital CX',
    company: 'Helios Insurance',
    initials: 'AR',
  },
]

export default function Testimonials() {
  return (
    <section className="section-pad relative bg-navy-950">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by Teams That Care About CX"
          subtitle="What clients say about partnering with GS Connect Labs."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="group relative flex h-full flex-col rounded-2xl glass p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-navy-400/40 hover:shadow-glow">
                <Quote className="h-9 w-9 text-navy-500/60" />
                <div className="mt-3 flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 fill-aws-orange text-aws-orange"
                    />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-300/90">
                  "{t.quote}"
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-navy-400 to-navy-700 font-bold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-slate-400">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
