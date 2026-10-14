import React from "react";
import { Check } from "lucide-react";
import getIcon, { BRAND_ICONS } from "./iconMap";
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
        ? "grid grid-cols-1 gap-2.5 outline-none md:grid-cols-2 md:gap-2"
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
        const brandIcon = option.icon ? BRAND_ICONS[option.icon] : null;
        const Icon = option.icon && !brandIcon ? getIcon(option.icon) : null;

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
            className={`block h-full cursor-pointer ${hasIcons && isOther ? "md:col-span-2" : ""}`}
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
              className={`relative flex h-full min-h-[64px] items-center gap-3 rounded-[22px] border bg-white px-4 py-3 transition-all md:min-h-[128px] md:flex-col md:items-start md:gap-1.5 md:rounded-xl md:p-2.5
                border-slate-200 hover:border-[#03235E]/40 hover:shadow-sm
                peer-checked:border-[#03235E] peer-checked:bg-[#eef4ff] peer-checked:shadow-[0_0_0_1px_#03235E]
                peer-focus-visible:ring-2 peer-focus-visible:ring-[#03235E]/40 peer-focus-visible:ring-offset-2`}
            >
              {brandIcon ? (
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl md:h-7 md:w-7 md:rounded-lg"
                  style={{
                    backgroundColor: option.color ? `${option.color}1f` : "#eef4ff",
                  }}
                >
                  <img src={brandIcon} alt="" className="h-6 w-6 object-contain md:h-5 md:w-5" />
                </span>
              ) : Icon ? (
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl md:h-7 md:w-7 md:rounded-lg"
                  style={{
                    backgroundColor: option.color ? `${option.color}1f` : "#eef4ff",
                    color: option.color || "#03235E",
                  }}
                >
                  <Icon size={18} className="md:h-[15px] md:w-[15px]" aria-hidden="true" />
                </span>
              ) : null}

              <span className="min-w-0 flex-1 md:w-full md:flex-none">
                <span className="block text-[14px] font-semibold leading-tight text-[#03235E] md:text-[12px]">
                  {option.title}
                </span>
                {option.explanation && (
                  <span className="mt-0.5 block text-[12px] leading-snug text-slate-500 md:mt-1.5 md:text-[11px]">
                    {option.explanation}
                  </span>
                )}
              </span>

              {checked && (
                <span
                  aria-hidden="true"
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#001931] bg-[#001931] text-white md:absolute md:right-2.5 md:top-2.5"
                >
                  <Check size={12} strokeWidth={3} />
                </span>
              )}
            </span>
          </label>
        );
      })}
    </div>
  );
}
