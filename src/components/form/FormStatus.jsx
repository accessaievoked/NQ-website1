import React from "react";
import { CheckCircle, AlertCircle, X, RotateCcw } from "lucide-react";

/** Success / error banner. Announced to screen readers via role + aria-live. */
export default function FormStatus({ status, onDismiss, onRetry }) {
  if (!status) return null;

  const isSuccess = status.type === "success";

  return (
    <div
      role={isSuccess ? "status" : "alert"}
      aria-live={isSuccess ? "polite" : "assertive"}
      className={`mb-5 flex items-start gap-3 rounded-2xl border p-4 ${
        isSuccess
          ? "border-emerald-500/30 bg-emerald-50 text-emerald-800"
          : "border-red-500/30 bg-red-50 text-red-800"
      }`}
    >
      {isSuccess ? (
        <CheckCircle size={22} className="mt-0.5 shrink-0" aria-hidden="true" />
      ) : (
        <AlertCircle size={22} className="mt-0.5 shrink-0" aria-hidden="true" />
      )}

      <div className="flex-1">
        <p className="font-semibold">{isSuccess ? "Submission successful!" : "Submission failed"}</p>
        <p className="mt-1 text-sm">{status.message}</p>
        {!isSuccess && onRetry && (
          <button
            type="button"
            onClick={onRetry}
            className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-red-700 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-red-800"
          >
            <RotateCcw size={14} aria-hidden="true" /> Try again
          </button>
        )}
      </div>

      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss notification"
          className="rounded p-1 opacity-70 hover:opacity-100"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}
