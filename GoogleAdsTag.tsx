'use client'

import Script from 'next/script'
import { useEffect } from 'react'

// Google Ads conversion tracking for Belova Lash Brand
// Fires a "Booking Click" conversion whenever a visitor clicks any
// link to DIKIDI (the booking system) or the "Open Booking Form" button.

const AW_ID = 'AW-18224796865'
const SEND_TO = 'AW-18224796865/y18iCJuDgckcEMGpofJD'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export default function GoogleAdsTag() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const el = e.target as HTMLElement | null
      if (!el) return

      // A booking action = any link to DIKIDI, or the "Open Booking Form" button
      const link = el.closest('a')
      const isDikidiLink = !!link && (link.getAttribute('href') || '').includes('dikidi')
      const isBookingButton = !!el.closest('#openBookingMain')

      if (isDikidiLink || isBookingButton) {
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'conversion', { send_to: SEND_TO })
        }
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${AW_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${AW_ID}');
        `}
      </Script>
    </>
  )
}
