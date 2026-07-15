import React from "react";
import Testimonals from "../components/TestimonialsScroll";
import Ecommerce from "../components/Ecommerce";
import Perform from "../components/Perform";
import PromiseDifference from "../components/Promisedifference";
import Services from "../components/Services";
import Audiencesection from "../components/Audiencesection";
import WhyChooseus from "../components/WhyChooseus";
import Herosection from "../components/Herosection";
import RevealOnScroll from "../components/RevealOnScroll";

const Home = (props) => {
	return (
		<div className="flex flex-col">
			<div className="flex flex-col items-start self-stretch">
				<Herosection/>
				{/* <RevealOnScroll><LogoTicker/></RevealOnScroll> */}
				<RevealOnScroll><Perform/></RevealOnScroll>
				<RevealOnScroll><Services/></RevealOnScroll>
				<RevealOnScroll><Audiencesection/></RevealOnScroll>
				<RevealOnScroll>
				<div className= "">
				<WhyChooseus/>
				<PromiseDifference/>
				</div>
				</RevealOnScroll>
				<RevealOnScroll><Ecommerce/></RevealOnScroll>
				<RevealOnScroll><Testimonals/></RevealOnScroll>
			</div>
		</div>
	)
}

export default Home