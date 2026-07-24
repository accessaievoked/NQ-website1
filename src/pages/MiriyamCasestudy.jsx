import React from "react";
import Ecommerce from "../components/Ecommerce";
import Cvr from "../components/CaseStudy/Miriyam/Cvr";
import Casestudyhero from "../components/CaseStudy/Miriyam/Casestudyhero";
import CasestudyAboutUs from "../components/CaseStudy/Miriyam/CasestudyAboutus";
import Challenge from "../components/CaseStudy/Miriyam/Challenge";
import Impact from "../components/CaseStudy/Miriyam/Impact";
import RevealOnScroll from "../components/RevealOnScroll";


const MrjaCasestudy = (props) => {
    return (
        <div className="flex flex-col bg-white">
            <div className="flex flex-col items-start self-stretch bg-white">
                <Casestudyhero/>
                <RevealOnScroll> <CasestudyAboutUs/> </RevealOnScroll>
                <RevealOnScroll> <Challenge/> </RevealOnScroll>
                <RevealOnScroll> <Cvr/> </RevealOnScroll>
                <RevealOnScroll> <Impact/> </RevealOnScroll>
                <RevealOnScroll> <Ecommerce/> </RevealOnScroll>
            </div>
        </div>
    )
}


export default MrjaCasestudy
