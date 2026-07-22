
import Hov from "../assets/logos/Hov.png";
import Que from "../assets/logos/Que.png";
import MasculinoLatino from "../assets/logos/Masculino Latino.png";
import ThreeSixty from "../assets/logos/ThreeSixty.png";
import Covera from "../assets/logos/Covera.png";
import mrja from "../assets/logos/Mrja.png";
import SumanNathwani from "../assets/logos/Suman Nathwani.png";
import Gil from "../assets/logos/GIL.png";
import Sienna from "../assets/logos/sienna.png";
import Kerrato from "../assets/logos/kerrato.png";
import StitchInc from "../assets/logos/StitchInc.png";
import Indethnic from "../assets/logos/Indethnic.png";
import Bellofox from "../assets/logos/Bellofox.png";
import Bigsmall from "../assets/logos/bigsmall.png";



const logos = [
  { src: Hov, alt: "Hov" },
  { src: Que, alt: "Que Universe" },
  { src: MasculinoLatino, alt: "Masculino Latino" },
  { src: ThreeSixty, alt: "ThreeSixty" },
  { src: Covera, alt: "Covera" },
  { src: mrja, alt: "mrja" },
  { src: SumanNathwani, alt: "Suman Nathwani" },
  { src: Gil, alt: "Gil" },
  { src: Sienna, alt: "Sienna" },
  { src: Kerrato, alt: "Kerrato" },
  { src: StitchInc, alt: "StitchInc" },
  { src: Indethnic, alt: "Indethnic" },
  { src: Bellofox, alt: "Bellofox" },
  { src: Bigsmall, alt: "Bigsmall" },
];

const allLogos = [...logos, ...logos];

export default function LogoTicker() {
  return (
   <div className="logo-ticker absolute bottom-[0px] left-0 z-20 flex h-[68px] w-full items-center overflow-hidden bg-transparent md:h-[96px] md:bottom-[60px]">
    <style>{`
        @keyframes logo-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .ticker-inner {
          display: flex;
          width: max-content;
          align-items: center;
          animation: logo-scroll 26s linear infinite;
          will-change: transform;
        }

        .ticker-item {
          display: flex;
          width: 90px;
          height: 58px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          margin: 0 14px;
        }

        .ticker-item img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          opacity: 0.8;
        }

       @media (min-width: 768px) {
  .ticker-item {
    width: 135px;
    height: 48px;
    margin: 0 30px;
  }
}

      `}</style>

      <div className="ticker-inner">
        {allLogos.map((logo, index) => (
          <div className="ticker-item" key={`${logo.alt}-${index}`}>
            <img src={logo.src} alt={logo.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}