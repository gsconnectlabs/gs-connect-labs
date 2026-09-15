import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export default function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-3xl text-center">
      {eyebrow && (
        <span className="mb-4 inline-block rounded-full border border-navy-400/40 bg-navy-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-navy-200">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl gradient-text">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300/80 sm:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
