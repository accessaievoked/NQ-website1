import React, { useState, useEffect, useRef } from "react";
import Audit from '../assets/images/Services/Cro/Audit.png';
import Revenue from '../assets/images/Services/Cro/Revenue Leak Analysis.png';
import  Customer from '../assets/images/Services/Cro/Customer Journey Mapping.png';
import Funnel from '../assets/images/Services/Cro/Funnel Performance Review.png';
import User from '../assets/images/Services/Cro/User Behavior Analysis.png';
import Heatmaps from '../assets/images/Services/Cro/Heatmaps & Session Recordings.png';
import Growth from '../assets/images/Services/Cro/Growth Opportunity Roadmap.png';

const items = [
	{ id: "01", label: "01 Conversion Audit", image: Audit },
	{ id: "02", label: "02 Revenue Leak Analysis", image: Revenue},
	{ id: "03", label: "03 Customer Journey Mapping", image: Customer },
	{ id: "04", label: "04 Funnel Performance Review", image: Funnel },
	{ id: "05", label: "05 User Behavior Analysis", image: User },
	{ id: "06", label: "06 Heatmaps & Session Recordings", image: Heatmaps },
	{ id: "07", label: "07 Growth Opportunity Roadmap", image: Growth },
];

// Small helper: reveal a ref's contents once it scrolls into view.
// Fires once (unobserves after first intersection) so it doesn't replay on scroll-up.
function useInView(options = {}) {
	const ref = useRef(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);
					observer.unobserve(node);
				}
			},
			{ threshold: 0.2, rootMargin: "0px 0px -10% 0px", ...options }
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, []);

	return [ref, inView];
}

// Shared rendering fix so images stay crisp on retina/high-DPI screens
// and don't get soft edges during the opacity crossfade.
const CRISP_IMG_STYLE = {
	imageRendering: "-webkit-optimize-contrast",
	backfaceVisibility: "hidden",
	WebkitBackfaceVisibility: "hidden",
	transform: "translateZ(0)",
};

const CRISP_WRAPPER_STYLE = {
	transform: "translateZ(0)",
	backfaceVisibility: "hidden",
};

export default (props) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [mobileIndex, setMobileIndex] = useState(0);
	const pausedRef = useRef(false);
	const resumeTimeoutRef = useRef(null);

	// scroll-reveal triggers, in the order they should appear:
	// 1) heading  2) subheading  3) image + list block (together)
	const [headingRef, headingInView] = useInView();
	const [subRef, subInView] = useInView();
	const [desktopBlockRef, desktopBlockInView] = useInView();
	const [mobileBlockRef, mobileBlockInView] = useInView();

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
		<div className="flex flex-col items-start self-stretch mb-[30px] md:mb-[99px] mx-4 sm:mx-8 md:mx-20 overflow-x-hidden md:mt-24">
			<span
				ref={headingRef}
				className={`text-black text-[33px] sm:text-[48px] md:text-[60px] w-full md:w-[947px] mb-10 md:mb-10 leading-tight block transition-all duration-700 ease-out ${
					headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
				}`}
			>
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
					CRO
				</span>
				{" Optimization "}
				<br className="hidden md:block" />
				{"& Revenue Diagnosis"}
			</span>

			{/* ---------- DESKTOP LAYOUT ---------- */}
			<div ref={desktopBlockRef} className="hidden md:flex justify-between items-center self-stretch">
				<div className="flex flex-col shrink-0 items-center">
					<span
						ref={subRef}
						className={`text-black text-lg w-[471px] mb-[43px] transition-all duration-700 ease-out ${
							subInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
						}`}
					>
						{"Uncover friction, identify hidden revenue leaks, and prioritize the opportunities that drive measurable growth."}
					</span>
					<div
						className={`relative w-[400px] h-[281px] overflow-hidden  transition-all duration-700 ease-out delay-150 ${
							desktopBlockInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
						}`}
						style={CRISP_WRAPPER_STYLE}
					>
						{items.map((item, idx) => (
							<img
								key={item.id}
								src={item.image}
								alt={item.label}
								loading="lazy"
								decoding="async"
								className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
									idx === activeIndex ? "opacity-100" : "opacity-0"
								}`}
								style={CRISP_IMG_STYLE}
							/>
						))}
					</div>
				</div>
				<div
					className={`flex flex-col shrink-0 items-start transition-all duration-700 ease-out delay-150 ${
						desktopBlockInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
					}`}
				>
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
									className={`relative inline-block text-lg transition-all duration-300 ease-out ${
										idx === activeIndex
											? "text-black font-medium translate-x-[6px]"
											: "text-black/70 translate-x-0"
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
			{/* Order: heading (above) -> subheading -> image (tap-synced) -> numbered list (tappable, gradient + shift + underline) */}
			<div ref={mobileBlockRef} className="flex md:hidden flex-col items-start self-stretch">
				<span
					className={`text-black text-lg mb-[40px] transition-all duration-700 ease-out ${
						mobileBlockInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
					}`}
				>
					{"Uncover friction, identify hidden revenue leaks, and prioritize the opportunities that drive measurable growth."}
				</span>

				<div
					className={`relative w-full aspect-[424/300] overflow-hidden mb-8 transition-all duration-700 ease-out delay-150 ${
						mobileBlockInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
					}`}
					style={CRISP_WRAPPER_STYLE}
				>
					{items.map((item, idx) => (
						<img
							key={item.id}
							src={item.image}
							alt={item.label}
							loading="lazy"
							decoding="async"
							className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${
								idx === mobileIndex ? "opacity-100" : "opacity-0"
							}`}
							style={CRISP_IMG_STYLE}
						/>
					))}
				</div>

				<div
					className={`flex flex-col items-start self-stretch transition-all duration-700 ease-out delay-150 ${
						mobileBlockInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
					}`}
				>
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
									className={`relative inline-block text-lg transition-all duration-300 ease-out ${
										idx === mobileIndex
											? "text-black font-medium translate-x-[6px]"
											: "text-black/70 translate-x-0"
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