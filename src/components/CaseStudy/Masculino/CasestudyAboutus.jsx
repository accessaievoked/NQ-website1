import React from "react";
import claraWireframes from "../../../assets/images/Casestudy/Claura/Wireframe.png"; // update path

const AboutUs = () => {
    return (
        <section className="w-full bg-white py-16 md:pt-24 md:pb-4 overflow-hidden">
            {/* Top heading - always centered */}
            <div className="text-center max-w-3xl mx-auto px-4 mb-16 md:mb-20">
                <h2 className="performance-heading text-2xl sm:text-3xl md:text-5xl font-medium leading-snug text-gray-900">
                    The <span className="highlight">HDesigning for</span>
                    <br className="hidden md:block" />Bigger Baskets
                </h2>
                <p className="mt-4 text-sm md:text-base text-gray-600 max-w-lg mx-auto">
                   How a 15-day CRO pilot helped Masculino Latino increase their average order value along with site speed.
                </p>
            </div>

            {/* About row: text left / image right on desktop, stacked+centered on mobile */}
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-0 px-4 md:pl-16 lg:pl-24">
                {/* Text block */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left shrink-0 order-2 md:order-none">
                    <h3 className="performance-heading text-xl md:text-3xl font-medium mb-4">
                        About <span className="highlight">Masculino Latino</span>
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 max-w-sm md:max-w-md leading-relaxed">
                      Masculino is a premium men's innerwear brand offering Italian-inspired designs crafted for comfort, performance, and style. Its products use breathable, high-quality fabrics to deliver an elevated everyday wear experience while enhancing confidence.
                    </p>
                </div>

                {/* Image block - bleeds off the right edge on desktop, contained+centered on mobile */}
                <div className="w-full md:w-1/2 md:flex md:justify-start order-1 md:order-none">
                    <img
                        src={claraWireframes}
                        alt="Claura PDP and checkout wireframes"
                        className="w-full max-w-md md:max-w-none md:w-[105%] lg:w-[105%] h-auto object-contain"
                    />
                </div>
            </div>

            <style>{`
                .performance-heading .highlight {
                    display: inline-block;
                    background: #dbeaffbf;
                    color: #000;
                    padding: 2px 12px;
                    border-left: 3px solid #87b5da;
                    border-right: 3px solid #87b5da;
                    line-height: 1.4;
                }
            `}</style>
        </section>
    );
};

export default AboutUs;