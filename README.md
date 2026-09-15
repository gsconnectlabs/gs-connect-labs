# GS Connect Labs — Website

A modern, responsive, AWS-inspired marketing site for **GS Connect Labs**, a freelance
consulting company specializing in Amazon Connect and contact center solutions.

Built with **React 18**, **Vite**, **Tailwind CSS**, **Framer Motion**, and
**lucide-react** icons.

## Features

- Dark-blue & white enterprise theme with subtle gradients and glass cards
- Fully responsive (desktop / tablet / mobile)
- Smooth scroll-reveal animations and hover effects
- Sections: Hero, About, Services, Portfolio (interactive IVR flowchart),
  Technologies, Why Choose Us, Experience, Testimonials, Contact form, Footer
- Interactive Phone Banking IVR flowchart — tap any node to expand details

## Getting Started

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build to /dist
npm run preview  # preview the production build
```

## Project Structure

```
src/
  App.jsx               # page composition
  index.css             # Tailwind layers + custom utilities
  components/
    Navbar.jsx          # sticky nav with mobile menu
    Hero.jsx            # animated hero with floating service chips
    About.jsx           # company intro + expertise tags
    Services.jsx        # 8 service cards
    Portfolio.jsx       # interactive IVR flowchart
    Technologies.jsx    # tech badges
    WhyChoose.jsx       # value props
    Experience.jsx      # 16+ years, domains, platforms
    Testimonials.jsx    # client reviews with star ratings
    Contact.jsx         # contact info + form (demo handler)
    Footer.jsx          # links + social
    Reveal.jsx          # shared animation wrapper + section heading
```

## Contact form

The contact form submits via [Web3Forms](https://web3forms.com) — no server required,
works on any static host (including Vercel).

1. Get a free access key at https://web3forms.com (public key, safe to expose).
2. Copy `.env.example` to `.env` and set `VITE_WEB3FORMS_ACCESS_KEY`.
3. For production, add `VITE_WEB3FORMS_ACCESS_KEY` in the Vercel project's
   **Settings → Environment Variables**, then redeploy.

If the key is missing, the form shows an error asking visitors to email directly — it
never falsely reports success. To use a different backend instead (e.g. a Vercel
Serverless Function + AWS SES / Resend), replace the `fetch` in
`src/components/Contact.jsx`.

## Notes

- Colors and animations are configured in `tailwind.config.js`.
