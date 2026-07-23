import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'

// NOTE: placeholder copy — confirm/replace with Miller CCG's real policies.
const FAQS = [
  {
    q: 'How fast can you respond to a fire or water damage emergency?',
    a: 'Our restoration crews aim to be on-site within minutes of your call, 24 hours a day, 7 days a week, anywhere across Texas and Oklahoma, with priority response in North Texas.',
  },
  {
    q: 'Do you work directly with my insurance company?',
    a: 'Yes. We document all damage and mitigation work as we go and coordinate directly with your adjuster to help keep your claim moving.',
  },
  {
    q: 'Can the same team handle both restoration and rebuilding?',
    a: 'Yes — that\u2019s the point of having construction and restoration under one roof. The same project manager can carry your property from mitigation through the full rebuild.',
  },
  {
    q: 'Do you offer free estimates for construction and consulting projects?',
    a: 'Yes. Reach out through the contact form or give us a call, and we\u2019ll schedule a walkthrough to scope your project before anything is billed.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve clients throughout Texas and Oklahoma, with a primary focus on North Texas — including Dallas, Fort Worth, Plano, Arlington, Irving, Sherman, and McKinney.',
  },
]

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-border">
      <button type="button" onClick={onToggle} aria-expanded={isOpen} className="w-full flex items-center justify-between gap-4 py-6 text-left">
        <span className="font-display text-lg font-bold text-foreground">{item.q}</span>
        <Plus
          className="shrink-0 w-5 h-5 text-bronze transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        />
      </button>
      <div className={`grid transition-all duration-400 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <p className="text-sm text-muted leading-relaxed pr-8">{item.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="relative py-28 lg:py-36 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] mb-5 text-bronze">
            Common Questions
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight">
            Frequently asked questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {FAQS.map((item, i) => (
            <FaqItem key={item.q} item={item} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
