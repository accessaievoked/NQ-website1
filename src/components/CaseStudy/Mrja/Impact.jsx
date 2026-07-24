import React, { useState, useEffect } from "react";

import feature1Front from "../../../assets/images/Casestudy/Mrja/Impact.png";



const features = [
  {
    calloutLabel: "Footer Currency Converter",
    frontImage: feature1Front,
    optimizations: [
      {
        heading: "Opportunity :",
        subheading:
          "Expand MRJA's reach in international markets.",
      },
      {
        heading: "Solution :",
        subheading:
          "Implemented automatic location-based currency conversion.",
      },
      {
        heading: "Impact :",
        subheading: "Seamless shopping experience for global customers.",
      },
    ],
  },
//   {
//     calloutLabel: "Offers & Discounts",
//     frontImage: feature2Front,
//     decoyLeftImage: feature2DecoyLeft,
//     decoyRightImage: feature2DecoyRight,
//     optimizations: [
//       {
//         heading: "Opportunity :",
//         subheading:
//           "Customers had limited visibility of available offers on the PDP..",
//       },
//       {
//         heading: "Solution :",
//         subheading:
//           "Added a dedicated offers section to surface active promotions.",
//       },
//       {
//         heading: "Impact :",
//         subheading: "↑ Offer Discovery\n↑ Offer Redemption",
//       },
//     ],
//   },
//   {
//     calloutLabel: "PDP Trust Badges",
//     frontImage: feature3Front,
//     decoyLeftImage: feature3DecoyLeft,
//     decoyRightImage: feature3DecoyRight,
//     optimizations: [
//       {
//         heading: "Opportunity :",
//         subheading:
//           "Customers lacked key product assurance information on the PDP.",
//       },
//       {
//         heading: "Solution :",
//         subheading:
//           "Added trust badges to highlight product quality and certifications.",
//       },
//       {
//         heading: "Impact :",
//         subheading: "↑ Customer Trust\n↑ Purchase Confidence",
//       },
//     ],
//   },
];

function CartStack({ feature, onNext }) {
  return (
    <div className="flex items-center justify-center w-full md:pl-14">
      {/* Stacked image group */}
      <div className="relative w-[230px] sm:w-[300px] md:w-[500px]">
       
        {/* <div className="block absolute -left-6 sm:-left-8 md:-left-10 top-1/2 -translate-y-1/2 w-[140px] sm:w-[190px] md:w-[300px] opacity-40 blur-[0.5px] z-0">
          <img
            src={feature.decoyLeftImage}
            alt=""
            className="w-full object-contain rounded-sm shadow-md"
          />
        </div>
        <div className="block absolute -right-6 sm:-right-8 md:-right-10 top-1/2 -translate-y-1/2 w-[140px] sm:w-[190px] md:w-[300px] opacity-40 blur-[0.5px] z-0">
          <img
            src={feature.decoyRightImage}
            alt=""
            className="w-full object-contain rounded-sm shadow-md"
          />
        </div> */}

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
        <div className="max-w-[540px] mx-auto md:mx-12 text-center md:text-left">
          <h2 className="text-[28px] md:text-[38px] leading-tight font-normal text-[#111827] mb-5 mt-12">
            Location Based Currency Conversion
          </h2>

          <p className="text-[10px] md:text-[15px]  text-gray-600">
           To make Mṛjā Collective more accessible to international customers, we implemented automatic location-based currency conversion. Prices are displayed in the shopper's local currency based on their region, creating a more familiar and transparent purchasing experience while reducing friction during checkout.
           </p>
        </div>
      </div>
    </section>
  );
}