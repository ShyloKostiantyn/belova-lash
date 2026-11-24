'use client'

import Script from 'next/script'
import { useEffect } from 'react'

// Tracking for Belova Lash Studio (one Google tag for Ads + GA4).
// 1) GA4 G-51P0CXTX7K: same Measurement ID is set in iBooker, which sends the
//    booking funnel and `purchase` (real booking). Cross-domain linker to
//    ibooker.online keeps the visitor/session (and the ad click) across domains.
// 2) Booking links (iBooker, or Square as fallback): gclid/gbraid/wbraid/utm
//    from the landing URL are added to the link; GA4 `booking_click` and the
//    Ads "Booking Click" conversion fire (a click, NOT a booking).
// 3) tel: links: GA4 `phone_click` (a tap, not a call; diagnostics only).
// 4) "Website call (60s+)": Google forwarding number replaces the studio
//    phone for visitors who came from an ad. Elements marked with
//    data-phone-text get the new number as text, data-phone-link gets tel:.

const AW_ID = 'AW-18224796865'
const GA4_ID = 'G-51P0CXTX7K'
const SEND_TO = 'AW-18224796865/y18iCJuDgckcEMGpofJD'
const WEBSITE_CALL_ID = 'AW-18224796865/7oM8CMbK970dEMGpofJD'
const STUDIO_PHONE = '+1 289 795 4370'

const ATTRIBUTION_KEYS = [
  'gclid', 'gbraid', 'wbraid', 'gad_source', 'gad_campaignid',
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_id', 'utm_term', 'utm_content',
]
const STORAGE_KEY = 'belova_booking_attribution_v1'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
    belovaPhoneSwap?: (formatted: string, mobile: string) => void
  }
}

function bookingProvider(href: string): 'ibooker' | 'square' | null {
  if (href.includes('ibooker.online')) return 'ibooker'
  if (href.includes('square.site') || href.includes('squareup.com')) return 'square'
  return null
}

function readAttribution(): Record<string, string> {
  let saved: Record<string, string> = {}
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed: unknown = JSON.parse(raw)
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
        saved = parsed as Record<string, string>
      }
    }
  } catch {
    // Storage may be blocked; booking must still work.
  }
  const current = new URLSearchParams(window.location.search)
  let changed = false
  for (const key of ATTRIBUTION_KEYS) {
    const value = current.get(key)
    if (value && value.length <= 350 && saved[key] !== value) {
      saved[key] = value
      changed = true
    }
  }
  if (changed) {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(saved))
    } catch {
      // ignore
    }
  }
  return saved
}

// Adds ad-click/UTM parameters to an iBooker link (keeps existing params, incl. _gl).
function decorateBookingLink(link: HTMLAnchorElement, attribution: Record<string, string>) {
  const href = link.getAttribute('href') || ''
  if (bookingProvider(href) !== 'ibooker') return
  try {
    const url = new URL(href, window.location.href)
    let changed = false
    for (const key of ATTRIBUTION_KEYS) {
      const value = attribution[key]
      if (value && !url.searchParams.has(key)) {
        url.searchParams.set(key, value)
        changed = true
      }
    }
    if (changed) link.setAttribute('href', url.toString())
  } catch {
    // leave the link as is
  }
}

export default function GoogleAdsTag() {
  useEffect(() => {
    const attribution = readAttribution()
    document
      .querySelectorAll<HTMLAnchorElement>('a[href*="ibooker.online"]')
      .forEach((a) => decorateBookingLink(a, attribution))

    // Links rendered later (promo modal etc.): decorate before the click,
    // in capture phase so the gtag linker then appends _gl to the final URL.
    function handlePointerDown(e: Event) {
      const link = (e.target as HTMLElement | null)?.closest?.('a') as HTMLAnchorElement | null
      if (link) decorateBookingLink(link, attribution)
    }

    function handleClick(e: MouseEvent) {
      const link = (e.target as HTMLElement | null)?.closest?.('a') as HTMLAnchorElement | null
      if (!link) return
      const href = link.getAttribute('href') || ''
      if (typeof window.gtag !== 'function') return

      const provider = bookingProvider(href)
      if (provider) {
        decorateBookingLink(link, attribution)
        window.gtag('event', 'booking_click', {
          booking_provider: provider,
          link_text: (link.textContent || '').trim().slice(0, 60),
          send_to: GA4_ID,
        })
        window.gtag('event', 'conversion', { send_to: SEND_TO })
        return
      }

      if (href.startsWith('tel:')) {
        window.gtag('event', 'phone_click', {
          link_text: (link.textContent || '').trim().slice(0, 60),
          send_to: GA4_ID,
        })
      }
    }

    document.addEventListener('mousedown', handlePointerDown, true)
    document.addEventListener('touchstart', handlePointerDown, { capture: true, passive: true })
    document.addEventListener('keydown', handlePointerDown, true)
    document.addEventListener('click', handleClick, true)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown, true)
      document.removeEventListener('touchstart', handlePointerDown, true)
      document.removeEventListener('keydown', handlePointerDown, true)
      document.removeEventListener('click', handleClick, true)
    }
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
          window.gtag = gtag;
          window.belovaPhoneSwap = function(formatted, mobile) {
            if (!formatted || !mobile) return;
            document.querySelectorAll('[data-phone-text]').forEach(function(el){ el.textContent = formatted; });
            document.querySelectorAll('[data-phone-link]').forEach(function(el){ el.setAttribute('href', 'tel:' + mobile); });
          };
          gtag('js', new Date());
          gtag('set', 'linker', { domains: ['ibooker.online'], decorate_forms: true });
          gtag('config', '${GA4_ID}');
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
