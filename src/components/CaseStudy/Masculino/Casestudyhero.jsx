import React from "react";
import claraBanner from "../../../assets/images/Casestudy/Claura/Banner.png";

const Casestudyhero = () => {
    return (
        <div className="relative w-full flex flex-col items-center bg-white mt-20 md:mt-24 px-4 md:px-10 lg:px-16">
            <img
                src={claraBanner}
                alt="Claura ecommerce case study banner"
                className="w-full max-w-4xl h-auto object-contain"
            />
        </div>
    );
};

export default Casestudyhero;