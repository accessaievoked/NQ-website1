import React, { useEffect, useState } from "react";

import CoveraCombo from "../Images/CoveraCombo.png";
import ThreeSixtyCombo from "../Images/ThreeSixtyCombo.png";
import HovCombo from "../Images/HovCombo.png";

const slides = [
  { id: 1, src: CoveraCombo, alt: "Covera store screenshot" },
  { id: 2, src: ThreeSixtyCombo, alt: "ThreeSixty store screenshot" },
  { id: 3, src: HovCombo, alt: "Hov store screenshot" },
];

export default function Perform() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);

      setTimeout(() => {
        setCurrent((previous) => (previous + 1) % slides.length);
        setFading(false);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="performance-section relative flex min-h-[400px] flex-col items-center justify-start overflow-hidden bg-white px-5 py-14 md:h-[100svh] md:min-h-0 md:justify-start md:px-8 md:pt-28">
      <style>{`
        .performance-heading {
          position: relative;
          z-index: 10;
          margin: 0 0 24px;
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: -0.02em;
          text-align: center;
        }

        .performance-heading .highlight {
          display: inline-block;
          background: #dbeafe;
          color: #000;
          padding: 2px 12px;
          border-left: 3px solid #87b5da;
          border-right: 3px solid #87b5da;
          line-height: 1.4;
        }

        /* Mobile: plain white background */
        .ambient-orbs {
          display: none;
        }

        .performance-image-wrap {
          position: relative;
          z-index: 10;
          width: 100%;
          height: auto;
          aspect-ratio: 4 / 3;
          margin-top :20px;
        }

        .performance-image-wrap img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: opacity 0.4s ease;
        }

        .performance-image-wrap img.fading {
          opacity: 0;
        }

        @media (min-width: 768px) {
          /* Soft circles behind the image only */
          .ambient-orbs {
            position: absolute;
            inset: 0;
            z-index: 0;
            display: block;
            overflow: hidden;
            pointer-events: none;
          }

          .orb {
            position: absolute;
            border-radius: 9999px;
          }

          /* Soft pink circle behind image */
          .orb-pink-top {
            left: 42%;
            top: 18%;
            width: 38vw;
            height: 42vh;
            background: rgba(255, 211, 235, 0.42);
            filter: blur(85px);
          }

          /* Soft blue circle behind bottom-right of image */
          .orb-blue-bottom-right {
            left: 48%;
            bottom: -17vh;
            width: 36vw;
            height: 38vh;
            background: rgba(185, 237, 255, 0.58);
            filter: blur(70px);
          }

          /* Removes the straight blue line at the section end */
          .performance-section::after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 5;
            height: 190px;
            pointer-events: none;
            background: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.72) 58%,
              #ffffff 100%
            );
          }

          .performance-image-wrap {
            width: min(100vw, 1260px);
            height: min(67vh, 620px);
          }

          .performance-image-wrap img {
            transform: scale(1);
          }
        }
      `}</style>

      {/* Desktop gradient circles */}
      <div className="ambient-orbs">
        <div className="orb orb-pink-top" />
        <div className="orb orb-blue-bottom-right" />
      </div>

      <h2 className="performance-heading max-w-[940px] text-xl leading-tight tracking-tight text-black md:text-2xl lg:text-4xl">
        Your Store Will Perform Better{" "}
        <span className="highlight">Next Quarter</span>
        <br />
        Than It Does Today.
      </h2>

      <div className="relative z-10 flex w-full justify-center">
        <div className="performance-image-wrap">
          <img
            src={slides[current].src}
            alt={slides[current].alt}
            className={fading ? "fading" : ""}
          />
        </div>
      </div>
    </section>
  );
}