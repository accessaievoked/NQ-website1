import { useState, useEffect, useRef } from "react";


import img1 from "../assets/images/home/WhyChooseus/Google Analysis.png";  
import img2 from "../assets/images/home/WhyChooseus/Clarity.png"; 
import img3 from "../assets/images/home/WhyChooseus/platform.png"; 


const slides = [
  {
    id: 0,
    image: img1,
    heading: "We don't jump straight into design.",
    body: "Before a single screen is created, we study how customers actually interact with your store through heatmaps, session recordings, GA4 data, funnel analysis, and user behavior insights. This helps us identify what's stopping customers from buying and what will move the needle before we start building.",
  },
  {
    id: 1,
    image: img2,
    heading: "Built Around Your Customers",
    body: "Design for people, not opinions.? Every interface is shaped around how your customers browse, compare, hesitate, and purchase, not personal preferences.",
  },
  {
    id: 2,
    image: img3,
    heading: "More Than Shopify Experts",
    body: "We understand ecommerce, not just Shopify.? Brand positioning, merchandising, psychology, CRO, UX, analytics, retention, and technical implementation all work together to drive growth.",
  },
];

const INTERVAL = 4500;
const FADE_MS  = 300;

export default function WhyChooseUs() {
  const [active, setActive]       = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef                  = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setActive((p) => (p + 1) % slides.length);
        setAnimating(false);
      }, FADE_MS);
    }, INTERVAL);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const handleDot = (idx) => {
    if (idx === active || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(idx);
      setAnimating(false);
    }, FADE_MS);
    clearInterval(timerRef.current);
    startTimer();
  };

  const current = slides[active];

  return (
    <section className="relative w-full overflow-hidden px-6 py-10 md:px-20 md:py-24 bg-white">

      {/* Background glow — desktop only */}
      <div
        className="hidden md:block absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 65% 130% at 100% 100%, rgba(0,200,255,0.22) 0%, transparent 65%)
          `,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── ROW 1: Label | Headline + Description ── */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-32 mb-10 lg:mb-14">

          {/* Far left — label */}
          <div className="lg:w-[220px] shrink-0 pt-1">
            <p className="text-xs font-normal tracking-widest text-[#000]">
              Why Choose Us?
            </p>
          </div>

          {/* Right — headline + description */}
          <div className="flex-1">
            <p className="text-[24px] md:text-4xl lg:text-5xl font-light text-gray-400 leading-tight">
              We build more than storefronts.
            </p>
            <h2 className="text-[24px] md:text-4xl lg:text-5xl font-normal text-gray-900 leading-tight">
              We build revenue engines.
            </h2>
            <p className="mt-4 text-sm md:text-base text-[#000] max-w-sm leading-relaxed">
              Every decision is guided by data, user behavior, and business
              objectives to create a store that delivers lasting results, not
              just a better appearance.
            </p>
          </div>
        </div>

        {/* ── ROW 2: Slide text (bottom-aligned) | Image ── */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 lg:items-end">

          {/* Left — slide text, bottom-aligned with image (mobile: shown second / below image) */}
          <div className="order-2 lg:order-none lg:w-[420px] shrink-0 flex flex-col justify-end w-[240px]">
            <div
              style={{ transition: `opacity ${FADE_MS}ms ease, transform ${FADE_MS}ms ease` }}
              className={animating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}
            >
              <div className="flex items-start gap-2 mb-2">
                <h3 className="text-[12px] md:text-xl font-bold text-gray-900 leading-snug">
                  {current.heading}
                </h3>
                <a
                  href="#"
                  className="mt-0.5 shrink-0 w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center hover:bg-indigo-200 transition-colors"
                  aria-label="Learn more"
                >
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path
                      d="M2.5 10.5L10.5 2.5M10.5 2.5H5M10.5 2.5V8"
                      stroke="#03235E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                {current.body}
              </p>
            </div>
          </div>

          {/* Right — image (mobile: shown first / above text) */}
          <div className="order-1 lg:order-none flex-1">
            <div
              style={{ transition: `opacity ${FADE_MS}ms ease, transform ${FADE_MS}ms ease` }}
              className={animating ? "opacity-0 scale-[0.99]" : "opacity-100 scale-100"}
            >
              <img
                key={current.id}
                src={current.image}
                alt={current.heading}
                width={1200}
                height={1500}
                className="w-full h-auto rounded-xl shadow-md object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}