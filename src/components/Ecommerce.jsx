import Ecommerce1 from "../Images/Ecommerce2.png";
import Ecommerce2 from "../Images/Ecommerce4.png";
import Ecommerce3 from "../Images/Ecommerce1.png";
import Ecommerce4 from "../Images/Ecommerce3.png";

export default function Ecommerce() {
  return (
    <div className="relative w-full overflow-hidden">

      {/* ===== MOBILE/TABLET BLOCK (visible below 1024px) ===== */}
      <div className="w-full max-w-[595px] mx-auto block lg:hidden px-4 pt-8 pb-10">

        {/* Image cluster — same relative left/top layout as desktop, scaled ~30% */}
        <div className="relative w-full" style={{ height: "245px" }}>
          <img
            alt=""
            src={Ecommerce3}
            className="absolute object-cover rounded-md"
            style={{ left: "-7%", top: "59px", width: "31%", height: "153px", zIndex: 0 }}
          />
          <img
            alt=""
            src={Ecommerce1}
            className="absolute object-cover rounded-md"
            style={{ left: "35.4%", top: "0px", width: "27%", height: "128px", zIndex: 0 }}
          />
          <img
            alt=""
            src={Ecommerce4}
            className="absolute object-cover rounded-md"
            style={{ left: "70.6%", top: "241px", width: "27%", height: "128px", zIndex: 0 }}
          />
          <img
            alt=""
            src={Ecommerce2}
            className="absolute object-cover rounded-md"
            style={{ left: "84.5%", top: "10px", width: "20%", height: "147px", zIndex: 0 }}
          />
        </div>

        {/* Heading — pulled up further so it sits through the vertical middle of the cluster */}
        <h1
          className="relative text-black font-medium text-center"
          style={{ fontSize: "25px", lineHeight: 1.2, marginTop: "-165px", zIndex: 10, padding: "0" }}
        >
          {"Let's Talk Ecommerce, Innovation That Moves the Needle"}
        </h1>

        {/* Paragraph — sits close under heading, overlapping bottom of side images */}
        <p
          className="relative text-black text-center"
          style={{ fontSize: "12px", lineHeight: 1.45, marginTop: "6px", zIndex: 10, padding: "0 4px" }}
        >
          {
            "Every successful ecommerce brand starts with a great customer experience. We're more than just an ecommerce agency, we're your growth partner. From launching new stores to optimizing established ones, we work alongside ambitious brands to create seamless shopping experiences that convert, scale, and drive long-term growth. If you're looking for a team that genuinely cares about your success, we'd love to hear about your project."
          }
        </p>

        {/* Button */}
        <div className="flex justify-center relative" style={{ marginTop: "6px", zIndex: 10 }}>
          <button
            className="flex items-center bg-[#001930] text-left rounded-[100px] border-0"
            style={{ padding: "10px 22px", gap: "8px" }}
            onClick={() => alert("Pressed!")}
          >
            <span className="text-white text-sm whitespace-nowrap">
              {"Get In Touch"}
            </span>
            <img
              alt=""
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hyrhs0Ks0b/r0rjs34g_expires_30_days.png"
              className="object-fill"
              style={{ width: "18px", height: "18px" }}
            />
          </button>
        </div>
      </div>

      {/* ===== DESKTOP BLOCK (visible at 1024px and up) ===== */}
      <div
        className="relative mx-auto hidden max-w-[1242px] lg:block md:my-20"
        style={{ height: "620px" }}
      >
        {/* Decorative image cluster — purely positional, no longer carries any text */}
        <img alt=""
          src={Ecommerce3}
          className="absolute rounded-md object-cover"
          style={{ left: "0%", top: "20%", width: "255px", height: "375px", zIndex: 0 }}
        />
        <img alt=""
          src={Ecommerce1}
          className="absolute rounded-md object-cover"
          style={{ left: "38%", top: "0px", width: "210px", height: "190px", zIndex: 0 }}
        />
        <img alt=""
          src={Ecommerce2}
          className="absolute rounded-md object-cover"
          style={{ left: "81%", top: "4%", width: "242px", height: "391px", zIndex: 0 }}
        />
        <img alt=""
          src={Ecommerce4}
          className="absolute rounded-md object-cover"
          style={{ left: "61%", top: "56%", width: "210px", height: "294px", zIndex: 0 }}
        />

        {/* Text column — heading, paragraph, button in one normal, centered stack */}
        <div className="absolute left-1/2 top-1/2 z-10 w-full max-w-[900px] -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-black text-[52px] leading-[1.15]">
            {"Let's Talk Ecommerce,\nInnovation That Moves the Needle"}
          </h1>

          <p className="text-black text-ml mx-auto mt-6 max-w-[760px]">
            {"Every successful ecommerce brand starts with a great customer experience. We're more than just an ecommerce agency, we're your growth partner. From launching new stores to optimizing established ones, we work alongside ambitious brands to create seamless shopping experiences that convert, scale, and drive long-term growth.\nIf you're looking for a team that genuinely cares about your success, we'd love to hear about your project."}
          </p>

          <div className="mt-6 flex justify-center">
            <button className="flex items-center bg-[#001930] text-left py-[17px] px-11 rounded-[100px] border-0"
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
        </div>
      </div>
    </div>
  );
}