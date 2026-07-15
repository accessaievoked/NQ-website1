import React from "react";
import Aboutushero from "../components/Aboutushero"
import Aboutus from "../components/Aboutus";
import Testimonals from "../components/TestimonialsScroll";
import Ecommerce from "../components/Ecommerce";

const About = (props) => {
	return (
		<div className="flex flex-col bg-white">
			<div className="flex flex-col items-start self-stretch bg-white">
				<Aboutushero/>
		     <Aboutus/>
				 <Ecommerce/>
				 <Testimonals/>
         </div>
         </div>
	)
}

export default About
