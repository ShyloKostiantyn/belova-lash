// Google Maps embed of the studio's own Business Profile place
// (Belova Lash Studio, 92 Lakeshore Rd E Unit 5A — name, rating and reviews
// show in the card), instead of a plain address pin.
export const MAPS_PLACE_URL = 'https://maps.google.com/?cid=11723274318444420885'

const EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1450!2d-79.5842194!3d43.5533341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b47692d408461%3A0xa2b16fe14b56df15!2sBelova%20Lash%20Studio!5e0!3m2!1sen!2sca!4v1795540000000!5m2!1sen!2sca'

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
