import Reveal, { SectionHeading } from './Reveal'
import {
  PhoneCall,
  Workflow,
  ArrowRightLeft,
  Bot,
  Code2,
  Plug,
  BarChart3,
  LifeBuoy,
} from 'lucide-react'

const services = [
  {
    icon: PhoneCall,
    title: 'Amazon Connect Implementation',
    desc: 'End-to-end Amazon Connect setup, call flows, queues, routing profiles, and user management.',
  },
  {
    icon: Workflow,
    title: 'IVR Development',
    desc: 'Design and development of intelligent self-service IVRs with DTMF and voice recognition.',
  },
  {
    icon: ArrowRightLeft,
    title: 'Contact Center Migration',
    desc: 'Migration from Avaya, Cisco CVP, or legacy IVR platforms to Amazon Connect.',
  },
  {
    icon: Bot,
    title: 'Amazon Lex Chatbots',
    desc: 'Conversational voice and chat bots powered by Amazon Lex.',
  },
  {
    icon: Code2,
    title: 'Lambda Integrations',
    desc: 'Build serverless integrations with AWS Lambda and REST APIs.',
  },
  {
    icon: Plug,
    title: 'CRM Integration',
    desc: 'Integrate Amazon Connect with Salesforce, ServiceNow, and custom CRM platforms.',
  },
  {
    icon: BarChart3,
    title: 'Reporting and Analytics',
    desc: 'Create dashboards and reports for customer interactions and agent performance.',
  },
  {
    icon: LifeBuoy,
    title: 'Managed Support',
    desc: 'Enhancements, troubleshooting, and ongoing support.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="section-pad relative bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What We Do"
          title="Services Built for Scale"
          subtitle="From greenfield Amazon Connect deployments to complex migrations and ongoing support — we cover the full lifecycle."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl glass p-6 shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-navy-400/40 hover:shadow-glow">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-navy-500/0 blur-2xl transition-all duration-500 group-hover:bg-navy-500/40" />
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-500/30 to-navy-700/30 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110">
                  <s.icon className="h-7 w-7 text-navy-200" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
