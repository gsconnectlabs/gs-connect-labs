import { useState } from 'react'
import Reveal, { SectionHeading } from './Reveal'
import { Mail, Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react'

const services = [
  'Amazon Connect Consulting',
  'IVR Development',
  'Migration Services',
  'AWS Integrations',
  'Managed Support',
]

const EMPTY_FORM = { name: '', email: '', company: '', message: '' }
const CONTACT_EMAIL = 'guru@gsconnectlabs.com'

// Web3Forms access key — a PUBLIC key, safe to expose client-side.
// Get a free key at https://web3forms.com and set VITE_WEB3FORMS_ACCESS_KEY
// (locally in a .env file, and in the Vercel project's Environment Variables).
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState('idle') // 'idle' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('')

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    if (status !== 'idle') setStatus('idle') // clear feedback once editing resumes
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return

    // Honest guard: if no submission endpoint is configured, do NOT claim success.
    if (!ACCESS_KEY) {
      setStatus('error')
      setErrorMsg(
        `The form isn't connected to a backend yet. Please email us directly at ${CONTACT_EMAIL}.`
      )
      return
    }

    setIsSubmitting(true)
    setStatus('idle')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: 'New enquiry from GS Connect Labs website',
          from_name: 'GS Connect Labs Website',
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
          botcheck: '', // populated only by bots (honeypot)
        }),
      })
      const data = await res.json()

      if (res.ok && data.success) {
        setStatus('success')
        setForm(EMPTY_FORM)
        setTimeout(() => setStatus('idle'), 6000)
      } else {
        setStatus('error')
        setErrorMsg(
          data?.message ||
            `Something went wrong sending your message. Please email us at ${CONTACT_EMAIL}.`
        )
      }
    } catch (err) {
      console.error('Contact form submission error:', err)
      setStatus('error')
      setErrorMsg(
        `We couldn't reach the mail service. Please check your connection or email us at ${CONTACT_EMAIL}.`
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const isSuccess = status === 'success'
  const isError = status === 'error'

  return (
    <section id="contact" className="section-pad relative overflow-hidden bg-navy-gradient">
      <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-navy-500/25 blur-[120px]" />
      <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-aws-sky/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Better Customer Experiences"
          subtitle="Tell us about your contact center goals and we'll get back to you within one business day."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Left info */}
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl glass-strong p-8 shadow-card">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:border-navy-400/40"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-500/30 ring-1 ring-white/10">
                  <Mail className="h-6 w-6 text-navy-200" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">Email</p>
                  <p className="font-semibold text-white group-hover:text-navy-200">
                    {CONTACT_EMAIL}
                  </p>
                </div>
              </a>

              <h4 className="mt-8 font-display font-bold text-white">Services</h4>
              <ul className="mt-4 space-y-3">
                {services.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-slate-200">
                    <CheckCircle2 className="h-5 w-5 text-navy-300" />
                    {s}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <p className="text-sm text-slate-400">
                  Prefer a quick call? Mention your availability in the message and we'll
                  schedule a discovery session.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Form — submits via Web3Forms (no server required, Vercel-compatible) */}
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="rounded-3xl glass-strong p-8 shadow-card">
              {/* Honeypot: hidden from real users; bots that fill it are rejected */}
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" value={form.name} onChange={onChange} required />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="mt-5">
                <Field
                  label="Company"
                  name="company"
                  value={form.company}
                  onChange={onChange}
                />
              </div>
              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={onChange}
                  placeholder="Tell us about your project, timeline, and goals…"
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all focus:border-navy-400/60 focus:bg-white/10 focus:ring-2 focus:ring-navy-400/30"
                />
              </div>

              <button
                type="submit"
                className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    Sending… <Loader2 className="h-4 w-4 animate-spin" />
                  </>
                ) : isSuccess ? (
                  <>
                    Message Sent <CheckCircle2 className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    Send Message <Send className="h-4 w-4" />
                  </>
                )}
              </button>

              {isSuccess && (
                <p className="mt-3 flex items-center justify-center gap-2 text-center text-sm text-emerald-300">
                  <CheckCircle2 className="h-4 w-4" />
                  Thanks! Your message was sent — we'll be in touch shortly.
                </p>
              )}
              {isError && (
                <p className="mt-3 flex items-start justify-center gap-2 text-center text-sm text-red-300">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{errorMsg}</span>
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-300">
        {label}
        {required && <span className="text-aws-orange"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all focus:border-navy-400/60 focus:bg-white/10 focus:ring-2 focus:ring-navy-400/30"
      />
    </div>
  )
}
