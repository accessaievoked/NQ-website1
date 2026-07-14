import { useState, useEffect } from "react";

const slides = [
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
    <div className="w-full bg-black rounded-tl-[40px] overflow-hidden">

      {/* ===================== MOBILE / TABLET (below lg) ===================== */}
      <div className="flex flex-col items-start lg:hidden px-3 py-10 gap-8">
        <div className="flex flex-col items-start gap-2">
          <span className="text-white text-xs">
            {"[ The Science of Conversion ]"}
          </span>
          <Dots className="" idPrefix="mobile-top" size="sm" />
        </div>
        <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
          {"Why Does Understanding Your Audience Matter?"}
        </h2>

        <p className="text-white text-sm leading-relaxed">
          {
            "Before we design anything, we take the time to understand who your customers are, what drives their decisions, and where they encounter friction."
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

        <div className="flex flex-col items-start gap-3 w-full mt-2">
          <img
            alt=""
            src={active.topImage}
            className="w-full h-auto object-contain"
          />
          <img
            alt=""
            src={active.bottomImage}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="flex flex-col items-start gap-3">
          <span className="text-white text-xs">{active.label}</span>
          <span className="text-white text-xs leading-relaxed">
            {active.copy}
          </span>
        </div>
      </div>

      {/* ===================== DESKTOP (lg and up) — fully responsive, full width ===================== */}
      <div className="hidden lg:flex lg:items-start lg:p-12 xl:p-15 w-full">
        {/* Left column */}
        <div className="flex flex-col items-start flex-1 min-w-0">
          <div className="flex flex-col items-start gap-3 mb-8">
            <span className="text-white text-sm">
              {"[ The Science of Conversion ]"}
            </span>
            <Dots idPrefix="desktop" size="sm" />
          </div>
          <div className="flex flex-col items-start w-full max-w-[554px]">
            <h2 className="text-white font-bold text-3xl xl:text-5xl leading-tight mb-8">
              {"Why Does Understanding Your Audience Matter?"}
            </h2>
            <p className="text-white text-base leading-relaxed mb-8 max-w-[468px]">
              {
                "Before we design anything, we take the time to understand who your customers are, what drives their decisions, and where they encounter friction. Through discovery workshops, competitor analysis, customer profiling, and analytics reviews, we build a foundation for decisions that convert."
              }
            </p>
            <button
              className="flex items-center bg-white text-left py-4 px-8 gap-4 rounded-[100px] border-0"
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

        {/* Right column */}
        <div className="flex flex-col items-center flex-1 min-w-0 max-w-[480px] pb-1 gap-10">
          <div className="flex flex-col items-center gap-3 w-full max-w-[450px] mx-auto">
            <img
              alt=""
              src={active.topImage}
              className="w-full h-auto object-contain"
            />
            <img
              alt=""
              src={active.bottomImage}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="flex flex-col items-start w-full max-w-[450px] mx-auto">
            <span className="text-white text-xs mb-5">
              {active.label}
            </span>
            <span className="text-white text-xs leading-relaxed">
              {active.copy}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}