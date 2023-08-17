import Link from "next/link";
import { useState } from "react";

/* import DogSvg from "/assets/illustrations/dog.svg";
import CatSvg from "/assets/illustrations/cat.svg";
import BearSvg from "/assets/illustrations/bear.svg"; */

export default function Lesson() {
  const [showModal, setShowModal] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

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
      correctAnswer: 1,
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
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswerSubmit = () => {
    const isAnswerCorrect =
      selectedAnswer === questions[currentQuestionIndex].correctAnswer;
    setIsCorrectAnswer(isAnswerCorrect);
    setShowModal(true);
  };

  const handleContinue = () => {
    setShowModal(false);
    setSelectedAnswer(null);
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
        <div className="flex items-center justify-center min-h-screen w-full">
          <div className="flex items-center justify-center flex-col px-4">
            <img
              src="/assets/illustrations/dog.jpg"
              alt="iconWin"
              className="w-48"
            />
            <h1 className="font-averia text-orange-500 mb-8 text-2xl md:text-5xl lg:mt-16">
              ¡Felicidades, lo lograste!
            </h1>
            <p className="text-gray-600 font-outfit text-center lg:text-lg">
              Recuerda, <strong>"anu"</strong> es perro como también puede ser
              "El perro".
            </p>
            <Link href="/posts/articulos-en-aymara">
              <button class="mt-4 w-full rounded-2xl border-b-4 border-green-600 bg-green-500 p-2 lg:p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit">
                Continuar
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="my-8 font-outfit flex h-[calc(100vh-4rem)] flex-col gap-5 px-4 sm:px-0 sm:py-0">
          <div className="w-full bg-white h-screen flex justify-center items-center flex-col">
            <div className="flex max-w-2xl grow flex-col gap-5 self-center sm:items-center sm:justify-center sm:gap-24 sm:px-5">
              <h1 class="self-start text-xl font-bold sm:text-3xl">
                {currentQuestion.question}
              </h1>
              <div className="grid grid-cols-2 gap-2 lg:gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:w-[40rem]">
                {currentQuestion.answers.map((item, index) => (
                  <button
                    className={`${
                      selectedAnswer === index
                        ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-2 lg:p-4 text-blue-400"
                        : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-2 lg:p-4 hover:bg-gray-100"
                    }`}
                    key={index}
                    onClick={() => setSelectedAnswer(index)}
                  >
                    <img src={item.icon} alt="" className="mb-2" />
                    <span className="text-gray-900 text-base lg:text-lg">
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <section className="border-gray-200 sm:border-t-2 sm:p-10 w-full">
              <div className="mx-auto flex max-w-5xl sm:justify-between text-sm">
                <button className="hidden rounded-2xl border-2 border-b-4 border-gray-200 bg-white p-3 font-bold uppercase text-gray-400 transition hover:border-gray-300 hover:bg-gray-200 sm:block sm:min-w-[150px] sm:max-w-fit">
                  Saltar
                </button>
                <button
                  className="mt-auto grow rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white sm:min-w-[150px] sm:max-w-fit sm:grow-0"
                  onClick={handleAnswerSubmit}
                >
                  Enviar Respuesta
                </button>
              </div>
            </section>
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
                      class="w-full rounded-2xl border-b-4 border-green-600 bg-green-500 p-2 lg:p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit"
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
                            <strong className="ml-1">
                              {
                                currentQuestion.answers[
                                  currentQuestion.correctAnswer
                                ].name
                              }
                            </strong>
                          </div>
                        </div>
                      </div>
                      <button
                        class="w-full rounded-2xl border-b-4 border-red-600 bg-red-500 p-2 lg:p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit"
                        onClick={handleContinue}
                      >
                        Continue
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
