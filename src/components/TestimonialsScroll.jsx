import React from "react";

const testimonials = [
  {
    text: "The monthly reports are very clear and helpful. We now understand what is working, what is not, and what actions are being taken. It's rare to see this level of transparency from an agency.",
    author: "QUE UNIVERSE",
  },
  {
    text: "Our conversion rate improved significantly within the first month. The team truly understands ecommerce and doesn't just focus on how the store looks.",
    author: "HOUSE OF VAULTE",
  },
  {
    text: "They didn't just build features — they asked the right questions first. The data-driven approach made a real difference to our revenue.",
    author: "MASCULINO LATINO",
  },
];

const Card = ({ testimonial }) => (
  <div className="flex-shrink-0 w-[240px] sm:w-[300px] md:w-[480px] bg-neutral-100 rounded-lg p-4 sm:p-6 md:p-8">
    <p className="text-xs sm:text-sm md:text-base text-neutral-700 leading-relaxed mb-3 sm:mb-5">
      {testimonial.text}
    </p>
    <p className="text-[10px] sm:text-xs md:text-sm font-bold tracking-wide text-black">
      {testimonial.author}
    </p>
  </div>
);

const Row = ({ direction = "left" }) => {
  const items = [...testimonials, ...testimonials, ...testimonials, ...testimonials];
  const animClass = direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

  return (
    <div className="overflow-hidden w-full min-w-0">
      <div className={`flex w-max gap-3 sm:gap-4 md:gap-6 ${animClass}`}>
        {items.map((t, i) => (
          <Card key={i} testimonial={t} />
        ))}
      </div>
    </div>
  );
};

export default function TestimonialsScroll() {
  return (
    <section
      className="bg-white py-10 sm:py-14 md:py-20 w-full"
      style={{ overflow: "hidden", maxWidth: "100vw" }}
    >
      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .animate-scroll-left  { animation: scroll-left  30s linear infinite; }
        .animate-scroll-right { animation: scroll-right 30s linear infinite; }
        .animate-scroll-left:hover,
        .animate-scroll-right:hover { animation-play-state: paused; }
        @media (max-width: 640px) {
          .animate-scroll-left  { animation-duration: 42s; }
          .animate-scroll-right { animation-duration: 42s; }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-left,
          .animate-scroll-right { animation: none; }
        }
      `}</style>

      <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 min-w-0">
        <Row direction="left" />
        <Row direction="right" />
      </div>
    </section>
  );
}