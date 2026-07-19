import React from "react";
import CROOptimization from "../components/CROOptimization";
import ABTesting from "../components/ABTesting";
import DesignAndDevelopment from "../components/DesignAndDevelopment";
import PlatformMigration from "../components/PlatformMigration";
import SEO from "../components/SEO";
import Banner from "../assets/images/Services/ServicesBanner.png";
import RevealOnScroll from "../components/RevealOnScroll";

const Services = (props) => {
	return (
		<div className="flex flex-col bg-white pt-[88px]">
			<img
				src={ Banner }
				alt="Services"
				className="w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[600px] object-cover object-center md:mb-[99px] mb-[30px]"
			/>
			<RevealOnScroll><CROOptimization /></RevealOnScroll>
			<div className="self-stretch bg-[#00000014] h-[1px] md:mb-[39px] md:mx-20 mx-5 mb-[30px]">
			</div>
			<RevealOnScroll><ABTesting /></RevealOnScroll>
			<div className="self-stretch bg-[#00000014] h-[1px] md:mb-[39px] md:mx-20 mx-5 mb-[30px]">
			</div>
			<RevealOnScroll><DesignAndDevelopment /></RevealOnScroll>
			<div className="self-stretch bg-[#00000014] h-[1px] md:mb-[39px] md:mx-20 mx-5 mb-[30px]">
			</div>
			<RevealOnScroll><PlatformMigration /></RevealOnScroll>
			<div className="self-stretch bg-[#00000014] h-[1px] md:mb-[39px] md:mx-20 mx-5 mb-[30px]">
			</div>
			<RevealOnScroll><SEO /></RevealOnScroll>
		</div>
	)
}

export default Services