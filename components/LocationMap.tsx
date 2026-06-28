'use client'

import { useEffect, useRef } from 'react'

export default function LocationMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const initRef = useRef(false)

  useEffect(() => {
    if (initRef.current || !mapRef.current) return
    initRef.current = true

    import('leaflet').then((L) => {
      // Fix Leaflet default icon paths broken by webpack
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      })

      const studio: [number, number] = [43.5571, -79.5884]

      const map = L.map(mapRef.current!, {
        scrollWheelZoom: false,
        zoomControl: true,
      }).setView(studio, 16)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map)

      const goldPin = L.divIcon({
        className: 'belova-map-pin',
        html: `<svg width="36" height="46" viewBox="0 0 36 46" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 0C8.06 0 0 8.06 0 18c0 13.5 18 28 18 28s18-14.5 18-28C36 8.06 27.94 0 18 0z" fill="#c9a35f"/>
          <circle cx="18" cy="17" r="7" fill="#0a1b13"/>
        </svg>`,
        iconSize: [36, 46],
        iconAnchor: [18, 46],
        popupAnchor: [0, -40],
      })

      L.marker(studio, { icon: goldPin })
        .addTo(map)
        .bindPopup(
          '<strong>BELOVA Lash Brand</strong><br>92 Lakeshore Rd E, Unit 5A<br>Mississauga, ON L5G 4S2'
        )
        .openPopup()

      map.on('click', () => map.scrollWheelZoom.enable())
    })
  }, [])

  return (
    <div
      ref={mapRef}
      id="leafletMap"
      role="img"
      aria-label="Map showing the BELOVA Lash Brand studio location at 92 Lakeshore Rd E, Mississauga"
      style={{ width: '100%', height: '100%', minHeight: '360px' }}
    />
  )
}
