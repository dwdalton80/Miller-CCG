import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const AREAS = [
  {
    city: 'Dallas',
    blurb: 'Our home base — commercial construction, consulting, and rapid-response restoration across the metro’s urban core.',
  },
  {
    city: 'Fort Worth',
    blurb: 'From new residential builds to historic property restoration, we bring the same standard west of the Trinity.',
  },
  {
    city: 'Plano',
    blurb: 'Commercial construction and strategic consulting for one of North Texas’s fastest-growing business corridors.',
  },
  {
    city: 'Arlington',
    blurb: 'Construction management and 24/7 emergency restoration for homeowners and businesses across Arlington.',
  },
  {
    city: 'Irving',
    blurb: 'Full-service construction and rapid restoration support for Irving’s mix of commercial and residential properties.',
  },
  {
    city: 'Sherman',
    blurb: 'Extending our North Texas footprint north with construction and emergency response coverage in Sherman.',
  },
  {
    city: 'McKinney',
    blurb: 'Residential construction, consulting, and rapid restoration response for McKinney’s growing communities.',
  },
]

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="relative py-28 lg:py-36 bg-background overflow-hidden">
      <div className="absolute inset-0 grid-blueprint opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] mb-5 text-bronze">
            Where We Work
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight">
            Built for North Texas. Ready across Texas &amp; Oklahoma.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AREAS.map((a, i) => (
            <motion.div
              key={a.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="border border-border bg-card p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-4 h-4 text-bronze shrink-0" />
                <h3 className="font-display text-xl font-bold text-foreground">{a.city}, TX</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">{a.blurb}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-sm text-muted max-w-2xl"
        >
          We also take on projects throughout the rest of Texas and Oklahoma — reach out to confirm coverage for
          your location.
        </motion.p>
      </div>
    </section>
  )
}
