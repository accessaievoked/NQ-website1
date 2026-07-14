import top1 from "../assets/images/home/Herosection/Desktop/Claura.png";
import top2 from "../assets/images/home/Herosection/Desktop/covera.png";
import top3 from "../assets/images/home/Herosection/Desktop/hov.png";
import top4 from "../assets/images/home/Herosection/Desktop/mrja.png";

import bottom1 from "../assets/images/home/Herosection/Desktop/que.png";
import bottom2 from "../assets/images/home/Herosection/Desktop/threesixty.png";
import bottom3 from "../assets/images/home/Herosection/Desktop/mrja1.png";
import bottom4 from "../assets/images/home/Herosection/Desktop/threesixtycollection.png";

const topImages = [top1, top2, top3, top4];
const bottomImages = [bottom1, bottom2, bottom3, bottom4];

function FloatingSite({ src, className = "" }) {
  return (
    <div
      className={`absolute z-0 overflow-hidden rounded-xl bg-white/30 shadow-[0_10px_30px_rgba(47,68,100,0.08)] ${className}`}
    >
      <img
        src={src}
        alt=""
        className="h-full w-full object-contain opacity-[0.22] blur-[2px] saturate-[0.65]"
      />

      {/* This pastel layer gives the soft Figma look */}
      <div className="pointer-events-none absolute inset-0 bg-white/35" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate h-[550px] w-screen overflow-hidden bg-[radial-gradient(circle_at_52%_46%,#ffffff_0%,transparent_43%),linear-gradient(125deg,#dff6ff_0%,#fff_30%,#ffe4f2_73%,#dff6ff_100%)] md:h-[120svh]">
      {/* ================= TOP IMAGES ================= */}

      <FloatingSite
        src={topImages[0]}
        className="left-[-30%] top-[7%] h-[122px] w-[150px] md:left-[-2%] md:top-[8%] md:h-[205px] md:w-[285px]"
      />

      <FloatingSite
        src={topImages[1]}
        className="left-[9%] top-[3%] h-[122px] w-[150px] md:left-[20%] md:top-[1%] md:h-[202px] md:w-[350px]"
      />

      <FloatingSite
        src={topImages[2]}
        className="left-[51%] top-[5%] h-[130px] w-[150px] md:left-[51%] md:top-[-5%] md:h-[200px] md:w-[346px]"
      />

      <FloatingSite
        src={topImages[3]}
        className="right-[-28%] top-[14%] h-[134px] w-[155px] md:right-[-1%] md:top-[9%] md:h-[203px] md:w-[308px]"
      />

      {/* ================= BOTTOM IMAGES ================= */}

      <FloatingSite
        src={bottomImages[0]}
        className="bottom-[8%] left-[-30%] h-[122px] w-[150px] md:bottom-[13%] md:left-[-2%] md:h-[202px] md:w-[285px]"
      />

      <FloatingSite
        src={bottomImages[1]}
        className="bottom-[-2%] left-[9%] h-[122px] w-[150px] md:bottom-[-3%] md:left-[20%] md:h-[202px] md:w-[350px]"
      />

      <FloatingSite
        src={bottomImages[2]}
        className="bottom-[-2%] left-[51%] h-[92px] w-[150px] md:bottom-[-%10] md:left-[51%] md:h-[200px] md:w-[346px]"
      />

      <FloatingSite
        src={bottomImages[3]}
        className="bottom-[8%] right-[-32%] h-[136px] w-[165px] md:bottom-[11%] md:right-[-1%] md:h-[203px] md:w-[308px]"
      />

      {/* ================= HERO TEXT ================= */}

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="text-[30px] font-normal tracking-[-0.04em] text-black md:text-[44px]">
          <span className="block">Is Your Shopify Store</span>

          <span
            className="mt-2 inline-block text-[29px] font-medium tracking-[-0.06em] text-[#03235E] md:mt-4 md:text-[42px]"
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

        <p className="mt-5 max-w-[360px] text-[15px] leading-[1.4] text-black md:mt-8 md:max-w-[500px] md:text-[14px]">
          We identify conversion leaks, optimize every customer touchpoint,
          <br className="hidden md:block" />
          and turn more of your existing traffic into paying customers.
        </p>

        <a
          href="#demo"
          className="mt-6 rounded-full bg-[#001931] px-7 py-3 text-[15px] text-white transition duration-300 hover:scale-105 md:mt-9 md:px-8 md:py-4 md:text-[11px]"
        >
          Book a Demo &nbsp; ↗
        </a>
      </div>
    </section>
  );
}

