import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { products } from '../data'
import { RevealText } from './Reveal'

const ease = [0.16, 1, 0.3, 1]

// Three featured drinks for the hero stage
const featured = [products[0], products[1], products[2]]

function BeanScatter() {
  // Deterministic positions so the scatter feels designed, not random
  const beans = [
    { x: 0, y: 0, r: 12 },
    { x: 38, y: 18, r: -22 },
    { x: 70, y: 6, r: 8 },
    { x: 14, y: 42, r: 38 },
    { x: 54, y: 50, r: -14 },
    { x: 88, y: 36, r: 24 },
    { x: 26, y: 78, r: -6 },
    { x: 62, y: 82, r: 16 },
    { x: 92, y: 70, r: -28 },
  ]
  return (
    <div className="absolute right-6 top-32 hidden h-44 w-44 md:right-10 md:block md:h-56 md:w-56 z-10 pointer-events-none">
      {beans.map((b, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3 + i * 0.04, duration: 0.6, ease }}
          style={{
            left: `${b.x}%`,
            top: `${b.y}%`,
            transform: `rotate(${b.r}deg)`,
          }}
          className="absolute inline-block h-3 w-2 rounded-full bg-terracotta-400/90"
        >
          <span className="absolute inset-x-[45%] inset-y-1 w-px bg-espresso/60" />
        </motion.span>
      ))}
    </div>
  )
}

