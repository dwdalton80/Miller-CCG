import LegalPageLayout from '../components/LegalPageLayout.jsx'

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout title="Privacy Policy" updated="July 25, 2026">
      <p className="italic text-sm">
        This page provides general information about how Miller Construction &amp; Consulting
        Group, LLC ("Miller CCG," "we," "us," or "our") handles information collected through
        millerccg.com. It is not legal advice, and it does not cover every situation. If you have
        questions about how a specific law applies to your information, please consult an
        attorney.
      </p>

      <section>
        <h2>Information We Collect</h2>
        <p>When you use this website, we may collect:</p>
        <ul>
          <li>
            <strong>Information you provide directly</strong> — such as your name, email address,
            phone number, and project details when you submit our contact form or request a
            consultation.
          </li>
          <li>
            <strong>Automatically collected information</strong> — such as your IP address,
            browser type, device information, pages visited, and general location, gathered
            through analytics tools when you browse the site.
          </li>
        </ul>
      </section>

      <section>
        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to consultation requests and emergency service calls</li>
          <li>Communicate with you about a project, estimate, or inquiry</li>
          <li>Improve our website and understand how visitors use it</li>
          <li>Maintain the security and proper functioning of our site</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section>
        <h2>Cookies &amp; Analytics</h2>
        <p>
          This site uses Google Analytics to understand how visitors interact with our pages
          (such as which pages are viewed and how visitors arrived at the site). Google Analytics
          may use cookies or similar technologies to collect this information. You can opt out of
          Google Analytics tracking through your browser settings or by installing the{' '}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
            Google Analytics Opt-out Browser Add-on
          </a>
          .
        </p>
      </section>

      <section>
        <h2>Third-Party Services</h2>
        <p>
          Our contact form is processed by Formspree, a third-party form-handling service. When
          you submit the form, your information is sent to Formspree's servers before being
          delivered to us. We encourage you to review{' '}
          <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
            Formspree's privacy policy
          </a>{' '}
          for details on how they handle submitted data.
        </p>
      </section>

      <section>
        <h2>How We Share Information</h2>
        <p>
          We do not sell your personal information. We may share information with service
          providers who help us operate our business (such as form processing or analytics
          providers), or when required to do so by law.
        </p>
      </section>

      <section>
        <h2>Data Security</h2>
        <p>
          We take reasonable measures to protect the information we collect. However, no method
          of transmission over the internet or electronic storage is completely secure, and we
          cannot guarantee absolute security.
        </p>
      </section>

      <section>
        <h2>Your Choices</h2>
        <p>
          You may contact us at any time to ask what information we hold about you, to request a
          correction, or to request that we delete it, subject to any legal or contractual
          requirements that may require us to retain certain records.
        </p>
      </section>

      <section>
        <h2>Children's Privacy</h2>
        <p>
          Our website is intended for a general business audience and is not directed at
          children. We do not knowingly collect personal information from children under 13.
        </p>
      </section>

      <section>
        <h2>Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. Any changes will be posted on this page
          with an updated "Last updated" date.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, contact us at{' '}
          <a href="mailto:info@millerccg.com">info@millerccg.com</a>, by phone at{' '}
          <a href="tel:4699626224">469-962-MCCG (6224)</a>, or by mail at 539 W Commerce St, Suite
          2393, Dallas, TX 75208.
        </p>
      </section>
    </LegalPageLayout>
  )
}
