import React, { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Loader2, Send } from "lucide-react";
import logo from "../assets/logos/Logo.png";
import formConfig from "../config/formConfig";
import FormRenderer from "../components/form/FormRenderer";
import FormStatus from "../components/form/FormStatus";
import StepProgress from "../components/form/StepProgress";
import FlipStage from "../components/form/FlipStage";
import { submitForm } from "../utils/submitForm";
import {
  buildInitialAnswers,
  composeAnswers,
  validateSection,
} from "../utils/formHelpers";

// Same site thumbnails the homepage hero floats in the background.
import top1 from "../assets/images/home/Herosection/Desktop/Claura.png";
import top2 from "../assets/images/home/Herosection/Desktop/covera.png";
import top3 from "../assets/images/home/Herosection/Desktop/hov.png";
import top4 from "../assets/images/home/Herosection/Desktop/mrja.png";
import bottom1 from "../assets/images/home/Herosection/Desktop/que.png";
import bottom2 from "../assets/images/home/Herosection/Desktop/threesixty.png";
import bottom3 from "../assets/images/home/Herosection/Desktop/mrja1.png";
import bottom4 from "../assets/images/home/Herosection/Desktop/threesixtycollection.png";
import top1M from "../assets/images/home/Herosection/Mobile/claura.png";
import top2M from "../assets/images/home/Herosection/Mobile/Covera.png";
import top3M from "../assets/images/home/Herosection/Mobile/Hov.png";
import top4M from "../assets/images/home/Herosection/Mobile/mrja.png";
import bottom1M from "../assets/images/home/Herosection/Mobile/que.png";
import bottom2M from "../assets/images/home/Herosection/Mobile/threesixty.png";
import bottom3M from "../assets/images/home/Herosection/Mobile/mrja1.png";
import bottom4M from "../assets/images/home/Herosection/Mobile/threesixtycollection.png";

// Positions mirror the homepage hero: on mobile the cards sit in a centered
// 400px column (px offsets), on md+ they spread across the viewport (%).
const BRAND_THUMBS = [
  { d: top1, m: top1M, cls: "left-[-120px] top-[38px] h-[122px] w-[150px] md:left-[-2%] md:top-[8%] md:h-[205px] md:w-[285px]" },
  { d: top2, m: top2M, cls: "left-[36px] top-[16px] h-[122px] w-[150px] md:left-[20%] md:top-[1%] md:h-[202px] md:w-[350px]" },
  { d: top3, m: top3M, cls: "left-[204px] top-[27px] h-[130px] w-[150px] md:left-[51%] md:top-[-5%] md:h-[200px] md:w-[346px]" },
  { d: top4, m: top4M, cls: "right-[-112px] top-[77px] h-[134px] w-[155px] md:right-[-1%] md:top-[9%] md:h-[203px] md:w-[308px]" },
  { d: bottom1, m: bottom1M, cls: "bottom-[132px] left-[-120px] h-[122px] w-[150px] md:bottom-[24%] md:left-[-2%] md:h-[202px] md:w-[285px]", fade: true },
  { d: bottom2, m: bottom2M, cls: "bottom-[88px] left-[36px] h-[122px] w-[150px] md:bottom-[16%] md:left-[20%] md:h-[202px] md:w-[350px]", fade: true },
  { d: bottom3, m: bottom3M, cls: "bottom-[94px] left-[204px] h-[92px] w-[150px] md:bottom-[17%] md:left-[51%] md:h-[200px] md:w-[346px]", fade: true },
  { d: bottom4, m: bottom4M, cls: "bottom-[121px] right-[-128px] h-[136px] w-[165px] md:bottom-[22%] md:right-[-1%] md:h-[203px] md:w-[308px]", fade: true },
];

const FADE_MASK = "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)";

function BrandBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute left-1/2 top-0 h-full w-[400px] -translate-x-1/2 md:contents">
        {BRAND_THUMBS.map((t, i) => (
          <div
            key={i}
            className={`absolute overflow-hidden rounded-xl bg-white/30 shadow-[0_10px_30px_rgba(47,68,100,0.08)] ${t.cls}`}
            style={t.fade ? { WebkitMaskImage: FADE_MASK, maskImage: FADE_MASK } : undefined}
          >
            <picture>
              <source media="(max-width: 767px)" srcSet={t.m} />
              <img src={t.d} alt="" className="h-full w-full object-cover opacity-[0.2] blur-[1px] saturate-[0.5]" />
            </picture>
            <div className="absolute inset-0 bg-white/35" />
          </div>
        ))}
      </div>
    </div>
  );
}

