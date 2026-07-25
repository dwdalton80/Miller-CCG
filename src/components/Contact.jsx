import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'

// Replace with your real Formspree endpoint (see README).
const FORM_ENDPOINT = 'https://formspree.io/f/mpqvlevv'

const CONTACT_INFO = [
  { icon: Phone, label: '24/7 Emergency Line', value: '469-962-MCCG (6224)', href: 'tel:4699626224' },
  { icon: Mail, label: 'Email', value: 'info@millerccg.com', href: 'mailto:info@millerccg.com' },
  {
    icon: MapPin,
    label: 'Office Address',
    value: '539 W Commerce St, Suite 2393, Dallas, TX 75208',
  },
  {
    icon: MapPin,
    label: 'Service Area',
    value: 'Texas & Oklahoma — with a primary focus on North Texas',
  },
  { icon: Clock, label: 'Hours', value: 'Office: Mon–Fri 8am–6pm · Emergency: 24/7' },
]

function Field({ label, name, type = 'text', required }) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.25em] text-muted mb-3">
        {label} {required && '*'}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-0 border-b border-border focus:border-bronze px-0 py-2 text-foreground placeholder:text-muted/50 focus:outline-none transition-colors"
      />
    </div>
  )
}

export default function Contact() {
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    const form = e.target
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (res.ok) {
        setSuccess(true)
        form.reset()
      } else {
        setError('Something went wrong. Please call 469-962-MCCG (6224).')
      }
    } catch {
      setError('Something went wrong. Please call 469-962-MCCG (6224).')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-28 lg:py-36 bg-charcoal-dark overflow-hidden">
      <div className="absolute inset-0 grid-blueprint opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] mb-5 text-bronze">
              Get In Touch
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6">
              Let's build something exceptional.
            </h2>
            <p className="text-muted leading-relaxed mb-10 max-w-md">
              Whether you need emergency restoration, a full construction partner, or strategic
              consulting — our team responds quickly. Fill out the form and a specialist will
              reach out shortly.
            </p>

            <div className="space-y-6">
              {CONTACT_INFO.map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="shrink-0 w-11 h-11 border border-bronze/40 flex items-center justify-center text-bronze">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-muted mb-1">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="text-foreground hover:text-bronze transition-colors font-medium">
                        {c.value}
                      </a>
                    ) : (
                      <div className="text-foreground font-medium leading-relaxed">{c.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-charcoal-light p-8 lg:p-10 border border-border"
          >
            {success ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <CheckCircle2 className="w-16 h-16 text-bronze mb-6" />
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">Request Received</h3>
                <p className="text-muted max-w-sm">
                  Thank you for reaching out. A member of our specialist team will contact you shortly.
                </p>
                <button onClick={() => setSuccess(false)} className="mt-8 text-bronze text-sm font-semibold hover:underline">
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="First Name" name="firstName" required />
                  <Field label="Last Name" name="lastName" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Email Address" name="email" type="email" required />
                  <Field label="Phone Number" name="phone" type="tel" />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-muted mb-3">
                    Service Type *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {['24/7 Emergency Response', 'Construction', 'Consulting'].map((opt, i) => (
                      <label key={opt} className="cursor-pointer">
                        <input
                          type="radio"
                          name="serviceType"
                          value={opt}
                          defaultChecked={i === 0}
                          className="peer sr-only"
                        />
                        <span className="inline-block px-4 py-2 text-sm border border-border text-muted peer-checked:bg-bronze peer-checked:text-background peer-checked:border-bronze transition-all">
                          {opt}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-muted mb-3">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full bg-transparent border-0 border-b border-border focus:border-bronze px-0 py-2 text-foreground placeholder:text-muted/50 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {error && <p className="text-red-400 text-sm">{error}</p>}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-bronze hover:bg-bronze-light disabled:opacity-60 text-background py-4 text-sm font-semibold tracking-wide transition-colors duration-300"
                >
                  {submitting ? 'Sending...' : 'Submit Request'}
                  {!submitting && <Send className="w-4 h-4" />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
