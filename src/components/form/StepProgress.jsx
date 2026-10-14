import React from "react";

/** "STEP 2 OF 5" + a segmented progress bar. Earlier steps are clickable. */
export default function StepProgress({ steps, current, onSelect }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <p className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
        Step {current + 1} of {steps.length}
      </p>
      <ol className="flex w-full items-center gap-1.5 sm:w-auto" aria-label="Form progress">
        {steps.map((step, i) => {
          const done = i < current;
          const active = i === current;
          return (
            <li key={step.id}>
              <button
                type="button"
                disabled={!done}
                onClick={() => onSelect(i)}
                aria-label={`${step.title}${done ? " (completed — go back)" : active ? " (current step)" : ""}`}
                aria-current={active ? "step" : undefined}
                className={`block h-1.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#03235E] ${
                  active ? "w-9 bg-[#001931]" : done ? "w-6 cursor-pointer bg-[#001931]/60 hover:bg-[#001931]" : "w-6 bg-slate-200"
                }`}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
