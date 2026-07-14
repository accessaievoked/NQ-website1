import React from 'react';

import Hov from '../Images/Hov.png';
import Que from '../Images/Que.png';
import MasculinoLatino from '../Images/Masculino Latino.png';
import ThreeSixty from '../Images/ThreeSixty.png';
import Covera from '../Images/Covera.png';

const logos = [
  { src: Hov, alt: 'Hov' },
  { src: Que, alt: 'Que Universe' },
  { src: MasculinoLatino, alt: 'Masculino Latino' },
  { src: ThreeSixty, alt: 'ThreeSixty' },
  { src: Covera, alt: 'Covera' },
];

// Duplicate for seamless 50% translateX loop
const all = [...logos, ...logos];

export default function LogoTicker() {
  return (
    <section
      style={{ position: 'relative', overflow: 'hidden', width: '100%', maxWidth: '100vw' }}
      className="py-10 md:py-20"
    >
      <style>{`
        @keyframes logo-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .ticker-wrapper {
          overflow: hidden;
          width: 100%;
          max-width: 100%;
          min-width: 0; /* prevents flex/grid parents from stretching to fit content */
        }
        .ticker-inner {
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
          width: max-content;
          animation: logo-scroll 30s linear infinite;
          will-change: transform;
        }
        .ticker-inner:hover {
          animation-play-state: paused;
        }
        .ticker-item {
          margin: 0 40px;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .ticker-item img {
          height: 38px;
          width: auto;
          object-fit: contain;
          opacity: 0.6;
          mix-blend-mode: var(--ticker-blend);
          filter: var(--logo-filter);
        }
        .ticker-fade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 100px;
          z-index: 10;
          pointer-events: none;
        }
        .ticker-fade.left {
          left: 0;
          background: linear-gradient(to right, var(--bg-primary), transparent);
        }
        .ticker-fade.right {
          right: 0;
          background: linear-gradient(to left, var(--bg-primary), transparent);
        }

        @media (max-width: 1024px) {
          .ticker-item { margin: 0 28px; }
          .ticker-item img { height: 32px; }
          .ticker-fade { width: 64px; }
          .ticker-inner { animation-duration: 24s; }
        }

        @media (max-width: 640px) {
          .ticker-item { margin: 0 18px; }
          .ticker-item img { height: 26px; }
          .ticker-fade { width: 36px; }
          .ticker-inner { animation-duration: 18s; }
        }

        @media (max-width: 380px) {
          .ticker-item { margin: 0 14px; }
          .ticker-item img { height: 22px; }
          .ticker-fade { width: 24px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .ticker-inner { animation: none; }
        }
      `}</style>

      <div className="ticker-fade left" />
      <div className="ticker-fade right" />

      <div className="ticker-wrapper">
        <div className="ticker-inner">
          {all.map((logo, i) => (
            <div key={i} className="ticker-item">
              <img src={logo.src} alt={logo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}