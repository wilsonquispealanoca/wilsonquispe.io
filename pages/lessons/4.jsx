import React, { useState } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";

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

function QuizGame() {
  const [isCorrect, setIsCorrect] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleDrop = (event) => {
    const droppedItemId = event.active.data.current.id;
    setSelectedOption(droppedItemId);
  };

  const checkAnswer = () => {
    const isCorrectAnswer =
      selectedOption === initialState.options[initialState.answerIndex].id;
    setIsCorrect(isCorrectAnswer);
    setShowResult(true);
  };

  const resetQuiz = () => {
    setSelectedOption(null);
    setIsCorrect(false);
    setShowResult(false);
  };

  return (
    <div className="quiz-game">
      <h1 className="animate__animated animate__fadeInDown title">
        {initialState.question}
      </h1>
      <DndContext>
        <div className="h-32 w-32 cursor-pointer border-2 border-gray-300 rounded-xl">
          <img src={initialState.image} alt="Animal" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {initialState.options.map((option) => (
            <Option key={option.id} option={option} handleDrop={handleDrop} />
          ))}
        </div>
        <div className="buttons-container">
          <button
            className="check-answer"
            onClick={checkAnswer}
            disabled={!selectedOption}
          >
            Check Answer
          </button>
          {showResult && (
            <p className={`result ${isCorrect ? "correct" : "incorrect"}`}>
              {isCorrect ? "¡Respuesta correcta!" : "Respuesta incorrecta."}
            </p>
          )}
          <button className="reset-quiz" onClick={resetQuiz}>
            Reset Quiz
          </button>
        </div>
      </DndContext>
    </div>
  );
}

function Option({ option, handleDrop }) {
  const { setNodeRef, isOver } = useDroppable({
    id: option.id,
    data: { id: option.id }, // Pasamos la información de la opción
    onDrop: (event) => handleDrop(event),
  });

  const {
    attributes,
    listeners,
    setNodeRef: setDraggableNodeRef,
  } = useDraggable({
    id: option.id,
  });

  const optionStyles = {
    background: isOver ? "lightblue" : "transparent",
  };

  return (
    <div
      className="h-24 cursor-default border-dashed border-2 border-sky-500 rounded-xl"
      style={optionStyles}
      ref={(node) => {
        setNodeRef(node);
        setDraggableNodeRef(node);
      }}
      {...attributes}
      {...listeners}
    >
      {option.text}
    </div>
  );
}

export default QuizGame;
