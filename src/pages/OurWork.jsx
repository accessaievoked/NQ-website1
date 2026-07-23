import React from "react";
import Ourworktop from "../components/Ourworktop";
import Building from "../components/Buliding";
import Bottomwork from "../components/bottomwork";
import RevealOnScroll from "../components/RevealOnScroll";

const OurWork = (props) => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col items-start self-stretch">
                <Ourworktop/>
				<RevealOnScroll><Building/></RevealOnScroll>
				<RevealOnScroll>
					<Bottomwork/>
				</RevealOnScroll>
            </div>
        </div>
    )
}


export default OurWork