function SocialRail() {
  const items = [
    {
      name: 'Instagram',
      d: 'M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .3-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.4a6.4 6.4 0 100 12.8 6.4 6.4 0 000-12.8zm0 10.6a4.2 4.2 0 110-8.4 4.2 4.2 0 010 8.4zm6.6-10.9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z',
    },
    {
      name: 'Twitter',
      d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z',
    },
    {
      name: 'Facebook',
      d: 'M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.25 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z',
    },
  ]
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.8, duration: 0.9, ease }}
      className="absolute right-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 lg:right-10 lg:flex"
    >
      {items.map((s) => (
        <a
          key={s.name}
          href="#"
          aria-label={s.name}
          className="group flex h-10 w-10 items-center justify-center rounded-full bg-cream/5 ring-1 ring-cream/15 transition-all duration-500 hover:bg-terracotta hover:ring-terracotta"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-cream/80 transition-colors group-hover:fill-cream">
            <path d={s.d} />
          </svg>
        </a>
      ))}
    </motion.div>
  )
}

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-25%'])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0])
  const cupYs = [
    useTransform(scrollYProgress, [0, 1], ['0%', '-10%']),
    useTransform(scrollYProgress, [0, 1], ['0%', '-18%']),
    useTransform(scrollYProgress, [0, 1], ['0%', '-8%']),
  ]
  const beanY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section
      id="top"
      ref={ref}
      data-hero="dark"
      className="relative w-full overflow-hidden bg-espresso text-cream pt-28 pb-14 md:min-h-[100svh] md:pt-32 md:pb-40 grain"
    >
      {/* Decorative bean scatter */}
      <motion.div style={{ y: beanY }}>
        <BeanScatter />
      </motion.div>

      {/* Right social rail */}
      <SocialRail />

      {/* Top meta bar */}
      <div className="relative z-20 mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9, ease }}
          className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-cream/60"
        >
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-terracotta animate-subtle-pulse" />
            Open today · 7am – 7pm
          </span>
          <span className="hidden sm:inline">Est. 2019 · Brooklyn, NY</span>
        </motion.div>
      </div>

      {/* Left badge + vertical line */}
      <div className="pointer-events-none absolute left-6 top-44 z-20 hidden md:left-10 md:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.9, ease }}
          className="pointer-events-auto flex flex-col items-center gap-3"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta-400/15 ring-1 ring-terracotta-400/40">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-terracotta-300">
              <path d="M12 3c4.5 1.5 7 5 7 9 0 4.5-3.5 8-7 9-3.5-1-7-4.5-7-9 0-4 2.5-7.5 7-9zm0 2.4c-3 1.3-4.8 4-4.8 6.8s1.8 5.5 4.8 6.6c3-1.1 4.8-3.8 4.8-6.6S15 6.7 12 5.4zm0 1.6v10c-2-1.2-3-3-3-5s1-3.8 3-5z" />
            </svg>
          </span>
          <p className="max-w-[140px] text-center font-mono text-[10px] uppercase leading-[1.55] tracking-[0.22em] text-cream/60">
            Discover this <br /> season's pour
          </p>
          <motion.span
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 1.4, duration: 1.2, ease }}
            className="block h-24 w-px origin-top bg-cream/15"
          />
          <span className="block h-1.5 w-1.5 -mt-1 rounded-full bg-terracotta" />
        </motion.div>
      </div>

      {/* Stage */}
      <div className="relative mx-auto mt-12 max-w-[1400px] px-6 md:mt-16 md:px-10">
        {/* Headline */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="relative z-20 text-center"
        >
          {/* Script overlay */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.1, ease }}
            className="relative z-30 font-italic italic text-terracotta-400 leading-none"
            style={{ fontSize: 'clamp(48px, 8.5vw, 132px)' }}
          >
            <span className="inline-block -mb-[0.55em] -translate-y-2">
              brewed slowly,
            </span>
          </motion.div>

          {/* Display headline */}
          <h1
            className="relative font-display font-light leading-[0.88] tracking-ultratight text-cream"
            style={{ fontSize: 'clamp(72px, 17vw, 248px)' }}
          >
            <span className="block">
              <RevealText text="DAILY" stagger={0.08} delay={0.3} immediate />
            </span>
            <span className="block text-terracotta-400">
              <RevealText text="RITUAL." stagger={0.08} delay={0.55} immediate />
            </span>
          </h1>
        </motion.div>

        {/* Three cups stage — centered, layered behind the bottom of headline */}
        <div className="relative mt-12 sm:mt-10 md:mt-2 lg:-mt-6">
          <div className="flex items-end justify-center gap-3 sm:gap-4 md:gap-6">
            {featured.map((p, i) => {
              // Even baseline on mobile; staggered rise only kicks in at md+
              const positions = ['md:mb-16', 'md:mb-0', 'md:mb-20']
              const sizes = [
                'w-[30%] sm:w-[27%] md:w-[260px] lg:w-[300px]',
                'w-[32%] sm:w-[29%] md:w-[300px] lg:w-[340px] z-10',
                'w-[30%] sm:w-[27%] md:w-[260px] lg:w-[300px]',
              ]
              return (
                <motion.div
                  key={p.n}
                  style={{ y: cupYs[i] }}
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.2,
                    ease,
                    delay: 0.85 + i * 0.12,
                  }}
                  className={`relative ${positions[i]} ${sizes[i]} aspect-[4/5] md:aspect-[3/4]`}
                >
                  <div className="absolute inset-0 overflow-hidden rounded-2xl md:rounded-[40px] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.55)] md:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] ring-1 ring-cream/10">
                    <motion.img
                      src={p.image}
                      alt={p.name}
                      loading="eager"
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 1.2, ease }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/0 to-espresso/0" />

                    {/* Top index */}
                    <div className="absolute left-2 top-2 md:left-4 md:top-4">
                      <span className="rounded-full bg-cream/10 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.18em] text-cream/80 ring-1 ring-cream/15 backdrop-blur-sm md:px-2.5 md:py-1 md:text-[9px] md:tracking-[0.22em]">
                        № {p.n}
                      </span>
                    </div>

                    {/* Bottom label */}
                    <div className="absolute inset-x-0 bottom-0 px-2.5 pb-2.5 md:px-5 md:pb-5">
                      <div className="hidden md:block font-mono text-[9px] uppercase tracking-[0.22em] text-cream/60">
                        {p.origin.split('·')[0]?.trim()}
                      </div>
                      <div className="mt-0.5 flex items-baseline justify-between gap-1">
                        <span className="font-display text-[13px] sm:text-base md:text-2xl leading-tight tracking-tightest text-cream">
                          {p.name}
                        </span>
                        <span className="hidden sm:inline font-mono text-[10px] nums text-cream/70">
                          ${p.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Floating cards — inline on mobile (below cups), absolute on md+ */}
        <div className="relative mt-8 z-30 sm:mt-10 md:pointer-events-none md:absolute md:inset-x-10 md:bottom-2 md:mt-0 lg:bottom-6">
          <div className="flex items-end justify-between gap-3 sm:gap-4">
            {/* Top rated card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 1, ease }}
              className="pointer-events-auto w-[58%] max-w-[360px] rounded-2xl bg-terracotta-400 p-4 text-espresso shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)] sm:w-[48%] sm:p-5 md:rounded-[28px] md:p-7"
            >
              <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-espresso/70 md:text-[10px] md:tracking-[0.22em]">
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-espresso/15 sm:h-6 sm:w-6">
                    <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 fill-espresso sm:h-3 sm:w-3">
                      <path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.8 6.6 19.5l1.2-6L3.3 9.3l6.1-.7L12 3z" />
                    </svg>
                  </span>
                  Top rated
                </span>
                <span className="hidden sm:inline">Spring '26</span>
              </div>
              <div className="mt-3 flex items-end justify-between gap-2 sm:mt-4">
                <div className="font-display text-[26px] leading-[0.92] tracking-tightest sm:text-[32px] md:text-[44px]">
                  Honey
                  <br />
                  <span className="font-italic italic">latte.</span>
                </div>
                <div className="text-right">
                  <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-espresso/70 md:text-[10px] md:tracking-[0.22em]">
                    Rating
                  </div>
                  <div className="mt-1 flex items-center gap-1 font-display text-lg nums sm:text-xl md:text-2xl">
                    4.9
                    <svg viewBox="0 0 24 24" className="h-3 w-3 fill-espresso sm:h-3.5 sm:w-3.5 md:h-4 md:w-4">
                      <path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.8 6.6 19.5l1.2-6L3.3 9.3l6.1-.7L12 3z" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Today's pour card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.75, duration: 1, ease }}
              className="pointer-events-auto hidden w-[48%] max-w-[380px] items-center gap-4 rounded-2xl bg-cream p-3.5 text-espresso shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] sm:flex md:rounded-[28px] md:p-5"
            >
              <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl md:h-20 md:w-20 md:rounded-2xl">
                <img
                  src={products[1].image}
                  alt={products[1].name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-espresso/50">
                  Today's pour
                </div>
                <div className="mt-1 font-display text-xl leading-tight tracking-tightest text-espresso md:text-2xl">
                  Ethiopia Yirgacheffe
                </div>
                <div className="mt-1 font-italic italic text-[13px] text-espresso/60">
                  Jasmine · bergamot · honey
                </div>
              </div>
              <a
                href="#menu"
                className="group flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-espresso text-cream transition-all duration-500 hover:bg-terracotta"
                aria-label="See the menu"
              >
                <span className="transition-transform duration-500 group-hover:translate-x-0.5">→</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Right tagline + details (echoes the reference's right column) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.9, ease }}
          className="pointer-events-none absolute right-6 top-44 z-10 hidden max-w-[180px] md:right-24 md:block lg:right-28"
        >
          <div className="pointer-events-auto text-right">
            <p className="text-[12px] leading-[1.55] text-cream/70">
              A neighborhood roastery — three signature pours, one careful hand.
            </p>
            <a
              href="#story"
              className="mt-3 inline-flex items-center gap-2 link-underline font-mono text-[10px] uppercase tracking-[0.22em] text-terracotta-300"
            >
              More details →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
