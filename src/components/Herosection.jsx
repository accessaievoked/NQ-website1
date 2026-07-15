import top1 from "../assets/images/home/Herosection/Desktop/Claura.png";
import top2 from "../assets/images/home/Herosection/Desktop/covera.png";
import top3 from "../assets/images/home/Herosection/Desktop/hov.png";
import top4 from "../assets/images/home/Herosection/Desktop/mrja.png";

import bottom1 from "../assets/images/home/Herosection/Desktop/que.png";
import bottom2 from "../assets/images/home/Herosection/Desktop/threesixty.png";
import bottom3 from "../assets/images/home/Herosection/Desktop/mrja1.png";
import bottom4 from "../assets/images/home/Herosection/Desktop/threesixtycollection.png";

import LogoTicker from "./LogoTicker";

const topImages = [top1, top2, top3, top4];
const bottomImages = [bottom1, bottom2, bottom3, bottom4];

function FloatingSite({ src, className = "", fadeBottom = false }) {
  // For bottom-row cards only: mask the lower portion down to transparent
  // so the card's bottom edge dissolves instead of ending in a hard line.
  const bottomMask = fadeBottom
    ? "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)"
    : undefined;

  return (
    <div
      className={`absolute z-0 overflow-hidden rounded-xl bg-white/30 shadow-[0_10px_30px_rgba(47,68,100,0.08)] ${className}`}
      style={
        fadeBottom
          ? { WebkitMaskImage: bottomMask, maskImage: bottomMask }
          : undefined
      }
    >
      <img
        src={src}
        alt=""
        className="h-full w-full object-cover opacity-[0.2] blur-[1px] saturate-[0.5]"
      />

      <div className="pointer-events-none absolute inset-0 bg-white/35" />

      {fadeBottom && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent from-40% to-white" />
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate h-[550px] w-screen overflow-hidden bg-[radial-gradient(circle_at_52%_46%,#ffffff_0%,transparent_43%),linear-gradient(125deg,#dff6ff_0%,#fff_30%,#ffe4f2_73%,#dff6ff_100%)] md:h-[140svh]">
      {/* Mobile cards sit inside a fixed-size 400x550 canvas, centered.
          This makes every phone render the exact same layout — narrower
          screens just crop the edges evenly instead of the cards
          drifting into each other. md:contents removes this wrapper
          from the layout on desktop, so the md: positions below still
          resolve against the section as before. */}
      <div className="absolute left-1/2 top-0 h-full w-[400px] -translate-x-1/2 md:contents">
        <FloatingSite
          src={topImages[0]}
          className="left-[-120px] top-[38px] h-[122px] w-[150px] md:left-[-2%] md:top-[8%] md:h-[205px] md:w-[285px]"
        />

        <FloatingSite
          src={topImages[1]}
          className="left-[36px] top-[16px] h-[122px] w-[150px] md:left-[20%] md:top-[1%] md:h-[202px] md:w-[350px]"
        />

        <FloatingSite
          src={topImages[2]}
          className="left-[204px] top-[27px] h-[130px] w-[150px] md:left-[51%] md:top-[-5%] md:h-[200px] md:w-[346px]"
        />

        <FloatingSite
          src={topImages[3]}
          className="right-[-112px] top-[77px] h-[134px] w-[155px] md:right-[-1%] md:top-[9%] md:h-[203px] md:w-[308px]"
        />

        {/* Bottom image cards — staggered and fully visible */}
        <FloatingSite
          src={bottomImages[0]}
          fadeBottom
          className="bottom-[132px] left-[-120px] h-[122px] w-[150px] md:bottom-[24%] md:left-[-2%] md:h-[202px] md:w-[285px]"
        />

        <FloatingSite
          src={bottomImages[1]}
          fadeBottom
          className="bottom-[88px] left-[36px] h-[122px] w-[150px] md:bottom-[16%] md:left-[20%] md:h-[202px] md:w-[350px]"
        />

        <FloatingSite
          src={bottomImages[2]}
          fadeBottom
          className="bottom-[94px] left-[204px] h-[92px] w-[150px] md:bottom-[17%] md:left-[51%] md:h-[200px] md:w-[346px]"
        />

        <FloatingSite
          src={bottomImages[3]}
          fadeBottom
          className="bottom-[121px] right-[-128px] h-[136px] w-[165px] md:bottom-[22%] md:right-[-1%] md:h-[203px] md:w-[308px]"
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h1 className="text-[30px] font-normal tracking-[-0.04em] text-black md:text-[54px]">
          <span className="block">Is Your Shopify Store</span>

          <span
            className="mt-2 inline-block text-[25px] font-normal tracking-[-0.06em] text-[#03235E] md:mt-4 md:text-[62px]"
            style={{
              background: "#eff2f3",
              color: "#03235E",
              padding: "2px 12px",
              borderLeft: "3px solid #87B5DA",
              borderRight: "3px solid #87B5DA",
              lineHeight: 1.4,
            }}
          >
            Leaving Money On The Table?
          </span>
        </h1>

        <p className="mt-5 max-w-[360px] text-[15px] leading-[1.4] font-normal text-black md:mt-8 md:max-w-[750px] md:text-[20px]">
          We identify conversion leaks, optimize every customer touchpoint,
          <br className="hidden md:block" />
          and turn more of your existing traffic into paying customers.
        </p>

        <a
          href="#demo"
          className="mt-6 rounded-full bg-[#001931] px-7 py-3 text-[15px] text-white transition duration-300 hover:scale-105 md:mt-9 md:px-8 md:py-4 md:text-[15px]"
        >
          Book a Demo &nbsp; ↗
        </a>
      </div>


  <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-[260px] w-full bg-gradient-to-b from-transparent from-0% via-[#dff6ff]/60 via-45% to-white to-90% md:h-[340px]" />
<LogoTicker />

       </section>

  );
}