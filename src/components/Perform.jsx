import React, { useState, useEffect } from 'react';

import CoveraCombo from '../Images/CoveraCombo.png';
import ThreeSixtyCombo from '../Images/ThreeSixtyCombo.png';
import HovCombo from '../Images/HovCombo.png';

const slides = [
  { id: 1, src: CoveraCombo,     alt: 'Covera store screenshot'     },
  { id: 2, src: ThreeSixtyCombo, alt: 'ThreeSixty store screenshot' },
  { id: 3, src: HovCombo,        alt: 'Hov store screenshot'        },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % slides.length);
        setFading(false);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-6 py-10 md:px-20 md:py-2" style={{
      background: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'inherit',
    }}>
      <style>{`
        .hero-heading {
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: -0.02em;
          text-align: center;
          margin: 0 0 clamp(32px, 5vw, 56px);
        }
        .hero-heading .highlight {
          display: inline-block;
          background: #dbeafe;
          color: #000;
          padding: 2px 12px;
          border-left :3px solid #87B5DA;
          border-right :3px solid #87B5DA;
          line-height: 1.4;
        }
        .hero-image-wrap {
          width: 80%;
          overflow: hidden;
          
          aspect-ratio: 16/10;
          position: relative;
        }
        .hero-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: opacity 0.4s ease;
        }
        .hero-image-wrap img.fading {
          opacity: 0;
        }
        .hero-dots {
          display: flex;
          gap: 8px;
          margin-top: 20px;
          justify-content: center;
        }
       
        @media (max-width: 600px) {
          .hero-image-wrap {
            border-radius: 10px;
            aspect-ratio: 4/3;
          }
        }
      `}</style>

      <h2 className="hero-heading text-center text-xl md:text-2xl lg:text-4xl text-black leading-tight max-w-[940px] mx-auto mb-[clamp(40px,6vw,72px)] tracking-tight">
        Your Store Will Perform Better{' '}
        <span className="highlight">Next Quarter</span>
        <br />
        Than It Does Today.
      </h2>

      <div className="hero-image-wrap">
        <img
          src={slides[current].src}
          alt={slides[current].alt}
          className={fading ? 'fading' : ''}
        />
      </div>
    </section>
  );
}

