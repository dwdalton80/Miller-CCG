import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="mb-4">
              <img src="/logo-bronze.png" alt="Miller Construction & Consulting Group" className="h-16 w-auto" />
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-sm">
              Expert construction, consulting, and 24/7 emergency fire restoration services across
              the Greater Dallas-Fort Worth area.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <span className="flex-1 h-px bg-bronze/40" />
              <span className="text-bronze text-xs font-semibold tracking-[0.3em] uppercase">Since 2025</span>
              <span className="flex-1 h-px bg-bronze/40" />
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-foreground font-semibold mb-5">Services</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li><a href="#services" className="hover:text-bronze transition-colors">Construction</a></li>
              <li><a href="#services" className="hover:text-bronze transition-colors">Consulting</a></li>
              <li><a href="#services" className="hover:text-bronze transition-colors">Fire Restoration</a></li>
              <li><a href="#contact" className="hover:text-bronze transition-colors">Emergency Response</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-foreground font-semibold mb-5">Contact</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li>
                <a href="tel:8006455377" className="flex items-center gap-3 hover:text-bronze transition-colors">
                  <Phone className="w-4 h-4 text-bronze shrink-0" />
                  800-Miller-Restores
                </a>
              </li>
              <li>
                <a href="mailto:info@millerccg.com" className="flex items-center gap-3 hover:text-bronze transition-colors">
                  <Mail className="w-4 h-4 text-bronze shrink-0" />
                  info@millerccg.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-bronze shrink-0 mt-0.5" />
                Serving Dallas · Fort Worth · Plano · Arlington · Irving
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Miller Construction &amp; Consulting Group, LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted">
            <a href="#" className="hover:text-bronze transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-bronze transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
