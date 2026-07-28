import { motion } from 'framer-motion'
import { Star, PenLine } from 'lucide-react'
import GoogleLogo from './GoogleLogo.jsx'

const REVIEW_URL =
  'https://www.google.com/maps/place/Miller+Construction+%26+Consulting+Group,+LLC/data=!4m8!3m7!1s0x864e99daeff2d2f7:0x1fd1c895f1c872e6!8m2!3d32.7733009!4d-96.833338!9m1!1b1!16s%2Fg%2F11zgvw0dzk'

const REVIEWS = [
  {
    name: 'Art Miller',
    rating: 5,
    text:
      'Their crew came in and immediately corrected the cause of the problem. (It was a flood in the kitchen.) They were diligent. They cleaned up after themselves.',
  },
  {
    name: 'Tonya Cote',
    rating: 5,
    text:
      "I couldn't be happier with the experience I had with this construction and consulting company. From the very beginning, they were professional, knowledgeable, and easy to work with. They took the time to answer all of my questions, kept me informed throughout the entire process, and made sure every detail was handled with care. The quality of their workmanship exceeded my expectations, and it's clear they take pride in what they do.",
  },
]

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'fill-[#FBBC05] text-[#FBBC05]' : 'text-border'}`}
        />
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-28 lg:py-36 bg-charcoal-dark overflow-hidden">
      <div className="absolute inset-0 grid-blueprint opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] mb-5 text-bronze">
              Client Feedback
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-4">
              What our clients are saying.
            </h2>
            <a
              href={REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <GoogleLogo className="w-6 h-6" />
              <Stars rating={5} />
              <span className="text-foreground font-semibold">5.0</span>
              <span className="text-sm text-muted">Google Reviews</span>
            </a>
          </div>

          <a
            href={REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-bronze hover:bg-bronze-light text-background px-6 py-3.5 text-sm font-semibold tracking-wide shrink-0 transition-all duration-300 self-start"
          >
            <PenLine className="w-4 h-4" />
            Leave Us a Review
          </a>
        </motion.div>

        <div className="space-y-6">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-border bg-card p-8 lg:p-12 flex flex-col md:flex-row gap-8 md:gap-12"
            >
              <div className="flex md:flex-col items-center md:items-start justify-between md:justify-start gap-3 md:gap-4 md:w-52 shrink-0 md:border-r md:border-border md:pr-8">
                <GoogleLogo className="w-8 h-8" />
                <div className="md:mt-1">
                  <Stars rating={r.rating} />
                  <p className="mt-3 text-sm font-semibold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted">Posted on Google</p>
                </div>
              </div>
              <p className="flex-1 text-lg text-muted leading-relaxed">"{r.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
