'use client';

import { useState } from 'react';

export default function InstagramSideTab() {
  const [hover, setHover] = useState(false);

  return (
    <a
      href="https://www.instagram.com/belova.lash.brow/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram Belova Lash Studio"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'fixed',
        top: '55%',
        right: 0,
        zIndex: 400,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '48px',
        height: '48px',
        background: '#0a1b13',
        border: '1px solid #c9a35f',
        borderRadius: '10px 0 0 10px',
        boxShadow: '-2px 2px 14px rgba(0,0,0,0.35)',
        transform: hover ? 'scale(1.12) translateX(-2px)' : 'scale(1)',
        transition: 'transform 0.25s ease',
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f5d68f"
        strokeWidth="1.8"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.3" cy="6.7" r="1" fill="#f5d68f" stroke="none" />
      </svg>
    </a>
  );
}
