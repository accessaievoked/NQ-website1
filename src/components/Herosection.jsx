import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import services1 from "../Images/Services1.png";
import services2 from "../Images/Services2.png";
import services3 from "../Images/Services3.png";
import services4 from "../Images/Services4.png";
import ecommerce1 from "../Images/Ecommerce1.png";
import ecommerce2 from "../Images/Ecommerce2.png";
import ecommerce3 from "../Images/Ecommerce3.png";
import ecommerce4 from "../Images/Ecommerce4.png";

/**
 * Hero Section — "Is Your Shopify Store Leaving Money On The Table?"
 *
 * Matches the Figma "Frame 23" reference: a plain white background,
 * an uneven top row of 4 photos (short / wide / tall / short) and a
 * mirrored bottom row (tall / short / short / short), both clustered
 * in a centered column close to the headline (not stretched across
 * the full browser width). Two-line headline with a highlighted
 * second line, a paragraph, and a "Book a Demo" pill CTA. The whole
 * section fits inside one viewport-height fold. Navbar is rendered
 * globally in App.js and overlays this section.
 */

// ---- one reusable image card ----------------------------------------------
function ImageCard({ src, className = "" }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl shadow-[0_10px_25px_-8px_rgba(15,23,42,0.25)] ${className}`}
    >
      <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative isolate flex h-screen w-full flex-col justify-between overflow-hidden bg-white">
      {/* ---- top row: clustered close to center, heights step short/wide/tall/short ---- */}
      <div className="mx-auto flex w-full max-w-3xl items-start justify-between gap-2 px-6 pt-16 sm:gap-3 sm:pt-20 md:gap-4 md:pt-20">
        <ImageCard src={services1} className="h-12 w-12 shrink-0 sm:h-16 sm:w-16 md:h-20 md:w-20" />
        <ImageCard src={services2} className="h-14 w-24 shrink-0 sm:h-18 sm:w-32 md:h-24 md:w-40" />
        <ImageCard src={services3} className="h-20 w-14 shrink-0 sm:h-28 sm:w-20 md:h-32 md:w-24" />
        <ImageCard src={services4} className="h-12 w-12 shrink-0 sm:h-16 sm:w-16 md:h-20 md:w-20" />
      </div>

      {/* ---- headline block ---- */}
      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-6 py-2 text-center">
        <h1 className="text-2xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-3xl md:text-5xl">
          Is Your Shopify Store
        </h1>

        <div className="mt-2 flex items-center gap-3 rounded-xl bg-sky-100/90 px-5 py-2 sm:px-7 sm:py-2.5">
          <span className="h-5 w-1 shrink-0 rounded-full bg-sky-500 sm:h-6 md:h-8" />
          <span className="text-xl font-bold text-sky-900 sm:text-2xl md:text-4xl">
            Leaving Money On The Table?
          </span>
        </div>

        <p className="mt-3 max-w-md text-xs leading-relaxed text-neutral-600 sm:text-sm md:text-base">
          We identify conversion leaks, optimize every customer touchpoint,
          and turn more of your existing traffic into paying customers.
        </p>

        <Link
          to="/contact"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-neutral-900/10 transition hover:bg-neutral-800"
        >
          Book a Demo
          <ArrowUpRight size={16} />
        </Link>
      </div>

      {/* ---- bottom row: clustered close to center, heights step tall/short/short/short ---- */}
      <div className="mx-auto flex w-full max-w-3xl items-end justify-between gap-2 px-6 pb-6 sm:gap-3 sm:pb-8 md:gap-4 md:pb-8">
        <ImageCard src={ecommerce1} className="h-16 w-14 shrink-0 sm:h-24 sm:w-20 md:h-32 md:w-24" />
        <ImageCard src={ecommerce2} className="h-12 w-14 shrink-0 sm:h-16 sm:w-20 md:h-20 md:w-24" />
        <ImageCard src={ecommerce3} className="h-12 w-14 shrink-0 sm:h-16 sm:w-20 md:h-20 md:w-24" />
        <ImageCard src={ecommerce4} className="h-12 w-14 shrink-0 sm:h-16 sm:w-20 md:h-20 md:w-24" />
      </div>
    </section>
  );
}
