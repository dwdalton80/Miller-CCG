import Header from './Header.jsx'
import Footer from './Footer.jsx'
import FloatingCTA from './FloatingCTA.jsx'
import { homeAnchor } from '../utils/homeAnchor.js'

export default function LegalPageLayout({ title, updated, children }) {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        <div className="max-w-3xl mx-auto px-6 pt-36 pb-24">
          <a href={homeAnchor('hero')} className="text-xs uppercase tracking-[0.25em] text-bronze hover:text-bronze-light transition-colors">
            ← Back to Home
          </a>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight mt-6 mb-3">
            {title}
          </h1>
          <p className="text-sm text-muted mb-12">Last updated: {updated}</p>

          <div className="space-y-10 text-muted leading-relaxed [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-bronze [&_a]:hover:text-bronze-light">
            {children}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
