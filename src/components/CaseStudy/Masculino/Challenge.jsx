import React from "react";
import { ArrowRight } from "lucide-react";


const challenges = [
    {
        bold: "Low average order value",
        rest: "due to limited cross-sell opportunities.",
    },
    {
        bold: "Promotional offers lacked visibility",
        rest: "across the shopping journey.",
    },
    {
        bold: "Low customer confidence",
        rest: "due to missing product trust signals.",
    },
];

const Challenge = () => {
    return (
        <section className="w-full  py-16 md:py-24 px-4 md:px-5 lg:px-5">
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
                       While Masculino attracted steady traffic, the shopping journey presented opportunities to improve basket value and conversion. On April 9th, we launched a set of targeted UX optimizations and measured their impact over the following month through May 9th.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Challenge;