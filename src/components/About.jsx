import Reveal, { SectionHeading } from './Reveal'
import { CheckCircle2, Target, Building2 } from 'lucide-react'

const expertise = [
  'Amazon Connect',
  'Contact Center Migration',
  'IVR Design and Development',
  'Amazon Lex Chatbots',
  'AWS Lambda',
  'DynamoDB',
  'REST APIs',
  'Contact Flows',
  'Voice Bots',
  'Call Routing',
  'Prompt Management',
  'Reporting and Analytics',
  'CRM Integration',
]

export default function About() {
  return (
    <section id="about" className="section-pad relative bg-navy-950">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About Us"
          title="GS Connect Labs"
          subtitle="A freelance consulting company specializing in cloud contact center solutions and IVR development."
        />

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl glass-strong p-8 shadow-card">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-navy-500/30 blur-3xl" />
              <Building2 className="h-10 w-10 text-navy-300" />
              <h3 className="mt-5 font-display text-2xl font-bold text-white">
                Built for the cloud era
              </h3>
              <p className="mt-4 leading-relaxed text-slate-300/85">
                GS Connect Labs partners with businesses to design, build, and migrate
                contact centers to Amazon Connect. From intelligent self-service IVRs to
                serverless integrations, we bring enterprise-grade engineering and
                freelance flexibility to every engagement.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <Target className="h-6 w-6 text-aws-orange" />
                  <p className="mt-3 font-semibold text-white">Our Mission</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Modernize customer engagement with scalable, secure cloud solutions.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <CheckCircle2 className="h-6 w-6 text-navy-300" />
                  <p className="mt-3 font-semibold text-white">Our Approach</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Agile delivery, deep AWS expertise, measurable business outcomes.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <h3 className="font-display text-xl font-bold text-white">
              Areas of Expertise
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Full-stack contact center capabilities across the AWS ecosystem.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {expertise.map((item, i) => (
                <Reveal key={item} delay={i * 0.03}>
                  <span className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-200 transition-all hover:border-navy-400/50 hover:bg-navy-500/10 hover:text-white">
                    <CheckCircle2 className="h-4 w-4 text-navy-300 transition-colors group-hover:text-aws-orange" />
                    {item}
                  </span>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
