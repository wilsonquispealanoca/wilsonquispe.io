import React from "react";
import MathQuiz from "../../components/molecules/mathquiz";

export default function Lesson() {
  const questions = [
    {
      question: "cUANTO es 2 + 2",
      answers: ["5", "4", "6", "8"],
    },
    {
      question: "cUANTO es 8 + 3",
      answers: ["1", "6", "34", "11"],
    },
  ];

  return <MathQuiz questions={questions} />;
}
