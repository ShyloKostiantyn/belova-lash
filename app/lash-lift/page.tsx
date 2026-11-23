import type { Metadata } from 'next'
import Landing from '@/components/Landing'

export const metadata: Metadata = {
  title: 'Korean Lash Lift & Tint in Mississauga — $100 | Belova Lash Studio',
  description:
    'Korean Lash Lift + Tint and Lash Lift + Tint at Belova Lash Studio in Port Credit, Mississauga. Natural lashes lifted, curled and darker — no extensions. $100, about 1 hour. Book online.',
  alternates: { canonical: 'https://www.belovalash.ca/lash-lift' },
  openGraph: {
    type: 'website',
    siteName: 'Belova Lash Studio',
    title: 'Korean Lash Lift & Tint in Mississauga | Belova Lash Studio',
    description:
      'Natural lashes lifted, curled and darker — no extensions. Korean Lash Lift + Tint and Lash Lift + Tint, $100. Port Credit, Mississauga.',
    locale: 'en_CA',
  },
}

export default function LashLiftPage() {
  return <Landing variant="lift" />
}
