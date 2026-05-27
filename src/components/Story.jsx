import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { storyImage, baristaImage } from '../data'
import { Reveal, RevealText } from './Reveal'

export function Story() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const smallImgY = useTransform(scrollYProgress, [0, 1], ['12%', '-12%'])

  return (
    <section
      id="story"
      ref={ref}
      className="relative bg-espresso text-cream py-24 md:py-36 overflow-hidden grain"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-y-12 gap-x-6">
          {/* Label */}
          <Reveal className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-cream/60">
              03 · Our Story
            </div>
            <div className="mt-3 h-px w-12 bg-cream/30" />
          </Reveal>

          {/* Pull quote */}
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display font-light leading-[1.02] tracking-ultratight text-cream text-[10vw] md:text-[72px] xl:text-[96px]">
              <RevealText text="We don't rush" stagger={0.06} />
              <br />
              <span className="font-italic italic">
                <RevealText text="good things —" stagger={0.06} delay={0.18} />
              </span>
              <br />
              <RevealText text="so neither" stagger={0.06} delay={0.32} />
              <span className="font-italic italic">
                {' '}
                <RevealText text="do you." stagger={0.06} delay={0.5} />
              </span>
            </h2>
          </div>

          {/* Image collage */}
          <div className="col-span-12 mt-6 md:col-span-7 md:mt-12">
            <div className="relative aspect-[5/6] overflow-hidden rounded-sm md:aspect-[4/5]">
              <motion.img
                style={{ y: imgY }}
                src={storyImage}
                alt="Warm interior of the Ember coffee shop with hanging lights and wooden tables."
                loading="lazy"
                className="absolute inset-0 h-[120%] w-full object-cover"
              />
              <div className="absolute left-4 top-4 rounded-full bg-cream/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-cream/80 ring-1 ring-cream/15 backdrop-blur-sm">
                Greene Street · Brooklyn
              </div>
            </div>
          </div>

          {/* Text + small image */}
          <div className="col-span-12 mt-6 flex flex-col gap-10 md:col-span-5 md:mt-12 md:pl-8">
            <Reveal delay={0.1}>
              <p className="font-italic italic text-[22px] leading-snug text-cream md:text-[26px]">
                Started in a corner of a bookstore in 2019 — three folding
                chairs, one machine, and the same neighbors every morning.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-[15px] leading-[1.65] text-cream/75 max-w-md">
                Six years later, we still know most names. We roast in small
                batches above the shop, source beans directly from farms we've
                visited, and pour each cup like we still have something to
                prove. Because we do.
              </p>
            </Reveal>

            <div className="relative aspect-[4/5] overflow-hidden rounded-sm md:aspect-[3/4] md:max-w-xs md:self-end">
              <motion.img
                style={{ y: smallImgY }}
                src={baristaImage}
                alt="A barista carefully pouring milk into a cup."
                loading="lazy"
                className="absolute inset-0 h-[120%] w-full object-cover"
              />
            </div>

            <Reveal delay={0.15}>
              <div className="flex items-center justify-between border-t border-cream/15 pt-5">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream/50">
                    Since
                  </div>
                  <div className="font-display text-[40px] leading-none tracking-tightest text-cream nums">
                    '19
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream/50">
                    Roasts / week
                  </div>
                  <div className="font-display text-[40px] leading-none tracking-tightest text-cream nums">
                    14
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream/50">
                    Regulars
                  </div>
                  <div className="font-display text-[40px] leading-none tracking-tightest text-cream nums">
                    ∞
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
