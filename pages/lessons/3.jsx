import React, { useState } from "react";

const initialState = {
  question: "¿Qué animal es este?",
  image: "/assets/illustrations/T'ant'a.svg",
  options: [
    { id: "1", text: "Perro" },
    { id: "2", text: "Gato" },
    { id: "3", text: "Oso" },
    { id: "4", text: "Zorro" },
  ],
  answerIndex: 2, // Índice de la respuesta correcta en el array options
};

export default function Lesson() {
  const [isCorrect, setIsCorrect] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", "image");
    // Agregar una clase CSS al elemento arrastrable mientras se arrastra
    event.currentTarget.classList.add("dragStart");
  };

  const handleDragEnd = (event) => {
    // Remover la clase CSS al finalizar el arrastre
    event.currentTarget.classList.remove("dragStart");
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, targetIndex) => {
    event.preventDefault();

    const droppedItem = event.dataTransfer.getData("text/plain");
    if (droppedItem === "image") {
      const isCorrectAnswer = targetIndex === initialState.answerIndex;
      setIsCorrect(isCorrectAnswer);
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setIsCorrect(false);
    setShowResult(false);
  };

  return (
    <div className="quiz-game">
      <h1 className="animate__animated animate__fadeInDown title">
        {initialState.question}
      </h1>
      <div
        className="h-32 w-32 cursor-pointer border-2 border-gray-300 rounded-xl m-8"
        onDragOver={handleDragOver}
        onDrop={(event) => handleDrop(event, -1)} // Usamos -1 para indicar que es la imagen
      >
        <img
          className="p-4"
          src={initialState.image}
          alt="Animal"
          draggable
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        {initialState.options.map((option, index) => (
          <button
            key={option.id}
            className="h-24 cursor-default border-dashed border-2 border-sky-500 rounded-xl"
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, index)}
          >
            {option.text}
          </button>
        ))}
        {showResult && (
          <p className={`result ${isCorrect ? "correct" : "incorrect"}`}>
            {isCorrect ? "¡Respuesta correcta!" : "Respuesta incorrecta."}
          </p>
        )}
      </div>
      <div className="buttons-container">
        <button className="reset-quiz" onClick={resetQuiz}>
          Reset Quiz
        </button>
      </div>
    </div>
  );
}
