import React from "react";
import AboutRightImage from '../assets/images/Aboutus/Aboutusright.png';


export default function Aboutus (){
	return (
<div className="self-stretch">
  <div className="self-stretch bg-white" />

  <div className="flex flex-col lg:flex-row justify-between items-center self-stretch mb-[50px] px-6 lg:px-6 gap-12 lg:gap-0">

    {/* TEXT — always first */}
    <div className="flex flex-col shrink-0 items-start gap-7 md:gap-12">
      <span className="text-[28px] lg:text-[35px] w-full lg:w-[389px]">
        <span className="text-black font-semibold">{"Our Story "}</span>
        <span className="text-gray-400 font-normal">{"Began With A Realization"}</span>
      </span>
      <span className="text-base lg:text-lg w-full lg:w-[590px] leading-relaxed block text-justify text-[10px] lg:text-[18px]">
        <span className="text-gray-400 font-normal">
          {"While the ecommerce industry in India is filled with talented design and development agencies, "}
        </span>
        <span className="text-black font-semibold">
          {"we noticed that very few were approaching projects through the lens of conversion optimization. "}
        </span>
        <span className="text-gray-400 font-normal">
          {"Most conversations revolved around aesthetics, features, and launches, while customer behavior, analytics, conversion funnels, and revenue impact were often left unexplored. "}
        </span>
        <span className="text-black font-semibold">
          {"We believed there was a better way. "}
        </span>
        <span className="text-gray-400 font-normal">
          {"One where design decisions are backed by data, user journeys are shaped by real customer insights, and success is measured not by how a store looks, but by how it performs. "}
        </span>
        <span className="text-black font-semibold">
          {"That's why we built a team that combines strategy, analytics, CRO, design, and development to help brands grow beyond launch day."}
        </span>
      </span>
    </div>

    {/* IMAGE — single image, shown on both mobile and desktop */}

    {/* Mobile image */}
    <div className="flex lg:hidden w-full justify-center">
      <img
        alt=""
        src={AboutRightImage}
        className="w-full max-w-sm h-auto object-cover rounded-xl"
      />
    </div>

    {/* Desktop image — centered spacing, no extra shift */}
    <div className="hidden lg:flex shrink-0 items-start relative">
      <img
        alt=""
        src={AboutRightImage}
        className="w-[420px] h-[500px] object-cover rounded-md"
      />
    </div>

  </div>
</div>
    )
}