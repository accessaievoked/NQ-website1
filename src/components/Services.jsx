import React, { useEffect, useRef, useState } from 'react';

import CROImg from '../Images/Services1.png';
import ABImg from '../Images/Services2.png';
import ShopifyImg from '../Images/Services3.png';
import MigrationImg from '../Images/Services4.png';

const services = [
  { id: 1, img: CROImg,       title: 'CRO Optimization\n& Revenue Diagnosis'  },
  { id: 2, img: ABImg,        title: 'A/B Testing\n& Experimentation'          },
  { id: 3, img: ShopifyImg,   title: 'Shopify Store\nDesign & Development'     },
  { id: 4, img: MigrationImg, title: 'Platform Migration\nto Shopify & SEO'   },
];

/*
  ViewBox: 856×393  (exact design SVG dimensions)

  With xMidYMid meet + wrapper height of 359px:
    scale = 359/393 = 0.913
    Card images sit between y=62→295 in viewBox = y=57→269px in wrapper ✓
    Top-left circle  (cx=47,  cy=62)  → renders at wrapper-y=57px  = card top ✓
    Bottom-right circle (cx=194, cy=295) → renders at wrapper-y=269px = card bottom ✓

  Wrapper: pt-[57px] pushes grid down so cards start at y=57px
           total height ~359px to fit the path's bottom extent

  PREFIX path connects the two circles to the design S-curve:
    M 47,62        → top-left circle
    L 47,177       → drop to card mid-height
    L 155,177      → across card 1
    C 185,177 194,235 194,295  → curve to bottom-right circle
    C 194,332 80,337 0.5,323.5 → curve left into design path start
*/

const PREFIX =
  'M 47,62 L 47,177 L 155,177 ' +
  'C 182,177 194,232 194,295 ' +
  'C 194,335 70,338 0.504395,323.523 ';

const DESIGN_PATH =
  'C1.36793 325.547 5.42394 329.612 10.0818 333.393 ' +
  'C15.5145 337.803 20.8281 341.248 28.8224 344.157 ' +
  'C35.1334 346.453 41.7623 346.778 47.5847 346.207 ' +
  'C53.4939 345.627 59.2076 342.731 64.886 339.237 ' +
  'C70.0649 336.051 73.4603 329.943 77.2503 325.285 ' +
  'C81.4739 320.095 85.0963 312.795 87.8657 306.972 ' +
  'C90.8579 300.682 94.1155 294.477 97.3123 288.367 ' +
  'C100.999 281.32 102.838 274.712 106.179 267.581 ' +
  'C110.235 258.923 115.032 247.986 118.539 238.949 ' +
  'C122.708 228.204 124.941 222.952 127.698 217.853 ' +
  'C130.768 212.174 132.495 205.506 136.56 195.632 ' +
  'C140.334 186.463 143.538 177.908 147.031 170.756 ' +
  'C150.684 163.277 154.877 155.788 164.886 133.17 ' +
  'C169.366 123.047 173.77 116.832 178.14 109.265 ' +
  'C181.53 103.397 184.534 97.9217 187.884 93.1199 ' +
  'C191.347 88.1541 194.705 81.9419 198.495 76.6909 ' +
  'C203.084 70.3317 209.83 63.0312 213.467 58.2294 ' +
  'C217.954 52.3065 225.216 47.3305 232.356 41.2247 ' +
  'C237.944 36.4454 243.255 33.0778 248.785 29.4405 ' +
  'C256.027 24.6768 262.148 21.7384 268.267 18.3889 ' +
  'C273.921 15.294 281.041 12.1435 287.313 10.0981 ' +
  'C293.004 8.2419 299.079 5.74111 305.046 4.13615 ' +
  'C311.559 2.38415 317.973 1.9555 324.955 0.934944 ' +
  'C335.041 -0.539255 345.554 1.65893 355.048 2.67075 ' +
  'C364.361 3.66316 376.362 8.02644 387.754 12.113 ' +
  'C396.362 15.2011 402.582 19.0867 408.265 22.868 ' +
  'C416.022 28.0298 423.516 33.8977 429.635 38.5687 ' +
  'C436.015 43.4391 442.689 51.3429 452.305 60.2138 ' +
  'C457.63 65.1253 460.448 72.5738 466.126 81.292 ' +
  'C470.802 88.4709 474.701 97.2762 478.491 104.847 ' +
  'C482.462 112.781 484.313 118.804 487.213 126.074 ' +
  'C489.97 132.984 495.059 140.017 497.829 147.156 ' +
  'C500.348 153.65 504.358 160.951 507.28 168.235 ' +
  'C509.887 174.734 511.056 180.734 513.529 187.424 ' +
  'C516.265 194.826 520.058 203.971 522.256 211.124 ' +
  'C524.392 218.073 528.205 226.074 531.842 234.522 ' +
  'C535.422 242.835 538.672 249.067 541.878 255.317 ' +
  'C544.811 261.035 544.499 269.112 547.831 276.391 ' +
  'C552.63 286.875 557.269 295.262 562.223 303.291 ' +
  'C565.988 309.392 570.074 314.766 575.303 323.345 ' +
  'C580.249 331.458 586.054 338.596 590.864 344.584 ' +
  'C594.936 349.653 598.562 354.035 606.547 361.292 ' +
  'C613.163 367.305 619.775 370.312 631.83 376.853 ' +
  'C639.382 380.952 646.815 382.244 653.078 384.429 ' +
  'C659.709 386.743 666.302 387.774 672.268 389.663 ' +
  'C678.637 391.679 685.195 391.56 693.049 392.14 ' +
  'C702.058 392.805 710.787 390.984 717.333 389.964 ' +
  'C723.558 388.993 729.977 387.495 737.099 386.043 ' +
  'C747.15 383.993 757.854 378.214 766.18 374.128 ' +
  'C772.614 370.97 779.399 367.154 786.822 362.937 ' +
  'C793.033 359.407 799.758 353.791 806.884 349.704 ' +
  'C812.249 346.628 816.627 342.731 821.429 338.369 ' +
  'C826.863 333.434 834.055 327.344 839.022 321.652 ' +
  'C843.973 316.266 848.604 310.474 852.691 305.079 ' +
  'C853.567 303.767 854.431 302.327 855.321 299.1';

