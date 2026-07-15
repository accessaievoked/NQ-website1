import React from 'react';

import AboutImage1 from '../assets/images/Aboutus/Aboutus1.png';
import AboutImage2 from '../assets/images/Aboutus/Aboutus2.png';
import AboutImage3 from '../assets/images/Aboutus/Aboutus3.png';
import AboutImage4 from '../assets/images/Aboutus/Aboutus4.png';

const heroImages = [
  {
    src: AboutImage1,
    alt: 'Ecommerce project one',
    className: 'translate-y-8 md:translate-y-10',
  },
  {
    src: AboutImage2,
    alt: 'Ecommerce project two',
    className: 'translate-y-0',
  },
  {
    src: AboutImage3,
    alt: 'Ecommerce project three',
    className: 'translate-y-6 md:translate-y-8',
  },
  {
    src: AboutImage4,
    alt: 'Ecommerce project four',
    className: 'translate-y-10 md:translate-y-12',
  },
];

export default function AboutHero() {
  return (
    <section
      className="relative left-1/2 min-h-[680px] w-screen -translate-x-1/2 overflow-hidden bg-white pt-24 md:min-h-[740px] md:pt-28"
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 8%, rgba(255, 212, 235, 0.62), transparent 31%),
          radial-gradient(circle at 57% 61%, rgba(170, 225, 255, 0.58), transparent 38%),
          linear-gradient(135deg, #ffffff 0%, #fff7fb 31%, #f1faff 72%, #ffffff 100%)
        `,
      }}
    >
      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-6xl px-5 text-center">
        <h1 className="mx-auto max-w-5xl text-[clamp(32px,4.1vw,58px)] font-medium leading-[1.08] tracking-[-0.055em] text-[#061b32]">
          We Believe Great Ecommerce Starts With
        </h1>

        <div className="mt-3 inline-flex items-center border-x border-[#84b8ec] bg-[#dbeaff]/75 px-4 py-1.5 md:mt-4 md:px-7 md:py-2">
          <span className="text-[clamp(31px,4vw,56px)] font-medium leading-none tracking-[-0.06em] text-[#0b4375]">
            Understanding People
          </span>
        </div>

        <p className="mx-auto mt-7 max-w-[570px] text-[12px] font-medium leading-[1.35] text-[#071d32] md:mt-8 md:text-[14px]">
          We’re a team of strategists, designers, developers, analysts, and
          growth specialists united by one goal: helping brands grow through
          better ecommerce experiences.
        </p>

        <a
          href="#contact"
          className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[#031d38] px-6 py-3 text-[11px] font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#073661] md:mt-7"
        >
          Get In Touch
          <span className="text-base leading-none transition-transform group-hover:translate-x-1">
            ↗
          </span>
        </a>
      </div>

      {/* Static bottom image collage */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[310px] overflow-hidden md:h-[365px]">
        <div className="absolute bottom-[-26px] left-1/2 flex w-max -translate-x-1/2 items-end gap-3 md:bottom-[-35px] md:gap-5">
          {heroImages.map((image, index) => (
            <div
              key={image.alt}
              className={[
                'relative shrink-0 overflow-hidden rounded-[10px] bg-white',
                'w-[152px] shadow-[0_8px_28px_rgba(28,68,100,0.13)]',
                'md:w-[min(20vw,255px)]',
                image.className,
              ].join(' ')}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="aspect-[0.76] w-full object-cover opacity-80"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/0 to-[#e8f6ff]/20" />

              {index === 1 && (
                <div className="absolute right-3 top-3 rounded-full bg-white/80 px-2 py-1 text-[7px] font-semibold text-[#0b4375]">
                  FEATURED
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white/65 to-transparent" />
      </div>
    </section>
  );
}
