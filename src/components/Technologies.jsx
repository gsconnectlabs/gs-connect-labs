import Reveal, { SectionHeading } from './Reveal'

const techs = [
  { name: 'Amazon Connect', abbr: 'AC', color: 'from-aws-orange/30 to-navy-700/30' },
  { name: 'AWS Lambda', abbr: 'λ', color: 'from-orange-500/30 to-navy-700/30' },
  { name: 'Amazon Lex', abbr: 'Lex', color: 'from-sky-500/30 to-navy-700/30' },
  { name: 'DynamoDB', abbr: 'DDB', color: 'from-blue-500/30 to-navy-700/30' },
  { name: 'CloudWatch', abbr: 'CW', color: 'from-pink-500/30 to-navy-700/30' },
  { name: 'API Gateway', abbr: 'API', color: 'from-purple-500/30 to-navy-700/30' },
  { name: 'Node.js', abbr: 'JS', color: 'from-green-500/30 to-navy-700/30' },
  { name: 'Java', abbr: 'JV', color: 'from-red-500/30 to-navy-700/30' },
  { name: 'REST APIs', abbr: '{ }', color: 'from-teal-500/30 to-navy-700/30' },
  { name: 'VoiceXML', abbr: 'VXM', color: 'from-indigo-500/30 to-navy-700/30' },
  { name: 'Genesys', abbr: 'GEN', color: 'from-rose-500/30 to-navy-700/30' },
  { name: 'Cisco CVP', abbr: 'CVP', color: 'from-cyan-500/30 to-navy-700/30' },
  { name: 'Avaya OD', abbr: 'AVA', color: 'from-amber-500/30 to-navy-700/30' },
]

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="section-pad relative bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Technologies We Master"
          subtitle="A modern toolkit spanning AWS cloud services and legacy contact center platforms."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {techs.map((t, i) => (
            <Reveal key={t.name} delay={(i % 4) * 0.06}>
              <div className="group flex items-center gap-4 rounded-2xl glass p-4 transition-all duration-300 hover:-translate-y-1 hover:border-navy-400/40 hover:shadow-glow">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${t.color} font-display text-sm font-extrabold text-white ring-1 ring-white/10 transition-transform group-hover:scale-110`}
                >
                  {t.abbr}
                </div>
                <span className="font-semibold text-slate-200 group-hover:text-white">
                  {t.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