const FULL_PATH = PREFIX + DESIGN_PATH;

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white font-sans px-6 py-10 md:px-20 md:py-20"
    >
      {/* Heading */}
      <h2 className="text-center text-xl md:text-2xl lg:text-4xl text-gray-900 leading-tight max-w-[940px] mx-auto mb-[clamp(40px,6vw,72px)] tracking-tight">
        We partner with ecommerce brands to build{' '}
        <span className="text-sky-500">high-performing Shopify experiences</span>{' '}
        through strategic design, development for Conversion Rate Optimization.
      </h2>

      {/*
        Wrapper height is tuned so the SVG (xMidYMid meet, viewBox 856×393)
        scales to exactly align circles with card corners:
          pt-[57px] → cards start at y=57px in wrapper = y=62 in viewBox ✓
          The wrapper's intrinsic height comes from the grid cards (~213px images + labels)
          Total wrapper ~= 57 + 213 + 89 = ~359px → scale = 359/393 = 0.913
      */}
      <div className="relative max-w-[1200px] mx-auto pt-[57px] pb-[30px]">

        {/*
          SVG uses xMidYMid meet so it scales UNIFORMLY.
          overflow:visible lets the path go slightly above (y<0 in viewBox = above wrapper).
          The SVG is absolute inset-0 so width=100% height=100% of wrapper.
        */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block"
          viewBox="0 0 856 393"
          preserveAspectRatio="xMidYMid meet"
          style={{ overflow: 'visible' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ghost static track */}
          <path d={FULL_PATH} fill="none"
            stroke="#bfdbfe" strokeWidth="1.5" strokeDasharray="8 8" strokeLinecap="round" />
          <circle cx="-230" cy="56" r="38"
            fill="none" stroke="#bfdbfe" strokeWidth="1.5" strokeDasharray="8 8" />
          <circle cx="74" cy="305" r="38"
            fill="none" stroke="#bfdbfe" strokeWidth="1.5" strokeDasharray="8 8" />

          {/* Animated draw-once bright line */}
          <path d={FULL_PATH} fill="none"
            stroke="#00A5FF" strokeWidth="2" strokeLinecap="round"
            strokeDasharray="8 8" pathLength="1000"
            style={{
              strokeDashoffset: visible ? 0 : 1000,
              transition: 'stroke-dashoffset 3s cubic-bezier(0.4,0,0.2,1)',
            }}
          />
          <circle cx="-230" cy="56" r="38"
            fill="none" stroke="#00A5FF" strokeWidth="2" strokeDasharray="8 8"
            style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.3s ease 0.05s' }}
          />
          <circle cx="74" cy="305" r="38"
            fill="none" stroke="#00A5FF" strokeWidth="2" strokeDasharray="8 8"
            style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.3s ease 1.0s' }}
          />
        </svg>

        {/* Desktop grid — 4 columns, lg+ */}
        <div className="hidden lg:grid grid-cols-4 gap-5 relative z-10">
          {services.map((svc) => (
            <div key={svc.id} className="flex flex-col items-center gap-3.5">
              <div className="w-full rounded-2xl overflow-hidden bg-slate-100 shadow-[0_2px_24px_rgba(0,0,0,0.09)] aspect-[4/3]">
                <img src={svc.img} alt={svc.title} loading="lazy" className="w-full h-full object-cover block" />
              </div>
              <span className="text-[clamp(11px,1vw,13px)] font-normal text-[#111] text-center leading-snug whitespace-pre-line">
                {svc.title}
              </span>
            </div>
          ))}
        </div>

        {/* Tablet — 2 columns */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-5 relative z-10">
          {services.map((svc) => (
            <div key={svc.id} className="flex flex-col items-center gap-3">
              <div className="w-full rounded-2xl overflow-hidden bg-slate-100 shadow-sm aspect-[4/3]">
                <img src={svc.img} alt={svc.title} loading="lazy" className="w-full h-full object-cover block" />
              </div>
              <span className="text-[13px] font-normal text-[#111] text-center leading-snug whitespace-pre-line">
                {svc.title}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile — alternating */}
        <div className="flex flex-col gap-4 md:hidden relative z-10">
          {services.map((svc, i) => (
            <div key={svc.id} className={`flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className="w-[78%] flex flex-col items-center gap-2.5">
                <div className="w-full rounded-xl overflow-hidden bg-slate-100 shadow-sm aspect-[4/3]">
                  <img src={svc.img} alt={svc.title} loading="lazy" className="w-full h-full object-cover block" />
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