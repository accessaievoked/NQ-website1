
import Hov from "../Images/Hov.png";
import Que from "../Images/Que.png";
import MasculinoLatino from "../Images/Masculino Latino.png";
import ThreeSixty from "../Images/ThreeSixty.png";
import Covera from "../Images/Covera.png";

const logos = [
  { src: Hov, alt: "Hov" },
  { src: Que, alt: "Que Universe" },
  { src: MasculinoLatino, alt: "Masculino Latino" },
  { src: ThreeSixty, alt: "ThreeSixty" },
  { src: Covera, alt: "Covera" },
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