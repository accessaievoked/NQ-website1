import Ecommerce1 from "../Images/Ecommerce2.png";
import Ecommerce2 from "../Images/Ecommerce4.png";
import Ecommerce3 from "../Images/Ecommerce1.png";
import Ecommerce4 from "../Images/Ecommerce3.png";

export default function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden">

      {/* ===== MOBILE/TABLET BLOCK (visible below 1024px) ===== */}
      <div className="relative w-full max-w-[595px] min-h-[512px] mx-auto block lg:hidden overflow-hidden">

        <img
          alt=""
          src={Ecommerce3}
          className="absolute object-cover"
          style={{ top: "200px", left: "-50px", width: "120px", height: "177px", zIndex: 0 }}
        />

        <img
          alt=""
          src={Ecommerce1}
          className="absolute object-cover"
          style={{ top: "90px", left: "50%", transform: "translateX(-50%)", width: "100px", height: "140px", zIndex: 0 }}
        />

        <img
          alt=""
          src={Ecommerce4}
          className="absolute object-cover"
          style={{ top: "110px", right: "-30px", width: "110px", height: "155px", zIndex: 0 }}
        />

        <img
          alt=""
          src={Ecommerce2}
          className="absolute object-cover"
          style={{ top: "345px", right: "40px", width: "100px", height: "160px", zIndex: 0 }}
        />

        <span
          className="absolute text-black font-semibold text-center"
          style={{ top: "200px", left: 0, right: 0, fontSize: "27px", lineHeight: 1.2, padding: "0 10px", zIndex: 10 }}
        >
          {"Let's Talk Ecommerce,\n Innovation That Moves the Needle"}
        </span>

        <span
          className="absolute text-black text-center"
          style={{ top: "316px", left: 0, right: 0, fontSize: "10.5px", lineHeight: 1.45, padding: "0 36px", zIndex: 10 }}
        >
          {
            "Every successful ecommerce brand starts with a great customer experience. We're more than just an ecommerce agency, we're your growth partner. From launching new stores to optimizing established ones, we work alongside ambitious brands to create seamless shopping experiences that convert, scale, and drive long-term growth.\nIf you're looking for a team that genuinely cares about your success, we'd love to hear about your project."
          }
        </span>

        <button
          className="absolute flex items-center bg-[#001930] text-left rounded-[100px] border-0"
          style={{ top: "408px", left: "50%", transform: "translateX(-50%)", padding: "11px 26px", gap: "10px", zIndex: 10 }}
          onClick={() => alert("Pressed!")}
        >
          <span className="text-white text-sm whitespace-nowrap">
            {"Get In Touch"}
          </span>
          <img
            alt=""
            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hyrhs0Ks0b/r0rjs34g_expires_30_days.png"
            className="object-fill"
            style={{ width: "20px", height: "20px" }}
          />
        </button>
      </div>

      {/* ===== DESKTOP BLOCK — UNCHANGED FROM ORIGINAL (visible at 1024px and up) ===== */}
      <div className="hidden lg:flex lg:items-start lg:self-stretch lg:max-w-[1242px] lg:relative lg:mb-[20px] lg:mx-auto">
        <div className="flex flex-col shrink-0 items-center relative mt-[196px]">
          <img alt=""
            src={Ecommerce3}
            className="w-[255px] h-[375px] object-fill"
          />
          <span className="text-black text-ml text-center w-[1051px] absolute bottom-0.5 left-[92px]" >
            {"Every successful ecommerce brand starts with a great customer experience. We're more than just an ecommerce agency, we're your growth partner. From launching new stores to optimizing established ones, we work alongside ambitious brands to create seamless shopping experiences that convert, scale, and drive long-term growth.\nIf you're looking for a team that genuinely cares about your success, we'd love to hear about your project."}
          </span>
        </div>
        <div className="flex-1 self-stretch">
        </div>
        <div className="flex flex-col shrink-0 items-start mr-[52px]">
          <img alt=""
            src={Ecommerce1}
            className="w-[210px] h-[294px] mb-[356px] object-fill"
          />
          <button className="flex items-center bg-[#001930] text-left py-[17px] px-11 ml-[124px] gap-[17px] rounded-[100px] border-0"
            onClick={() => alert("Pressed!")}>
            <span className="text-white text-sm" >
              {"Get In Touch"}
            </span>
            <img alt=""
              src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hyrhs0Ks0b/r0rjs34g_expires_30_days.png"}
              className="w-6 h-6 object-fill"
            />
          </button>
        </div>
        <img alt=""
          src={Ecommerce4}
          className="w-[210px] h-[294px] mt-[504px] mr-3.5 object-fill"
        />
        <img alt=""
          src={Ecommerce2}
          className="w-[242px] h-[391px] mt-[43px] object-fill"
        />
        <span className="text-black text-[60px] text-center w-[1173px] absolute top-[220px] right-6" >
          {"Let's Talk Ecommerce,\n Innovation That Moves the Needle"}
        </span>
      </div>
    </div>
  );
}