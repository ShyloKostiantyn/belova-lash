'use client'

import { useEffect } from 'react'

export default function SiteScripts() {
  useEffect(() => {
    // ---------- particles ----------
    const box = document.getElementById('particles')
    if (box) {
      const n = 24
      for (let i = 0; i < n; i++) {
        const p = document.createElement('div')
        p.className = 'particle'
        const left = Math.random() * 100
        const dur = 14 + Math.random() * 16
        const delay = Math.random() * 20
        const size = 2 + Math.random() * 3
        p.style.left = left + 'vw'
        p.style.width = size + 'px'
        p.style.height = size + 'px'
        p.style.animationDuration = dur + 's'
        p.style.animationDelay = '-' + delay + 's'
        box.appendChild(p)
      }
    }

    // ---------- mobile nav ----------
    const burger = document.getElementById('burgerBtn')
    const mobileNav = document.getElementById('mobileNav')
    if (burger && mobileNav) {
      const toggle = () => mobileNav.classList.toggle('open')
      burger.addEventListener('click', toggle)
      mobileNav.querySelectorAll('a').forEach((a) =>
        a.addEventListener('click', () => mobileNav.classList.remove('open'))
      )
    }

    // ---------- reveal on scroll ----------
    const revealEls = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    revealEls.forEach((el) => io.observe(el))

    // ---------- count-up stats ----------
    const counters = document.querySelectorAll<HTMLElement>('.stat-num[data-count]')
    const countIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement
            const target = parseInt(el.dataset.count!, 10)
            const suffixEl = el.querySelector('span')
            const suffix = suffixEl ? suffixEl.outerHTML : ''
            let cur = 0
            const step = Math.max(1, Math.round(target / 40))
            const tick = () => {
              cur += step
              if (cur >= target) {
                el.innerHTML = target.toLocaleString('en-US') + suffix
                return
              }
              el.innerHTML = cur.toLocaleString('en-US') + suffix
              requestAnimationFrame(tick)
            }
            tick()
            countIO.unobserve(el)
          }
        })
      },
      { threshold: 0.4 }
    )
    counters.forEach((el) => countIO.observe(el))

    // ---------- booking modal ----------
    const modal = document.getElementById('bookingModal')
    const openBtn = document.getElementById('openBookingMain')

    const openModal = () => {
      modal?.classList.add('open')
      document.body.style.overflow = 'hidden'
    }
    const closeModal = () => {
      modal?.classList.remove('open')
      document.body.style.overflow = ''
    }

    openBtn?.addEventListener('click', openModal)
    document.getElementById('closeModal')?.addEventListener('click', closeModal)
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) closeModal()
    })
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal?.classList.contains('open')) closeModal()
    })

    const bookingForm = document.getElementById('bookingForm') as HTMLFormElement | null
    bookingForm?.addEventListener('submit', (e) => {
      e.preventDefault()
      const formView = document.getElementById('formView')
      const successView = document.getElementById('successView')
      if (formView) formView.style.display = 'none'
      successView?.classList.add('show')
    })

    // ---------- FAB visibility ----------
    const fab = document.getElementById('fabBtn')
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.7) {
        fab?.classList.add('show')
      } else {
        fab?.classList.remove('show')
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
      countIO.disconnect()
    }
  }, [])

  return null
}
