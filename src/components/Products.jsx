import { motion } from 'framer-motion'
import { products } from '../data'
import { Reveal, RevealText } from './Reveal'

const ease = [0.16, 1, 0.3, 1]

function Card({ p, i }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1, ease, delay: (i % 3) * 0.08 }}
      className="group relative flex flex-col"
    >
      <div className="relative overflow-hidden rounded-sm bg-cream-300 aspect-[4/5]">
        <motion.img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover"
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.4, ease }}
          whileHover={{ scale: 1.05 }}
        />
        <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.22em] text-cream-50">
          <span className="rounded-full bg-espresso/40 px-2.5 py-1 ring-1 ring-cream/15 backdrop-blur-sm">
            № {p.n}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 rounded-full bg-cream px-3 py-1.5 font-mono text-[12px] nums text-espresso shadow-sm">
          ${p.price}
        </div>
      </div>

      <div className="flex flex-col gap-1 pt-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-[26px] font-light tracking-tightest text-espresso">
            {p.name}
          </h3>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-espresso/40">
            {p.origin}
          </span>
        </div>
        <p className="font-italic italic text-[15px] text-espresso-500 leading-snug">
          {p.notes}
        </p>
      </div>

      <div className="mt-4 h-px w-full bg-espresso/10 transition-colors duration-500 group-hover:bg-terracotta" />
    </motion.article>
  )
}

export function Products() {
  return (
    <section id="menu" className="relative bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-6">
          <Reveal className="col-span-12 md:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-espresso/50">
              02 · The Menu
            </div>
          </Reveal>

          <div className="col-span-12 md:col-span-8">
            <h2 className="font-display font-light leading-[0.95] tracking-ultratight text-espresso text-[12vw] md:text-[80px] xl:text-[112px]">
              <span className="block">
                <RevealText text="Drinks worth" stagger={0.06} />
              </span>
              <span className="block pl-[10vw] md:pl-[80px] font-italic italic">
                <RevealText text="slowing down for." stagger={0.06} delay={0.15} />
              </span>
            </h2>
          </div>
        </div>

        <Reveal delay={0.2} className="mt-10 md:mt-14">
          <div className="flex flex-wrap items-end justify-between gap-6 border-t hairline pt-6">
            <p className="max-w-md text-[15px] leading-[1.55] text-espresso-500">
              Each drink starts with single-origin beans roasted at our shop on
              Greene Street. We change the rotation every season — these are
              what's pouring now.
            </p>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-espresso/50">
              Spring rotation · {new Date().getFullYear()}
            </div>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-16 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Card key={p.n} p={p} i={i} />
          ))}
        </div>

        {/* Footer line */}
        <Reveal delay={0.1} className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t hairline pt-6 md:mt-24">
          <p className="font-italic italic text-[18px] text-espresso">
            Pastries, teas & more in shop — fresh from our kitchen each morning.
          </p>
          <a
            href="#visit"
            className="group inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-espresso link-underline"
          >
            See full menu
            <span className="transition-transform duration-500 ease-out group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
