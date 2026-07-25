import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'

const SERVICES = [
  {
    tag: 'Build',
    title: 'Construction',
    image: './images/3e01981cd_generated_image.webp',
    alt: 'Commercial and residential construction project in North Texas',
    description:
      'Comprehensive residential building projects from structural framing to high-end finishes, ensuring architectural excellence at every milestone.',
    points: [
      'Commercial & residential builds',
      'Structural framing & concrete',
      'High-end interior finishes',
      'Project management & scheduling',
    ],
  },
  {
    tag: 'Advise',
    title: 'Consulting',
    image: './images/71e90c069_generated_268c7b41.webp',
    alt: 'Construction consulting and planning blueprints for a North Texas project',
    description:
      'Strategic advisory and technical guidance for property owners and business owners seeking expert recovery and build solutions.',
    points: [
      'Feasibility & cost analysis',
      'Recovery strategy & planning',
      'Technical advisory services',
      'Developer & owner representation',
    ],
  },
  {
    tag: 'Respond',
    title: '24/7 Emergency Response',
    image: './images/930e70569_generated_image.webp',
    alt: '24/7 disaster and property restoration crew responding to water and fire damage on-site',
    description:
      '24/7 disaster and property restoration — water damage restoration, fire and smoke damage restoration, storm and flood damage repair, mold remediation, and biohazard cleanup, fully coordinated with your insurance from first response through reconstruction.',
    points: [
      'Emergency water extraction & water damage restoration',
      'Fire, smoke damage restoration & odor removal',
      'Storm & flood damage repair',
      'Mold remediation & removal',
      'Biohazard & sewage cleanup',
      'Structural drying, contents cleaning & pack-out services',
      'Insurance-coordinated reconstruction services',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] mb-5 text-bronze">
            What We Do
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight">
            Three disciplines. One standard of excellence.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative bg-card overflow-hidden"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute top-5 left-5 flex items-center gap-3">
                  <span className="bg-bronze text-background text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5">
                    {s.tag}
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-10">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="font-display text-3xl font-bold text-bronze">{s.title}</h3>
                  <ArrowUpRight className="w-6 h-6 text-bronze opacity-0 -translate-x-2 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                </div>
                <p className="text-muted leading-relaxed mb-6">{s.description}</p>
                <ul className="space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-foreground/80">
                      <Check className="w-4 h-4 text-bronze mt-0.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <span className="absolute top-0 left-0 h-0.5 bg-bronze transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
