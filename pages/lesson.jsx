import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

/* import DogSvg from "/assets/illustrations/dog.svg";
import CatSvg from "/assets/illustrations/cat.svg";
import BearSvg from "/assets/illustrations/bear.svg"; */

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
      question: '¿Cuál es el "Oso"?',
      answers: [
        { icon: "/assets/illustrations/cat.svg", name: "phisi" },
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
        <div className="bg-brand-coal flex items-center justify-center h-screen w-full">
          <div className="flex items-center justify-center flex-col px-4">
            <Image
              src="/assets/illustrations/house.png"
              alt="iconWin"
              width={400}
              height={400}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <h1 className="font-averia text-indigo-500 mb-8 text-2xl md:text-5xl">
              ¡Felicidades, lo lograste!
            </h1>
            <p className="text-brand-beige font-outfit text-center text-lg lg:text-xl">
              Recuerda, <strong>&quot;uta&quot;</strong> es casa como también
              puede ser &quot;La casa&quot;.
            </p>
            <Link href="/posts/articulos-en-aymara">
              <button class="my-4 px-16 py-4 bg-green-500 rounded-full uppercase border-black border-2 cursor-pointer font-outfit text-white font-black sm:min-w-[150px] sm:max-w-fit sm:grow-0">
                Continuar
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="bg-brand-coal text-brand-beige py-8 font-outfit tex-lg flex h-screen flex-col gap-5 px-4 sm:px-0 sm:py-0">
          <div className="w-full relative h-screen flex justify-center items-center flex-col">
            <div className="flex max-w-2xl grow flex-col gap-5 self-center sm:items-center sm:justify-center sm:gap-24 sm:px-5 w-full">
              <h1 className="self-start text-xl font-bold sm:text-3xl">
                {currentQuestion.question}
              </h1>
              {currentQuestion.answers && (
                <div
                  className={`grid ${
                    currentQuestion.answers.every((answer) => !answer.icon)
                      ? "grid-cols-1"
                      : "grid-cols-2"
                  }  gap-2 lg:gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:w-[40rem]`}
                >
                  {currentQuestion.answers.map((item, index) => (
                    <button
                      className={`${
                        selectedAnswer === index
                          ? "cursor-pointer rounded-xl bg-gradient-to-br p-border from-[#D8B4FE] to-[#818CF8] bg-blue-100 text-brand-coal font-bold py-3"
                          : "cursor-pointer rounded-xl border-2 border-b-4 border-brand-charcoal p-2 lg:p-4 hover:bg-brand-charcoal"
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
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="mb-2"
                        />
                      )}
                      <div className="text-lg lg:text-lg w-full">
                        {item.name}
                      </div>
                    </button>
                  ))}
                  <section className="absolute bottom-0 left-0 border-gray-200 sm:border-t-2 sm:p-10 w-full">
                    <div className="mx-auto flex max-w-5xl sm:justify-between text-sm">
                      <button className="hidden rounded-2xl border-2 border-b-4 border-gray-200 bg-white p-3 font-bold uppercase text-gray-400 transition hover:border-gray-300 hover:bg-gray-200 sm:block sm:min-w-[150px] sm:max-w-fit">
                        Saltar
                      </button>
                      <button
                        className="w-full px-6 py-4 bg-green-500 rounded-full uppercase cursor-pointer font-outfit text-white font-black sm:min-w-[150px] sm:max-w-fit sm:grow-0"
                        onClick={handleAnswerSubmit}
                      >
                        Enviar Respuesta
                      </button>
                    </div>
                  </section>
                </div>
              )}
              {!currentQuestion.answers && (
                <div>
                  <input
                    type="text"
                    placeholder="Escribe aquí"
                    className="text-white bg-brand-charcoal py-4 px-3 w-full rounded-xl outline-none "
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                  />
                  <section className="absolute bottom-0 left-0 border-gray-200 sm:border-t-2 sm:p-10 w-full">
                    <div className="mx-auto flex max-w-5xl sm:justify-between text-sm">
                      <button className="hidden rounded-2xl border-2 border-b-4 border-gray-200 bg-white p-3 font-bold uppercase text-gray-400 transition hover:border-gray-300 hover:bg-gray-200 sm:block sm:min-w-[150px] sm:max-w-fit">
                        Saltar
                      </button>
                      <button
                        className="w-full px-6 py-4 bg-green-500 rounded-full uppercase cursor-pointer font-outfit text-white font-black sm:min-w-[150px] sm:max-w-fit sm:grow-0"
                        onClick={handleAnswerSubmit}
                      >
                        Enviar Respuesta
                      </button>
                    </div>
                  </section>
                </div>
              )}
            </div>
          </div>
          {showModal && (
            <>
              {isCorrectAnswer ? (
                <div class="fixed bottom-0 left-0 right-0 bg-lime-100 font-bold text-green-600 transition-all">
                  <div class="flex max-w-5xl flex-col gap-4 p-5 sm:mx-auto sm:flex-row sm:items-center sm:justify-between sm:p-5 sm:py-3">
                    <div class="mb-2 flex flex-col gap-5 sm:flex-row sm:items-center">
                      <div class="hidden rounded-full bg-white p-5 text-green-500 sm:block">
                        <svg height="48" viewBox="0 96 960 960" width="48">
                          <path
                            fill="currentColor"
                            d="M378 834 130 586l68-68 180 180 383-383 68 68-451 451Z"
                          ></path>
                        </svg>
                      </div>
                      <div class="lg:text-xl">¡Respuesta correcta!</div>
                    </div>
                    <button
                      class="w-full px-6 py-4 bg-green-500 rounded-full uppercase border-black border-2 cursor-pointer font-outfit text-white font-black sm:min-w-[150px] sm:max-w-fit sm:grow-0"
                      onClick={handleContinue}
                    >
                      Continuar
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div class="fixed bottom-0 left-0 right-0 bg-red-100 font-bold text-red-500 transition-all">
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
                          <div class="lg:text-sm font-normal">
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
                        class="w-full px-6 py-4 bg-red-500 border-black border-2 rounded-full uppercase cursor-pointer font-outfit text-white font-black sm:min-w-[150px] sm:max-w-fit"
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
