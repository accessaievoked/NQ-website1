const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyKe36nbQxcNwjYa0lzap9e_qw9mxweHOxzJ4T9xJR5vpT_3vkSwsaYjg5Y_g01C-kGdA/exec";

const REQUEST_TIMEOUT_MS = 25000;

const GENERIC_ERROR =
  "We couldn't submit your form. Your answers are saved here — please try again.";
const UNCONFIRMED_ERROR =
  "We couldn't confirm that your form was received. Your answers are still here — please try again.";

/**
 * Converts an answers object into a flat, Sheet-friendly payload.
 * - arrays (multi-select) become comma-separated strings
 * - null / undefined become empty strings
 * - everything else is coerced to a trimmed string
 */
export function normalizeAnswers(answers) {
  return Object.fromEntries(
    Object.entries(answers || {}).map(([key, value]) => {
      if (Array.isArray(value)) return [key, value.join(", ")];
      if (value === null || value === undefined) return [key, ""];
      return [key, String(value).trim()];
    })
  );
}

/**
 * Sends the answers to the Google Apps Script Web App.
 *
 * Resolves to { success: true } ONLY when the Web App replied with JSON
 * containing success: true. Anything else — network failure, a blocked
 * (CORS) response, an HTML error page, success: false — resolves to
 * { success: false, message } so the UI never shows a false confirmation.
 */
export async function submitForm(answers) {
  const payload = normalizeAnswers(answers);

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      // Default text/plain content type on purpose: a JSON content type would
      // trigger a CORS preflight, which Apps Script Web Apps do not answer.
      body: JSON.stringify(payload),
      redirect: "follow",
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const text = await response.text();
    let result;
    try {
      result = JSON.parse(text);
    } catch {
      // e.g. an HTML error/login page — not a confirmation.
      return { success: false, message: UNCONFIRMED_ERROR };
    }

    if (!result || result.success !== true) {
      console.error("Form submission rejected:", result && result.error);
      return { success: false, message: GENERIC_ERROR };
    }

    return { success: true };
  } catch (error) {
    // Includes network errors, timeouts and CORS-blocked responses, where the
    // request may or may not have been received. We cannot confirm it, so we
    // do not report success.
    console.error("Form submission failed:", error);
    return {
      success: false,
      message:
        error && error.name === "AbortError"
          ? "The request timed out. Your answers are still here — please try again."
          : UNCONFIRMED_ERROR,
    };
  } finally {
    clearTimeout(timer);
  }
}
