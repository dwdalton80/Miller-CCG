import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
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
      className={`fixed top-0 inset-x-0 z-50 bg-foreground transition-all duration-500 ${
        scrolled ? 'shadow-md border-b border-black/10 py-3' : 'border-b border-black/5 py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center group">
          <img
            src="./logo.png"
            alt="Miller Construction & Consulting Group"
            className="h-20 w-auto group-hover:opacity-90 transition-opacity duration-300"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium text-black hover:text-bronze-dark transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-bronze transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-bronze hover:bg-bronze-dark hover:brightness-110 text-background px-5 py-2.5 text-sm font-semibold tracking-wide ring-1 ring-black/20 shadow-lg shadow-black/30 transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            Request Consultation
          </a>
        </div>

        <button className="md:hidden text-black" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
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
            className="md:hidden overflow-hidden bg-foreground border-t border-black/10"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-black hover:text-bronze-dark transition-colors"
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
