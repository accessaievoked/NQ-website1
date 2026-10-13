import React from "react";
import { ChevronDown } from "lucide-react";
import OptionGroup from "./OptionGroup";
import {
  COUNTRY_CODES,
  getSpecifyOption,
  isChoice,
  splitPhone,
} from "../../utils/formHelpers";

const BASE_INPUT =
  "w-full border bg-white/90 text-[14px] text-[#03235E] placeholder:text-slate-400 outline-none transition " +
  "focus:border-[#03235E] focus:ring-2 focus:ring-[#03235E]/15";
const PILL = `${BASE_INPUT} h-12 rounded-full px-5`;
const AREA = `${BASE_INPUT} min-h-[24px] max-h-[64px] overflow-y-auto resize-y rounded-[22px] px-5 py-3.5 leading-relaxed`;

const borderFor = (invalid) => (invalid ? "border-red-400" : "border-slate-200");

export default function Question({ question, value, otherValue, error, onChange, onOtherChange }) {
  const { id, name, required, inputType, placeholder, hint } = question;
  const inputId = `q-${id}`;
  const errorId = `err-${id}`;
  const hintId = `hint-${id}`;
  const invalid = Boolean(error);
  const describedBy = [hint ? hintId : null, invalid ? errorId : null].filter(Boolean).join(" ") || undefined;

  const common = {
    id: inputId,
    name: id,
    "aria-invalid": invalid || undefined,
    "aria-required": required || undefined,
    "aria-describedby": describedBy,
  };

  const specify = isChoice(question) ? getSpecifyOption(question, value) : null;

  let control;
  if (isChoice(question)) {
    control = (
      <OptionGroup
        question={question}
        value={value}
        onChange={onChange}
        describedBy={describedBy}
        invalid={invalid}
      />
    );
  } else if (inputType === "textarea") {
    control = (
      <textarea
        {...common}
        rows={3}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`${AREA} ${borderFor(invalid)}`}
      />
    );
  } else if (inputType === "tel") {
    const { code, number } = splitPhone(value);
    const update = (nextCode, nextNumber) =>
      onChange(nextNumber.trim() ? `${nextCode} ${nextNumber}` : "");
    control = (
      <div
        className={`flex h-12 w-full items-center overflow-hidden rounded-full border bg-white/90 transition focus-within:border-[#03235E] focus-within:ring-2 focus-within:ring-[#03235E]/15 ${borderFor(
          invalid
        )}`}
      >
        <label className="relative flex h-full shrink-0 items-center border-r border-slate-200 pl-5 pr-2">
          <span className="sr-only">Country code</span>
          <select
            value={code}
            onChange={(e) => update(e.target.value, number)}
            className="h-full cursor-pointer appearance-none bg-transparent pr-5 text-[14px] text-[#03235E] outline-none"
          >
            {COUNTRY_CODES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <ChevronDown size={14} className="pointer-events-none absolute right-2 text-slate-400" aria-hidden="true" />
        </label>
        <input
          {...common}
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          value={number}
          placeholder={placeholder}
          onChange={(e) => update(code, e.target.value)}
          className="h-full min-w-0 flex-1 bg-transparent px-4 text-[14px] text-[#03235E] placeholder:text-slate-400 outline-none"
        />
      </div>
    );
  } else {
    const htmlType = ["email", "url", "number"].includes(inputType) ? inputType : "text";
    control = (
      <input
        {...common}
        // type="url" would make the browser pop its own validation bubble and
        // reject "www.brand.com"; we validate ourselves, so keep it as text.
        type={htmlType === "url" ? "text" : htmlType}
        inputMode={htmlType === "number" ? "numeric" : htmlType === "url" ? "url" : undefined}
        min={htmlType === "number" ? 0 : undefined}
        autoComplete={htmlType === "email" ? "email" : id === "pocName" ? "name" : "off"}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`${PILL} ${borderFor(invalid)}`}
      />
    );
  }

  const isGroup = isChoice(question);

  return (
    <div className="space-y-2">
      <div>
        {isGroup ? (
          <span id={`label-${id}`} className="block text-[13px] font-medium leading-snug text-[#03235E]">
            {name} <Marker required={required} />
          </span>
        ) : (
          <label htmlFor={inputId} id={`label-${id}`} className="block text-[13px] font-medium leading-snug text-[#03235E]">
            {name} <Marker required={required} />
          </label>
        )}
        {hint && (
          <p id={hintId} className="mt-0.5 text-[12px] text-slate-500">
            {hint}
          </p>
        )}
      </div>

      {control}

      {specify && (
        <div>
          <label htmlFor={`${inputId}-other`} className="sr-only">
            Please specify “{specify.title}”
          </label>
          <input
            id={`${inputId}-other`}
            type="text"
            value={otherValue || ""}
            placeholder={`Please specify — ${specify.title}`}
            onChange={(e) => onOtherChange(e.target.value)}
            aria-invalid={invalid && !(otherValue || "").trim() ? true : undefined}
            className={`${PILL} ${borderFor(invalid && !(otherValue || "").trim())}`}
          />
        </div>
      )}

      {invalid && (
        <p id={errorId} role="alert" className="pl-2 text-[12px] font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function Marker({ required }) {
  return required ? (
    <span className="text-rose-600" title="Required" aria-hidden="true">
      *
    </span>
  ) : (
    <span className="font-normal text-slate-400">(optional)</span>
  );
}
