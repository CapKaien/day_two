import { useState } from 'react'
import { motion } from 'framer-motion'
import { Reveal } from './Reveal'

const cols = [
  {
    label: 'The Shop',
    items: ['Menu', 'Roastery', 'Pastries', 'Subscriptions'],
  },
  {
    label: 'About',
    items: ['Story', 'Sourcing', 'Roasting', 'Press'],
  },
  {
    label: 'Visit',
    items: ['Brooklyn', 'Manhattan (soon)', 'Wholesale', 'Events'],
  },
]

const social = [
  { label: 'Instagram', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'Substack', href: '#' },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <footer className="relative bg-espresso text-cream pt-24 md:pt-32 grain overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Newsletter */}
        <div className="grid grid-cols-12 gap-6 border-b border-cream/10 pb-16 md:pb-24">
          <Reveal className="col-span-12 md:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-cream/50">
              Stay close
            </div>
            <h2 className="mt-3 font-display font-light leading-[0.95] tracking-ultratight text-cream text-[12vw] md:text-[80px] xl:text-[104px]">
              The slow <span className="font-italic italic">letter.</span>
            </h2>
          </Reveal>

          <div className="col-span-12 md:col-span-5 flex items-end">
            <Reveal delay={0.1} className="w-full">
              <p className="text-[15px] leading-[1.6] text-cream/70 max-w-md">
                New roasts, seasonal drinks, and the occasional poem about
                rainy mornings — sent once a month, never more.
              </p>
              <form onSubmit={handleSubmit} className="mt-6">
                <div className="flex items-center border-b border-cream/30 pb-3 transition-colors focus-within:border-cream">
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent text-[18px] text-cream placeholder:text-cream/40 outline-none font-italic italic"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="ml-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-cream text-espresso transition-all duration-500 hover:bg-terracotta hover:text-cream"
                  >
                    →
                  </button>
                </div>
                <motion.div
                  initial={false}
                  animate={{ opacity: submitted ? 1 : 0, height: submitted ? 'auto' : 0 }}
                  className="overflow-hidden"
                >
                  <p className="mt-3 font-italic italic text-[14px] text-terracotta-300">
                    Thanks — see you in the inbox.
                  </p>
                </motion.div>
              </form>
            </Reveal>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-12 gap-8 py-16">
          <Reveal className="col-span-12 md:col-span-5">
            <div className="font-display text-[48px] leading-none tracking-tightest text-cream md:text-[72px]">
              ember<span className="text-terracotta">.</span>
            </div>
            <p className="mt-5 max-w-sm font-italic italic text-[18px] leading-snug text-cream/70">
              Slow coffee, brewed with care — every morning, on Greene Street.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="link-underline text-[12px] uppercase tracking-[0.2em] text-cream/70"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </Reveal>

          {cols.map((c, i) => (
            <Reveal
              key={c.label}
              delay={0.05 * (i + 1)}
              className="col-span-6 md:col-span-2 md:col-start-auto"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream/50">
                {c.label}
              </div>
              <ul className="mt-4 space-y-2.5">
                {c.items.map((it) => (
                  <li key={it}>
                    <a
                      href="#"
                      className="link-underline font-italic italic text-[17px] text-cream/85"
                    >
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        {/* Big wordmark */}
        <div className="border-t border-cream/10 pt-8">
          <Reveal>
            <div className="select-none font-display font-light leading-none tracking-ultratight text-cream/95 text-[28vw] md:text-[24vw] xl:text-[360px]">
              <span className="block text-center">
                em<span className="font-italic italic">b</span>er
              </span>
            </div>
          </Reveal>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-cream/10 py-6 text-[11px] uppercase tracking-[0.22em] text-cream/50 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Ember Coffee Co. · All rights reserved</div>
          <div className="flex gap-6">
            <a href="#" className="link-underline">Privacy</a>
            <a href="#" className="link-underline">Accessibility</a>
            <a href="#top" className="link-underline">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
