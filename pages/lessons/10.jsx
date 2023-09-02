import Image from "next/image";
import { useState } from "react";
import { Congratulations } from "../../components/molecules/congratulations";
import { SendResponse } from "../../components/molecules/sendResponse";
import { CorrectAnswer } from "../../components/molecules/correctAnswer";
import DragAndDrop from "../../components/molecules/DragAndDrop";
import { ProgressBar } from "../../components/molecules/ProgressBar";

export default function Lesson9() {
  const [showModal, setShowModal] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [resetDraggable, setResetDraggable] = useState(false);

  const [score, setScore] = useState(0);

  const [parent, setParent] = useState(null);

  const questions = [
    {
      title: "Responde el numero en aymara en la linea",
      shouldShowNumber: true,
      question: "6 - 5",
      answerIndex: 1,
      answer: "Maya",
      options: ["paya", "maya", "suxta", "tunka"],
    },
    /*  {
      question: "Arrastra el número a su nombre en aymara",
      shouldShowDragAndDrop: true,
      number: "2",
      options: [
        { id: "1", text: "Maya" },
        { id: "2", text: "Paya" },
        { id: "3", text: "Kimsa" },
        { id: "4", text: "Pusi" },
      ],
      correctAnswerDrag: 1,
    },
    {
      question: "Arrastra el número a su nombre en aymara",
      shouldShowDragAndDrop: true,
      number: "10",
      options: [
        { id: "4", text: "Kimsa" },
        { id: "2", text: "Phisqa" },
        { id: "1", text: "Tunka" },
        { id: "3", text: "maya" },
      ],
      correctAnswerDrag: 2,
    },
    {
      question: "Arrasta el nùmero en aymara al número en castellano",
      shouldShowDragAndDrop: true,
      number: "8",
      options: [
        { id: "4", text: "Kimsapaqalqu" },
        { id: "2", text: "Kimsapaqalqo" },
        { id: "1", text: "Kimsapaqallqu" },
        { id: "3", text: "Kimsapaqallqo" },
      ],
      correctAnswerDrag: 2,
    }, */
    {
      question: 'Escribe 20 en aymara"',
      shouldShowInput: true,
      correctAnswerWrite: "Pätunka",
    },
    {
      question: "Escribe 100 en aymara",
      shouldShowInput: true,
      correctAnswerWrite: "Pataka",
    },
    {
      question: "Escribe 111 en aymara",
      shouldShowInput: true,
      correctAnswerWrite: "Pataka tunka mayani",
    },
    {
      question: "Escribe 1000 en aymara",
      shouldShowInput: true,
      correctAnswerWrite: "Waranqa",
    },
    {
      question: "Escribe 2023 en aymara",
      shouldShowInput: true,
      correctAnswerWrite: "Pä waranka pä tunka kimsani",
    },
    {
      title: "Responde esto en la linea",
      shouldShowNumber: true,
      question: "5 + 1",
      answerIndex: 3,
      answer: "suxta",
      options: ["kimsa", "maya", "tunka", "suxta"],
    },
    {
      title: "Responde el numero en aymara en la linea",
      shouldShowNumber: true,
      question: "1 + 1",
      answerIndex: 2,
      answer: "paya",
      options: ["2", "maya", "paya", "kimsa"],
    },
    {
      title: "Responde el numero en aymara en la linea",
      shouldShowNumber: true,
      question: "5 + 5",
      answerIndex: 3,
      answer: "Tunka",
      options: ["kimsa", "suxta", "maya", "tunka"],
    },
    {
      title: "Responde el numero en aymara en la linea",
      shouldShowNumber: true,
      question: "6 - 5",
      answerIndex: 1,
      answer: "Maya",
      options: ["paya", "maya", "suxta", "tunka"],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [clickedIndex, setClickedIndex] = useState(null);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [answeredQuestions, setAnsweredQuestions] = useState(0);

  const handleAnswerSubmit = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const isAnswerCorrect = selectedAnswer === currentQuestion.correctAnswer;
    const isAnswerIncorrect = !isAnswerCorrect;
    if (currentQuestion.answers) {
      setIsCorrectAnswer(isAnswerCorrect);
      setShowModal(true);
      if (isAnswerCorrect) {
        setScore((prev) => prev + 1);
      } else if (isAnswerIncorrect) {
        setScore((prev) => prev - 1);
      }
    } else if (currentQuestion.correctAnswerWrite) {
      const isAnswerCorrect =
        userAnswer.trim().toLowerCase() ===
        currentQuestion.correctAnswerWrite.trim().toLowerCase();
      setIsCorrectAnswer(isAnswerCorrect);
      setShowModal(true);
      if (isAnswerCorrect) {
        setScore((prev) => prev + 1);
      } else if (isAnswerIncorrect) {
        setScore((prev) => prev - 1);
      }
    } else if (currentQuestion.shouldShowDragAndDrop) {
      setIsCorrectAnswer(isCorrectAnswer);
      setShowModal(true);
      setResetDraggable(false);
      if (isCorrectAnswer) {
        setScore((prev) => prev + 1);
      } else if (isAnswerIncorrect) {
        setScore((prev) => prev - 1);
      }
    } else if (currentQuestion.shouldShowNumber) {
      if (currentQuestion.answerIndex) {
        setIsCorrectAnswer(true);
      } else {
        setIsCorrectAnswer(false);
      }
    }

    setShowModal(true);
  };

  const handleContinue = () => {
    setShowModal(false);
    setSelectedAnswer(null);
    setUserAnswer("");
    setIsCorrectAnswer(false);
    setParent(null); // Agrega esta línea si también quieres resetear el estado parent
    setResetDraggable(true);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnsweredQuestions(answeredQuestions + 1);
    } else {
      // Todas las preguntas han sido respondidas
      setCurrentQuestionIndex(-1); // Reiniciar al primer índice
    }
  };

  const handleTickClick = (index) => {
    setActiveIndex(index);
    setClickedIndex(index);
  };

  const currentQuestion = questions[currentQuestionIndex];
  return (
    <>
      {currentQuestionIndex === -1 ? (
        // Pantalla de felicitaciones al terminar todas las preguntas
        <Congratulations score={score} questions={questions} />
      ) : (
        <div className="bg-[#181824] text-brand-beige py-4 font-outfit tex-lg flex h-screen flex-col gap-5 px-4 sm:px-0 sm:py-0">
          <div className="w-full relative h-screen flex justify-center items-center flex-col">
            <div className="flex max-w-2xl md:pt-14 items-center justify-center w-full">
              <ProgressBar
                answeredQuestions={answeredQuestions}
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

            <div className="flex max-w-2xl grow flex-col gap-5 self-center sm:items-center sm:justify-center w-full">
              {currentQuestion.shouldShowSelection && (
                <>
                  <h1 className="self-start text-xl text-white sm:text-3xl">
                    {currentQuestion.question}
                  </h1>
                  {currentQuestion.answers && (
                    <div
                      className={`grid ${
                        currentQuestion.answers.every((answer) => !answer.icon)
                          ? "grid-cols-1"
                          : "grid-cols-2"
                      }  gap-2 lg:gap-3 sm:grid-cols-3 lg:grid-cols-4`}
                    >
                      {currentQuestion.answers.map((item, index) => (
                        <button
                          className={`${
                            selectedAnswer === index
                              ? "cursor-pointer rounded-xl bg-gradient-to-br p-border from-[#D8B4FE] to-[#818CF8] bg-blue-100 text-brand-coal font-bold py-3"
                              : "cursor-pointer rounded-xl border-2 border-b-4 border-[#303044] p-2 lg:p-4 hover:bg-[#0f0f17]"
                          }`}
                          key={index}
                          onClick={() => setSelectedAnswer(index)}
                        >
                          {item.icon && (
                            <Image
                              src={item.icon}
                              width={800}
                              height={800}
                              alt="Picture of the lesson"
                              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 100vw, 33vw"
                              className="mb-2"
                            />
                          )}
                          <div className="text-lg lg:text-lg w-full">
                            {item.name}
                          </div>
                        </button>
                      ))}
                      <SendResponse
                        isInput={false}
                        handle={handleAnswerSubmit}
                      />
                    </div>
                  )}
                </>
              )}
              {currentQuestion.shouldShowInput && (
                <div className=" w-full">
                  <h2 className="text-xl pt-8">{currentQuestion.question}</h2>
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
              {currentQuestion.shouldShowDragAndDrop && (
                <DragAndDrop
                  initialState={currentQuestion}
                  isCorrect={isCorrectAnswer}
                  setIsCorrect={setIsCorrectAnswer}
                  resetDraggable={resetDraggable}
                  handleAnswerSubmit={handleAnswerSubmit}
                  parent={parent}
                  isNumber={currentQuestion.shouldShowNumber}
                  isImage={currentQuestion.shouldShowDragAndDrop}
                />
              )}
              {currentQuestion.shouldShowNumber && (
                <div className="mx-2 pt-8">
                  <h1 className="text-xl">{currentQuestion.title}</h1>
                  <div className="question__container">
                    <span className="question">
                      {currentQuestion.question} ={" "}
                    </span>
                    <div className="containerAnswer"></div>
                  </div>
                  <div
                    className={`axis px-4 mt-8 ${
                      isCorrectAnswer ? "correct" : ""
                    }`}
                  >
                    {currentQuestion.options.map((option, index) => (
                      <div
                        className={`tick ${
                          index === activeIndex ? "active" : ""
                        }`}
                        key={index}
                        onClick={() => handleTickClick(index)}
                      >
                        <span
                          className={`tick-label ${
                            index === activeIndex ? "active" : ""
                          }`}
                        >
                          {option}
                        </span>
                        {index === activeIndex && <div className="arrow"></div>}
                      </div>
                    ))}
                  </div>
                  <SendResponse isInput={false} handle={handleAnswerSubmit} />
                </div>
              )}
            </div>
          </div>
          {showModal && (
            <>
              {isCorrectAnswer ? (
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
                            {currentQuestion.answers && (
                              <strong className="ml-1">
                                {
                                  currentQuestion.answers[
                                    currentQuestion.correctAnswer
                                  ].name
                                }
                              </strong>
                            )}
                            {currentQuestion.correctAnswerWrite && (
                              <strong className="ml-1">
                                {currentQuestion.correctAnswerWrite}
                              </strong>
                            )}
                            {currentQuestion.correctAnswerDrag && (
                              <strong className="ml-1">
                                {
                                  currentQuestion.options[
                                    currentQuestion.correctAnswerDrag
                                  ].text
                                }
                              </strong>
                            )}
                            {currentQuestion.shouldShowNumber && (
                              <strong className="ml-1">
                                {currentQuestion.answer}
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
}
