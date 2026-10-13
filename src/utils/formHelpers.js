// Pure helpers shared by the page and the renderer. No question is hardcoded
// here — everything is derived from formConfig.

export const isChoice = (q) => q.inputType === "select" || q.inputType === "checkbox";
export const isMultiple = (q) =>
  q.selection ? q.selection === "multiple" : q.inputType === "checkbox";

export function getAllQuestions(config) {
  return config.flatMap((section) => section.questions);
}

export function emptyValue(q) {
  return isChoice(q) && isMultiple(q) ? [] : "";
}

export function buildInitialAnswers(config) {
  return Object.fromEntries(getAllQuestions(config).map((q) => [q.id, emptyValue(q)]));
}

/** Which chosen options need a free-text "please specify" box. */
export function getSpecifyOption(q, value) {
  const chosen = Array.isArray(value) ? value : value ? [value] : [];
  return (q.options || []).find((o) => o.specify && chosen.includes(o.value)) || null;
}

/**
 * Flattens answers + "Other" detail text into one object keyed by question id,
 * containing EVERY question (empty string / empty array when unanswered) so the
 * Sheet columns always stay aligned. "Other" becomes "Other: <detail>".
 */
export function composeAnswers(config, answers, otherText) {
  const out = {};
  getAllQuestions(config).forEach((q) => {
    let value = answers[q.id];
    if (isChoice(q)) {
      const detail = (otherText[q.id] || "").trim();
      const specify = getSpecifyOption(q, value);
      const withDetail = (v) => (specify && v === specify.value && detail ? `${v}: ${detail}` : v);
      value = Array.isArray(value) ? value.map(withDetail) : value ? withDetail(value) : "";
    }
    out[q.id] = value ?? emptyValue(q);
  });
  return out;
}

// ---------------------------------------------------------------- validation

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const COUNTRY_CODES = ["+91", "+1", "+44", "+971", "+65", "+61", "+49", "+33"];
export const DEFAULT_COUNTRY_CODE = "+91";

export function splitPhone(value) {
  const v = (value || "").trim();
  const code = COUNTRY_CODES.find((c) => v === c || v.startsWith(`${c} `));
  if (code) return { code, number: v.slice(code.length).trim() };
  return { code: DEFAULT_COUNTRY_CODE, number: v };
}

function isValidUrl(value) {
  try {
    const url = new URL(/^https?:\/\//i.test(value) ? value : `https://${value}`);
    return /^https?:$/.test(url.protocol) && url.hostname.includes(".") && !/\s/.test(value);
  } catch {
    return false;
  }
}

/** Returns an error message, or "" when the value is valid. */
export function validateQuestion(q, value, otherText = {}) {
  const multiple = isChoice(q) && isMultiple(q);
  const text = multiple ? "" : String(value ?? "").trim();
  const empty = multiple ? !value || value.length === 0 : q.inputType === "tel"
    ? !splitPhone(text).number
    : text === "";

  if (empty) {
    if (!q.required) return "";
    if (isChoice(q)) return multiple ? "Please select at least one option." : "Please choose an option.";
    return "This field is required.";
  }

  if (isChoice(q)) {
    const specify = getSpecifyOption(q, value);
    if (specify && !(otherText[q.id] || "").trim()) return "Please tell us what “Other” is.";
    return "";
  }

  switch (q.inputType) {
    case "email":
      return EMAIL_RE.test(text) ? "" : "Enter a valid email address, e.g. you@brand.com.";
    case "tel": {
      const { code, number } = splitPhone(text);
      const digits = number.replace(/[\s\-().]/g, "");
      if (!/^\d+$/.test(digits)) return "Use digits only for your mobile number.";
      if (code === "+91") return /^[6-9]\d{9}$/.test(digits) ? "" : "Enter a valid 10-digit Indian mobile number.";
      return digits.length >= 6 && digits.length <= 14 ? "" : "Enter a valid mobile number.";
    }
    case "url":
      return isValidUrl(text) ? "" : "Enter a valid link, e.g. https://example.com.";
    case "number": {
      const n = Number(text);
      if (!Number.isFinite(n)) return "Enter a valid number.";
      return n < 0 ? "Enter a number that is 0 or more." : "";
    }
    default:
      return "";
  }
}

export function validateSection(section, answers, otherText) {
  const errors = {};
  section.questions.forEach((q) => {
    const message = validateQuestion(q, answers[q.id], otherText);
    if (message) errors[q.id] = message;
  });
  return errors;
}
