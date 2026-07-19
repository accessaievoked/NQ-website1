import React from 'react';

import AboutImage1 from '../assets/images/Aboutus/Aboutus1.png';
import AboutImage2 from '../assets/images/Aboutus/Aboutus2.png';
import AboutImage3 from '../assets/images/Aboutus/Aboutus3.png';
import AboutImage4 from '../assets/images/Aboutus/Aboutus4.png';
import { ArrowUpRight } from "lucide-react";

const heroImages = [
  { src: AboutImage1, alt: 'Ecommerce project one' },
  { src: AboutImage2, alt: 'Ecommerce project two' },
  { src: AboutImage3, alt: 'Ecommerce project three' },
  { src: AboutImage4, alt: 'Ecommerce project four' },
];

export default function AboutHero() {
  return (
    <section
      className="relative left-1/2 w-screen -translate-x-1/2 bg-white pt-24 md:pt-28"
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
        <h1 className="text-[20px] font-normal tracking-[-0.04em] text-black md:text-[54px]">
          We Believe Great Ecommerce Starts With
        </h1>

         <span
            className="mt-2 inline-block text-[22px] font-normal tracking-[-0.06em] text-[#03235E] md:mt-4 md:text-[52px]"
            style={{
              background: "#dbeaffbf",
              color: "#0b4375",
              padding: "2px 12px",
              borderLeft: "3px solid #87B5DA",
              borderRight: "3px solid #87B5DA",
              lineHeight: 1.4,
            }}
          >
           Understanding People
          </span>

        <p className="mx-auto mt-7 max-w-[570px] text-[12px] font-medium leading-[1.35] text-[#071d32] md:mt-8 md:text-[14px]">
          We're a team of strategists, designers, developers, analysts, and
          growth specialists united by one goal: helping brands grow through
          better ecommerce experiences.
        </p>

        <a
          href="#contact"
          className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[#031d38] px-6 py-3 text-[11px] font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#073661] md:mt-7"
        >
          Get In Touch
           <ArrowUpRight size={16} />
        </a>
      </div>

      {/* Image collage - full cards, no cropping */}
      <div className="relative mt-10 w-full md:mt-14">
        {/* Mobile: static row, no scroll. Cards are narrow enough that the middle
            two sit fully inside the viewport while the first and last are
            deliberately clipped by the viewport edge on both sides. */}
        <div className="flex items-end justify-center gap-3 overflow-hidden md:hidden">
          {heroImages.map((image, index) => (
            <div
              key={image.alt}
              className="relative w-[118px] shrink-0 overflow-hidden rounded-[10px] bg-white shadow-[0_8px_20px_rgba(28,68,100,0.08)]"
style={{
  WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 78%, transparent 100%)',
  maskImage: 'linear-gradient(to bottom, black 0%, black 78%, transparent 100%)',
}}>
              <img
                src={image.src}
                alt={image.alt}
                className="h-auto w-full object-contain opacity-80"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/0 to-[#e8f6ff]/20" />
            </div>
          ))}
        </div>

        {/* Desktop: static row, no scroll. Cards are wide enough that the row
            overflows the viewport, so the first and last cards are deliberately
            clipped by the edges while the middle ones show fully. */}
        <div className="hidden w-full items-end justify-center gap-6 overflow-hidden md:flex">
          {heroImages.map((image, index) => (
            <div
              key={image.alt}
              className="relative w-[min(26vw,340px)] shrink-0 overflow-hidden rounded-[10px] bg-white shadow-[0_8px_20px_rgba(28,68,100,0.08)]"
style={{
  WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 78%, transparent 100%)',
  maskImage: 'linear-gradient(to bottom, black 0%, black 78%, transparent 100%)',
}}>
              <img
                src={image.src}
                alt={image.alt}
                className="h-auto w-full object-contain opacity-80"
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

        {/* Fade-out strip — pulled up to overlap the card shadows so that edge blurs away too */}
  <div className="pointer-events-none -mt-10 h-20 w-full bg-gradient-to-b from-transparent to-white md:-mt-16 md:h-28" />
   </div>
    </section>
  );
}