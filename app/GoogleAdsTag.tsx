'use client'

import Script from 'next/script'
import { useEffect } from 'react'

// Google Ads tracking for Belova Lash Studio
// 1) "Booking Click": fires on any click to the Square booking site.
// 2) "Website call (60s+)": Google forwarding number replaces the studio
//    phone for visitors who came from an ad. Elements marked with
//    data-phone-text get the new number as text, data-phone-link gets tel:.

const AW_ID = 'AW-18224796865'
const SEND_TO = 'AW-18224796865/y18iCJuDgckcEMGpofJD'
const WEBSITE_CALL_ID = 'AW-18224796865/7oM8CMbK970dEMGpofJD'
const STUDIO_PHONE = '+1 289 795 4370'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
    belovaPhoneSwap?: (formatted: string, mobile: string) => void
  }
}

export default function GoogleAdsTag() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const el = e.target as HTMLElement | null
      if (!el) return

      // A booking action = any link to the Square booking site
      const link = el.closest('a')
      const href = (link?.getAttribute('href') || '')
      const isBookingLink = !!link && href.includes('square.site')

      if (isBookingLink) {
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
          window.belovaPhoneSwap = function(formatted, mobile) {
            if (!formatted || !mobile) return;
            document.querySelectorAll('[data-phone-text]').forEach(function(el){ el.textContent = formatted; });
            document.querySelectorAll('[data-phone-link]').forEach(function(el){ el.setAttribute('href', 'tel:' + mobile); });
          };
          gtag('js', new Date());
          gtag('config', '${AW_ID}');
          gtag('config', '${WEBSITE_CALL_ID}', {
            'phone_conversion_number': '${STUDIO_PHONE}',
            'phone_conversion_callback': window.belovaPhoneSwap
          });
        `}
      </Script>
    </>
  )
}
