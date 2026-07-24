import React from "react";

const GRADIENT = "linear-gradient(to bottom, rgb(239, 246, 255) 40%, #f5d0e2 100%)";


const stats = [
  {
    id: 1,
    body: "Made offers visible throughout the buying journey. \n Added trust, urgency, and delivery assurance. \n Reduced friction without redesigning the interface",
    stat: "30%",
    label: "Conversion Rate",
    cardStyle: { background: GRADIENT },
    textColor: "#000",
    statColor: "#000",
    side: "left",
  },
  {
    id: 2,
    body: "Automatic discounts replaced coupon-based offers. \n Product bundles encouraged larger purchases. \n Improved product information hierarchy increased completed checkouts.",
    stat: "69%",
    label: "Orders",
    cardStyle: { backgroundColor: "#EFF6FF" },
    textColor: "#000",
    statColor: "#000",
    side: "right",
  },
];

export default function PromiseDifference() {
  return (
    <section className="relative w-full overflow-hidden">

      {/* Background glow — desktop only, continues from WhyChooseUs's bottom-right glow and closes out smoothly */}
      <div className="hidden md:block absolute inset-0 pointer-events-none"/>

      {/* Desktop */}
      <div className="relative hidden md:block px-6 py-10 md:px-20 md:py-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 leading-tight mb-12 lg:mb-16 text-center whitespace-nowrap">
          <span style={{
            display: 'inline',
            background: '#dbeaffbf',
            color: '#000',
            padding: '2px 12px',
            borderLeft: '3px solid #87B5DA',
            borderRight: '3px solid #87B5DA',
            lineHeight: 1.4,
            boxDecorationBreak: 'clone',
            WebkitBoxDecorationBreak: 'clone',
          }}>30 Days</span>
          <span className="ml-3">Following the Pilot.</span>
        </h2>

        <div className="grid grid-cols-2 gap-6">
          {stats.map((item) => (
            <div
              key={item.id}
              className=" p-6 lg:p-8 flex flex-col justify-between min-h-[220px]"
              style={item.cardStyle}
            >
              <p className="text-xs lg:text-sm leading-relaxed" style={{ color: item.textColor }}>
                {item.body}
              </p>
              <div className="mt-6">
                <p className="text-4xl  font-normal leading-none" style={{ color: item.statColor }}>
                  {item.stat}
                </p>
                <p className="text-sm mt-1 font-normal" style={{ color: item.textColor }}>
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Grey note box */}
        <div className="mt-6 bg-gray-100 p-6 lg:p-8">
          <p className="text-sm font-semibold text-gray-900 mb-2">
           Illustrative Example (Not Actual Client Data)
          </p>
          <p className="text-sm leading-relaxed text-gray-700">
          If Miriyam.Store generated ₹10 lakh in monthly sales, a 30% increase in Conversion Rate and a 69% increase in orders could increase monthly sales to approximately ₹12.8 lakh, assuming the same traffic and customer acquisition levels.
          </p>
        </div>
      </div>

      {/* Mobile */}
      <div className="relative md:hidden px-6 py-10">
        <h2 className="text-2xl font-normal text-gray-900 leading-tight mb-10 text-center whitespace-nowrap">
          <span style={{
            display: 'inline',
            background: '#dbeafe',
            color: '#000',
            padding: '2px 10px',
            borderLeft: '3px solid #87B5DA',
            borderRight: '3px solid #87B5DA',
            lineHeight: 1.4,
            boxDecorationBreak: 'clone',
            WebkitBoxDecorationBreak: 'clone',
            }}>30 Days</span>
          <span className="ml-3">Following the Pilot.</span>
        </h2>

        <div className="flex flex-col gap-4">
          {stats.map((item) => (
            <div key={item.id} className={`flex ${item.side === "left" ? "justify-end" : "justify-start"}`}>
              <div
                className="p-5 flex flex-col justify-between"
                style={{ width: "85%", ...item.cardStyle }}
              >
                <p className="text-xs leading-relaxed" style={{ color: item.textColor }}>
                  {item.body}
                </p>
                <div className="mt-5">
                  <p className="text-3xl font-normal leading-none" style={{ color: item.statColor }}>
                    {item.stat}
                  </p>
                  <p className="text-sm mt-1 font-normal" style={{ color: item.textColor }}>
                    {item.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Grey note box */}
        <div className="mt-6 bg-gray-100 p-5">
          <p className="text-sm font-semibold text-gray-900 mb-2">
            Illustrative Example (Not Actual Client Data)
          </p>
          <p className="text-xs leading-relaxed text-gray-700">
            If Miriyam Store generated ₹10 lakh in monthly sales, a 30% increase in Conversion Rate and a 69% increase in orders could increase monthly sales to approximately ₹12.8 lakh, assuming the same traffic and customer acquisition levels.
          </p>
        </div>
      </div>

    </section>
  );
}