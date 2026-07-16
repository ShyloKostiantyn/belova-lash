'use client'

import { useCallback, useEffect, useState } from 'react'

// First-visit promo modal for Belova Lash Studio.
// Appears after a delay (not instantly) so it does not count as an
// intrusive interstitial for Google. Remembers dismissal for 7 days.
// The CTA links to DIKIDI, so GoogleAdsTag picks it up as a Booking Click.

const STORAGE_KEY = 'belova_promo_seen'
const REMEMBER_DAYS = 7
const DELAY_MS = 8000
const PROMO_CODE = 'FIRST20'
const BOOKING_URL = 'https://dikidi.net/614543'

const GOLD = '#c9a35f'
const GOLD_LIGHT = '#f5d68f'
const SERIF = '"Cormorant Garamond", Georgia, serif'

export default function PromoModal() {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const close = useCallback(() => {
    setOpen(false)
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()))
    } catch {
      /* private mode — just close */
    }
  }, [])

  // Decide whether to show, then wait before showing
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const seenAt = Number(raw)
        if (Number.isFinite(seenAt) && Date.now() - seenAt < REMEMBER_DAYS * 86400000) {
          return
        }
      }
    } catch {
      /* ignore */
    }

    const timer = setTimeout(() => setOpen(true), DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  // Esc to close + lock background scroll while open
  useEffect(() => {
    if (!open) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, close])

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(PROMO_CODE)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard blocked — code is visible anyway */
    }
  }

  if (!open) return null

  return (
    <div
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        background: 'rgba(0,0,0,0.72)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        animation: 'belovaFade .35s ease-out',
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes belovaFade { from { opacity: 0 } to { opacity: 1 } }
            @keyframes belovaRise {
              from { opacity: 0; transform: translateY(16px) scale(.97) }
              to   { opacity: 1; transform: none }
            }
            .belova-promo-cta:hover { filter: brightness(1.08); transform: translateY(-1px) }
            .belova-promo-close:hover { color: ${GOLD_LIGHT}; border-color: rgba(201,163,95,.5) }
          `,
        }}
      />

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '420px',
          padding: '44px 32px 32px',
          textAlign: 'center',
          borderRadius: '18px',
          border: '1px solid rgba(201,163,95,0.28)',
          background: 'linear-gradient(165deg, #12291c 0%, #0a1b13 60%)',
          boxShadow: '0 24px 70px rgba(0,0,0,0.6)',
          animation: 'belovaRise .4s cubic-bezier(.2,.8,.2,1)',
        }}
      >
        <button
          onClick={close}
          aria-label="Close"
          className="belova-promo-close"
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            border: '1px solid rgba(201,163,95,0.25)',
            background: 'transparent',
            color: GOLD,
            fontSize: '20px',
            lineHeight: 1,
            cursor: 'pointer',
            transition: 'all .2s ease',
          }}
        >
          ×
        </button>

        <div
          style={{
            fontSize: '0.72rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: GOLD,
            marginBottom: '14px',
          }}
        >
          First Visit Offer
        </div>

        <div
          style={{
            fontFamily: SERIF,
            fontSize: '4.2rem',
            fontWeight: 600,
            lineHeight: 1,
            marginBottom: '10px',
            background: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          −20%
        </div>

        <h2
          id="promo-title"
          style={{
            fontFamily: SERIF,
            fontSize: '1.5rem',
            fontWeight: 600,
            color: GOLD_LIGHT,
            margin: '0 0 12px',
          }}
        >
          On Your First Appointment
        </h2>

        <p
          style={{
            fontSize: '0.95rem',
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.72)',
            margin: '0 0 24px',
          }}
        >
          New to Belova Lash Studio? Enjoy 20% off your first lash service with
          Maryna or Valentina.
        </p>

        <button
          onClick={copyCode}
          title="Click to copy"
          style={{
            display: 'block',
            width: '100%',
            padding: '13px',
            marginBottom: '20px',
            borderRadius: '10px',
            border: `1px dashed rgba(201,163,95,0.5)`,
            background: 'rgba(201,163,95,0.07)',
            color: GOLD_LIGHT,
            fontSize: '1.12rem',
            fontWeight: 700,
            letterSpacing: '0.16em',
            cursor: 'pointer',
            transition: 'all .2s ease',
          }}
        >
          {copied ? 'COPIED ✓' : PROMO_CODE}
        </button>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener"
          onClick={close}
          className="belova-promo-cta"
          style={{
            display: 'block',
            padding: '15px',
            borderRadius: '10px',
            background: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD})`,
            color: '#0a1b13',
            fontSize: '0.95rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            textDecoration: 'none',
            transition: 'all .2s ease',
          }}
        >
          Book Now &amp; Save 20%
        </a>

        <p
          style={{
            fontSize: '0.72rem',
            color: 'rgba(255,255,255,0.4)',
            margin: '16px 0 0',
            lineHeight: 1.5,
          }}
        >
          Mention the code when booking. Valid for new clients, first visit only.
        </p>
      </div>
    </div>
  )
}
