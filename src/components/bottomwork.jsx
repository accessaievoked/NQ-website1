import React from "react";
import Threesixty from "../assets/images/OurWork/Threesixty.png";
import Covera from "../assets/images/OurWork/Covera.png";
import Threesixtylogo from "../assets/images/OurWork/ThreeSixty Logo.png";
import Coveralogo from "../assets/images/OurWork/Covera Logo.png";

// Replace clientLogo and clientName with each client's real details.
const projects = [
  {
    clientName: "Threesixty",
    clientLogo: Threesixtylogo,
    category: "Brand Strategy",
    title: "Elevating Brand Perception Through Luxury-Focused Ecommerce Design",
    href: "/projects/threesixty",
    image: Threesixty,
    objectPosition: "60% center",
  },
  {
    clientName: "Covera",
    clientLogo: Coveralogo,
    category: "Design",
    title: "Crafting a High-Converting Experience for the Modern E-Commerce Shopper",
    href: "/projects/modern-commerce",
    image: Covera,
    objectPosition: "center",
  },
  {
    clientName: "Covera",
    clientLogo: Coveralogo,
    category: "Shopify Store & Development",
    title: "Creating a High-Converting Experience for the Modern E-Commerce Shopper",
    href: "/projects/conversion-experience",
    image: Covera,
    objectPosition: "58% center",
  },
  {
    clientName: "Threesixty",
    clientLogo: Threesixtylogo,
    category: "Shopify Store & Development",
    title: "Elevating Brand Perception Through Luxury-Focused Ecommerce Design",
    href: "/projects/luxury-commerce",
    image: Threesixty,
    objectPosition: "center",
  },
];

function ProjectCard({ project, index }) {
  const layout = [
    "relative z-[2] col-start-1 row-start-1 -mt-[clamp(70px,5vw,130px)] w-[calc(90%-6px)] max-[580px]:-mt-[8px] max-[580px]:w-[calc(90%-5px)]",
    "col-start-2 row-start-1 mt-[clamp(5px,14.4vw,62px)] max-[580px]:-mt-[-33px] max-[580px]:ml-[-14px]",
    "col-start-1 row-start-2 w-[72%] max-[580px]:w-[74%]",
    "col-span-2 row-start-2 ml-[calc(-35%+6px)] mt-[clamp(20px,3.3vw,50px)] w-[calc(120%-6px)] max-[580px]:ml-[calc(140% + 6px)] max-[580px]:mt-[19px] max-[580px]:w-[calc(130%-5px)]",
  ][index];

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
   <main className="relative min-h-full w-full max-w-full overflow-x-hidden px-20 pb-20 pt-[clamp(25px,4vw,64px)] text-[#080808] max-[580px]:px-[15px] max-[580px]:pb-[42px] max-[580px]:pt-[27px]">

      <section className="relative z-[2] grid w-full max-w-none grid-cols-[minmax(0,1.38fr)_minmax(0,.86fr)] grid-rows-[auto_auto] items-start gap-x-[clamp(13px,2vw,28px)] gap-y-[clamp(30px,5.2vw,76px)] max-[580px]:grid-cols-[minmax(0,1.42fr)_minmax(0,.78fr)] max-[580px]:gap-x-[10px] max-[580px]:gap-y-[22px]">
       {projects.map((project, index) => <ProjectCard key={project.href} project={project} index={index} />)}
      </section>
    </main>
  );
}

