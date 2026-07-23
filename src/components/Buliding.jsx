import React from "react";
import Threesixty from "../assets/images/OurWork/Performance.png";
import Threesixtylogo from "../assets/images/OurWork/ThreeSixty Logo.png";

export default function Building() {
  const project = {
    clientName: "Three Sixty Leather",
    clientLogo: Threesixtylogo,
    category: "Shopify Store & Development",
    title: "Elevating Brand Perception Through Luxury-Focused Ecommerce Design",
    image: Threesixty,
    href: "/projects/threesixty",
  };

  return (
    <section className="w-full overflow-x-hidden bg-white px-[clamp(16px,4vw,64px)] py-[clamp(24px,4vw,48px)] text-[#080808]">
      <div className="w-full max-w-[clamp(320px,92vw,900px)]">
        <a
          href={project.href}
          aria-label={`View ${project.title}`}
          className="group block text-inherit no-underline"
        >
          {/* One aspect ratio for every screen size — same proportions as your
              mobile view, just slightly taller (1.5 -> 1.7) instead of
              shrinking further at md/lg like before */}
          <div className="relative w-full aspect-[1.7/1] overflow-hidden">
            <h2 className="absolute right-[2%] top-0 z-30 m-0 whitespace-nowrap text-[clamp(1.9rem,7.5vw,4.6rem)] font-normal leading-[0.85] tracking-[-0.06em]">
              Building
            </h2>

            <p className="absolute left-[49%] top-[23.8%] z-0 m-0 whitespace-nowrap text-[clamp(1.9rem,7.3vw,4.5rem)] font-normal leading-[0.85] tracking-[-0.06em] text-[#080808]">
              Performance
            </p>

            <div className="absolute left-0 top-[19%] z-10 h-[81%] w-[80%] overflow-hidden bg-[#c6c6c6]">
              <p className="absolute left-[61%] top-[6%] z-20 m-0 whitespace-nowrap text-[clamp(1.9rem,7.3vw,4.5rem)] font-normal leading-[0.85] tracking-[-0.06em] text-white">
                Performance
              </p>

              <img
                src={project.image}
                alt="Laptop displaying the Three Sixty Leather store"
                className="absolute left-[19%] top-[12%] h-[80%] w-[68%]  object-contain]"
              />
            </div>
          </div>

          {/* Client row now sits inside a wrapper capped at 80% width — the same
              width as the image box above — so [category] lands right at the
              image's own right edge instead of the full card width */}
          <div className="mt-5 w-[80%] pb-1 text-[clamp(.6rem,1.1vw,.72rem)] tracking-[-.03em]">
            <div className="flex items-center gap-2">
              <img
                src={project.clientLogo}
                alt=""
                className="h-[16px] w-[16px] object-contain md:h-[18px] md:w-[18px]"
              />
              <span className="text-[13px] font-medium md:text-[14px]">{project.clientName}</span>
              <span className="ml-auto text-[11px] text-zinc-600 md:text-[12px]">[{project.category}]</span>
            </div>
          </div>

          <p className="mt-1 w-[80%] text-[clamp(.7rem,1.2vw,.85rem)] leading-tight tracking-[-.02em]">
            {project.title}
          </p>
        </a>
      </div>
    </section>
  );
}