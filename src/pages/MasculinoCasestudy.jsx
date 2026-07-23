import React from "react";
import Ecommerce from "../components/Ecommerce";
import Cvr from "../components/CaseStudy/Masculino/Cvr";
import Casestudyhero from "../components/CaseStudy/Masculino/Casestudyhero";
import CasestudyAboutUs from "../components/CaseStudy/Masculino/CasestudyAboutus";
import Challenge from "../components/CaseStudy/Masculino/Challenge";
import Impact from "../components/CaseStudy/Masculino/Impact";
import RevealOnScroll from "../components/RevealOnScroll";


const MasculinoCasestudy = (props) => {
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


export default MasculinoCasestudy
