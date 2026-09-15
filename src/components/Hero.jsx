import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Phone, Bot, Cloud, Cpu } from 'lucide-react'

const floatChips = [
  { icon: Phone, label: 'IVR', className: 'top-6 -left-4', delay: 0 },
  { icon: Bot, label: 'Lex Bots', className: 'top-1/3 -right-6', delay: 0.6 },
  { icon: Cloud, label: 'Amazon Connect', className: 'bottom-10 -left-8', delay: 1.2 },
  { icon: Cpu, label: 'Lambda', className: 'bottom-1/3 -right-4', delay: 0.9 },
]

const stats = [
  { value: '16+', label: 'Years Experience' },
  { value: '50+', label: 'IVR Solutions' },
  { value: '100%', label: 'Cloud Native' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy-gradient pt-28"
    >
      {/* grid + glow */}
      <div className="absolute inset-0 bg-hero-grid bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-navy-500/30 blur-[120px]" />
      <div className="absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-aws-sky/20 blur-[140px]" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-navy-400/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-20 lg:grid-cols-2 lg:px-10">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-navy-400/40 bg-navy-500/10 px-4 py-2 text-xs font-medium text-navy-200"
          >
            <Sparkles className="h-4 w-4 text-aws-orange" />
            Cloud Contact Center Consulting
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl"
          >
            <span className="gradient-text">Transform Customer</span>
            <br />
            <span className="gradient-text">Experience with </span>
            <span className="gradient-text-blue">Amazon Connect</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-300/85 sm:text-lg"
          >
            GS Connect Labs delivers scalable cloud contact center solutions using
            Amazon Connect, Lex, Lambda, DynamoDB, and AWS services. We help businesses
            modernize IVR, self-service, and customer engagement experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a href="#contact" className="btn-primary">
              Get In Touch <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="btn-ghost">
              View Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-6"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-extrabold text-white">
                  {s.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto hidden h-[420px] w-[420px] lg:block"
        >
          {/* pulse rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute h-40 w-40 rounded-full border border-navy-400/40 animate-pulse-ring" />
            <div
              className="absolute h-40 w-40 rounded-full border border-navy-400/40 animate-pulse-ring"
              style={{ animationDelay: '1.5s' }}
            />
          </div>

          {/* center hub */}
          <div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-3xl glass-strong shadow-glow">
            <Cloud className="h-12 w-12 text-navy-200" />
            <div className="mt-3 text-center text-sm font-bold leading-tight text-white">
              Amazon
              <br />
              Connect
            </div>
          </div>

          {floatChips.map((chip) => (
            <motion.div
              key={chip.label}
              className={`absolute ${chip.className} flex items-center gap-2 rounded-2xl glass px-4 py-3 shadow-card animate-float`}
              style={{ animationDelay: `${chip.delay}s` }}
            >
              <chip.icon className="h-5 w-5 text-navy-300" />
              <span className="text-sm font-semibold text-white">{chip.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
