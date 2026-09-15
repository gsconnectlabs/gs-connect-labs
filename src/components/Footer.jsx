import { Headphones, Linkedin, Github } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-navy-950">
      <div className="glow-divider h-px w-full" />
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-navy-400 to-navy-700 shadow-glow">
                <Headphones className="h-5 w-5 text-white" />
              </span>
              <span className="font-display text-lg font-extrabold tracking-tight">
                GS <span className="text-navy-300">Connect Labs</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Transforming Customer Experience with Amazon Connect. Scalable cloud
              contact center and IVR solutions, delivered with freelance flexibility.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-navy-400/50 hover:text-white hover:-translate-y-0.5"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-navy-400/50 hover:text-white hover:-translate-y-0.5"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-400 transition-colors hover:text-navy-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white">Get In Touch</h4>
            <p className="mt-4 text-sm text-slate-400">
              Ready to modernize your contact center?
            </p>
            <a
              href="mailto:guru@gsconnectlabs.com"
              className="mt-2 inline-block text-sm font-semibold text-navy-200 hover:text-white"
            >
              guru@gsconnectlabs.com
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-slate-500">
            Copyright © 2026 GS Connect Labs. All Rights Reserved.
          </p>
          <p className="text-xs text-slate-600">
            Built with React, Tailwind CSS &amp; AWS-inspired design.
          </p>
        </div>
      </div>
    </footer>
  )
}
