import React, { useState, useEffect } from "react";

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
        subheading:
          "Customers lost visibility of promotional incentives after entering the cart.",
      },
      {
        heading: "Solution :",
        subheading:
          "Added a visual reward tracker in the cart to encourage larger baskets before checkout.",
      },
      {
        heading: "Impact :",
        subheading: "↑ Basket Size\n↑ Offer Redemption",
      },
    ],
  },
  {
    calloutLabel: "Sticky Add to Cart",
    frontImage: feature2Front,
    decoyLeftImage: feature2DecoyLeft,
    decoyRightImage: feature2DecoyRight,
    optimizations: [
      {
        heading: "Opportunity :",
        subheading:
          "Customers needed easier access to purchasing while browsing the PDP.",
      },
      {
        heading: "Solution :",
        subheading:
          "Introduced a persistent sticky Add to Cart section on mobile devices.",
      },
      {
        heading: "Impact :",
        subheading: "↑ Add to Cart\n↑ Checkout Starts",
      },
    ],
  },
  {
    calloutLabel: "Trust Badges",
    frontImage: feature3Front,
    decoyLeftImage: feature3DecoyLeft,
    decoyRightImage: feature3DecoyRight,
    optimizations: [
      {
        heading: "Opportunity :",
        subheading:
          "Users lacked confidence before completing their purchase.",
      },
      {
        heading: "Solution :",
        subheading:
          "Added payment security, COD and shipping assurance badges throughout the buying journey.",
      },
      {
        heading: "Impact :",
        subheading: "↑ Trust\n↑ Conversion Rate",
      },
    ],
  },
];

function CartStack({ feature, onNext }) {
  return (
    <div className="flex items-center justify-center w-full md:pl-14">
      {/* Stacked image group */}
      <div className="relative w-[230px] sm:w-[300px] md:w-[500px]">
        {/* Left decoy */}
        <div className="block absolute -left-6 sm:-left-8 md:-left-10 top-1/2 -translate-y-1/2 w-[140px] sm:w-[190px] md:w-[300px] opacity-40 blur-[0.5px] z-0">
          <img
            src={feature.decoyLeftImage}
            alt=""
            className="w-full object-contain rounded-sm shadow-md"
          />
        </div>

        {/* Right decoy */}
        <div className="block absolute -right-6 sm:-right-8 md:-right-10 top-1/2 -translate-y-1/2 w-[140px] sm:w-[190px] md:w-[300px] opacity-40 blur-[0.5px] z-0">
          <img
            src={feature.decoyRightImage}
            alt=""
            className="w-full object-contain rounded-sm shadow-md"
          />
        </div>

        {/* Main front card */}
        <div className="relative z-20 w-full overflow-hidden">
          <img
            src={feature.frontImage}
            alt={feature.calloutLabel}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Arrow + label, centered vertically, overlapping the right edge of the image */}
        <button
          onClick={onNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[45%] sm:translate-x-1/2 z-30 flex items-center gap-1.5 sm:gap-2 group"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-300 bg-white flex items-center justify-center text-sm shadow-md transition-all group-hover:bg-gray-100">
            →
          </div>

          <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-gray-300 bg-white text-[11px] sm:text-[13px] text-gray-700 whitespace-nowrap shadow-md">
            {feature.calloutLabel}
          </div>
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
  }, []);

  const handleNext = () => {
    setFeatureIndex((prev) => (prev + 1) % features.length);
  };

  const activeFeature = features[featureIndex];

  return (
    <section className="w-full bg-[#fafafa] py-12 lg:py-16 px-6 md:px-12 lg:px-16">
      <div className="w-full">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-5 mb-6 justify-between">
          {/* Image Stack */}
          <CartStack feature={activeFeature} onNext={handleNext} />

          {/* Opportunity Card */}
          <div
            key={featureIndex}
            className="w-full md:w-[250px] shrink-0 h-full flex flex-col justify-between bg-white border border-gray-100 rounded-sm shadow-sm px-6 py-5 transition-all duration-500"
          >
            {activeFeature.optimizations.map((item, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <h4 className="text-[13px] font-semibold text-gray-900 mb-2">
                  {item.heading}
                </h4>

                <p className="text-[13px] text-gray-600 leading-6 whitespace-pre-line">
                  {item.subheading}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="max-w-[640px] mx-auto md:mx-0 text-center md:text-left">
          <h2 className="text-[28px] md:text-[38px] leading-tight font-normal text-[#111827] mb-5">
            Key Optimizations
          </h2>

          <p className="text-[10px]  text-gray-600">
            By analyzing customer behavior across the shopping journey,
            we identified key opportunities to reduce friction and increase
            purchase intent. The following enhancements were strategically
            implemented across product and cart experiences to encourage
            larger basket sizes, improve offer visibility, and create a
            smoother path to checkout.
          </p>
        </div>
      </div>
    </section>
  );
}