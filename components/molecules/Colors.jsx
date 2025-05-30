import { useState } from "react";

//javascript audio library
import { Howl } from "howler";

import ColorDraggable from "./ColorDraggable";
import ColorDroppable from "./ColorDroppable";
import { ProgressBar } from "./ProgressBar";
import { CorrectAnswer } from "./correctAnswer";
import { SendResponse } from "./sendResponse";
import { Congratulations } from "./congratulations";

const Colors = () => {
  const soundCorrect = new Howl({
    src: ["/sounds/correct.mp3"], // Ruta de tu archivo de audio
  });
  const soundInCorrect = new Howl({
    src: ["/sounds/incorrect.mp3"], // Ruta de tu archivo de audio
  });

  const [page, setPage] = useState(0);
  const [gameStatus, setGameStatus] = useState("Playing");
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#303044");
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");

  const questions = [
    {
      title: "Arrastra el color que corresponda",
      shouldColor: true,
      colors: [
        { name: "#cc0000ff" },
        { name: "#f1c232ff" },
        { name: "black" },
        { name: "purple" },
      ],
      AnswerUI: "Wila",
      correctColor: 0,
    },
    {
      title: "Arrastra el color que corresponda",
      shouldColor: true,
      colors: [
        { name: "black" },
        { name: "#f1c232ff" },
        { name: "#cc0000ff" },
        { name: "#1155ccff" },
      ],
      AnswerUI: "Ch'iyara",
      correctColor: 0,
    },
    {
      title: "Arrastra el color que corresponda",
      shouldColor: true,
      colors: [
        { name: "#1155ccff" },
        { name: "#38761dff" },
        { name: "#f1c232ff" },
        { name: "#cc0000ff" },
      ],
      AnswerUI: "Q’illu",
      correctColor: 2,
    },
    {
      question: 'Escribe en aymara: "celeste"',
      correctAnswerWrite: "janq'u larama",
      shouldWriteAnswers: true,
    },
    {
      question: 'Escribe "Negro" en aymara',
      correctAnswerWrite: "ch'iyara",
      shouldWriteAnswers: true,
    },
    {
      question: 'Escribe "blanco" en aymara',
      correctAnswerWrite: "janq'u",
      shouldWriteAnswers: true,
    },
  ];

  const currentPage = questions[page];

  const handleContinue = () => {
    setShowModal(false);
    setCorrectAnswer(false);
    setBackgroundColor("#303044");
    setUserAnswer("");

    if (page < questions.length - 1) {
      setPage(page + 1);
    } else {
      setGameStatus("Finished");
    }
  };

  const handleAnswerSubmit = () => {
    if (currentPage.shouldColor) {
      if (correctAnswer) {
        setShowModal(true);
        setCorrectAnswer(true);
        soundCorrect.play();
        setScore((prev) => prev + 1);
      } else {
        setCorrectAnswer(false);
        setShowModal(true);
        soundInCorrect.play();
        setScore((prev) => prev - 1);
      }
    } else if (currentPage.correctAnswerWrite) {
      const isAnswerCorrect =
        userAnswer.trim().toLowerCase() ===
        currentPage.correctAnswerWrite.trim().toLowerCase();
      setCorrectAnswer(isAnswerCorrect);
      if (isAnswerCorrect) {
        setShowModal(true);
        soundCorrect.play();
        setScore((prev) => prev + 1);
      } else {
        setShowModal(true);
        soundInCorrect.play();
        setScore((prev) => prev - 1);
      }
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const draggedColor = e.dataTransfer.getData("color");
    const colors = currentPage.colors.map((color) => color.name);
    setBackgroundColor(draggedColor);
    if (draggedColor === colors[currentPage.correctColor]) {
      setCorrectAnswer(true);
    } else {
      setCorrectAnswer(false);
    }
  };
  return (
    <>
      {gameStatus === "Finished" && (
        <div>
          <Congratulations score={score} questions={questions} />
        </div>
      )}
      {gameStatus === "Playing" && (
        <div className="bg-[#181824] text-brand-beige py-8 font-outfit tex-lg flex h-screen flex-col gap-5 px-4 sm:px-0 sm:py-0">
          <div className="w-full relative flex justify-center items-center flex-col">
            <div className="flex max-w-2xl items-center justify-center w-full lg:pt-14">
              <ProgressBar
                answeredQuestions={page}
                totalQuestions={questions.length}
              />
              {score >= 0 && (
                <span className="w-6 md:w-7 ml-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ff2929"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M8.10627 18.2468C5.29819 16.0833 2 13.5422 2 9.1371C2 4.27416 7.50016 0.825464 12 5.50063L14 7.49928C14.2929 7.79212 14.7678 7.79203 15.0607 7.49908C15.3535 7.20614 15.3534 6.73127 15.0605 6.43843L13.1285 4.50712C17.3685 1.40309 22 4.67465 22 9.1371C22 13.5422 18.7018 16.0833 15.8937 18.2468C15.6019 18.4717 15.3153 18.6925 15.0383 18.9109C14 19.7294 13 20.5 12 20.5C11 20.5 10 19.7294 8.96173 18.9109C8.68471 18.6925 8.39814 18.4717 8.10627 18.2468Z"
                        fill="#fa0000"
                      />{" "}
                    </g>
                  </svg>
                </span>
              )}
              {score < 0 && (
                <span className="w-6 md:w-7 ml-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#292929"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M8.10627 18.2468C5.29819 16.0833 2 13.5422 2 9.1371C2 4.27416 7.50016 0.825464 12 5.50063L14 7.49928C14.2929 7.79212 14.7678 7.79203 15.0607 7.49908C15.3535 7.20614 15.3534 6.73127 15.0605 6.43843L13.1285 4.50712C17.3685 1.40309 22 4.67465 22 9.1371C22 13.5422 18.7018 16.0833 15.8937 18.2468C15.6019 18.4717 15.3153 18.6925 15.0383 18.9109C14 19.7294 13 20.5 12 20.5C11 20.5 10 19.7294 8.96173 18.9109C8.68471 18.6925 8.39814 18.4717 8.10627 18.2468Z"
                        fill="rgb(209 213 219)"
                      />{" "}
                    </g>
                  </svg>
                </span>
              )}
              {score >= 0 && (
                <span className="ml-1 text-[#fa0000]">{score}</span>
              )}
              {score < 0 && <span className="ml-1 text-gray-300">{score}</span>}
            </div>
            <div className="bg-[#181824] text-brand-beige font-outfit tex-lg flex flex-col sm:px-0 sm:py-0">
              <div>
                <div className="flex max-w-2xl flex-col self-center sm:items-center sm:justify-center sm:px-5">
                  {currentPage.shouldColor && (
                    <>
                      <p className="text-xl font-outfitsemibold text-white text-center py-4 lg:pt-12">
                        {currentPage.title}
                      </p>
                      <div className="grid grid-cols-2 lg:gap-6 lg:grid-cols-4">
                        {currentPage.colors.map((color, colorIndex) => (
                          <ColorDraggable
                            key={colorIndex}
                            color={color.name}
                            onDragStart={() => {}}
                          />
                        ))}
                        <ColorDroppable
                          AnswerUI={currentPage.AnswerUI}
                          handleDrop={handleDrop}
                          backgroundColor={backgroundColor}
                        />
                      </div>
                      <SendResponse
                        isInput={false}
                        handle={handleAnswerSubmit}
                      />
                    </>
                  )}
                </div>
                {currentPage.shouldWriteAnswers && (
                  <div className="w-full">
                    <p className="text-xl font-outfitsemibold text-white text-center py-4 lg:pt-12">
                      {currentPage.question}
                    </p>
                    <input
                      type="text"
                      placeholder="Escribe aquí"
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      className="text-white bg-[#0f0f17] py-4 px-3 w-full rounded-xl outline-none my-6"
                    />
                    <SendResponse isInput={true} handle={handleAnswerSubmit} />
                  </div>
                )}
              </div>
            </div>
          </div>
          {showModal && (
            <>
              {correctAnswer ? (
                <CorrectAnswer handle={handleContinue} />
              ) : (
                <>
                  <div class="fixed bottom-0 left-0 right-0 bg-red-100 text-red-500 transition-all">
                    <div class="flex max-w-5xl flex-col gap-4 p-3 sm:mx-auto sm:flex-row sm:items-center sm:justify-between sm:p-5 sm:py-3">
                      <div class="mb-2 flex flex-col gap-5 sm:flex-row sm:items-center">
                        <div class="hidden rounded-full bg-white p-5 text-red-500 sm:block">
                          <svg height="48" viewBox="0 96 960 960" width="48">
                            <path
                              fill="currentColor"
                              d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z"
                            ></path>
                          </svg>
                        </div>
                        <div class="flex flex-col gap-2">
                          <div class="lg:text-xl">Respuesta Incorrecta:</div>
                          <div class="lg:text-sm font-outfit">
                            La respuesta correcta es:
                            {currentPage.shouldColor && (
                              <strong className="ml-1">
                                {currentPage.AnswerUI}
                              </strong>
                            )}
                            {currentPage.correctAnswerWrite && (
                              <strong className="ml-1">
                                {currentPage.correctAnswerWrite}
                              </strong>
                            )}
                          </div>
                        </div>
                      </div>
                      <button
                        class="w-full px-6 py-4 bg-red-500 rounded-full cursor-pointer font-outfit text-white font-black sm:min-w-[150px] sm:max-w-fit"
                        onClick={handleContinue}
                      >
                        Continuar
                      </button>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Colors;
