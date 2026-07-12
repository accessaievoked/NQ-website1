import { useState, useEffect } from "react";

const slides = [
  {
    topImage:
      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hyrhs0Ks0b/emxali7l_expires_30_days.png",
    bottomImage:
      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hyrhs0Ks0b/d7zl24i1_expires_30_days.png",
    label: "Our Approach",
    copy:
      "During our discovery process, we learned that many customers, particularly women aged 35–60, were unsure of their exact measurements and often required WhatsApp video calls for sizing assistance. To simplify this journey, we introduced a Customize Your Size option beside the size selector. A short guided flow with visual body-shape references helps customers identify their best fit with confidence, reducing friction and making the purchase process more intuitive.",
  },
  {
    topImage:
      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hyrhs0Ks0b/emxali7l_expires_30_days.png",
    bottomImage:
      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hyrhs0Ks0b/d7zl24i1_expires_30_days.png",
    label: "Our Approach",
    copy:
      "Replace this with the second case study's approach copy. Swap topImage and bottomImage above for screenshots specific to this slide.",
  },
  {
    topImage:
      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hyrhs0Ks0b/emxali7l_expires_30_days.png",
    bottomImage:
      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hyrhs0Ks0b/d7zl24i1_expires_30_days.png",
    label: "Our Approach",
    copy:
      "Replace this with the third case study's approach copy. Swap topImage and bottomImage above for screenshots specific to this slide.",
  },
];

const AUTOPLAY_MS = 5000;

export default function ConversionScienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, []);

  const active = slides[activeIndex];

  const Dots = ({ className = "", idPrefix, size = "md" }) => {
    const inactiveSize = size === "sm" ? "w-1.5 h-1.5" : "w-2 h-2";
    const activeSize = size === "sm" ? "w-4 h-1.5" : "w-6 h-2";
    return (
      <div className={`flex items-center gap-1.5 ${className}`}>
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1} (${idPrefix})`}
            onClick={() => setActiveIndex(i)}
            className={`rounded-full border-0 p-0 transition-all duration-300 ${
              i === activeIndex ? `${activeSize} bg-white` : `${inactiveSize} bg-white/40`
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-black rounded-tl-[80px] mb-[20px]">

      {/* ===================== MOBILE / TABLET (below lg) ===================== */}
      <div className="flex flex-col items-start lg:hidden px-6 py-10 gap-8">
        <div className="flex flex-col items-start gap-2">
          <span className="text-white text-xs">
            {"[ The Science of Conversion ]"}
          </span>
          {/* Dots — single control for the whole carousel: changes images + Our Approach text below */}
          <Dots className="" idPrefix="mobile-top" size="sm" />
        </div>
        <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
          {"Why Does Understanding Your Audience Matter?"}
        </h2>

        <p className="text-white text-sm leading-relaxed">
          {
            "Before we design anything, we take the time to understand who your customers are, what drives their decisions, and where they encounter friction. Through discovery workshops, competitor analysis, customer profiling, and analytics reviews, we build a foundation for decisions that convert."
          }
        </p>

        <button
          className="flex items-center bg-white text-left py-3 px-7 gap-3 rounded-[100px] border-0"
          onClick={() => alert("Pressed!")}
        >
          <span className="text-[#03235E] text-sm">{"Case Studies"}</span>
          <img
            alt=""
            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hyrhs0Ks0b/72inuo2e_expires_30_days.png"
            className="w-5 h-5 object-fill"
          />
        </button>

        {/* Active slide images, swapped on rotation/dot click */}
        <div className="flex flex-col items-center gap-3 w-full">
          <img
            alt=""
            src={active.topImage}
            className="w-full max-w-[340px] h-auto object-contain"
          />
          <img
            alt=""
            src={active.bottomImage}
            className="w-full max-w-[340px] h-auto object-contain"
          />
        </div>

        <div className="flex flex-col items-start gap-3">
          <span className="text-white text-xs">{active.label}</span>
          <span className="text-white text-xs leading-relaxed">
            {active.copy}
          </span>
        </div>
      </div>

      {/* ===================== DESKTOP (lg and up) — same structure as original ===================== */}
      <div className="hidden lg:flex lg:justify-between lg:items-start lg:self-stretch lg:p-20">
        <div className="flex flex-col shrink-0 items-start">
          <div className="flex flex-col items-start gap-3 mb-[34px] mr-[365px]">
            <span className="text-white text-sm">
              {"[ The Science of Conversion ]"}
            </span>
            {/* Dots — single control for the whole carousel: changes images + Our Approach text below */}
            <Dots idPrefix="desktop" size="sm" />
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl leading-tight w-[554px] mb-[68px]">
              {"Why Does Understanding Your Audience Matter?"}
            </h2>
            <p className="text-white text-base w-[468px] mb-[70px] mr-[85px] leading-relaxed">
              {
                "Before we design anything, we take the time to understand who your customers are, what drives their decisions, and where they encounter friction. Through discovery workshops, competitor analysis, customer profiling, and analytics reviews, we build a foundation for decisions that convert."
              }
            </p>
            <button
              className="flex items-center bg-white text-left py-[17px] px-[42px] ml-[1px] mr-[345px] gap-[15px] rounded-[100px] border-0"
              onClick={() => alert("Pressed!")}
            >
              <span className="text-[#03235E] text-sm">{"Case Studies"}</span>
              <img
                alt=""
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hyrhs0Ks0b/72inuo2e_expires_30_days.png"
                className="w-6 h-6 object-fill"
              />
            </button>
          </div>
        </div>

        <div className="flex flex-col shrink-0 items-center pb-[1px] gap-14">
          <div className="flex flex-col items-center gap-[13px]">
            {/* Active slide images — swap on rotation/dot click, same sizing as original */}
            <img
              alt=""
              src={active.topImage}
              className="w-[612px] h-[234px] object-fill"
            />
            <img
              alt=""
              src={active.bottomImage}
              className="w-[612px] h-[420px] object-fill"
            />
          </div>

          {/* Dots removed — desktop now auto-rotates only */}

          <div className="flex flex-col items-start">
            <span className="text-white text-xs mb-[20px] mr-[522px]">
              {active.label}
            </span>
            <span className="text-white text-xs w-[611px]">
              {active.copy}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}