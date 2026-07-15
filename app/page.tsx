import Image from 'next/image'
import SiteScripts from '@/components/SiteScripts'

import LocationMap from '@/components/LocationMap'

export default function Home() {
  return (
    <>
<div id="particles"></div>

{/* ============ HEADER ============ */}
<header>
  <div className="header-inner">
    <a href="#top" className="brand">
      <img src="/images/logo.png" alt="Belova Lash Studio" />
      <span>
        <span className="word">Belova</span>
        <span className="sub">Lash Studio</span>
      </span>
    </a>
    <nav className="main-nav">
      <a href="#about">About</a>
      <a href="#pricing">Services</a>
      <a href="#products">Products</a>
      <a href="#gallery">Work</a>
      <a href="#reviews">Reviews</a>
      <a href="#location">Location</a>
      <a href="#contacts">Contact</a>
    </nav>
    <div className="header-cta">
      <a className="btn btn-gold btn-sm" href="https://dikidi.net/614543" target="_blank" rel="noopener">Book Now</a>
      <button className="burger" id="burgerBtn" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>

<div className="mobile-nav" id="mobileNav">
  <a href="#about">About</a>
  <a href="#pricing">Services</a>
  <a href="#products">Products</a>
  <a href="#gallery">Work</a>
  <a href="#reviews">Reviews</a>
  <a href="#location">Location</a>
  <a href="#contacts">Contact</a>
</div>

<main id="top">

{/* ============ HERO ============ */}
<section className="hero">
  <div className="hero-bg-glow"></div>
  <div className="wrap hero-grid">
    <div>
      <span className="eyebrow">Eyelash Extension Studio · Mississauga &amp; Toronto</span>
      <h1>Your eyes&nbsp;— <em>they're the first</em>,<br />thing people notice</h1>
      <p className="lede">BELOVA is Maryna Belova's eyelash extension studio and her own line of professional lash supplies. From one lash artist at a single station — to a brand trusted by lash artists worldwide.</p>
      <div className="hero-ctas">
        <a className="btn btn-gold" href="https://dikidi.net/614543" target="_blank" rel="noopener">Book an Appointment</a>
        <a href="#products" className="btn btn-ghost">Shop Products</a>
      </div>
      <div className="hero-stats">
        <div>
          <div className="stat-num" data-count="9500">0<span>+</span></div>
          <div className="stat-label">clients served</div>
        </div>
        <div>
          <div className="stat-num" data-count="3000">0<span>+</span></div>
          <div className="stat-label">lash artists trained</div>
        </div>
        <div>
          <div className="stat-num">5.0<span>★</span></div>
          <div className="stat-label">average rating</div>
        </div>
        <div>
          <div className="stat-num" style={{fontSize:'1.3rem'}}>since 2011</div>
          <div className="stat-label">in the beauty industry</div>
        </div>
      </div>
    </div>
    <div className="hero-art">
      <svg viewBox="0 0 480 420" fill="none">
        <circle className="ring" cx="240" cy="210" r="190" stroke-dasharray="2 10"/>
        <circle className="ring" cx="240" cy="210" r="150" stroke-dasharray="1 7" style={{animationDirection:'reverse',animationDuration:'80s'}}/>
        <g stroke="url(#goldGrad)" strokeWidth="2.4">
          <path className="lash-path" d="M240 260 C 230 190, 210 120, 150 70" style={{animationDelay:'0.05s'}}/>
          <path className="lash-path" d="M240 262 C 232 185, 222 110, 185 50" style={{animationDelay:'0.2s'}}/>
          <path className="lash-path" d="M240 264 C 240 185, 240 105, 225 40" style={{animationDelay:'0.35s'}}/>
          <path className="lash-path" d="M240 264 C 248 185, 258 105, 270 42" style={{animationDelay:'0.5s'}}/>
          <path className="lash-path" d="M240 262 C 252 185, 270 110, 305 55" style={{animationDelay:'0.65s'}}/>
          <path className="lash-path" d="M240 260 C 256 190, 282 125, 335 78" style={{animationDelay:'0.8s'}}/>
          <path className="lash-path" d="M240 258 C 262 195, 296 140, 360 105" style={{animationDelay:'0.95s'}}/>
        </g>
        <ellipse cx="240" cy="268" rx="64" ry="14" fill="url(#goldGradSoft)" opacity="0.5"/>
        <defs>
          <linearGradient id="goldGrad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#9a7531"/>
            <stop offset="1" stopColor="#f4dfae"/>
          </linearGradient>
          <radialGradient id="goldGradSoft">
            <stop offset="0" stopColor="#cda35f" stopOpacity="0.6"/>
            <stop offset="1" stopColor="#cda35f" stopOpacity="0"/>
          </radialGradient>
        </defs>
      </svg>
    </div>
  </div>
</section>

{/* ============ ABOUT ============ */}
<section className="section-pad" id="about">
  <div className="wrap">
    <div className="reveal about-single">
      <span className="eyebrow">About the Artist</span>
      <h2 className="about-name" style={{marginTop:'14px'}}>Maryna Belova</h2>
      <span className="about-role">Lash Artist · Educator · Brand Founder</span>
      <div className="about-body">
        <p>Maryna moved from Ukraine 🇺🇦 to Canada 🇨🇦 and kept doing what she does best — creating a striking, expressive look. Today she's a certified eyelash extension specialist, brow artist and permanent makeup artist, as well as an educator who has trained thousands of lash artists.</p>
        <p>After years behind the lash table, Maryna launched her own line of professional supplies, BELOVA Lash Brand — because she wanted lashes, adhesives and tools she could trust herself. Today, lash artists far beyond Mississauga and Toronto rely on them.</p>
      </div>
      <div className="about-stats">
        <div><div className="stat-num">9,500+</div><div className="stat-label">clients in the studio</div></div>
        <div><div className="stat-num">3,000+</div><div className="stat-label">lash artists trained</div></div>
        <div><div className="stat-num">5.0★</div><div className="stat-label">Google rating</div></div>
        <div><div className="stat-num">2 cities</div><div className="stat-label">Mississauga &amp; Toronto</div></div>
      </div>
    </div>
  </div>
</section>

<div className="curl-divider">
  <svg width="120" height="24" viewBox="0 0 120 24"><path d="M2 18 C 30 -4, 60 28, 118 6" stroke="#cda35f" strokeWidth="1.2" fill="none" opacity="0.6"/></svg>
</div>

{/* ============ PRICING ============ */}
<section className="section-pad alt-bg" id="pricing">
  <div className="wrap">
    <div className="section-head reveal">
      <span className="eyebrow">Services &amp; Pricing</span>
      <h2>Eyelash Extensions by Our Studio Artists</h2>
      <p>Effective July 1st. Infill (refill) is the full set price minus $20, regardless of the artist.</p>
    </div>
    <div className="price-grid">
      <div className="price-card reveal">
        <span className="tag">Studio Pricing</span>
        <h3>Eyelash Extensions</h3>
        <span className="role">Maryna Belova &amp; Valentina · Studio Artists</span>
        <div className="price-rows">
          <div className="price-row"><span className="name">Classic<small>Classic lash extensions</small></span><span className="amount">$100–$120</span></div>
          <div className="price-row"><span className="name">Hybrid<small>Hybrid volume</small></span><span className="amount">$120–$150</span></div>
          <div className="price-row"><span className="name">Volume<small>Volume lash extensions</small></span><span className="amount">$150–$180</span></div>
        </div>
        <div className="price-note">Infill — full price minus $20 · Final price depends on chosen artist, confirmed at booking</div>
      </div>
    </div>
    <div className="services-extra reveal">
      <span className="svc-chip">Permanent Makeup</span>
      <span className="svc-chip">Signature Training Courses</span>
      <span className="svc-chip">Ask about pricing when booking</span>
    </div>
  </div>
</section>

{/* ============ PRODUCTS ============ */}
<section className="section-pad" id="products">
  <div className="wrap">
    <div className="section-head reveal">
      <span className="eyebrow">Belova Lash Brand</span>
      <h2>Supplies Maryna Created for Herself</h2>
      <p>Professional lashes, tools and supplies from her own brand — now available to lash artists worldwide at belovalashstore.ca.</p>
    </div>

    <div className="products-grid">

      <div className="product-card reveal anim-shimmer">
        <div className="product-media"><img src="/images/product-extensions.jpg" alt="Belova Lash eyelash extension trays" /></div>
        <div className="product-body">
          <h3>Eyelash Extension Trays</h3>
          <span className="price">from $24.00 CAD</span>
          <span className="desc">Full curl range in signature Belova packaging</span>
          <div className="curl-chips"><span>B</span><span>C</span><span>CC</span><span>D</span><span>L</span><span>M</span><span>V</span></div>
          <a className="shop-link" href="https://belovalashstore.ca" target="_blank" rel="noopener">Shop Now <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2"><path d="M7 17 17 7M9 7h8v8"/></svg></a>
        </div>
      </div>

      <div className="product-card reveal anim-float">
        <div className="product-media"><img src="/images/product-mixedtray.jpg" alt="Belova Lash mixed length trays" /></div>
        <div className="product-body">
          <h3>Mixed Length Trays</h3>
          <span className="price">from $25.50 CAD</span>
          <span className="desc">Mixed Length — for fast, precise length selection</span>
          <a className="shop-link" href="https://belovalashstore.ca" target="_blank" rel="noopener">Shop Now <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2"><path d="M7 17 17 7M9 7h8v8"/></svg></a>
        </div>
      </div>

      <div className="product-card reveal anim-glint">
        <div className="product-media"><img src="/images/product-tweezers.jpg" alt="Belova Lash L-Bend volume tweezers" /></div>
        <div className="product-body">
          <h3>L-Bend Volume Tweezers</h3>
          <span className="price">$26.00 CAD</span>
          <span className="desc">Precision-ground tips for fast volume fan pick-up</span>
          <a className="shop-link" href="https://belovalashstore.ca" target="_blank" rel="noopener">Shop Now <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2"><path d="M7 17 17 7M9 7h8v8"/></svg></a>
        </div>
      </div>

      <div className="product-card reveal anim-pulsering">
        <div className="product-media"><img src="/images/product-adhesive.jpg" alt="Belova Lash premium adhesive" /></div>
        <div className="product-body">
          <h3>Premium Lash Adhesive</h3>
          <span className="price">$30.00 CAD</span>
          <span className="desc">Premium adhesive with fast curing time</span>
          <a className="shop-link" href="https://belovalashstore.ca" target="_blank" rel="noopener">Shop Now <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2"><path d="M7 17 17 7M9 7h8v8"/></svg></a>
        </div>
      </div>

      <div className="product-card reveal anim-bubble">
        <div className="product-media">
          <img src="/images/product-accelerator.jpg" alt="Belova Lash glue accelerator" />
          <span className="bubble" style={{left:'30%',animationDelay:'0s'}}></span>
          <span className="bubble" style={{left:'55%',animationDelay:'1.1s'}}></span>
          <span className="bubble" style={{left:'70%',animationDelay:'2.2s'}}></span>
        </div>
        <div className="product-body">
          <h3>Lash Glue Accelerator</h3>
          <span className="price">$28.00 CAD</span>
          <span className="desc">Accelerator for faster adhesive curing</span>
          <a className="shop-link" href="https://belovalashstore.ca" target="_blank" rel="noopener">Shop Now <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2"><path d="M7 17 17 7M9 7h8v8"/></svg></a>
        </div>
      </div>

      <div className="product-card reveal anim-drip">
        <div className="product-media">
          <img src="/images/product-bonder.jpg" alt="Belova Lash — Lash Bonder Pure" />
          <span className="drop" style={{left:'38%',animationDelay:'0s'}}></span>
          <span className="drop" style={{left:'62%',animationDelay:'1.7s'}}></span>
        </div>
        <div className="product-body">
          <h3>Lash Bonder Pure</h3>
          <span className="price">$28.00 CAD</span>
          <span className="desc">Seals the bond and extends retention</span>
          <a className="shop-link" href="https://belovalashstore.ca" target="_blank" rel="noopener">Shop Now <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2"><path d="M7 17 17 7M9 7h8v8"/></svg></a>
        </div>
      </div>

      <div className="product-card reveal anim-dissolve">
        <div className="product-media">
          <img src="/images/product-remover.jpg" alt="Belova Lash Strawberry extension remover" />
          <span className="ripple r1"></span>
          <span className="ripple r2"></span>
        </div>
        <div className="product-body">
          <h3>Lash Extension Remover</h3>
          <span className="price">$30.00 CAD</span>
          <span className="desc">Strawberry scent — gentle, fast lash removal</span>
          <a className="shop-link" href="https://belovalashstore.ca" target="_blank" rel="noopener">Shop Now <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2"><path d="M7 17 17 7M9 7h8v8"/></svg></a>
        </div>
      </div>

      <div className="product-card reveal anim-shine">
        <div className="product-media"><img src="/images/product-protein.jpg" alt="Belova Lash protein remover" /></div>
        <div className="product-body">
          <h3>Protein Remover</h3>
          <span className="price">$26.00 CAD</span>
          <span className="desc">Degreases and preps lashes before application</span>
          <a className="shop-link" href="https://belovalashstore.ca" target="_blank" rel="noopener">Shop Now <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2"><path d="M7 17 17 7M9 7h8v8"/></svg></a>
        </div>
      </div>

    </div>
  </div>
</section>

{/* ============ GALLERY / PORTFOLIO ============ */}
<section className="section-pad" id="gallery">
  <div className="wrap">
    <div className="section-head reveal">
      <span className="eyebrow">Our Work</span>
      <h2>A Closer Look at the Results</h2>
      <p>Real sets, real clients — a glimpse into the studio and the finished look.</p>
    </div>
    <div className="gallery-grid">

      <div className="gallery-card reveal anim-shimmer">
        <div className="gallery-media"><img src="/images/gallery-studio.jpg" alt="Maryna Belova applying eyelash extensions in the studio" /></div>
        <div className="gallery-caption"><span>The Process</span></div>
      </div>

      <div className="gallery-card reveal anim-float">
        <div className="gallery-media"><img src="/images/gallery-eye1.jpg" alt="Close-up of finished eyelash extensions" /></div>
        <div className="gallery-caption"><span>The Detail</span></div>
      </div>

      <div className="gallery-card reveal anim-glint">
        <div className="gallery-media"><img src="/images/gallery-hijab.jpg" alt="Client portrait showing eyelash extensions and brow work" /></div>
        <div className="gallery-caption"><span>The Result</span></div>
      </div>

      <div className="gallery-card reveal anim-shine">
        <div className="gallery-media"><img src="/images/gallery-eye2.jpg" alt="Close-up of voluminous eyelash extensions" /></div>
        <div className="gallery-caption"><span>The Finish</span></div>
      </div>

    </div>
  </div>
</section>

{/* ============ REVIEWS ============ */}
<section className="section-pad alt-bg" id="reviews">
  <div className="wrap">
    <div className="section-head reveal">
      <span className="eyebrow">Reviews</span>
      <h2>What Clients &amp; Students Say</h2>
      <div className="rating-badges">
        <span className="rating-badge"><span className="stars">★★★★★</span> 5.0 on Google</span>
        <span className="rating-badge"><span className="stars">★★★★★</span> 5/5 on DIKIDI · 9 ratings</span>
      </div>
    </div>
    <div className="reviews-grid">
      <div className="review-card reveal">
        <span className="stars">★★★★★</span>
        <p>“One of the best lash artists I've been to — careful attention to detail and real care for client comfort at every step.”</p>
        <div className="who"><span className="name">Kasia</span><span className="src">Google</span></div>
      </div>
      <div className="review-card reveal">
        <span className="stars">★★★★★</span>
        <p>“The lashes turned out absolutely gorgeous: neat, professional and quick.”</p>
        <div className="who"><span className="name">Liudmila V.</span><span className="src">Google</span></div>
      </div>
      <div className="review-card reveal">
        <span className="stars">★★★★★</span>
        <p>“Took Maryna's brow lamination and shaping course — an incredible experience packed with practical knowledge.”</p>
        <div className="who"><span className="name">Olha K.</span><span className="src">Google</span></div>
      </div>
      <div className="review-card reveal">
        <span className="stars">★★★★★</span>
        <p>“I've trusted Maryna with my lashes for over a year now — a true master of her craft.”</p>
        <div className="who"><span className="name">Viktoriia A.</span><span className="src">Google</span></div>
      </div>
      <div className="review-card reveal">
        <span className="stars">★★★★★</span>
        <p>“A client since 2017, back in Ukraine. The work is always fast, and the chair is one of the most comfortable I've ever sat in.”</p>
        <div className="who"><span className="name">Alina B.</span><span className="src">Google</span></div>
      </div>
      <div className="review-card reveal">
        <span className="stars">★★★★★</span>
        <p>“A talented artist with incredible attention to detail. Plus, a wonderfully comfortable reclining chair.”</p>
        <div className="who"><span className="name">Aleana S.</span><span className="src">Local Guide · Google</span></div>
      </div>
      <div className="review-card reveal">
        <span className="stars">★★★★★</span>
        <p>“The three-day training course gave me more than I expected — thorough, clear, and to the point.”</p>
        <div className="who"><span className="name">Madina T.</span><span className="src">Google</span></div>
      </div>
      <div className="review-card reveal">
        <span className="stars">★★★★★</span>
        <p>“In 12 years of getting lash extensions, this is one of the best results I've seen.”</p>
        <div className="who"><span className="name">Kateryna B.</span><span className="src">Local Guide · Google</span></div>
      </div>
    </div>
  </div>
</section>

{/* ============ BOOKING ============ */}
<section className="section-pad" id="booking">
  <div className="wrap">
    <div className="booking-section reveal">
      <div className="booking-grid">
        <div>
          <span className="eyebrow">Book Your Appointment</span>
          <h2 style={{marginTop:'14px',fontSize:'clamp(1.9rem,3.4vw,2.6rem)'}}>Book with Maryna or Valentina</h2>
          <p style={{marginTop:'16px',color:'var(--cream-soft)',maxWidth:'460px'}}>Send a request through the form, or pick whichever contact method suits you — we'll get back to you as soon as possible.</p>
          <div style={{marginTop:'32px'}}>
            <button className="btn btn-gold" id="openBookingMain">Open Booking Form</button>
          </div>
          <div className="quick-actions">
            <a className="quick-action" href="tel:+12897954370">
              <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span>
              <span className="txt"><b>Call Directly</b><span>+1 289 795 4370</span></span>
            </a>
            <a className="quick-action" href="https://dikidi.net/614543" target="_blank" rel="noopener">
              <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg></span>
              <span className="txt"><b>Book via DIKIDI</b><span>Online booking · 5/5 rating</span></span>
            </a>
            <a className="quick-action" href="https://instagram.com/belova.lash.brow" target="_blank" rel="noopener">
              <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></span>
              <span className="txt"><b>Message on Instagram</b><span>@belova.lash.brow</span></span>
            </a>
          </div>
          <div className="hours-box">
            <b>Studio</b>
            92 Lakeshore Rd E, Unit 5A, Mississauga, ON · Open daily from 9:00 AM
          </div>
        </div>
        <div>
          <img src="/images/logo.png" alt="" style={{width:'140px',opacity:'0.9',margin:'0 auto 24px',display:'block'}} />
          <p style={{textAlign:'center',color:'var(--cream-soft)',fontSize:'0.92rem'}}>“Every booking is a future look we'll get to create with care.”</p>
          <p style={{textAlign:'center',color:'var(--gold-2)',fontSize:'0.8rem',marginTop:'10px'}}>— Maryna Belova</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ============ LOCATION / MAP ============ */}
<section className="section-pad alt-bg" id="location">
  <div className="wrap">
    <div className="section-head reveal">
      <span className="eyebrow">Find Us</span>
      <h2>Visit the Studio in Port Credit</h2>
      <p>Located in the heart of Port Credit, just steps from Lake Ontario — easy to find, easy to park.</p>
    </div>
    <div className="location-grid">
      <div className="map-frame reveal">
        <LocationMap />
        <div className="frame-corner tl"></div>
        <div className="frame-corner br"></div>
      </div>
      <div className="location-info reveal">
        <div className="addr-block">
          <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></span>
          <div>
            <b>Belova Lash Studio</b>
            <span>92 Lakeshore Rd E, Unit 5A<br />Mississauga, ON L5G 4S2</span>
          </div>
        </div>
        <a className="btn btn-gold" href="https://www.google.com/maps/search/?api=1&query=92+Lakeshore+Rd+E+Unit+5A+Mississauga+ON+L5G+4S2" target="_blank" rel="noopener" style={{alignSelf:'flex-start'}}>
          Get Directions
          <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" style={{width:'16px',height:'16px',marginLeft:'2px'}}><path d="M7 17 17 7M9 7h8v8"/></svg>
        </a>
        <div className="location-hours">
          <b>Hours</b>
          Open daily from 9:00 AM
        </div>
        <p className="location-note">Above Rabba, on the corner of Lakeshore Road East &amp; Elizabeth Street.</p>
      </div>
    </div>
  </div>
</section>

</main>

{/* ============ FOOTER ============ */}
<footer id="contacts">
  <div className="wrap">
    <div className="footer-grid">
      <div className="footer-brand">
        <a href="#top" className="brand">
          <img src="/images/logo.png" alt="Belova Lash Studio" />
          <span><span className="word">Belova</span><span className="sub">Lash Studio</span></span>
        </a>
        <p>Maryna Belova's eyelash extension studio and her own line of professional lash supplies. Mississauga &amp; Toronto.</p>
      </div>
      <div className="footer-col">
        <h5>Contact</h5>
        <a href="tel:+12897954370">+1 289 795 4370</a>
        <a href="mailto:majgik4@gmail.com">majgik4@gmail.com</a>
        <span className="line">92 Lakeshore Rd E, Unit 5A,<br />Mississauga, ON L5G 4S2</span>
      </div>
      <div className="footer-col">
        <h5>Social &amp; Shop</h5>
        <a href="https://instagram.com/belova.lash.brow" target="_blank" rel="noopener">Instagram · @belova.lash.brow</a>
        <a href="https://instagram.com/belova.brand_official" target="_blank" rel="noopener">Instagram · @belova.brand_official</a>
        <a href="https://belovalashstore.ca" target="_blank" rel="noopener">belovalashstore.ca</a>
      </div>
      <div className="footer-col">
        <h5>Booking</h5>
        <a href="https://dikidi.net/614543" target="_blank" rel="noopener">DIKIDI · online booking</a>
        <span className="line">Rating 5/5 · 9 ratings · 6 reviews</span>
        <span className="line">Open daily from 9:00 AM</span>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2026 Belova Lash Studio. All rights reserved.</span>
      <span>Mississauga · Toronto, Ontario</span>
    </div>
  </div>
</footer>

{/* ============ FAB ============ */}
<a className="fab" id="fabBtn" href="https://dikidi.net/614543" target="_blank" rel="noopener" aria-label="Book Now">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M9 16l2 2 4-4"/></svg>
</a>

{/* ============ BOOKING MODAL ============ */}
<div className="modal-overlay" id="bookingModal">
  <div className="modal-box">
    <button className="modal-close" id="closeModal" aria-label="Close">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
    </button>

    <div id="formView">
      <h3>Book Your Appointment</h3>
      <span className="sub">Fill out the form and we'll reach out to confirm the time.</span>
      <form id="bookingForm">
        <div className="field-row">
          <div className="field full">
            <label>Name</label>
            <input type="text" placeholder="Your full name" required />
          </div>
          <div className="field">
            <label>Phone</label>
            <input type="tel" placeholder="+1 ___ ___ ____" required />
          </div>
          <div className="field">
            <label>Email (optional)</label>
            <input type="email" placeholder="you@email.com" />
          </div>
          <div className="field">
            <label>Service</label>
            <select required>
              <option value="">Select a service</option>
              <option>Lash Extensions — Classic</option>
              <option>Lash Extensions — Hybrid</option>
              <option>Lash Extensions — Volume</option>
              <option>Infill</option>
              <option>Brow Lamination</option>
              <option>Permanent Makeup</option>
              <option>Training Course</option>
            </select>
          </div>
          <div className="field">
            <label>Artist</label>
            <select required>
              <option value="">No preference</option>
              <option>Maryna Belova</option>
              <option>Valentina</option>
            </select>
          </div>
          <div className="field">
            <label>Date</label>
            <input type="date" />
          </div>
          <div className="field">
            <label>Time</label>
            <input type="time" />
          </div>
          <div className="field full">
            <label>Comment</label>
            <textarea placeholder="E.g., first time, allergies, special requests"></textarea>
          </div>
        </div>
        <div className="submit-row">
          <button type="submit" className="btn btn-gold">Submit Request</button>
        </div>
      </form>
    </div>

    <div className="success-box" id="successView">
      <div className="check">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <h4>Request Received!</h4>
      <p>We'll be in touch shortly to confirm. Need it sooner? Call us or book directly through DIKIDI.</p>
      <div style={{display:'flex',gap:'12px',justifyContent:'center',marginTop:'22px',flexWrap:'wrap'}}>
        <a href="tel:+12897954370" className="btn btn-ghost btn-sm">Call Us</a>
        <a href="https://dikidi.net/614543" target="_blank" rel="noopener" className="btn btn-gold btn-sm">DIKIDI</a>
      </div>
    </div>

  </div>
</div>
      <SiteScripts />
    </>
  )
}