const SUCCESS_COPY = {
  leftTitle: "You're all set.",
  leftText:
    "Thanks for sharing your story. Our team will review your answers and get in touch with you shortly.",
};

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(() => buildInitialAnswers(formConfig));
  const [otherText, setOtherText] = useState({});
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focusId, setFocusId] = useState(null);
  const [flipping, setFlipping] = useState(false);

  const submittingRef = useRef(false);
  const headingRef = useRef(null);
  const scrollRef = useRef(null);
  const firstRender = useRef(true);

  const section = formConfig[step];
  const isLast = step === formConfig.length - 1;
  const left = submitted ? SUCCESS_COPY : { leftTitle: section.leftTitle, leftText: section.leftText };

  useEffect(() => {
    document.title = "Client Onboarding | Next Quarter";
  }, []);

  // After a step change, bring the new step into view and move focus to its
  // heading so keyboard / screen-reader users land at the top of the card.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (headingRef.current && !focusId) {
      // Reset only the question scroller; scrollIntoView would also scroll
      // the overflow-hidden page wrapper and push the header off-screen.
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
      headingRef.current.focus({ preventScroll: true });
    }
  }, [step, submitted]); // eslint-disable-line react-hooks/exhaustive-deps

  // Focus + scroll to the first invalid field once it has rendered.
  useEffect(() => {
    if (!focusId) return;
    const el = document.getElementById(`q-${focusId}`);
    if (el) {
      el.scrollIntoView({ block: "nearest" });
      el.focus({ preventScroll: true });
    }
    setFocusId(null);
  }, [focusId, step]);

  const handleChange = useCallback((id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => (prev[id] ? { ...prev, [id]: undefined } : prev));
  }, []);

  const handleOtherChange = useCallback((id, value) => {
    setOtherText((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => (prev[id] ? { ...prev, [id]: undefined } : prev));
  }, []);

  const failAt = (stepIndex, sectionErrors) => {
    setErrors(sectionErrors);
    setStep(stepIndex);
    setFocusId(Object.keys(sectionErrors)[0]);
  };

  const doSubmit = async () => {
    if (submittingRef.current) return;

    // Validate every section so nothing required slips through.
    for (let i = 0; i < formConfig.length; i += 1) {
      const sectionErrors = validateSection(formConfig[i], answers, otherText);
      if (Object.keys(sectionErrors).length) {
        failAt(i, sectionErrors);
        return;
      }
    }

    submittingRef.current = true;
    setSubmitting(true);
    setStatus(null);

    const result = await submitForm(composeAnswers(formConfig, answers, otherText));

    submittingRef.current = false;
    setSubmitting(false);

    if (result.success) {
      // Only now — after a confirmed response — do we clear the form.
      setAnswers(buildInitialAnswers(formConfig));
      setOtherText({});
      setErrors({});
      setStep(0);
      setSubmitted(true);
      setStatus({
        type: "success",
        message: "Thanks! We've received your onboarding details and will be in touch soon.",
      });
    } else {
      setStatus({ type: "error", message: result.message });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (submitting || flipping) return;

    const sectionErrors = validateSection(section, answers, otherText);
    if (Object.keys(sectionErrors).length) {
      failAt(step, sectionErrors);
      return;
    }

    setErrors({});
    if (isLast) {
      doSubmit();
    } else {
      setStatus(null);
      setStep((s) => s + 1);
    }
  };

  const goBack = () => {
    if (flipping) return;
    setErrors({});
    setStatus(null);
    setStep((s) => Math.max(0, s - 1));
  };

  const startAnother = () => {
    setSubmitted(false);
    setStatus(null);
  };

  return (
    <main className="relative h-[100svh] w-full overflow-clip bg-[linear-gradient(180deg,#ffe4f2_0%,#f3e6f7_25%,#dff6ff_55%,#ffffff_85%)] md:bg-[linear-gradient(125deg,#ffe4f2_0%,#f3e6f7_32%,#dff6ff_70%,#e9f1ff_100%)] lg:h-auto lg:min-h-screen lg:overflow-visible font-['Public_Sans',sans-serif]">
      <style>{`
        @keyframes nqFadeUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        .nq-fade { animation: nqFadeUp .35s ease-out both; }
        @media (prefers-reduced-motion: reduce) { .nq-fade { animation: none; } }
      `}</style>

      <BrandBackdrop />

      <div className="relative z-10 flex h-full flex-col lg:block lg:h-auto lg:flex-none">
        {/* Left panel — fixed on desktop, stacked on top for tablet/mobile */}
        <aside className="flex shrink-0 flex-col px-6 pb-2 pt-4 sm:px-10 sm:pb-6 sm:pt-6 lg:fixed lg:inset-y-0 lg:left-0 lg:w-1/2 lg:px-20 lg:py-10">
          <a href="/" aria-label="Next Quarter home" className="inline-block self-start">
            <img src={logo} alt="Next Quarter" className="h-auto w-20" />
          </a>

          <div key={submitted ? "done" : step} className="nq-fade flex flex-col pt-3 sm:pt-10 lg:flex-1 lg:justify-center lg:pb-16 lg:pt-0">
            <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#03235E]/70 sm:text-[11px]">
              Performance Marketing
            </p>
            <h1 className="mt-1 max-w-[520px] text-[22px] sm:mt-4 font-normal leading-[1.1] tracking-[-0.03em] text-[#03235E] sm:text-[42px] lg:text-[52px]">
              {left.leftTitle}
            </h1>
            <p className="mt-1.5 max-w-[400px] text-[12px] leading-snug text-slate-600 sm:mt-4 sm:text-[14px] sm:leading-relaxed lg:mt-5 lg:text-[15px]">
              {left.leftText}
            </p>
          </div>
        </aside>

        {/* Right panel — the form card */}
        <section className="flex min-h-0 w-full flex-1 justify-center px-4 pb-4 sm:px-8 lg:flex-none lg:ml-[50%] lg:min-h-screen lg:w-1/2 lg:items-center lg:px-12 lg:py-12">
          <FlipStage
            stepKey={submitted ? "done" : step}
            onFlipChange={setFlipping}
            className="h-full w-full max-w-[1080px] rounded-[24px] shadow-[0_24px_60px_rgba(47,68,100,0.14)] lg:h-[calc(100vh-6rem)]"
          >
          <div className="flex h-full w-full flex-col overflow-hidden rounded-[24px] border border-slate-300 bg-white/90 p-5 backdrop-blur-md sm:p-9 lg:p-10">
            {submitted ? (
              <div className="nq-fade">
                <FormStatus status={status} onDismiss={() => setStatus(null)} />
                <h2
                  ref={headingRef}
                  tabIndex={-1}
                  className="text-[22px] font-semibold tracking-tight text-[#03235E] outline-none"
                >
                  Thank you for onboarding with us
                </h2>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-500">
                  Our team will review your answers and reach out to discuss the next steps.
                </p>
                <button
                  type="button"
                  onClick={startAnother}
                  className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-[#001931] px-6 text-[14px] font-medium text-white transition hover:bg-[#03235E]"
                >
                  Submit another response
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Client onboarding form"
                className="flex h-full min-h-0 flex-col"
              >
                <StepProgress steps={formConfig} current={step} onSelect={(i) => { if (flipping) return; setErrors({}); setStatus(null); setStep(i); }} />

                  <div
                    key={step}
                    ref={scrollRef}
                    className="mt-5 min-h-0 flex-1 overflow-y-auto scrollbar-none"
                    data-flip-scroll
                  >
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                      {section.eyebrow || section.title}
                    </p>
                    <h2
                      ref={headingRef}
                      tabIndex={-1}
                      className="mt-1 text-[24px] font-bold leading-tight tracking-tight text-[#03235E] outline-none"
                    >
                      {section.heading || section.title}
                    </h2>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">{section.description}</p>
                    <p className="mt-3 text-[11px] text-slate-400">
                      <span className="text-rose-600" aria-hidden="true">*</span> Indicates a required question
                    </p>

                    <div className="mt-5">
                      <FormRenderer
                        section={section}
                        answers={answers}
                        otherText={otherText}
                        errors={errors}
                        onChange={handleChange}
                        onOtherChange={handleOtherChange}
                      />
                    </div>
                  </div>

                <div className="mt-7">
                  <FormStatus status={status} onDismiss={() => setStatus(null)} onRetry={doSubmit} />

                  <div className="flex items-center justify-between gap-3">
                    {step > 0 ? (
                      <button
                        type="button"
                        onClick={goBack}
                        disabled={submitting || flipping}
                        className="inline-flex h-11 items-center gap-1.5 rounded-full px-4 text-[14px] font-medium text-slate-600 transition hover:text-[#03235E] disabled:opacity-50"
                      >
                        <ArrowLeft size={16} aria-hidden="true" /> Back
                      </button>
                    ) : (
                      <span />
                    )}

                    <button
                      type="submit"
                      disabled={submitting || flipping}
                      aria-busy={submitting}
                      className="inline-flex h-11 items-center gap-2 rounded-full bg-[#001931] px-7 text-[14px] font-medium text-white transition hover:bg-[#03235E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#03235E] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {submitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" aria-hidden="true" /> Submitting…
                        </>
                      ) : isLast ? (
                        <>
                          Submit <Send size={15} aria-hidden="true" />
                        </>
                      ) : (
                        <>
                          Continue <ArrowRight size={16} aria-hidden="true" />
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <p className="sr-only" aria-live="polite">
                  Step {step + 1} of {formConfig.length}: {section.title}
                </p>
              </form>
            )}
          </div>
          </FlipStage>
        </section>
      </div>
    </main>
  );
}
