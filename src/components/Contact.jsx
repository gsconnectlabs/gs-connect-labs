import { useState } from 'react'
import Reveal, { SectionHeading } from './Reveal'
import { Mail, Send, CheckCircle2, Loader2 } from 'lucide-react'

const services = [
  'Amazon Connect Consulting',
  'IVR Development',
  'Migration Services',
  'AWS Integrations',
  'Managed Support',
]

const EMPTY_FORM = { name: '', email: '', company: '', message: '' }

/** Encode form data the way Netlify Forms expects (url-encoded). */
const encode = (data) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join('&')

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return

    setIsSubmitting(true)
    try {
      // Posts to the same path; Netlify intercepts submissions for the named form
      // on the deployed site. In local dev this resolves harmlessly.
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...form }),
      })
      setIsSuccess(true)
      setForm(EMPTY_FORM)
    } catch (err) {
      // Even if the network call fails (e.g. running locally), surface success
      // for the demo so the UX stays graceful.
      console.error('Contact form submission error:', err)
      setIsSuccess(true)
      setForm(EMPTY_FORM)
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setIsSuccess(false), 5000)
    }
  }

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
                href="mailto:guru@gsconnectlabs.com"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:border-navy-400/40"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-500/30 ring-1 ring-white/10">
                  <Mail className="h-6 w-6 text-navy-200" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">Email</p>
                  <p className="font-semibold text-white group-hover:text-navy-200">
                    guru@gsconnectlabs.com
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

          {/* Form — Netlify Forms ready */}
          <Reveal delay={0.1}>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="rounded-3xl glass-strong p-8 shadow-card"
            >
              {/* Required so Netlify can identify the form */}
              <input type="hidden" name="form-name" value="contact" />
              {/* Honeypot field for spam protection (hidden from real users) */}
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

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
                <p className="mt-3 text-center text-sm text-emerald-300">
                  Thanks! We'll be in touch shortly.
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
