import React from "react";
import Question from "./Question";

/**
 * Generic, config-driven renderer: given one section from formConfig it
 * renders every question in order. It knows nothing about specific questions.
 */
export default function FormRenderer({ section, answers, otherText, errors, onChange, onOtherChange }) {
  return (
    <div className="space-y-5">
      {section.questions.map((question) => (
        <Question
          key={question.id}
          question={question}
          value={answers[question.id]}
          otherValue={otherText[question.id]}
          error={errors[question.id]}
          onChange={(value) => onChange(question.id, value)}
          onOtherChange={(value) => onOtherChange(question.id, value)}
        />
      ))}
    </div>
  );
}
