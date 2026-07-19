import React from "react";


export default function Aboutus (){
	return (
<div className="self-stretch">
  <div className="self-stretch bg-white" />

  <div className="flex flex-col lg:flex-row justify-between items-center self-stretch mb-[50px] px-6 lg:ml-20 lg:mr-6 gap-12 lg:gap-0">

    {/* TEXT — always first */}
    <div className="flex flex-col shrink-0 items-start gap-7 md:gap-12">
      <span className="text-black text-[28px] lg:text-[40px] w-full lg:w-[389px]">
        {"Our Story Began With A Realization"}
      </span>
      <span className="text-black text-base lg:text-lg w-full lg:w-[590px]">
        {"While the ecommerce industry in India is filled with talented design and development agencies, we noticed that very few were approaching projects through the lens of conversion optimization. Most conversations revolved around aesthetics, features, and launches, while customer behavior, analytics, conversion funnels, and revenue impact were often left unexplored.\nWe believed there was a better way. One where design decisions are backed by data, user journeys are shaped by real customer insights, and success is measured not by how a store looks, but by how it performs. That's why we built a team that combines strategy, analytics, CRO, design, and development to help brands grow beyond launch day."}
      </span>
    </div>

    {/* IMAGES — hidden on mobile, shown as simple stacked grid; desktop keeps original layout */}
    
    {/* Mobile image layout */}
    <div className="flex lg:hidden w-full justify-center">
      <div className="relative w-full max-w-sm mx-auto" style={{ height: "420px" }}>
        {/* Main tall center image */}
        <img
          alt=""
          src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hyrhs0Ks0b/1uqbysvf_expires_30_days.png"}
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[52%] h-auto object-cover rounded-xl"
        />
        {/* Top-left small image */}
        <img
          alt=""
          src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hyrhs0Ks0b/ubmsrqsa_expires_30_days.png"}
          className="absolute top-0 left-0 w-[32%] h-auto object-cover rounded-xl"
        />
        {/* Left tall image */}
        <img
          alt=""
          src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hyrhs0Ks0b/r3aypwqc_expires_30_days.png"}
          className="absolute top-[120px] left-0 w-[30%] h-auto object-cover rounded-xl"
        />
        {/* Bottom-left overlapping image */}
        <img
          alt=""
          src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hyrhs0Ks0b/jh9inwx3_expires_30_days.png"}
          className="absolute bottom-0 left-[10%] w-[36%] h-auto object-cover rounded-xl"
        />
        {/* Right small strip */}
        <img
          alt=""
          src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hyrhs0Ks0b/n8tjrnic_expires_30_days.png"}
          className="absolute bottom-[80px] right-0 w-[28%] h-auto object-cover rounded-xl"
        />
      </div>
    </div>

    {/* Desktop image layout — original, untouched */}
    <div className="hidden lg:flex shrink-0 items-start relative">
      <img alt=""
        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hyrhs0Ks0b/r3aypwqc_expires_30_days.png"}
        className="w-[152px] h-[291px] mt-[22px] mr-5 object-fill"
      />
      <div className="flex flex-col shrink-0 items-center relative my-[66px] mr-8">
        <img alt=""
          src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hyrhs0Ks0b/1uqbysvf_expires_30_days.png"}
          className="w-[249px] h-[557px] object-fill"
        />
        <img alt=""
          src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hyrhs0Ks0b/jh9inwx3_expires_30_days.png"}
          className="w-[161px] h-[283px] absolute bottom-[-73px] left-[-95px] object-fill"
        />
      </div>
      <img alt=""
        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hyrhs0Ks0b/n8tjrnic_expires_30_days.png"}
        className="w-[151px] h-[59px] mt-[239px] object-fill"
      />
      <img alt=""
        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hyrhs0Ks0b/ubmsrqsa_expires_30_days.png"}
        className="w-[169px] h-[218px] absolute top-0 right-[75px] object-fill"
      />
    </div>

  </div>
</div>
    )
}

