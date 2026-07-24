import React from "react";
import { ArrowRight } from "lucide-react";


const challenges = [
    {
        bold: "Lacked Structure",
        rest: "Product Information",
    },
    {
        bold: "Low to No",
        rest: "Visibility of Offers",
    },
    {
        bold: "Limited Trust",
        rest: "& Purchase Assurance",
    },
    {
        bold: "Minimal Urgency",
        rest: "& Social Proof",
    },
];

const Challenge = () => {
    return (
        <section className="w-full  pb-16 md:py-24 px-4 md:px-5 lg:px-5">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-72">
                {/* Points list - left on desktop, bottom on mobile */}
                <div className="w-full md:w-1/2 flex flex-col gap-6 order-2 md:order-none">
                    {challenges.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-[#03235E] text-lg shrink-0">
                                   <ArrowRight className="w-4 h-4" />
                            </span>
                            <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                                <span className="font-semibold text-gray-900">{item.bold}</span>{" "}
                                {item.rest}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Heading + text - right on desktop, top on mobile */}
                <div className="w-full md:w-1/2 text-center md:text-right order-1 md:order-none">
                    <h2 className="text-2xl md:text-4xl font-medium text-gray-900 mb-4">
                        What Was the Challenge?
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      While Miriyam Store offered a curated collection of premium sarees, there were opportunities to strengthen the product experience and build greater customer confidence. To address these gaps, we conducted a 10-day CRO pilot from 30th June to 10th July, 2026, implementing targeted UX and conversion-focused improvements to create a more engaging and trustworthy shopping journey.
                      </p>
                </div>
            </div>
        </section>
    );
};

export default Challenge;