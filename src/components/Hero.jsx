import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

const SLIDES = [
  {
    image: './images/1d3f93a0e_generated_image.png',
    eyebrow: 'Construction Management',
    title: 'Building the Future,\nOne Beam at a Time',
    description:
      'From structural framing to high-end finishes, we deliver architectural excellence across every phase of your build.',
    cta: { label: 'Request Consultation', href: '#contact' },
  },
  {
    image: './images/0202c947b_generated_9a159799.png',
    eyebrow: 'Strategic Consulting',
    title: 'Precision Planning,\nExpert Guidance',
    description:
      'Strategic advisory and technical expertise for property owners and developers seeking trusted recovery and build solutions.',
    cta: { label: 'See Consulting Services', href: '#services' },
  },
  {
    image: './images/994325ea3_generated_image.png',
    eyebrow: '24/7 Emergency Response',
    title: 'Restoring What\nMatters Most',
    description:
      'When disaster strikes, our expert team is on-site within minutes — providing rapid fire restoration and recovery, day or night.',
    cta: { label: 'Request Emergency Service', href: '#contact' },
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent((c) => (c + 1) % SLIDES.length), [])

  useEffect(() => {
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [next])

  const slide = SLIDES[current]

  return (
    <section id="hero" className="relative h-screen min-h-[640px] w-full overflow-hidden bg-background">
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1.15 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2 }, scale: { duration: 7, ease: 'linear' } }}
          className="absolute inset-0"
        >
          <img src={slide.image} alt="" className="w-full h-full object-cover" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/40" />
      <div className="absolute inset-0 grid-blueprint opacity-30" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] mb-6 text-bronze">
              <span className="w-8 h-px bg-bronze" />
              {slide.eyebrow}
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] whitespace-pre-line text-foreground">
              {slide.title}
            </h1>
            <p className="mt-6 text-lg text-muted max-w-xl leading-relaxed">{slide.description}</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={slide.cta.href}
                className="inline-flex items-center gap-2 bg-bronze hover:bg-bronze-light text-background px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 group"
              >
                {slide.cta.label}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="tel:8006455377"
                className="inline-flex items-center gap-2 border border-border hover:border-bronze text-foreground hover:text-bronze px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                800-Miller-Restores
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className="group relative h-1 transition-all duration-500"
            style={{ width: i === current ? '40px' : '20px' }}
          >
            <span className="absolute inset-0 bg-foreground/30" />
            {i === current && <motion.span layoutId="active-dot" className="absolute inset-0 bg-bronze" />}
          </button>
        ))}
      </div>

      <div className="absolute bottom-8 right-8 z-10 hidden lg:flex flex-col items-center gap-2 text-muted/60">
        <span className="text-[10px] uppercase tracking-[0.3em] [writing-mode:vertical-rl]">Scroll</span>
        <span className="w-px h-12 bg-gradient-to-b from-bronze to-transparent" />
      </div>
    </section>
  )
}
