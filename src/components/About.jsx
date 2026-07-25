import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { value: 20, suffix: '+', label: 'Years of Experience' },
  { value: 1000, suffix: '+', label: 'Projects Completed' },
  { value: 24, suffix: '/7', label: 'Emergency Response' },
  { value: 100, suffix: '%', label: 'Client Commitment' },
]

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let frame
    const duration = 1600
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(value * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36 bg-charcoal-dark overflow-hidden">
      <div className="absolute inset-0 grid-blueprint opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="./images/62849875a_generated_image.webp"
                alt="Miller Construction & Consulting Group residential job site in North Texas at golden hour"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-bronze/40 -z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] mb-5 text-bronze">
              Who We Are
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6">
              A foundation built on trust, precision, and relentless craftsmanship.
            </h2>
            <p className="text-muted leading-relaxed mb-5">
              Miller Construction &amp; Consulting Group has served clients across Texas and
              Oklahoma — with a primary focus on North Texas — upholding an uncompromising
              standard of quality. From emergency fire restoration to large-loss projects and
              strategic consulting, we bring engineering rigor and a builder's eye to every
              engagement.
            </p>
            <p className="text-muted leading-relaxed mb-10">
              Our integrated approach means property owners and developers get a single,
              accountable partner — from the first feasibility assessment through the final
              inspection.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {STATS.map((s) => (
                <div key={s.label} className="border-t border-border pt-4">
                  <div className="font-display text-3xl lg:text-4xl font-bold text-bronze">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-xs text-muted uppercase tracking-wider leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
