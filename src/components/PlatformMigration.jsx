import React, { useState, useEffect, useRef } from "react";
import Platform from '../assets/images/Services/Platform/Platform.png'


const items = [
	{ id: "01", label: "01 Store Migration Strategy", image: Platform },
	{ id: "02", label: "02 Product & Catalog Migration", image: Platform },
	{ id: "03", label: "03 Custom Shopify Development", image: Platform },
	{ id: "04", label: "04 Order History Transfer", image: Platform },
	{ id: "05", label: "05 Redirect & URL Mapping", image:  Platform },
	{ id: "06", label: "06 SEO Preservation", image: Platform },
	{ id: "07", label: "07 Launch & Quality Assurance", image: Platform },
];




export default (props) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [mobileIndex, setMobileIndex] = useState(0);
	const pausedRef = useRef(false);
	const resumeTimeoutRef = useRef(null);

	useEffect(() => {
		const interval = setInterval(() => {
			if (!pausedRef.current) {
				setMobileIndex((prev) => (prev + 1) % items.length);
			}
		}, 2500);
		return () => clearInterval(interval);
	}, []);

	const handleMobileSelect = (idx) => {
		setMobileIndex(idx);
		pausedRef.current = true;
		if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
		resumeTimeoutRef.current = setTimeout(() => {
			pausedRef.current = false;
		}, 5000); // resume autoplay 5s after a manual tap
	};

	useEffect(() => {
		return () => {
			if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
		};
	}, []);

	return (
		<div className="flex flex-col items-start self-stretch mb-[60px] md:mb-[99px] mx-4 sm:mx-8 md:mx-20">
			<span className="text-black text-[36px] sm:text-[48px] md:text-[60px] w-full md:w-[947px] mb-10 md:mb-10 leading-tight block">
				<span
					className="relative inline-block"
					style={{
						background: "#dbeaffbf",
						color: "#03235E",
						padding: "2px 12px",
						borderLeft: "3px solid #87B5DA",
						borderRight: "3px solid #87B5DA",
						lineHeight: 1.4,
					}}
				>
				Platform
				</span>
				{" Migration"}
				<br className="hidden md:block" />
				{"To Shopify"}
		
			</span>

			{/* ---------- DESKTOP LAYOUT ---------- */}
			<div className="hidden md:flex justify-between items-center self-stretch">
				<div className="flex flex-col shrink-0 items-center">
					<span className="text-black text-lg w-[471px] mb-[43px]" >
						{"Seamless migrations that protect your data, preserve SEO value, and set the foundation for future growth."}
					</span>
					<div className="relative w-[400px] h-[281px] overflow-hidden bg-[#D9D9D9]">
						{items.map((item, idx) => (
							<img
								key={item.id}
								src={item.image}
								alt={item.label}
								className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
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
								className="relative inline-block mb-4 ml-[22px] cursor-pointer overflow-visible"
							>
								{/* gradient wash, extends beyond the word on both sides */}
								<span
									aria-hidden="true"
									className={`pointer-events-none absolute -inset-x-16 -inset-y-6 blur-2xl transition-opacity duration-500 ease-out ${
										idx === activeIndex ? "opacity-100" : "opacity-0"
									}`}
									style={{
										background:
											"linear-gradient(100deg, rgba(255,255,255,0) 0%, rgba(255,190,225,0.55) 30%, rgba(210,200,240,0.5) 50%, rgba(170,215,255,0.55) 70%, rgba(255,255,255,0) 100%)",
									}}
								/>
								<span
									className={`relative text-lg transition-colors duration-300 ${
										idx === activeIndex ? "text-black font-medium" : "text-black/70"
									}`}
								>
									{item.label}
								</span>
							</span>
							<div className="w-[630px] h-[1px] mb-[15px] bg-[#0000004D]">
							</div>
						</React.Fragment>
					))}
				</div>
			</div>

			{/* ---------- MOBILE LAYOUT ---------- */}
			{/* Order: heading (above) -> subheading -> image (tap-synced) -> numbered list (tappable, gradient highlight) */}
			<div className="flex md:hidden flex-col items-start self-stretch">
				<span className="text-black text-lg mb-[40px]" >
					{"Uncover friction, identify hidden revenue leaks, and prioritize the opportunities that drive measurable growth."}
				</span>

				<div className="relative w-full aspect-[424/300] overflow-hidden bg-[#D9D9D9] mb-8">
					{items.map((item, idx) => (
						<img
							key={item.id}
							src={item.image}
							alt={item.label}
							className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
								idx === mobileIndex ? "opacity-100" : "opacity-0"
							}`}
						/>
					))}
				</div>

				<div className="flex flex-col items-start self-stretch">
					{items.map((item, idx) => (
						<React.Fragment key={item.id}>
							<span
								onClick={() => handleMobileSelect(idx)}
								className="relative inline-block mb-4 cursor-pointer overflow-visible"
							>
								{/* gradient wash, tap-triggered */}
								<span
									aria-hidden="true"
									className={`pointer-events-none absolute -inset-x-8 -inset-y-6 blur-2xl transition-opacity duration-500 ease-out ${
										idx === mobileIndex ? "opacity-100" : "opacity-0"
									}`}
									style={{
										background:
											"linear-gradient(100deg, rgba(255,255,255,0) 0%, rgba(255,190,225,0.55) 30%, rgba(210,200,240,0.5) 50%, rgba(170,215,255,0.55) 70%, rgba(255,255,255,0) 100%)",
									}}
								/>
								<span
									className={`relative text-lg transition-colors duration-300 ${
										idx === mobileIndex ? "text-black font-medium" : "text-black/70"
									}`}
								>
									{item.label}
								</span>
							</span>
							<div className="bg-[#0000004D] self-stretch h-[1px] mb-[15px]">
							</div>
						</React.Fragment>
					))}
				</div>
			</div>
		</div>
	)
}