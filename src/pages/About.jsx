import React from "react";
import Aboutushero from "../components/Aboutushero"
import Aboutus from "../components/Aboutus";
import Testimonals from "../components/TestimonialsScroll";
import Ecommerce from "../components/Ecommerce";
import RevealOnScroll from "../components/RevealOnScroll";

const About = (props) => {
	return (
		<div className="flex flex-col bg-white">
			<div className="flex flex-col items-start self-stretch bg-white">
			<Aboutushero/>
		     <RevealOnScroll>
		       <Aboutus/>
		     </RevealOnScroll>
				<RevealOnScroll> <Ecommerce/></RevealOnScroll>
				<RevealOnScroll> <Testimonals/></RevealOnScroll>
         </div>
         </div>
	)
}

export default About
