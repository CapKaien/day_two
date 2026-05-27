import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#menu', label: 'Menu' },
  { href: '#story', label: 'Story' },
  { href: '#beans', label: 'Beans' },
  { href: '#visit', label: 'Visit' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Color tokens swap based on whether we're over the dark hero or the cream sections below
  const onDark = !scrolled
  const wordmark = onDark ? 'text-cream' : 'text-espresso'
  const wordmarkSub = onDark ? 'text-cream/60' : 'text-espresso-500'
  const linkColor = onDark
    ? 'text-cream/80 hover:text-cream'
    : 'text-espresso/80 hover:text-espresso'
  const ctaClass = onDark
    ? 'bg-terracotta text-cream hover:bg-cream hover:text-espresso'
    : 'bg-espresso text-cream-50 hover:bg-terracotta'
  const burgerClass = onDark
    ? 'border-cream/25 text-cream'
    : 'border-espresso/20 text-espresso'

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? 'bg-cream/85 backdrop-blur-md border-b hairline'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:h-20 md:px-10">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span
            className={`font-display text-2xl md:text-[28px] tracking-tightest leading-none transition-colors duration-500 ${wordmark}`}
          >
            ember
          </span>
          <span
            className={`font-italic italic text-[13px] leading-none transition-colors duration-500 ${wordmarkSub}`}
          >
            &nbsp;coffee
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`link-underline text-[13px] uppercase tracking-[0.18em] transition-colors duration-500 ${linkColor}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#menu"
            className={`hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[12px] uppercase tracking-[0.18em] transition-all duration-500 ease-out hover:gap-3 ${ctaClass}`}
          >
            Order online
            <span aria-hidden className="inline-block translate-y-[-0.5px]">→</span>
          </a>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className={`md:hidden flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-500 ${burgerClass}`}
          >
            <span className="sr-only">Menu</span>
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
              <path d="M0 1H18M0 11H18" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-espresso text-cream md:hidden"
          >
            <div className="flex h-16 items-center justify-between px-6">
              <span className="font-display text-2xl tracking-tightest">ember</span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="h-10 w-10 rounded-full border border-cream/20 text-cream"
              >
                ✕
              </button>
            </div>
            <nav className="flex flex-col gap-4 px-6 pt-10">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-5xl tracking-tightest text-cream"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
