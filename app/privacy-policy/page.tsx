import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — BELOVA Lash Brand',
  description: 'Privacy Policy for BELOVA Lash Brand website and booking services.',
  robots: { index: true, follow: true },
}

export default function PrivacyPolicy() {
  const lastUpdated = 'June 29, 2026'

  return (
    <main style={{ background: '#0a1b13', minHeight: '100vh', padding: '0 0 80px' }}>
      {/* Header */}
      <header style={{
        borderBottom: '1px solid rgba(201,163,95,0.15)',
        padding: '20px 0',
        background: 'rgba(10,27,19,0.95)',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <img src="/images/logo.png" alt="Belova Lash Brand logo" style={{ width: '40px', height: 'auto', opacity: 0.95 }} />
            <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.4rem', color: '#f5d68f', fontWeight: 600 }}>Belova</span>
          </a>
        </div>
      </header>

      {/* Content */}
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '60px 24px 0' }}>
        <h1 style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          color: '#c9a35f',
          marginBottom: '8px',
          fontWeight: 600,
        }}>
          Privacy Policy
        </h1>
        <p style={{ color: 'rgba(245,240,230,0.5)', fontSize: '0.85rem', marginBottom: '48px' }}>
          Last updated: {lastUpdated}
        </p>

        <div style={{ color: 'rgba(245,240,230,0.85)', lineHeight: 1.8, fontSize: '1rem' }}>

          <Section title="1. Who We Are">
            <p>BELOVA Lash Brand (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the website <strong style={{ color: '#f5d68f' }}>belovalash.ca</strong> and provides eyelash extension services and professional lash supplies.</p>
            <p style={{ marginTop: '12px' }}>Studio address: 92 Lakeshore Rd E, Unit 5A, Mississauga, ON L5G 4S2, Canada<br />
            Contact email: <a href="mailto:majgik4@gmail.com" style={{ color: '#c9a35f' }}>majgik4@gmail.com</a><br />
            Phone: <a href="tel:+12897954370" style={{ color: '#c9a35f' }}>+1 (289) 795-4370</a></p>
          </Section>

          <Section title="2. Information We Collect">
            <p>When you use our website or contact us to book an appointment, we may collect:</p>
            <ul style={{ paddingLeft: '20px', marginTop: '12px' }}>
              <li style={{ marginBottom: '8px' }}><strong>Contact information</strong> — your name, phone number, and email address when you submit a booking request.</li>
              <li style={{ marginBottom: '8px' }}><strong>Booking details</strong> — the service you selected, preferred date and time, and any comments you provide.</li>
              <li style={{ marginBottom: '8px' }}><strong>Usage data</strong> — pages visited, time spent on the site, browser type, and approximate location (collected automatically via analytics tools).</li>
              <li style={{ marginBottom: '8px' }}><strong>Cookies</strong> — small files stored on your device to improve site functionality and analytics.</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul style={{ paddingLeft: '20px', marginTop: '12px' }}>
              <li style={{ marginBottom: '8px' }}>Respond to booking requests and confirm appointments.</li>
              <li style={{ marginBottom: '8px' }}>Send appointment reminders or follow-up messages (only if you have contacted us).</li>
              <li style={{ marginBottom: '8px' }}>Improve our website and user experience.</li>
              <li style={{ marginBottom: '8px' }}>Run advertising campaigns via Google Ads to reach potential clients.</li>
              <li style={{ marginBottom: '8px' }}>Comply with legal obligations.</li>
            </ul>
            <p style={{ marginTop: '12px' }}>We do <strong>not</strong> sell, rent, or share your personal information with third parties for their marketing purposes.</p>
          </Section>

          <Section title="4. Google Services">
            <p>Our website uses the following Google services:</p>
            <ul style={{ paddingLeft: '20px', marginTop: '12px' }}>
              <li style={{ marginBottom: '8px' }}><strong>Google Analytics</strong> — to understand how visitors use our site. Google may collect anonymised data. You can opt out via <a href="https://tools.google.com/dlpage/gaoptout" style={{ color: '#c9a35f' }} target="_blank" rel="noopener noreferrer">Google&apos;s opt-out tool</a>.</li>
              <li style={{ marginBottom: '8px' }}><strong>Google Ads</strong> — to display ads about our services to relevant audiences. Google uses cookies to serve ads based on your previous visits.</li>
              <li style={{ marginBottom: '8px' }}><strong>Google Maps</strong> — embedded on our Location page to show our studio address.</li>
            </ul>
            <p style={{ marginTop: '12px' }}>Google&apos;s privacy policy is available at <a href="https://policies.google.com/privacy" style={{ color: '#c9a35f' }} target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.</p>
          </Section>

          <Section title="5. Cookies">
            <p>We use cookies to:</p>
            <ul style={{ paddingLeft: '20px', marginTop: '12px' }}>
              <li style={{ marginBottom: '8px' }}>Remember your preferences.</li>
              <li style={{ marginBottom: '8px' }}>Analyse site traffic (Google Analytics).</li>
              <li style={{ marginBottom: '8px' }}>Deliver relevant advertisements (Google Ads).</li>
            </ul>
            <p style={{ marginTop: '12px' }}>You can disable cookies in your browser settings at any time, although this may affect some site functionality.</p>
          </Section>

          <Section title="6. Data Retention">
            <p>We retain personal information only as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Booking inquiry data is typically retained for up to 12 months.</p>
          </Section>

          <Section title="7. Your Rights (PIPEDA — Canada)">
            <p>Under Canada&apos;s Personal Information Protection and Electronic Documents Act (PIPEDA), you have the right to:</p>
            <ul style={{ paddingLeft: '20px', marginTop: '12px' }}>
              <li style={{ marginBottom: '8px' }}>Access the personal information we hold about you.</li>
              <li style={{ marginBottom: '8px' }}>Request correction of inaccurate information.</li>
              <li style={{ marginBottom: '8px' }}>Withdraw consent for us to use your information (subject to legal restrictions).</li>
              <li style={{ marginBottom: '8px' }}>File a complaint with the Office of the Privacy Commissioner of Canada.</li>
            </ul>
            <p style={{ marginTop: '12px' }}>To exercise these rights, contact us at <a href="mailto:majgik4@gmail.com" style={{ color: '#c9a35f' }}>majgik4@gmail.com</a>.</p>
          </Section>

          <Section title="8. Third-Party Links">
            <p>Our website contains links to third-party sites (Instagram, DIKIDI, belovalashstore.ca). We are not responsible for the privacy practices of these sites and encourage you to review their privacy policies.</p>
          </Section>

          <Section title="9. Children's Privacy">
            <p>Our services are not directed at children under 13. We do not knowingly collect personal information from children.</p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised &quot;Last updated&quot; date. Continued use of the website after changes constitutes acceptance of the updated policy.</p>
          </Section>

          <Section title="11. Contact Us">
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <p style={{ marginTop: '12px' }}>
              <strong style={{ color: '#f5d68f' }}>BELOVA Lash Brand</strong><br />
              92 Lakeshore Rd E, Unit 5A, Mississauga, ON L5G 4S2<br />
              <a href="mailto:majgik4@gmail.com" style={{ color: '#c9a35f' }}>majgik4@gmail.com</a><br />
              <a href="tel:+12897954370" style={{ color: '#c9a35f' }}>+1 (289) 795-4370</a>
            </p>
          </Section>

        </div>

        {/* Back to site */}
        <div style={{ marginTop: '60px', paddingTop: '32px', borderTop: '1px solid rgba(201,163,95,0.15)' }}>
          <a href="/" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#c9a35f',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontFamily: '"Outfit", sans-serif',
          }}>
            ← Back to belovalash.ca
          </a>
        </div>
      </div>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '40px' }}>
      <h2 style={{
        fontFamily: '"Cormorant Garamond", serif',
        fontSize: '1.35rem',
        color: '#f5d68f',
        fontWeight: 600,
        marginBottom: '16px',
        paddingBottom: '8px',
        borderBottom: '1px solid rgba(201,163,95,0.15)',
      }}>
        {title}
      </h2>
      {children}
    </div>
  )
}
