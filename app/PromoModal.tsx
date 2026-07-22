'use client';

import { useEffect, useState } from 'react';

export default function PromoModal() {
  // 'hidden' — ещё не появился, 'open' — полный попап, 'icon' — свёрнут в значок
  const [mode, setMode] = useState<'hidden' | 'open' | 'icon'>('hidden');
  const [hoverIcon, setHoverIcon] = useState(false);

  // Появляется через 2 секунды после захода / обновления страницы
  useEffect(() => {
    const timer = setTimeout(() => setMode('open'), 2000);
    return () => clearTimeout(timer);
  }, []);

  const collapse = () => setMode('icon');
  const expand = () => setMode('open');

  // Esc сворачивает попап, если он открыт
  useEffect(() => {
    if (mode !== 'open') return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') collapse();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [mode]);

  const isOpen = mode === 'open';
  const isIcon = mode === 'icon';

  return (
    <>
      {/* Затемнение фона с лёгким блюром — только когда попап открыт */}
      <div
        onClick={collapse}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(6,16,11,0.5)',
          backdropFilter: isOpen ? 'blur(6px)' : 'none',
          WebkitBackdropFilter: isOpen ? 'blur(6px)' : 'none',
          zIndex: 9998,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Один и тот же элемент морфит между попапом и вкладкой-значком */}
      <div
        onClick={isIcon ? expand : undefined}
        onMouseEnter={() => isIcon && setHoverIcon(true)}
        onMouseLeave={() => setHoverIcon(false)}
        style={{
          position: 'fixed',
          zIndex: 9999,
          fontFamily: "'Cormorant Garamond', serif",
          background: isIcon
            ? 'linear-gradient(135deg, #c9a35f, #f5d68f)'
            : 'rgba(18,40,29,0.55)',
          backdropFilter: isOpen ? 'blur(24px) saturate(160%)' : 'none',
          WebkitBackdropFilter: isOpen ? 'blur(24px) saturate(160%)' : 'none',
          border: isIcon ? 'none' : '1px solid rgba(201,163,95,0.55)',
          boxShadow: isIcon
            ? '-2px 2px 14px rgba(0,0,0,0.35)'
            : '0 20px 60px rgba(0,0,0,0.55), inset 0 1px 0 rgba(245,214,143,0.12)',
          cursor: isIcon ? 'pointer' : 'default',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',

          // Позиция и форма — вкладка справа, та же сторона, что Instagram
          top: isIcon ? '38%' : '50%',
          left: isIcon ? undefined : '50%',
          right: isIcon ? '0' : undefined,
          width: isIcon
            ? hoverIcon
              ? '56px'
              : '48px'
            : 'min(420px, calc(100vw - 40px))',
          height: isIcon ? (hoverIcon ? '56px' : '48px') : 'auto',
          minHeight: isIcon ? undefined : '220px',
          borderRadius: isIcon ? '10px 0 0 10px' : '16px',
          padding: isIcon ? '0' : '40px 32px',
          transform:
            mode === 'hidden'
              ? 'translate(-50%, -50%) scale(0.8)'
              : isIcon
                ? 'translateY(-50%)'
                : 'translate(-50%, -50%) scale(1)',
          opacity: mode === 'hidden' ? 0 : 1,
          pointerEvents: mode === 'hidden' ? 'none' : 'auto',

          transition:
            'top 0.4s ease, left 0.4s ease, right 0.4s ease, width 0.4s ease, height 0.4s ease, ' +
            'border-radius 0.4s ease, padding 0.4s ease, transform 0.3s ease, opacity 0.3s ease',
        }}
      >
        {/* Значок "%" — показываем, когда свёрнуто */}
        <span
          style={{
            color: '#0a1b13',
            fontSize: '20px',
            fontWeight: 700,
            opacity: isIcon ? 1 : 0,
            transition: 'opacity 0.2s ease',
            position: isIcon ? 'static' : 'absolute',
          }}
        >
          %
        </span>

        {/* Полный контент попапа — показываем, когда развёрнуто */}
        <div
          style={{
            opacity: isOpen ? 1 : 0,
            transition: 'opacity 0.25s ease 0.1s',
            position: isOpen ? 'relative' : 'absolute',
            pointerEvents: isOpen ? 'auto' : 'none',
            width: '100%',
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              collapse();
            }}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: '-16px',
              right: '-8px',
              background: 'none',
              border: 'none',
              color: '#f5d68f',
              fontSize: '28px',
              cursor: 'pointer',
              lineHeight: 1,
            }}
          >
            ×
          </button>

          <h2
            style={{
              color: '#f5d68f',
              fontSize: '32px',
              marginBottom: '8px',
              fontWeight: 600,
              textShadow: '0 2px 12px rgba(0,0,0,0.4)',
            }}
          >
            20% Off Your First Visit
          </h2>

          <p
            style={{
              color: '#f1e8d4',
              fontSize: '18px',
              marginBottom: '24px',
              textShadow: '0 1px 8px rgba(0,0,0,0.35)',
            }}
          >
            Use promo code{' '}
            <strong style={{ color: '#f5d68f' }}>FIRST20</strong> — just
            mention it when booking
          </p>

          <a
            href="https://dikidi.net/614543"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #c9a35f, #f5d68f)',
              color: '#0a1b13',
              padding: '14px 32px',
              borderRadius: '999px',
              fontWeight: 600,
              fontSize: '18px',
              textDecoration: 'none',
            }}
          >
            Book Now & Save
          </a>
        </div>
      </div>
    </>
  );
}
