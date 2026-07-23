import React from "react";
import Threesixty from "../assets/images/OurWork/Threesixty.png";
import Covera from "../assets/images/OurWork/Covera.png";
import Threesixtylogo from "../assets/images/OurWork/ThreeSixty Logo.png";
import Coveralogo from "../assets/images/OurWork/Covera Logo.png";

// Replace clientLogo and clientName with each client's real details.
const projects = [
  {
    clientName: "Claura",
    clientLogo: Threesixtylogo,
    category: "Brand Strategy",
    title: "Elevating Brand Perception Through Luxury-Focused Ecommerce Design",
    href: "../pages/ClauraCasestudy.jsx",
    image: Threesixty,
    objectPosition: "60% center",
  },
  {
    clientName: "Masculino",
    clientLogo: Coveralogo,
    category: "Design",
    title: "Crafting a High-Converting Experience for the Modern E-Commerce Shopper",
    href: "../pages/MasculinoCasestudy.jsx",
    image: Covera,
    objectPosition: "center",
  },
  {
    clientName: "Miriyam",
    clientLogo: Coveralogo,
    category: "Shopify Store & Development",
    title: "Creating a High-Converting Experience for the Modern E-Commerce Shopper",
    href: "../pages/MiriyamCasestudy.jsx",
    image: Covera,
    objectPosition: "58% center",
  },
  {
    clientName: "Mrja",
    clientLogo: Threesixtylogo,
    category: "Shopify Store & Development",
    title: "Elevating Brand Perception Through Luxury-Focused Ecommerce Design",
    href: "../pages/MrjaCasestudy.jsx",
    image: Threesixty,
    objectPosition: "center",
  },
];

function ProjectCard({ project, index }) {
  const layout = [
    "relative z-[2] col-start-1 row-start-1 -mt-[clamp(70px,5vw,130px)] w-[calc(90%-6px)] max-[580px]:-mt-[138px] max-[580px]:w-[calc(90%-5px)]",
    "col-start-2 row-start-1 mt-[clamp(5px,14.4vw,62px)] max-[580px]:-mt-[83px] max-[580px]:ml-[-14px]",
    "col-start-1 row-start-2 w-[72%] max-[580px]:w-[74%]",
    "col-span-2 row-start-2 ml-[calc(-35%+6px)] mt-[clamp(20px,3.3vw,50px)] w-[calc(120%-6px)] max-[580px]:ml-[calc(140% + 6px)] max-[580px]:mt-[19px] max-[580px]:w-[calc(130%-5px)]",
  ][index];

  // Desktop is now shorter (wider ratio = less height for the same width).
  // max-[580px]: restores your original mobile ratios untouched.
  const imageRatio =
    index === 1 || index === 2
      ? "aspect-[1.05/1] max-[580px]:aspect-[.72/1]"
      : "aspect-[4/3] max-[580px]:aspect-square";

  return (
    <article className={`min-w-0 ${layout}`}>
      <a href={project.href} className="block text-inherit no-underline group" aria-label={`View ${project.title}`}>
        <div className={`relative overflow-hidden bg-gradient-to-br from-zinc-200 to-zinc-500 ${imageRatio}`}>
          <img
            src={project.image}
            alt={project.title}
            style={{ objectPosition: project.objectPosition }}
            className="h-full w-full object-cover saturate-[.62] contrast-[1.04] transition-transform duration-500 group-hover:scale-[1.035]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/15" />
        </div>

        <div className="mt-[7px] flex items-center gap-2  pb-[5px] text-[clamp(6px,.67vw,9px)] leading-none tracking-[-.03em] text-zinc-600 max-[580px]:mt-[5px] max-[580px]:gap-[5px] max-[580px]:pb-1 max-[580px]:text-[6px]">
          <img src={project.clientLogo} alt="" className="size-[clamp(11px,6vw,55px)] object-contain max-[580px]:size-[9px]" />
          <span className="whitespace-nowrap text-zinc-900 md:text-[18px] text-[8px]">{project.clientName}</span>
          <span className="ml-auto text-right md:text-[15px] text-[5px]">[{project.category}]</span>
        </div>

        <h2 className="mt-[-6px] md:text-[clamp(10px,2.08vw,22px)] font-normal leading-[1.04] tracking-[-.065em] max-[580px]:mt-1 text-[8px]">
          {project.title}
        </h2>
      </a>
    </article>
  );
}

export default function Ourworktop() {
  return (
   <main className="relative min-h-full w-full max-w-full overflow-x-hidden bg-[radial-gradient(ellipse_65%_42%_at_78%_0%,rgba(255,186,156,.62),transparent_70%),radial-gradient(ellipse_55%_36%_at_26%_6%,rgba(255,238,243,.84),transparent_71%)] px-[clamp(16px,5vw,76px)] pb-20 pt-[clamp(25px,4vw,64px)] text-[#080808] max-[580px]:px-[15px] max-[580px]:pb-[42px] max-[580px]:pt-[27px]">
   <header className="relative mt-28 h-[clamp(78px,11.6vw,156px)] w-full max-w-none max-[580px]:mt-30 max-[580px]:h-[158px]">
        <span className="absolute left-0 top-0 z-[1] whitespace-nowrap text-[clamp(48px,10.7vw,128px)] font-normal leading-[.8] tracking-[-.075em] max-[580px]:text-[38px]">Ideas</span>
        <span className="absolute left-[clamp(54%,50vw,615px)] top-[clamp(12px,5.6vw,58px)] z-[3] whitespace-nowrap text-[clamp(50px,10.4vw,128px)] font-normal leading-[.8] tracking-[-.075em] max-[580px]:left-[45%] max-[580px]:top-[30px] max-[580px]:text-[38px]">Impact</span>
      </header>

      <section className="relative z-[2] grid w-full max-w-none grid-cols-[minmax(0,1.38fr)_minmax(0,.86fr)] grid-rows-[auto_auto] items-start gap-x-[clamp(13px,2vw,28px)] gap-y-[clamp(30px,5.2vw,76px)] max-[580px]:grid-cols-[minmax(0,1.42fr)_minmax(0,.78fr)] max-[580px]:gap-x-[10px] max-[580px]:gap-y-[2px]">
       {projects.map((project, index) => <ProjectCard key={project.href} project={project} index={index} />)}
      </section>
    </main>
  );
}

