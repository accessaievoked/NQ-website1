import React from "react";
import Ecommerce from "../components/Ecommerce";
import Cvr from "../components/CaseStudy/Claura/Cvr"
import Casestudyhero from "../components/CaseStudy/Claura/Casestudyhero";
import RevealOnScroll from "../components/RevealOnScroll";
import CasestudyAboutUs from "../components/CaseStudy/Claura/CasestudyAboutus";
import Challenge from "../components/CaseStudy/Claura/Challenge";
import Impact from "../components/CaseStudy/Claura/Impact";

const ClauraCasestudy = (props) => {
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

export default ClauraCasestudy
