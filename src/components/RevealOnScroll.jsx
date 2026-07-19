import React, { useEffect, useRef, useState } from "react";

const RevealOnScroll = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // no unobserve here — keep tracking so it re-fires both ways
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`w-full self-stretch transition-all duration-700 will-change-transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: isVisible
          ? "cubic-bezier(0.34, 1.56, 0.64, 1)" // overshoot bounce on reveal (scrolling down)
          : "cubic-bezier(0.36, 0, 0.66, -0.56)", // slight anticipation dip on hide (scrolling up)
      }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;