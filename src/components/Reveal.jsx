import { motion } from 'framer-motion'

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
// `immediate` switches from whileInView to animate — use for above-the-fold text
// that the scroll observer may not pick up reliably on mount.
export function RevealText({ text, className = '', as: Tag = 'span', delay = 0, stagger = 0.05, immediate = false }) {
  const words = text.split(' ')
  return (
    <Tag className={className}>
      {words.map((w, i) => {
        const motionProps = immediate
          ? { initial: { y: '110%' }, animate: { y: '0%' } }
          : {
              initial: { y: '110%' },
              whileInView: { y: '0%' },
              viewport: { once: true, margin: '-60px' },
            }
        return (
          <span key={i} className="inline-block overflow-hidden align-baseline">
            <motion.span
              className="inline-block"
              {...motionProps}
              transition={{ duration: 1, ease, delay: delay + i * stagger }}
            >
              {w}
              {i < words.length - 1 && ' '}
            </motion.span>
          </span>
        )
      })}
    </Tag>
  )
}
