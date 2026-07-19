import React, { useEffect, useRef, useState } from 'react';

import CROImg from '../assets/images/home/Services/CRO Optimization.png';
import ABImg from '../assets/images/home/Services/B Testing.png';
import ShopifyImg from '../assets/images/home/Services/Design & Development.png';
import MigrationImg from '../assets/images/home/Services/Platform Migration.png';

const services = [
  { id: 1, img: CROImg, title: 'CRO Optimization\n& Revenue Diagnosis' },
  { id: 2, img: ABImg, title: 'A/B Testing\n& Experimentation' },
  { id: 3, img: ShopifyImg, title: 'Shopify Store\nDesign & Development' },
  { id: 4, img: MigrationImg, title: 'Platform Migration\nto Shopify & SEO' },
];

const DESIGN_PATH =
  // First circle to A/B Testing bottom curve
  'M100.87,331.87 ' +
  'C132,369 204,371 239,334 ' +
  'C264,306 257,269 230,250 ' +
  'C206,232 166,236 141,257 ' +
  'C122,273 117,259 127,225 ' +

  // A/B Testing top curve to Shopify
  'M300,60 ' +
  'C342,4 407,4 455,60 ' +

  // Shopify bottom curve to Platform Migration
  'M510,187 ' +
  'C538,280 582,373 656,391 ' +
  'C731,409 809,354 855,299';

const FULL_PATH = DESIGN_PATH;

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-6 py-10 md:px-20 md:py-10 md:pb-20"
    >
      <h2 className="text-center text-xl md:text-2xl lg:text-4xl text-gray-900 leading-tight max-w-[940px] mx-auto mb-[clamp(40px,6vw,72px)] tracking-tight">
        We partner with ecommerce brands to build{' '}
        <span className="text-[#00A5FF]">
          high-performing Shopify experiences
        </span>{' '}
        through strategic design, development for Conversion Rate Optimization.
      </h2>

      <div className="relative mx-auto pt-[57px] pb-[30px]">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block"
          viewBox="0 0 856 393"
          preserveAspectRatio="xMidYMid meet"
          style={{ overflow: 'visible' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Static dashed paths */}
          <path
            d={FULL_PATH}
            fill="none"
            stroke="#84cef7"
            strokeWidth="1.5"
            strokeDasharray="3 8"
            strokeLinecap="round"
          />

          {/* Circle on the first card */}
          <circle
            cx="-230"
            cy="56"
            r="38"
            fill="none"
            stroke="#84cef7"
            strokeWidth="1.5"
            strokeDasharray="8 8"
          />

          <circle
            cx="74"
            cy="305"
            r="38"
            fill="none"
            stroke="#84cef7"
            strokeWidth="1.5"
            strokeDasharray="8 8"
          />

          {/* Animated paths */}
          <path
            d={FULL_PATH}
            fill="none"
            stroke="#84cef7"
            strokeWidth="2"
            strokeDasharray="3 8"
            strokeLinecap="round"
            pathLength="1000"
            style={{
              strokeDashoffset: visible ? 0 : 1000,
              transition: 'stroke-dashoffset 3s cubic-bezier(0.4,0,0.2,1)',
            }}
          />

          <circle
            cx="-230"
            cy="56"
            r="38"
            fill="none"
            stroke="#84cef7"
            strokeWidth="2"
            strokeDasharray="8 8"
            style={{
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.3s ease 0.05s',
            }}
          />

          <circle
            cx="74"
            cy="305"
            r="38"
            fill="none"
            stroke="#00A5FF"
            strokeWidth="2"
            strokeDasharray="8 8"
            style={{
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.3s ease 1s',
            }}
          />
        </svg>

        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-4 gap-5 relative z-10">
          {services.map((svc) => (
            <div key={svc.id} className="flex flex-col items-center gap-3.5">
              <div className="w-full rounded-md overflow-hidden bg-slate-100 shadow-[0_2px_24px_rgba(0,0,0,0.09)] aspect-[4/3]">
                <img
                  src={svc.img}
                  alt={svc.title}
                  loading="lazy"
                  className="w-full h-full object-cover block"
                />
              </div>

              <span className="text-[clamp(12px,2vw,15px)] font-semibold text-black text-center leading-snug whitespace-pre-line ml-12">
                {svc.title}
              </span>
            </div>
          ))}
        </div>

        {/* Tablet */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-5 relative z-10">
          {services.map((svc) => (
            <div key={svc.id} className="flex flex-col items-center gap-3">
              <div className="w-full rounded-2xl overflow-hidden bg-slate-100 shadow-sm aspect-[4/3]">
                <img
                  src={svc.img}
                  alt={svc.title}
                  loading="lazy"
                  className="w-full h-full object-cover block"
                />
              </div>

              <span className="text-[13px] font-normal text-[#111] text-center leading-snug whitespace-pre-line">
                {svc.title}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="flex flex-col gap-4 md:hidden relative z-10">
          {services.map((svc, i) => (
            <div
              key={svc.id}
              className={`flex ${
                i % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              <div className="w-[58%] flex flex-col items-center gap-2.5">
                <div className="w-full rounded-md overflow-hidden bg-slate-100 shadow-sm aspect-[4/3]">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    loading="lazy"
                    className="w-full h-full object-cover block"
                  />
                </div>

                <span className="text-[12px] font-normal text-[#111] text-center leading-snug whitespace-pre-line">
                  {svc.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

