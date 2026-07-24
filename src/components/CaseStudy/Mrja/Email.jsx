// email.jsx
import React from "react";

import feature1Front from "../../../assets/images/Casestudy/Mrja/Email Desktop.png";
import feature1FrontMobile from "../../../assets/images/Casestudy/Mrja/Email Mobile.png";

export default function Email() {
  return (
    <section className="w-full bg-[#fafafa] py-12 lg:py-16 px-6 md:px-12 lg:px-16">
      <div className="w-full">
        {/* Image */}
        <div className="flex items-center justify-center w-full md:pl-14">
          <div className="relative w-full sm:w-[300px] md:w-full">
            <div className="relative z-20 w-full overflow-hidden">
              {/* Mobile image */}
              <img
                src={feature1FrontMobile}
                alt="Automated Email Workflows"
                loading="lazy"
                className="w-full h-auto object-contain md:hidden"
              />
              {/* Desktop image */}
              <img
                src={feature1Front}
                alt="Automated Email Workflows"
                loading="lazy"
                className="w-full h-auto object-contain hidden md:block"
              />
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="max-w-[540px] mx-auto md:mx-12 text-center md:text-left">
          <h2 className="text-[25px] md:text-[38px] leading-tight font-normal text-[#111827] mb-5 mt-12">
            Automated Email Workflows
          </h2>

          <p className="text-[10px] md:text-[15px] text-gray-600">
            We introduced automated email workflows powered by customer tags and triggers to streamline communication across the purchase journey. This enabled timely, personalized emails for customer follow-ups and engagement, reducing manual effort while delivering a more consistent brand experience.
          </p>
        </div>
      </div>
    </section>
  );
}