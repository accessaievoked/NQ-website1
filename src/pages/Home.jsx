import React from "react";
import Testimonals from "../components/TestimonialsScroll";
import Ecommerce from "../components/Ecommerce";
import LogoTicker from "../components/LogoTicker";
import Perform from "../components/Perform";
import PromiseDifference from "../components/Promisedifference";
import Services from "../components/Services";
import Audiencesection from "../components/Audiencesection";
import WhyChooseus from "../components/WhyChooseus";

const Home = (props) => {
	return (
		<div className="flex flex-col bg-white">
			<div className="flex flex-col items-start self-stretch bg-white">
        <Ecommerce/>
				<LogoTicker/>
        <Perform/>
        <Services/>
				<Audiencesection/>
        <WhyChooseus/>
        <PromiseDifference/>
			  <Ecommerce/>
				 <Testimonals/>
			</div>
		</div>
	)
}

export default Home
