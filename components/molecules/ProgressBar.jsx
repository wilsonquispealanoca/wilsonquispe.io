import React from "react";

export const ProgressBar = ({ answeredQuestions, totalQuestions }) => {
  const progress = (answeredQuestions / totalQuestions) * 100;
  return (
    <div className="w-full h-4 bg-[#303044] rounded-lg overflow-hidden">
      <div
        className="h-full bg-[#c21aa5] transition-progress rounded-lg"
        style={{
          width: `${progress}%`,
        }}
      ></div>
    </div>
  );
};
