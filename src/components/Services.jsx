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


const DESIGN_PATH =
  'M84,343 C170,355 260,330 250,270 C243,225 170,115 130,170 C112,221 102.361 275.731 106.179,267.581 ' +
  'C150.235 258.923 115.032 247.986 218.539 258.949C122.708 228.204 124.941 222.952 127.698 217.853C130.768 212.174 132.495 205.506 136.56 195.632C140.334 186.463 143.538 177.908 147.031 170.756C150.684 163.277 154.877 155.788 164.886 133.17C169.366 123.047 173.77 116.832 178.141 109.265C181.53 103.397 184.534 97.9217 187.884 93.1199C191.348 88.1542 194.705 81.9419 198.495 76.6908C203.085 70.3317 209.83 63.0312 213.467 58.2294C217.954 52.3065 225.216 47.3305 232.356 41.2247C237.944 36.4454 243.255 33.0778 248.785 29.4405C256.028 24.6768 262.148 21.7384 268.267 18.3889C273.921 15.294 281.041 12.1435 287.313 10.0981C293.004 8.2419 299.08 5.74111 305.046 4.13615C311.559 2.38415 317.973 1.9555 324.955 0.934944C335.041 -0.539255 345.554 1.65893 355.048 2.67075C364.361 3.66316 376.362 8.02644 387.754 12.113C396.362 15.2011 402.582 19.0867 408.265 22.868C416.023 28.0298 423.516 33.8977 429.635 38.5687C436.016 43.4391 442.689 51.3429 452.305 60.2138C457.63 65.1253 460.448 72.5738 466.126 81.292C470.802 88.4709 474.701 97.2762 478.491 104.847C482.462 112.781 484.313 118.804 487.213 126.074C489.97 132.984 495.059 140.017 497.829 147.156C500.348 153.65 504.358 160.951 507.28 168.235C509.887 174.734 511.057 180.734 513.529 187.424C516.265 194.826 520.058 203.971 522.256 211.124C524.392 218.073 528.205 226.074 531.843 234.522C535.422 242.835 538.672 249.067 541.878 255.317C544.811 261.035 544.499 269.112 547.831 276.391C552.63 286.875 557.269 295.262 562.223 303.291C565.988 309.392 570.074 314.766 575.303 323.345C580.249 331.458 586.054 338.596 590.864 344.584C594.936 349.653 598.562 354.035 606.547 361.292C613.164 367.305 619.775 370.312 631.83 376.853C639.382 380.952 646.815 382.244 653.078 384.429C659.71 386.743 666.302 387.774 672.268 389.663C678.637 391.679 685.195 391.56 693.05 392.14C702.059 392.805 710.787 390.984 717.333 389.964C723.558 388.993 729.977 387.495 737.099 386.043C747.15 383.993 757.854 378.214 766.18 374.128C772.614 370.97 779.399 367.154 786.822 362.937C793.034 359.407 799.758 353.791 806.884 349.704C812.249 346.628 816.627 342.731 821.429 338.369C826.863 333.434 834.055 327.344 839.023 321.652C843.973 316.266 848.604 310.474 852.691 305.079C853.568 303.767 854.431 302.327 855.321 299.1';
  
const FULL_PATH = DESIGN_PATH;

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
        <span className="text-[#00A5FF]">high-performing Shopify experiences</span>{' '}
        through strategic design, development for Conversion Rate Optimization.
      </h2>

      <div className="relative  mx-auto pt-[57px] pb-[30px]">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block"
          viewBox="0 0 856 393"
          preserveAspectRatio="xMidYMid meet"
          style={{ overflow: 'visible' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ghost static track */}
          <path d={FULL_PATH} fill="none"
            stroke="#00A5FF" strokeWidth="1.5" strokeDasharray="8 8" strokeLinecap="round" className = "ml-24" />
          <circle cx="-230" cy="56" r="38"
            fill="none" stroke="#00A5FF" strokeWidth="1.5" strokeDasharray="8 8" />
          <circle cx="74" cy="305" r="38"
            fill="none" stroke="#00A5FF" strokeWidth="1.5" strokeDasharray="8 8" />

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
              <span className="text-[clamp(12px,2vw,15px)] font-semibold text-[#000] text-center leading-snug whitespace-pre-line ml-12">
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