// font-family: Inter — add to your index.html:

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[520px] md:min-h-[580px] overflow-hidden bg-white font-inter">

      {/* ── Image 1: Top center ── */}
      <div className="absolute top-0 left-1/2 -translate-x-[110px] md:-translate-x-[120px] w-[100px] md:w-[120px] h-[140px] md:h-[165px] rounded-sm overflow-hidden z-0">
        <img src="/images/hero-laptop.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      {/* ── Image 2: Top right ── */}
      <div className="absolute top-[15px] md:top-[20px] right-0 w-[120px] md:w-[145px] h-[175px] md:h-[210px] rounded-sm overflow-hidden z-0">
        <img src="/images/hero-face.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      {/* ── Image 3: Left middle ── */}
      <div className="absolute top-[110px] md:top-[130px] left-0 w-[100px] md:w-[120px] h-[175px] md:h-[205px] rounded-sm overflow-hidden z-0">
        <img src="/images/hero-model.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      {/* ── Image 4: Bottom right ── */}
      <div className="absolute bottom-0 right-[50px] md:right-[70px] w-[120px] md:w-[140px] h-[160px] md:h-[185px] rounded-sm overflow-hidden z-0">
        <img src="/images/hero-fashion.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      {/* ── Centered Text Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-20 py-14 md:py-20">
        <h1 className="font-inter text-[30px] sm:text-[40px] md:text-[52px] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0f0f0f] mb-5 max-w-[700px]">
          Let's Talk Ecommerce,{" "}
          Innovation That Moves the Needle
        </h1>

        <p className="text-[13px] md:text-[14.5px] leading-[1.75] text-[#222] mb-8 max-w-[560px]">
          Every successful ecommerce brand starts with a great customer experience.
          We're more than just an ecommerce agency, we're your growth partner. From
          launching new stores to optimizing established ones, we work alongside
          ambitious brands to create seamless shopping experiences that convert,
          scale, and drive long-term growth.{" "}
          <span className="underline">
            If you're looking for a team that genuinely cares about your success,
            we'd love to hear about your project.
          </span>
        </p>

        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#1b2540] hover:bg-[#2c3960] text-white text-[14px] font-medium px-7 py-3.5 rounded-full transition-colors duration-200 no-underline"
        >
          Get In Touch <span>↗</span>
        </a>
      </div>
    </section>
  );
}