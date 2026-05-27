import { Fragment, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

export function Reveal({ children, delay = 0, y = 28, className = '', once = true }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 1.1, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

// Splits a string into words and reveals each with a staggered rise.
// `immediate` plays on mount; otherwise the outer wrapper is observed and the
// stagger plays once the heading scrolls in. The observer must live on the
// wrapper (not the words) — each word's motion.span is translated 110% off its
// baseline, so its post-transform rect doesn't reliably intersect the viewport.
export function RevealText({ text, className = '', as: Tag = 'span', delay = 0, stagger = 0.05, immediate = false }) {
  const words = text.split(' ')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const play = immediate || inView
  return (
    <Tag ref={ref} className={className}>
      {words.map((w, i) => (
        <Fragment key={i}>
          {i > 0 && ' '}
          <span className="inline-block overflow-hidden align-baseline pt-[0.18em] pb-[0.28em] -mt-[0.18em] -mb-[0.28em]">
            <motion.span
              className="inline-block"
              initial={{ y: '140%' }}
              animate={{ y: play ? '0%' : '140%' }}
              transition={{ duration: 1, ease, delay: delay + i * stagger }}
            >
              {w}
            </motion.span>
          </span>
        </Fragment>
      ))}
    </Tag>
  )
}
