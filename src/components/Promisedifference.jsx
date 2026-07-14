import React from "react";

const GRADIENT = "linear-gradient(to bottom, rgb(239, 246, 255) 40%, #edadcb 100%)";


const stats = [
  {
    id: 1,
    body: "By testing faster, identifying winning opportunities sooner, and eliminating guesswork, we help brands unlock sustainable conversion growth and maximize the value of every visitor.",
    stat: "2X",
    label: "Higher ROI",
    cardStyle: { backgroundColor: "#EFF6FF" },
    textColor: "#6B7280",
    statColor: "#111827",
    side: "left",
  },
  {
    id: 2,
    body: "We unlock higher conversion rates through smarter user journeys, faster testing cycles, and experiences tailored to customer behavior.",
    stat: "30%",
    label: "More Conversions",
    cardStyle: { background: GRADIENT },
    textColor: "#6B7280",
    statColor: "#111827",
    side: "right",
  },
  {
    id: 3,
    body: "We accelerate revenue growth with rapid experimentation, data-backed optimization, and AI-powered insights that help you uncover winning opportunities sooner.",
    stat: "50%",
    label: "Faster Growth",
    cardStyle: { backgroundColor: "#EFF6FF" },
    textColor: "#6B7280",
    statColor: "#111827",
    side: "left",
  },
];

export default function PromiseDifference() {
  return (
    <section className="w-ful">

      {/* Desktop */}
      <div className="hidden md:block px-6 py-10 md:px-20 md:py-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-12 lg:mb-16">
          <span className = "ml-4"> We Promise  </span>
          <br />
          <span style={{
            display: 'inline',
            background: '#dbeafe',
            color: '#000',
            padding: '2px 12px',
            margin:'10px 0px',
            borderLeft: '3px solid #87B5DA',
            borderRight: '3px solid #87B5DA',
            lineHeight: 1.4,
            boxDecorationBreak: 'clone',
            WebkitBoxDecorationBreak: 'clone',
          }}>The Difference.</span>
        </h2>

        <div className="grid grid-cols-3 gap-6">
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
                <p className="text-4xl lg:text-5xl font-bold leading-none" style={{ color: item.statColor }}>
                  {item.stat}
                </p>
                <p className="text-sm lg:text-base mt-1 font-medium" style={{ color: item.textColor }}>
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden px-6 py-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-10">
         <span className = "ml-4"> We Promise  </span>
          <br />
          <span style={{
            display: 'inline',
            background: '#dbeafe',
            color: '#000',
            padding: '2px 12px',
            borderLeft: '3px solid #87B5DA',
            borderRight: '3px solid #87B5DA',
            lineHeight: 1.4,
            boxDecorationBreak: 'clone',
            WebkitBoxDecorationBreak: 'clone',
          }}>The Difference</span>
        </h2>

        <div className="flex flex-col gap-4">
          {stats.map((item) => (
            <div key={item.id} className={`flex ${item.side === "right" ? "justify-end" : "justify-start"}`}>
              <div
                className="p-5 flex flex-col justify-between"
                style={{ width: "75%", ...item.cardStyle }}
              >
                <p className="text-xs leading-relaxed" style={{ color: item.textColor }}>
                  {item.body}
                </p>
                <div className="mt-5">
                  <p className="text-4xl font-bold leading-none" style={{ color: item.statColor }}>
                    {item.stat}
                  </p>
                  <p className="text-sm mt-1 font-medium" style={{ color: item.textColor }}>
                    {item.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}