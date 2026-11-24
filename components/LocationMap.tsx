// Google Maps embed of the studio's own Business Profile place
// (Belova Lash Studio, 92 Lakeshore Rd E Unit 5A — name, rating and reviews
// show in the card), instead of a plain address pin.
export const MAPS_PLACE_URL = 'https://maps.google.com/?cid=11723274318444420885'

const EMBED_URL =
  'https://maps.google.com/maps?q=Belova%20Lash%20Studio%2C%2092%20Lakeshore%20Rd%20E%20Unit%205A%2C%20Mississauga%2C%20ON%20L5G%204S2&ll=43.5533341,-79.5842194&z=16&hl=en&output=embed'

export default function LocationMap() {
  return (
    <iframe
      src={EMBED_URL}
      title="Belova Lash Studio on Google Maps — 92 Lakeshore Rd E, Unit 5A, Mississauga"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
      style={{ width: '100%', height: '100%', minHeight: '360px', border: 0, display: 'block' }}
    />
  )
}
