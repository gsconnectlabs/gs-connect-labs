import Reveal, { SectionHeading } from './Reveal'
import {
  Award,
  ShieldCheck,
  Smartphone,
  ArrowRightLeft,
  Plug,
  PiggyBank,
  Zap,
  Briefcase,
} from 'lucide-react'

const reasons = [
  { icon: Award, title: 'Amazon Connect Expertise' },
  { icon: ShieldCheck, title: 'Secure and Scalable Solutions' },
  { icon: Smartphone, title: 'Modern Self-Service IVRs' },
  { icon: ArrowRightLeft, title: 'Legacy Platform Migration' },
  { icon: Plug, title: 'API and CRM Integration' },
  { icon: PiggyBank, title: 'Cost Optimization' },
  { icon: Zap, title: 'Agile Delivery' },
  { icon: Briefcase, title: 'Freelance Flexibility' },
]

export default function WhyChoose() {
  return (
    <section className="section-pad relative bg-navy-950">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Us"
          title="Why Choose GS Connect Labs"
          subtitle="Enterprise-grade engineering with the agility and personal attention of a specialist partner."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 4) * 0.08}>
              <div className="group relative flex h-full flex-col items-start gap-4 overflow-hidden rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-navy-400/40 hover:shadow-glow">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-navy-400/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-500/30 to-navy-700/30 ring-1 ring-white/10">
                  <r.icon className="h-6 w-6 text-navy-200" />
                </div>
                <p className="font-display font-bold leading-snug text-white">
                  {r.title}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
