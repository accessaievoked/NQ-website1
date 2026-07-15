import React, { useState, useEffect } from "react";
import Design from '../assets/images/Services/Design and development/Design.png'


const items = [
	{ id: "01", label: "01 UX/UI Design", image: Design },
	{ id: "02", label: "02 Conversion-Focused Wireframes", image: Design },
	{ id: "03", label: "03 Custom Shopify Development", image: Design },
	{ id: "04", label: "04 Interaction Design", image: Design },
	{ id: "05", label: "05 Theme Customization", image:  Design },
	{ id: "06", label: "06 Performance Optimization", image: Design },
	{ id: "07", label: "07 Ongoing Design & Development Support", image: Design },
];

export default (props) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [mobileIndex, setMobileIndex] = useState(0);

	// Autoscroll effect for mobile image carousel
	useEffect(() => {
		const interval = setInterval(() => {
			setMobileIndex((prev) => (prev + 1) % items.length);
		}, 2500);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex flex-col items-start self-stretch mb-[60px] md:mb-[99px] mx-4 sm:mx-8 md:mx-20">
			<span className="text-black text-[36px] sm:text-[48px] md:text-[80px] w-full md:w-[947px] mb-10 md:mb-20 leading-tight" >
				{"Design & Development"}
			</span>

			{/* ---------- DESKTOP LAYOUT ---------- */}
			<div className="hidden md:flex justify-between items-center self-stretch">
				<div className="flex flex-col shrink-0 items-center">
					<span className="text-black text-lg w-[471px] mb-[93px]" >
						{"High-performing ecommerce experiences designed and built to convert, scale, and grow with your brand."}
					</span>
					<div className="relative w-[400px] h-[281px] overflow-hidden bg-[#D9D9D9]">
						{items.map((item, idx) => (
							<img
								key={item.id}
								src={item.image}
								alt={item.label}
								className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
									idx === activeIndex ? "opacity-100" : "opacity-0"
								}`}
							/>
						))}
					</div>
				</div>
				<div className="flex flex-col shrink-0 items-start">
					{items.map((item, idx) => (
						<React.Fragment key={item.id}>
							<span
								onMouseEnter={() => setActiveIndex(idx)}
								className={`text-lg mb-4 ml-[22px] cursor-pointer transition-colors ${
									idx === activeIndex ? "text-black font-medium" : "text-black/70"
								}`}
							>
								{item.label}
							</span>
							<div className="w-[630px] h-[1px] mb-[15px] bg-[#0000004D]">
							</div>
						</React.Fragment>
					))}
				</div>
			</div>

			{/* ---------- MOBILE LAYOUT ---------- */}
			{/* Order: heading (above) -> subheading -> numbered list -> autoscrolling image */}
			<div className="flex md:hidden flex-col items-start self-stretch">
				<span className="text-black text-lg mb-[40px]" >
					{"Uncover friction, identify hidden revenue leaks, and prioritize the opportunities that drive measurable growth."}
				</span>

				<div className="flex flex-col items-start self-stretch mb-8">
					{items.map((item, idx) => (
						<React.Fragment key={item.id}>
							<span className="text-black text-lg mb-4" >
								{item.label}
							</span>
							<div className="bg-[#0000004D] self-stretch h-[1px] mb-[15px]">
							</div>
						</React.Fragment>
					))}
				</div>

				<div className="relative w-full aspect-[474/281] overflow-hidden bg-[#D9D9D9]">
					{items.map((item, idx) => (
						<img
							key={item.id}
							src={item.image}
							alt={item.label}
							className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${
								idx === mobileIndex ? "opacity-100" : "opacity-0"
							}`}
						/>
					))}
				</div>
			</div>
		</div>
	)
}