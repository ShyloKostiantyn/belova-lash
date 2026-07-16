import PromoModal from './PromoModal'
import PromoModal from './PromoModal'
import PromoModal from './PromoModal'
import GoogleAdsTag from './GoogleAdsTag'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Belova Lash Studio — Eyelash Extensions & Lash Supplies | Mississauga & Toronto',
  description:
    "Maryna Belova's eyelash extension studio and her own line of professional lash supplies, BELOVA Lash Brand. Mississauga & Toronto.",
  keywords:
    'eyelash extensions Mississauga, eyelash extensions Toronto, lash studio Port Credit, classic volume hybrid lashes, lash supplies, professional lash adhesive, Belova Lash Brand, Maryna Belova',
  authors: [{ name: 'Belova Lash Studio' }],
  openGraph: {
    type: 'website',
    siteName: 'Belova Lash Studio',
    title: 'Belova Lash Studio — Eyelash Extensions & Lash Supplies | Mississauga & Toronto',
    description:
      'Eyelash extension studio and professional lash supply brand founded by Maryna Belova. 9,500+ clients served, 5.0★ rating. Mississauga & Toronto, Ontario.',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Belova Lash Studio — Eyelash Extensions & Lash Supplies',
    description:
      'Eyelash extension studio and professional lash supply brand founded by Maryna Belova. Mississauga & Toronto, Ontario.',
  },
  robots: { index: true, follow: true },
  themeColor: '#0a1b13',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: 'Belova Lash Studio',
  alternateName: 'BELOVA Lash Brand',
  description:
    'Eyelash extension studio and professional lash supply brand founded by Maryna Belova, serving Mississauga and Toronto.',
  telephone: '+1-289-795-4370',
  email: 'majgik4@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '92 Lakeshore Rd E, Unit 5A',
    addressLocality: 'Mississauga',
    addressRegion: 'ON',
    postalCode: 'L5G 4S2',
    addressCountry: 'CA',
  },
  areaServed: ['Mississauga', 'Toronto', 'Port Credit'],
  priceRange: '$100-$180',
  sameAs: [
    'https://www.instagram.com/belova.lash.brow',
    'https://www.instagram.com/belova.brand_official',
    'https://belovalashstore.ca',
    'https://dikidi.net/614543',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    bestRating: '5',
    reviewCount: '6',
    ratingCount: '9',
  },
  founder: {
    '@type': 'Person',
    name: 'Maryna Belova',
    jobTitle: 'Lash Artist, Educator & Founder',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}<GoogleAdsTag />
        <PromoModal />
        <PromoModal />
        <PromoModal /></body>
    </html>
  )
}
