import React from "react";
import { Check } from "lucide-react";
import getIcon from "./iconMap";
import { isMultiple } from "../../utils/formHelpers";

export default function OptionGroup({
  question,
  value,
  onChange,
  describedBy,
  invalid,
}) {
  const multiple = isMultiple(question);
  const options = question.options || [];

  const hasIcons = options.some((option) => option.icon);

  const display =
    question.display ||
    (options.some((option) => option.icon || option.explanation)
      ? "cards"
      : "pills");

  const selected = multiple ? value || [] : value ? [value] : [];
  const isSelected = (v) => selected.includes(v);

  const toggle = (v) => {
    if (multiple) {
      onChange(
        isSelected(v)
          ? selected.filter((x) => x !== v)
          : [...selected, v]
      );
    } else {
      onChange(v);
    }
  };

  const inputType = multiple ? "checkbox" : "radio";

  const gridClass =
    display !== "cards"
      ? "flex flex-wrap gap-2 outline-none"
      : hasIcons
        ? "grid grid-cols-2 gap-2 outline-none"
        : "grid grid-cols-1 gap-3 outline-none min-[420px]:grid-cols-2";

  // Put "Other" last and make it span the entire grid width.
  const orderedOptions = hasIcons
    ? [
      ...options.filter(
        (option) =>
          option.value !== "Other" && option.title !== "Other"
      ),
      ...options.filter(
        (option) =>
          option.value === "Other" || option.title === "Other"
      ),
    ]
    : options;

  return (
    <div
      role={multiple ? "group" : "radiogroup"}
      aria-labelledby={`label-${question.id}`}
      aria-describedby={describedBy}
      aria-invalid={invalid || undefined}
      id={`q-${question.id}`}
      tabIndex={-1}
      className={gridClass}
    >
      {orderedOptions.map((option) => {
        const checked = isSelected(option.value);
        const Icon = option.icon ? getIcon(option.icon) : null;

        const isOther =
          option.value === "Other" || option.title === "Other";

        const inputId =
          `${question.id}-${option.value}`.replace(/\s+/g, "-");

        if (display === "pills") {
          return (
            <label
              key={option.value}
              htmlFor={inputId}
              className="cursor-pointer"
            >
              <input
                id={inputId}
                type={inputType}
                name={question.id}
                checked={checked}
                onChange={() => toggle(option.value)}
                className="peer sr-only"
              />

              <span
                className={`inline-flex h-10 items-center gap-1.5 rounded-full border px-5 text-[14px] transition-colors
                  border-slate-200 bg-white text-slate-600 hover:border-[#03235E]/50
                  peer-checked:border-[#001931] peer-checked:bg-[#001931] peer-checked:text-white
                  peer-focus-visible:ring-2 peer-focus-visible:ring-[#03235E]/40 peer-focus-visible:ring-offset-2`}
              >
                {checked && (
                  <Check
                    size={14}
                    strokeWidth={3}
                    aria-hidden="true"
                  />
                )}
                {option.title}
              </span>
            </label>
          );
        }

        return (
          <label
            key={option.value}
            htmlFor={inputId}
            className={`block h-full cursor-pointer ${hasIcons && isOther ? "col-span-2" : ""
              }`}
          >
            <input
              id={inputId}
              type={inputType}
              name={question.id}
              checked={checked}
              onChange={() => toggle(option.value)}
              className="peer sr-only"
            />

            <span
              className={`relative flex h-full min-h-[128px] flex-col gap-1.5 rounded-xl border bg-white p-2.5 transition-all
                border-slate-200 hover:border-[#03235E]/40 hover:shadow-sm
                peer-checked:border-[#03235E] peer-checked:bg-[#eef4ff] peer-checked:shadow-[0_0_0_1px_#03235E]
                peer-focus-visible:ring-2 peer-focus-visible:ring-[#03235E]/40 peer-focus-visible:ring-offset-2`}
            >
              <span className="flex items-start justify-between gap-2">
                {Icon ? (
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: option.color
                        ? `${option.color}1f`
                        : "#eef4ff",
                      color: option.color || "#03235E",
                    }}
                  >
                    <Icon size={15} aria-hidden="true" />
                  </span>
                ) : (
                  <span />
                )}

                <span
                  aria-hidden="true"
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${checked
                    ? "border-[#001931] bg-[#001931] text-white"
                    : "border-slate-300 bg-white text-transparent"
                    }`}
                >
                  <Check size={12} strokeWidth={3} />
                </span>
              </span>

              <span className="block text-[12px] font-semibold leading-tight text-[#03235E]">
                {option.title}
              </span>

              {option.explanation && (
                <span className="block text-[11px] leading-snug text-slate-500">
                  {option.explanation}
                </span>
              )}
            </span>
          </label>
        );
      })}
    </div>
  );
}
