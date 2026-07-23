import React from "react";
import Ecommerce from "../components/Ecommerce";
import Cvr from "../components/CaseStudy/Claura/Cvr"
import RevealOnScroll from "../components/RevealOnScroll";

const MrjaCasestudy = (props) => {
    return (
        <div className="flex flex-col bg-white">
            <div className="flex flex-col items-start self-stretch bg-white">
                <Cvr/>
                <RevealOnScroll> <Ecommerce/> </RevealOnScroll>
            </div>
        </div>
    )
}

export default MrjaCasestudy
