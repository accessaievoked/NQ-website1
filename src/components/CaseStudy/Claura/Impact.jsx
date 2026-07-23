import React, { useState, useEffect } from "react";

// Update these image paths to point to your actual uploaded assets.
// Each feature = 1 rotation slide: front mockup image + 2 decoy images
// (left/right), a callout label, and the Opportunity/Solution/Impact copy.
import feature1Front from "../../../assets/images/Casestudy/Claura/Impact1.png";
import feature1DecoyLeft from "../../../assets/images/Casestudy/Claura/Impact2.png";
import feature1DecoyRight from "../../../assets/images/Casestudy/Claura/Impact3.png";

import feature2Front from "../../../assets/images/Casestudy/Claura/Impact2.png";
import feature2DecoyLeft from "../../../assets/images/Casestudy/Claura/Impact3.png";
import feature2DecoyRight from "../../../assets/images/Casestudy/Claura/Impact1.png";

import feature3Front from "../../../assets/images/Casestudy/Claura/Impact3.png";
import feature3DecoyLeft from "../../../assets/images/Casestudy/Claura/Impact1.png";
import feature3DecoyRight from "../../../assets/images/Casestudy/Claura/Impact2.png";


const features = [
  {
    calloutLabel: "Cart Progress Bar",
    frontImage: feature1Front,
    decoyLeftImage: feature1DecoyLeft,
    decoyRightImage: feature1DecoyRight,
    optimizations: [
      {
        heading: "Opportunity :",
        subheading: "Customers lost visibility of promotional incentives after entering the cart",
      },
      {
        heading: "Solution :",
        subheading: "Added a visual reward tracker in the cart to encourage larger baskets before checkout.",
      },
      {
        heading: "Impact :",
        subheading: "↑ Basket Size    ↑ Offer Redemption",
      },
    ],
  },
  {
    calloutLabel: "Feature 2 Label",
    frontImage: feature2Front,
    decoyLeftImage: feature2DecoyLeft,
    decoyRightImage: feature2DecoyRight,
    optimizations: [
      { heading: "Opportunity :", subheading: "TODO — describe the problem this feature solves." },
      { heading: "Solution :", subheading: "TODO — describe what was built." },
      { heading: "Impact :", subheading: "TODO — describe the measured result." },
    ],
  },
  {
    calloutLabel: "Feature 3 Label",
    frontImage: feature3Front,
    decoyLeftImage: feature3DecoyLeft,
    decoyRightImage: feature3DecoyRight,
    optimizations: [
      { heading: "Opportunity :", subheading: "TODO — describe the problem this feature solves." },
      { heading: "Solution :", subheading: "TODO — describe what was built." },
      { heading: "Impact :", subheading: "TODO — describe the measured result." },
    ],
  },
];

function CartStack({ feature, onNext }) {
  return (
    <div className="relative w-full max-w-[620px] mx-auto md:mx-0 flex items-center justify-center py-4 md:py-0">
      {/* Decoy image — previous card, peeking out on the left */}
      <div
        key={`left-${feature.calloutLabel}`}
        className="block absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 w-[160px] md:w-[200px] opacity-60 blur-[1px] -z-0 transition-opacity duration-500 ease-in-out animate-[fadeIn_0.5s_ease-in-out]"
      >
        <img
          src={feature.decoyLeftImage}
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Decoy image — next card, peeking out on the right */}
      <div
        key={`right-${feature.calloutLabel}`}
        className="block absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 w-[160px] md:w-[200px] opacity-50 blur-[1px] -z-0 transition-opacity duration-500 ease-in-out animate-[fadeIn_0.5s_ease-in-out]"
      >
        <img
          src={feature.decoyRightImage}
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Front image + callout, side by side at every breakpoint (matches image 2) */}
      <div className="relative z-10 flex items-center gap-2 md:gap-3">
        <div
          key={`front-${feature.calloutLabel}`}
          className="w-[230px] sm:w-[260px] md:w-[350px] transition-opacity duration-500 ease-in-out animate-[fadeIn_0.5s_ease-in-out]"
        >
          <img
            src={feature.frontImage}
            alt={feature.calloutLabel}
            className="w-full h-auto object-contain shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
          />
        </div>

        {/* Arrow + label — clickable, advances to the next feature manually */}
        <button
          type="button"
          onClick={onNext}
          aria-label="Show next feature"
          className="flex items-center gap-2 shrink-0 group"
        >
          <span className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 text-sm shadow-sm group-hover:bg-gray-50 group-hover:text-gray-800 transition-colors">
            →
          </span>
          <span className="text-xs text-gray-600 bg-white border border-gray-200 rounded-full px-3 md:px-4 py-2 whitespace-nowrap shadow-sm group-hover:text-gray-800 transition-colors">
            {feature.calloutLabel}
          </span>
        </button>
      </div>
    </div>
  );
}

export default function KeyOptimizations() {
  const [featureIndex, setFeatureIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFeatureIndex((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featureIndex]);

  const handleNext = () => {
    setFeatureIndex((prev) => (prev + 1) % features.length);
  };

  const activeFeature = features[featureIndex];

  return (
    <section className="w-full px-6 py-10 md:px-16 md:py-14 bg-gray-50">

      {/* Top: mockup + copy panel, both synced to activeFeature */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-6 items-center mb-8 md:mb-10">
        <div className="flex justify-center">
          <CartStack feature={activeFeature} onNext={handleNext} />
        </div>

        <div
          key={featureIndex}
          className="flex flex-col gap-4 bg-transparent md:bg-white border-0 md:border md:border-gray-100 shadow-none md:shadow-sm p-0 md:p-5 w-full max-w-[320px] mx-auto md:mx-0 text-center md:text-left transition-opacity duration-500 ease-in-out animate-[fadeIn_0.5s_ease-in-out]"
        >
          {activeFeature.optimizations.map((item, i) => (
            <div key={i}>
              <p className="text-sm font-semibold text-gray-900 mb-1">{item.heading}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{item.subheading}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Optimizations copy block — static, unrelated to rotation */}
      <div className="text-center md:text-left max-w-3xl md:max-w-2xl mx-auto md:mx-0">
        <h2 className="text-2xl md:text-3xl font-normal text-gray-900 mb-3 text-center md:text-left">
          Key Optimizations
        </h2>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center md:text-left">
          By analyzing customer behavior across the shopping journey, we identified key
          opportunities to reduce friction and increase purchase intent. The following enhancements
          were strategically implemented across product and cart experiences to encourage larger
          basket sizes, improve offer visibility, and create a smoother path to checkout.
        </p>
      </div>
    </section>
  );
}