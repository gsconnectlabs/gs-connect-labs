import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal, { SectionHeading } from './Reveal'
import {
  PhoneIncoming,
  Megaphone,
  ShieldCheck,
  Languages,
  CreditCard,
  ListOrdered,
  Wallet,
  KeyRound,
  Volume2,
  ChevronDown,
  Repeat,
  CornerUpLeft,
  Home,
  Headset,
  Landmark,
  HeartPulse,
  Siren,
  Database,
  CalendarCheck,
  FlaskConical,
  MessageSquare,
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/* Shared flow building blocks                                         */
/* ------------------------------------------------------------------ */

const Arrow = () => (
  <div className="flex flex-col items-center py-1" aria-hidden>
    <motion.div
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="h-7 w-px origin-top bg-gradient-to-b from-navy-400/70 to-navy-500/40"
    />
    <ChevronDown className="-mt-1 h-4 w-4 text-navy-400" />
  </div>
)

function Node({ icon: Icon, step, title, children, accent = false, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  const hasDetail = Boolean(children)
  return (
    <Reveal>
      <div
        className={`w-full max-w-xl rounded-2xl border p-5 shadow-card transition-all duration-300 ${
          accent
            ? 'border-aws-orange/40 bg-gradient-to-br from-aws-orange/15 to-navy-700/30'
            : 'glass hover:border-navy-400/40'
        } ${hasDetail ? 'cursor-pointer hover:-translate-y-0.5' : ''}`}
        onClick={() => hasDetail && setOpen((v) => !v)}
      >
        <div className="flex items-center gap-4">
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
              accent ? 'bg-aws-orange/25' : 'bg-navy-500/25'
            } ring-1 ring-white/10`}
          >
            <Icon className={`h-5 w-5 ${accent ? 'text-aws-orange' : 'text-navy-200'}`} />
          </div>
          <div className="flex-1">
            {step && (
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-navy-300">
                {step}
              </span>
            )}
            <h4 className="font-display font-bold leading-snug text-white">{title}</h4>
          </div>
          {hasDetail && (
            <ChevronDown
              className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${
                open ? 'rotate-180' : ''
              }`}
            />
          )}
        </div>
        {hasDetail && (
          <motion.div
            initial={false}
            animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
            className="overflow-hidden"
          >
            <div className="mt-4 border-t border-white/10 pt-4 text-sm text-slate-300/90">
              {children}
            </div>
          </motion.div>
        )}
      </div>
    </Reveal>
  )
}

function Branch({ children }) {
  return <div className="grid w-full max-w-2xl gap-5 sm:grid-cols-2">{children}</div>
}

function BranchCard({ tag, title, desc, tone }) {
  const tones = {
    yes: 'border-emerald-400/40 bg-emerald-500/10',
    no: 'border-sky-400/40 bg-sky-500/10',
  }
  const tags = {
    yes: 'bg-emerald-400/20 text-emerald-200',
    no: 'bg-sky-400/20 text-sky-200',
  }
  return (
    <Reveal>
      <div className={`h-full rounded-2xl border p-5 ${tones[tone]}`}>
        <span className={`inline-block rounded-md px-2 py-0.5 text-xs font-bold ${tags[tone]}`}>
          {tag}
        </span>
        <h5 className="mt-3 font-semibold text-white">{title}</h5>
        <p className="mt-1 text-sm text-slate-300/80">{desc}</p>
      </div>
    </Reveal>
  )
}

/* ------------------------------------------------------------------ */
/* Project 1 — Phone Banking IVR                                       */
/* ------------------------------------------------------------------ */

const globalNav = [
  { icon: Repeat, key: '*', label: 'Repeat Menu' },
  { icon: CornerUpLeft, key: '7', label: 'Previous Menu' },
  { icon: Home, key: '8', label: 'Main Menu' },
  { icon: Headset, key: '0', label: 'Customer Care' },
]

