import { motion } from 'framer-motion'
import { beans } from '../data'
import { Reveal, RevealText } from './Reveal'

const ease = [0.16, 1, 0.3, 1]

function BeanCard({ b, i }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1, ease, delay: i * 0.1 }}
      className="group relative"
    >
      <div className="grid grid-cols-12 items-end gap-4">
        <div className="col-span-4 md:col-span-3">
          <div className="relative aspect-square overflow-hidden rounded-sm">
            <motion.img
              src={b.image}
              alt={`${b.name} coffee beans.`}
              loading="lazy"
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.8, ease }}
            />
          </div>
        </div>

        <div className="col-span-8 md:col-span-9 flex flex-col gap-2 pb-1">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-espresso/50">
            <span>{b.label} roast</span>
            <span className="h-px w-6 bg-espresso/20" />
            <span>{b.origin}</span>
          </div>
          <h3 className="font-display text-[8vw] md:text-[56px] font-light leading-[0.95] tracking-tightest text-espresso">
            {b.name}
          </h3>
          <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 font-italic italic text-[15px] text-espresso-500">
            {b.notes.map((n, idx) => (
              <span key={idx} className="flex items-center gap-3">
                {n}
                {idx < b.notes.length - 1 && (
                  <span className="text-terracotta">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 h-px w-full bg-espresso/10 transition-all duration-700 ease-out group-hover:bg-terracotta" />
    </motion.article>
  )
}

export function Beans() {
  return (
    <section id="beans" className="relative bg-cream-100 py-24 md:py-36 grain">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6">
          <Reveal className="col-span-12 md:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-espresso/50">
              04 · The Roasts
            </div>
          </Reveal>
          <div className="col-span-12 md:col-span-8">
            <h2 className="font-display font-light leading-[0.95] tracking-ultratight text-espresso text-[12vw] md:text-[80px] xl:text-[112px]">
              <RevealText text="Three roasts." stagger={0.06} />
              <br />
              <span className="font-italic italic">
                <RevealText text="One careful hand." stagger={0.06} delay={0.18} />
              </span>
            </h2>
            <Reveal delay={0.25}>
              <p className="mt-6 max-w-xl text-[15px] leading-[1.6] text-espresso-500">
                We roast above the shop every Tuesday and Friday — small batches,
                no shortcuts. Bag it for home, or drink it on the bench out front.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-12 md:mt-24 md:gap-16">
          {beans.map((b, i) => (
            <BeanCard key={b.name} b={b} i={i} />
          ))}
        </div>

        <Reveal delay={0.1} className="mt-16 flex flex-wrap items-center justify-between gap-6">
          <div className="font-italic italic text-[18px] text-espresso md:text-[20px]">
            Whole bean or fresh-ground, 12oz bags · $18
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full border hairline border-espresso/20 px-5 py-3 text-[12px] uppercase tracking-[0.2em] text-espresso transition-all duration-500 hover:bg-espresso hover:text-cream hover:border-espresso"
          >
            Shop the roastery
            <span className="transition-transform duration-500 ease-out group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
