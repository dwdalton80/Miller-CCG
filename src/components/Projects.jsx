import { motion } from 'framer-motion'
import { MapPin, Maximize, DollarSign } from 'lucide-react'

const PROJECTS = [
  {
    image: '/images/bf8e792d6_generated_1d83fd46.png',
    title: 'Corporate Tower Build-Out',
    category: 'Commercial Construction',
    location: 'Dallas, TX',
    size: '85,000 sq ft',
    budget: '$12M',
  },
  {
    image: '/images/00651716f_generated_ff730b5f.png',
    title: 'Historic Home Restoration',
    category: 'Fire Restoration',
    location: 'Fort Worth, TX',
    size: '4,200 sq ft',
    budget: '$850K',
  },
  {
    image: '/images/9cb25278e_generated_4ccbbb95.png',
    title: 'Industrial Warehouse Complex',
    category: 'Construction & Consulting',
    location: 'Plano, TX',
    size: '120,000 sq ft',
    budget: '$18M',
  },
]

function SpecRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 text-foreground/90">
      <span className="text-bronze">{icon}</span>
      <span className="text-xs uppercase tracking-wider text-muted w-16">{label}</span>
      <span className="text-sm font-semibold">{value}</span>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 lg:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-3 text-bronze text-xs font-semibold uppercase tracking-[0.3em] mb-5">
              <span className="w-8 h-px bg-bronze" />
              Signature Work
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              Projects that speak for themselves.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted max-w-md"
          >
            A selection of recent builds, restorations, and consulting engagements across the
            Dallas-Fort Worth metroplex.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="space-y-3">
                    <SpecRow icon={<MapPin className="w-4 h-4" />} label="Location" value={p.location} />
                    <SpecRow icon={<Maximize className="w-4 h-4" />} label="Size" value={p.size} />
                    <SpecRow icon={<DollarSign className="w-4 h-4" />} label="Value" value={p.budget} />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-bronze font-semibold">
                  {p.category}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-foreground leading-snug">{p.title}</h3>
              </div>

              <span className="pointer-events-none absolute inset-0 border border-bronze opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