const mainMenu = [
  'Account Balance',
  'Recent Transactions',
  'Card Payment',
  'Latest Offers',
  'Customer Care Officer',
]

function BankingFlow() {
  return (
    <>
      <div className="mx-auto flex flex-col items-center">
        <Node icon={PhoneIncoming} step="Entry" title="Incoming Call" defaultOpen>
          Caller dials the bank's phone banking number and lands on the Amazon Connect
          contact flow.
        </Node>
        <Arrow />

        <Node icon={Megaphone} step="Greeting" title="Welcome to ABC Bank Phone Banking Services">
          A branded welcome prompt greets the customer before identification begins.
        </Node>
        <Arrow />

        <Node icon={ShieldCheck} step="Security" title="ANI Validation">
          The caller's incoming number (ANI) is validated against bank records to
          personalize the experience.
        </Node>
        <Arrow />

        <Node icon={Languages} step="Decision" title="Registered Mobile Number?" />
        <Arrow />
        <Branch>
          <BranchCard
            tag="YES"
            tone="yes"
            title="Use Saved Preferred Language"
            desc="Recognized callers continue in their stored language preference instantly."
          />
          <BranchCard
            tag="NO"
            tone="no"
            title="Language Selection"
            desc="New or unrecognized callers choose a language before continuing."
          />
        </Branch>
        <Arrow />

        <Node icon={CreditCard} step="Authentication" title="Customer Identification">
          <p>
            "Please enter your 16-digit Debit Card number, Credit Card number, or Account
            number. If your card has been lost or stolen, press 9."
          </p>
          <p className="mt-2 text-xs text-slate-400">
            Pressing 9 routes immediately to the lost/stolen card workflow.
          </p>
        </Node>
        <Arrow />

        <Node icon={ListOrdered} step="Main Menu" title="Main Menu" accent>
          <ul className="grid gap-2 sm:grid-cols-2">
            {mainMenu.map((item, i) => (
              <li key={item} className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/10 text-xs font-bold text-white">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Node>
        <Arrow />

        <Node icon={Wallet} step="Option 1" title="Account Balance">
          <p className="mb-2 text-slate-400">
            If the customer owns both Savings and Credit Card accounts:
          </p>
          <ul className="space-y-1.5">
            <li className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/10 text-xs font-bold">
                1
              </span>
              Savings Account Balance
            </li>
            <li className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/10 text-xs font-bold">
                2
              </span>
              Credit Card Balance
            </li>
          </ul>
        </Node>
        <Arrow />

        <Node icon={KeyRound} step="Verification" title="OTP Validation">
          A one-time password is sent to the registered mobile number and validated before
          any sensitive information is disclosed.
        </Node>
        <Arrow />

        <Node icon={Volume2} step="Fulfilment" title="Balance Announcement">
          The validated balance is securely announced to the authenticated customer.
        </Node>
      </div>

      {/* Global navigation */}
      <Reveal className="mx-auto mt-14 max-w-3xl">
        <div className="rounded-2xl glass-strong p-6 shadow-card">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-aws-orange" />
            <h4 className="font-display font-bold text-white">Global Navigation</h4>
            <span className="text-xs text-slate-400">— available at every menu</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-4">
            {globalNav.map((g) => (
              <div
                key={g.label}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-500/30 font-bold text-navy-100">
                  {g.key}
                </span>
                <div className="flex items-center gap-1.5 text-sm font-medium text-slate-200">
                  <g.icon className="h-4 w-4 text-navy-300" />
                  {g.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Project 2 — Healthcare Automation & Outpatient IVR                  */
/* ------------------------------------------------------------------ */

function HealthcareFlow() {
  return (
    <div className="mx-auto flex flex-col items-center">
      <Node icon={PhoneIncoming} step="Entry" title="Incoming Patient Call" defaultOpen>
        Caller dials the hospital's central helpline and enters the Amazon Connect flow.
      </Node>
      <Arrow />

      <Node icon={Siren} step="Triage" title="Emergency Bypass" accent>
        Press <strong>1</strong> for Emergencies. Immediately bypasses all queues and
        routes directly to the 24/7 ER Nursing Desk.
      </Node>
      <Arrow />

      <Node icon={Database} step="Auth" title="Patient Identification">
        System prompts for Patient ID or Mobile Number. AWS Lambda queries the hospital's
        EHR/Database to fetch patient records.
      </Node>
      <Arrow />

      <Node icon={CalendarCheck} step="Option A" title="Appointment Booking">
        Amazon Lex Bot captures the preferred Department (e.g., Cardiology, Pediatrics) and
        available dates using conversational AI.
      </Node>
      <Arrow />

      <Node icon={FlaskConical} step="Option B" title="Lab Report Status">
        Automated voice integration pulls latest lab results from the database and announces
        status dynamically.
      </Node>
      <Arrow />

      <Node icon={MessageSquare} step="Notify" title="SMS Confirmation">
        Once booked, an Amazon SNS trigger sends an automated SMS confirmation with the
        appointment token and time.
      </Node>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Portfolio section with project switcher                             */
/* ------------------------------------------------------------------ */

const projects = [
  {
    id: 'banking',
    label: 'Phone Banking IVR',
    title: 'Phone Banking IVR Solution',
    category: 'Banking / Secure Self-Service',
    icon: Landmark,
    desc: 'A secure, multi-language self-service IVR for ABC Bank — built on Amazon Connect with ANI validation, OTP verification, and intelligent call routing.',
  },
  {
    id: 'healthcare',
    label: 'Healthcare Outpatient IVR',
    title: 'Healthcare Automation & Outpatient IVR',
    category: 'Healthcare / HIPAA Compliant',
    icon: HeartPulse,
    desc: 'A cloud-native, HIPAA-compliant healthcare IVR solution built on Amazon Connect to automate patient appointment scheduling, lab report status inquiries, and emergency call routing—integrated with hospital EHR databases using AWS Lambda.',
  },
]

export default function Portfolio() {
  const [active, setActive] = useState('banking')
  const activeProject = projects.find((p) => p.id === active)

  return (
    <section id="portfolio" className="section-pad relative overflow-hidden bg-navy-950">
      <div className="absolute left-1/2 top-40 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-navy-600/20 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Interactive IVR Architectures"
          subtitle="Explore the call flows behind our cloud contact center solutions. Switch between projects and tap any step to expand its detail."
        />

        {/* Project switcher */}
        <Reveal className="mx-auto mb-10 max-w-3xl">
          <div className="flex flex-col gap-3 rounded-2xl glass p-2 sm:flex-row">
            {projects.map((p) => {
              const isActive = active === p.id
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  className={`flex flex-1 items-center gap-3 rounded-xl px-5 py-4 text-left transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-navy-500 to-navy-700 shadow-glow'
                      : 'hover:bg-white/5'
                  }`}
                  aria-pressed={isActive}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ring-1 ring-white/10 ${
                      isActive ? 'bg-white/15' : 'bg-navy-500/20'
                    }`}
                  >
                    <p.icon className="h-5 w-5 text-white" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold text-white">{p.label}</span>
                    <span className="block truncate text-xs text-slate-300/70">
                      {p.category}
                    </span>
                  </span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Active project meta + flow */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto mb-12 max-w-3xl rounded-2xl glass-strong p-7 text-center shadow-card">
              <span className="inline-flex items-center gap-2 rounded-full border border-navy-400/40 bg-navy-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-navy-200">
                <activeProject.icon className="h-3.5 w-3.5" />
                {activeProject.category}
              </span>
              <h3 className="mt-4 font-display text-2xl font-extrabold text-white sm:text-3xl">
                {activeProject.title}
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300/80 sm:text-base">
                {activeProject.desc}
              </p>
            </div>

            {active === 'banking' ? <BankingFlow /> : <HealthcareFlow />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
