import Image from "next/image";
import { useState } from "react";
import { Congratulations } from "../../components/molecules/congratulations";
import { SendResponse } from "../../components/molecules/sendResponse";
import { CorrectAnswer } from "../../components/molecules/correctAnswer";

export default function Lesson() {
  const [showModal, setShowModal] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");

  const questions = [
    {
      question: '¿Cuál de estos es el "Perro"?',
      answers: [
        { icon: "/assets/illustrations/house.png", name: "uta" },
        { icon: "/assets/illustrations/cat.svg", name: "phisi" },
        { icon: "/assets/illustrations/dog.svg", name: "anu" },
        { icon: "/assets/illustrations/bear.svg", name: "jukumari" },
      ],
      correctAnswer: 2,
    },
    {
      question: '¿Cuál de estos es el "Pan"?',
      answers: [
        { icon: "/assets/illustrations/cat.svg", name: "phisi" },
        { icon: "/assets/illustrations/dog.svg", name: "anu" },
        { icon: "/assets/illustrations/bear.svg", name: "jukumari" },
        { icon: "/assets/illustrations/T'ant'a.svg", name: "T'ant'a" },
      ],
      correctAnswer: 3,
    },
    {
      question: '¿Cuál es el "Oso"?',
      answers: [
        { icon: "/assets/illustrations/Phisi.svg", name: "phisi" },
        { icon: "/assets/illustrations/bear.svg", name: "jukumari" },
        { icon: "/assets/illustrations/house.png", name: "uta" },
        { icon: "/assets/illustrations/dog.svg", name: "anu" },
      ],
      correctAnswer: 1,
    },
    {
      question: '¿Cuál de estos es "El gato"?',
      answers: [
        { icon: "/assets/illustrations/bear.svg", name: "jukumari" },
        { icon: "/assets/illustrations/cat.svg", name: "phisi" },
        { icon: "/assets/illustrations/dog.svg", name: "anu" },
        { icon: "/assets/illustrations/house.png", name: "uta" },
      ],
      correctAnswer: 1,
    },
    {
      question: '¿Cómo se dice "un gato"?',
      answers: [
        { name: "mä anu" },
        { name: "mä phisi" },
        { name: "mä jukumari" },
        { name: "mä uta" },
      ],
      correctAnswer: 1,
    },
    {
      question: '¿Cómo se dice "gatos"?',
      answers: [
        { name: "utanaka" },
        { name: "uta" },
        { name: "phisinaka" },
        { name: "jukumarinaka" },
        { name: "jukumari" },
        { name: "phisi" },
      ],
      correctAnswer: 2,
    },
    {
      question: '¿Cómo se dice "unos gatos"?',
      answers: [
        { name: "mä uta" },
        { name: "mä phisi" },
        { name: "mä phisinaka" },
        { name: "mä jukumarinaka" },
        { name: "mä utanaka" },
        { name: "mä jukumari" },
      ],
      correctAnswer: 2,
    },
    {
      question: '¿Cómo dirias "Los perros"?',
      answers: [
        { name: "utanaka" },
        { name: "phisinaka" },
        { name: "anunaka" },
        { name: "jukumarinaka" },
      ],
      correctAnswer: 2,
    },
    {
      question: '¿Cómo dirias "Las casas"?',
      answers: [
        { name: "phisinaka" },
        { name: "anunaka" },
        { name: "jukumarinaka" },
        { name: "utanaka" },
      ],
      correctAnswer: 3,
    },
    {
      question: 'Escribe esto en aymara: "Las casas"',
      correctAnswerWrite: "utanaka",
    },
    {
      question: 'Escribe "perro" en aymara',
      correctAnswerWrite: "anu",
    },
    {
      question: 'Escribe "gatos" en aymara',
      correctAnswerWrite: "phisinaka",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswerSubmit = () => {
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.answers) {
      const isAnswerCorrect =
        selectedAnswer === questions[currentQuestionIndex].correctAnswer;
      setIsCorrectAnswer(isAnswerCorrect);
      setShowModal(true);
    } else if (currentQuestion.correctAnswerWrite) {
      const isAnswerCorrect =
        userAnswer.trim().toLowerCase() ===
        currentQuestion.correctAnswerWrite.trim().toLowerCase();
      setIsCorrectAnswer(isAnswerCorrect);
    }

    setShowModal(true);
  };

  const handleContinue = () => {
    setShowModal(false);
    setSelectedAnswer(null);
    setUserAnswer("");
    setIsCorrectAnswer(false);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
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
        <Congratulations />
      ) : (
        <div className="bg-[#181824] text-brand-beige py-8 font-outfit tex-lg flex h-screen flex-col gap-5 px-4 sm:px-0 sm:py-0">
          <div className="w-full relative h-screen flex justify-center items-center flex-col">
            <div className="flex max-w-2xl grow flex-col gap-5 self-center sm:items-center sm:justify-center sm:gap-24 sm:px-5 w-full">
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
              {!currentQuestion.answers && (
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
