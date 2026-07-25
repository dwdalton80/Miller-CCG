import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone } from 'lucide-react'
import { homeAnchor } from '../utils/homeAnchor.js'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={homeAnchor('contact')}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 bg-bronze hover:bg-bronze-light text-background px-5 py-3.5 text-sm font-semibold tracking-wide shadow-2xl shadow-black/40 transition-colors"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">Request Consultation</span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
