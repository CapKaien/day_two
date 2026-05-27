import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { interiorImage } from '../data'
import { Reveal, RevealText } from './Reveal'

const hours = [
  ['Monday — Friday', '7am — 7pm'],
  ['Saturday', '8am — 8pm'],
  ['Sunday', '8am — 5pm'],
]

export function Visit() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <section id="visit" ref={ref} className="relative bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6">
          <Reveal className="col-span-12 md:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-espresso/50">
              05 · Visit
            </div>
          </Reveal>
          <div className="col-span-12 md:col-span-8">
            <h2 className="font-display font-light leading-[0.95] tracking-ultratight text-espresso text-[12vw] md:text-[80px] xl:text-[112px]">
              <RevealText text="Come" stagger={0.06} />
              <span className="font-italic italic">
                {' '}
                <RevealText text="sit a while." stagger={0.06} delay={0.18} />
              </span>
            </h2>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-6 md:mt-24">
          {/* Image */}
          <div className="col-span-12 lg:col-span-7">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm md:aspect-[16/11]">
              <motion.img
                style={{ y }}
                src={interiorImage}
                alt="Window seats at the Ember coffee shop, sunlight pouring in."
                loading="lazy"
                className="absolute inset-0 h-[120%] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 md:p-8">
                <div className="rounded-full bg-cream/90 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-espresso shadow-sm ring-1 ring-espresso/5">
                  ☕ Now pouring · Honey Latte
                </div>
                <div className="hidden md:block text-right font-mono text-[10px] uppercase tracking-[0.22em] text-cream/90">
                  <span className="rounded-full bg-espresso/30 px-3 py-1.5 ring-1 ring-cream/15 backdrop-blur">
                    40.6892° N · 74.0445° W
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="col-span-12 lg:col-span-5 lg:pl-6">
            <Reveal delay={0.05}>
              <div className="border-t hairline pt-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-espresso/50">
                  Find us
                </div>
                <div className="mt-2 font-display text-[36px] leading-[1.05] tracking-tightest text-espresso md:text-[44px]">
                  214 Greene Street
                  <br />
                  <span className="font-italic italic">Brooklyn, NY 11238</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 border-t hairline pt-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-espresso/50">
                  Hours
                </div>
                <ul className="mt-3 divide-y divide-espresso/10">
                  {hours.map(([d, t]) => (
                    <li
                      key={d}
                      className="flex items-baseline justify-between py-3 font-italic italic text-[18px] text-espresso"
                    >
                      <span>{d}</span>
                      <span className="font-sans not-italic font-mono text-[13px] text-espresso/70 nums">
                        {t}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 grid grid-cols-2 gap-4 border-t hairline pt-6">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-espresso/50">
                    Email
                  </div>
                  <a
                    href="mailto:hello@embercoffee.co"
                    className="mt-2 inline-block font-italic italic text-[18px] text-espresso link-underline"
                  >
                    hello@embercoffee.co
                  </a>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-espresso/50">
                    Phone
                  </div>
                  <a
                    href="tel:+17185551234"
                    className="mt-2 inline-block font-italic italic text-[18px] text-espresso link-underline"
                  >
                    (718) 555 — 1234
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 rounded-full bg-espresso px-6 py-3 text-[12px] uppercase tracking-[0.2em] text-cream-50 transition-all duration-500 hover:bg-terracotta"
                >
                  Get directions
                  <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 rounded-full border hairline border-espresso/20 px-6 py-3 text-[12px] uppercase tracking-[0.2em] text-espresso transition-colors duration-500 hover:border-espresso"
                >
                  Reserve a table
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
