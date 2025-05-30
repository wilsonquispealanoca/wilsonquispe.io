import React, { useState, useEffect } from "react";

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    // Check if the selected answer is correct when it changes
    if (selectedAnswer !== null) {
      setIsCorrect(selectedAnswer === currentQuestion.correctAnswer);
    }
  }, [selectedAnswer, currentQuestion.correctAnswer]);

  const handleAnswerChange = (event) => {
    setSelectedAnswer(parseInt(event.target.value, 10));
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setIsCorrect(false);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // All questions have been answered
      setCurrentQuestionIndex(0); // Reset to the first question
    }
  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Quiz</h1>
      <p className="text-lg mb-4">{currentQuestion.question}</p>
      <div className="answer-options mb-4">
        {currentQuestion.answers.map((answer, index) => (
          <label
            key={index}
            className={`block mb-2 ${
              selectedAnswer === index
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100 cursor-pointer"
            }`}
          >
            <input
              type="radio"
              name="answer"
              value={index}
              checked={selectedAnswer === index}
              onChange={handleAnswerChange}
              disabled={selectedAnswer !== null}
              className="hidden"
            />
            <span className="px-2 py-1">{answer}</span>
          </label>
        ))}
      </div>
      <div className="slider-container mb-4">
        <input
          type="range"
          min={0}
          max={currentQuestion.answers.length - 1}
          value={selectedAnswer !== null ? selectedAnswer : ""}
          onChange={handleAnswerChange}
          disabled={selectedAnswer !== null}
          className="w-full"
        />
      </div>
      {selectedAnswer !== null && (
        <p className={`mb-4 ${isCorrect ? "text-green-500" : "text-red-500"}`}>
          {isCorrect ? "Correct!" : "Incorrect."} The correct answer is{" "}
          {currentQuestion.answers[currentQuestion.correctAnswer]}.
        </p>
      )}
      <button
        onClick={handleNextQuestion}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        {currentQuestionIndex === questions.length - 1
          ? "Restart"
          : "Next Question"}
      </button>
    </div>
  );
};

export default Quiz;
