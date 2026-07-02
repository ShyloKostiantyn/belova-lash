'use client'

import { useEffect } from 'react'

// Fires the "Booking Click" conversion whenever a visitor clicks any link
// to DIKIDI (the booking system) or the "Open Booking Form" button.
// The gtag.js library itself is loaded in app/layout.tsx <head>.

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

  return null
}
