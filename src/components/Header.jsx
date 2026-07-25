import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'service-areas', label: 'Areas' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-background transition-all duration-500 ${
        scrolled ? 'shadow-md border-b border-border py-2' : 'border-b border-white/5 py-3'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <img src="./bronze-logo.png" alt="" className="h-10 sm:h-12 w-auto shrink-0" />
          <div className="flex flex-col items-start leading-none">
            <span className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-[0.12em] text-bronze group-hover:text-bronze-light transition-colors duration-300">
              Miller
            </span>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-foreground mt-1">
              Construction &amp; Consulting Group
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium text-foreground hover:text-bronze transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-bronze transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-bronze hover:bg-bronze-light text-background px-5 py-2.5 text-sm font-semibold tracking-wide ring-1 ring-black/20 shadow-lg shadow-black/30 transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            Request Consultation
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-background border-t border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-foreground hover:text-bronze transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-bronze hover:brightness-110 text-background px-5 py-3 text-sm font-semibold transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Request Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
