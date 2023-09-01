import Image from "next/image";
import { useState } from "react";
import { Congratulations } from "../../components/molecules/congratulations";
import { SendResponse } from "../../components/molecules/sendResponse";
import { CorrectAnswer } from "../../components/molecules/correctAnswer";
import DragAndDrop from "../../components/molecules/DragAndDrop";
import { ProgressBar } from "../../components/molecules/ProgressBar";

export default function Lesson() {
  const [showModal, setShowModal] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [resetDraggable, setResetDraggable] = useState(false);

  const [score, setScore] = useState(0);

  const [parent, setParent] = useState(null);

  const questions = [
    {
      question: "¿Cuál de estos es la llama?",
      answers: [
        { icon: "/assets/illustrations/Phisi.svg", name: "Phisi" },
        { icon: "/assets/illustrations/tree.png", name: "Quqa" },
        { icon: "/assets/illustrations/qawra.svg", name: "Qawra" },
        { icon: "/assets/illustrations/T'ant'a.svg", name: "T'ant'a" },
      ],
      correctAnswer: 2,
    },
    {
      question: "¿Cuál es la piedra?",
      answers: [
        { icon: "/assets/illustrations/payaqawra.svg", name: "Qawra" },
        { icon: "/assets/illustrations/qala.svg", name: "Qala" },
        { icon: "/assets/illustrations/dog.svg", name: "Anu" },
        { icon: "/assets/illustrations/achaku2.svg", name: "Achaku" },
      ],
      correctAnswer: 1,
    },
    {
      question: "Arrastra a la Piedra a su nombre en aymara",
      shouldShowDragAndDrop: true,
      image: "/assets/illustrations/qala.svg",
      options: [
        { id: "1", text: "Kala" },
        { id: "2", text: "Qhala" },
        { id: "3", text: "Qala" },
        { id: "4", text: "Qhala" },
      ],
      correctAnswerDrag: 2,
    },
    {
      question: "Arrastra a la Llama a su nombre en aymara",
      shouldShowDragAndDrop: true,
      image: "/assets/illustrations/qawra.svg",
      options: [
        { id: "4", text: "Kawra" },
        { id: "2", text: "Kaura" },
        { id: "1", text: "Qawra" },
        { id: "3", text: "Qaura" },
      ],
      correctAnswerDrag: 2,
    },
    {
      question: "Arrasta a la respuesta correcta: Khayax mä qawrati",
      shouldShowDragAndDrop: true,
      image: "/assets/illustrations/payaqawra.svg",
      options: [
        { id: "4", text: "Jisa khayax mä qawra" },
        { id: "2", text: "Jisa khayax mä qawrawa" },
        { id: "1", text: "Jis khayaxa mä kawrawa" },
        { id: "3", text: "Jis khayaxa mä qhawrawa" },
      ],
      correctAnswerDrag: 1,
    },
    {
      question: "Traduce al aymara la siguiente oración: Ésto no es piedra",
      answers: [
        { name: "Akaxa janiw kalakiti" },
        { name: "Akax janiwa qala" },
        { name: "Akax janiwa qalakiti" },
        { name: "Akaxa janiw qalakhiti" },
      ],
      correctAnswer: 2,
    },
    {
      question:
        "Traduce al aymara la siguiente oración: Aquéllo no es un ratón",
      answers: [
        { name: "Khurix janiwa achakukiti" },
        { name: "Ukax janiwa achakukiti" },
        { name: "Akax janiw achakukiti" },
      ],
      correctAnswer: 0,
    },
    {
      question: "Traduce al castellano la siguiente oración: Akax mä qalati",
      answers: [
        { name: "¿Éso es una piedra?" },
        { name: "¿Aquéllo es una piedra?" },
        { name: "¿Ésto es una piedra?" },
        { name: "¿Éso es una llama?" },
      ],
      correctAnswer: 2,
    },
    {
      question: 'Escribe esto en aymara: "¿Éso es una piedra?"',
      shouldShowInput: true,
      correctAnswerWrite: "Ukax mä qalati",
    },
    {
      question: 'Escribe "Así es" en aymara',
      shouldShowInput: true,
      correctAnswerWrite: "Ukhamawa",
    },
    {
      question: 'Escribe "Sí" en aymara',
      shouldShowInput: true,
      correctAnswerWrite: "Jisa",
    },
    {
      question: 'Escribe "No" en aymara',
      shouldShowInput: true,
      correctAnswerWrite: "Jani",
    },
    {
      question: 'Escribe "Piedra" en aymara',
      shouldShowInput: true,
      correctAnswerWrite: "Qala",
    },
    {
      question: 'Escribe "Llama" en aymara',
      shouldShowInput: true,
      correctAnswerWrite: "Qawra",
    },
  ];

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

  const currentQuestion = questions[currentQuestionIndex];
  return (
    <>
      {currentQuestionIndex === -1 ? (
        // Pantalla de felicitaciones al terminar todas las preguntas
        <Congratulations score={score} />
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
                  <SendResponse isInput={false} handle={handleAnswerSubmit} />
                </div>
              )}
              {currentQuestion.shouldShowInput && (
                <div className="w-full">
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
                />
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
