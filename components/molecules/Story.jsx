import Image from "next/image";
import { useState } from "react";
import { CongratulationsStory } from "../molecules/congratulationsStory";
import { ProgressBar } from "./ProgressBar";

const Story = () => {
  const [page, setPage] = useState(0);
  const [gameStatus, setGameStatus] = useState("Playing");
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [selected, setSelected] = useState(null);

  const storyPages = [
    {
      text: "Una Conversación entre Dos Ratones, te presento a Remi y Emil ¿Con quien deseas empezar?",
      options: true,
      choices: [
        {
          text: "Comenzar con Remi",
          nextPage: 1,
          image: "/assets/illustrations/achaku1.svg",
        },
        {
          text: "Comenzar con Emil",
          nextPage: 2,
          image: "/assets/illustrations/achaku2.svg",
        },
      ],
    },
    {
      text: "Remi se encuentra con un ratón y le pregunta su nombre:",
      conversation: true,
      textAymara: "Kunas juman sutimaxa?",
      background: "/assets/illustrations/conversation1.svg",
      imageConversation: "/assets/illustrations/faceRat1.svg",
      nextPage: 3,
    },
    {
      text: "Emil se encuentra con un ratón y le pregunta su nombre:",
      conversation: true,
      textAymara: "Kunas juman sutimaxa?",
      background: "/assets/illustrations/conversation1.svg",
      imageConversation: "/assets/illustrations/faceRat2.svg",
      nextPage: 4,
    },
    {
      text: "El ratón desconocido responde en aymara: ",
      conversation: true,
      textAymara: "Nayan sutijax Emiluwa, jumansti?",
      background: "/assets/illustrations/conversation1.svg",
      imageConversation: "/assets/illustrations/faceRat2.svg",
      nextPage: 5,
    },
    {
      text: "El ratón desconocido responde en aymara: ",
      conversation: true,
      textAymara: "Nayan sutijax Remiwa, jumansti?",
      background: "/assets/illustrations/conversation1.svg",
      imageConversation: "/assets/illustrations/faceRat1.svg",
      nextPage: 6,
    },
    {
      text: "Ahora, Remi sabe su nombre y le responde a su pregunta: ",
      conversation: true,
      textAymara: "Nayan sutijax Remiwa",
      background: "/assets/illustrations/conversation1.svg",
      imageConversation: "/assets/illustrations/faceRat1.svg",
      nextPage: 7,
    },
    {
      text: "Ahora, Emil sabe su nombre y le responde a su pregunta: ",
      conversation: true,
      textAymara: "Nayan sutijax Emiluwa",
      background: "/assets/illustrations/conversation1.svg",
      imageConversation: "/assets/illustrations/faceRat2.svg",
      nextPage: 8,
    },
    {
      text: "A Remi se le acaba el tiempo y es hora de que vuelva a casa, y se despide: ",
      conversation: true,
      textAymara: "Jikisiñkama Emil",
      background: "/assets/illustrations/conversation1.svg",
      imageConversation: "/assets/illustrations/faceRat1.svg",
      nextPage: 9,
    },
    {
      text: "A Emil se le acaba el tiempo y es hora de que vuelva a casa, y se despide: ",
      conversation: true,
      textAymara: "Jikisiñkamaya Remi",
      background: "/assets/illustrations/conversation1.svg",
      imageConversation: "/assets/illustrations/faceRat2.svg",
      nextPage: 10,
    },
    {
      text: "Ahora que conoces a los ratones dime quien es Remi",
      optionsSelected: true,
      choices: [
        {
          image: "/assets/illustrations/achaku2.svg",
        },
        {
          image: "/assets/illustrations/achaku1.svg",
        },
      ],
      nextPage: 11,
    },
    {
      text: "Ahora que conoces a los ratones dime quien es Remi",
      optionsSelected: true,
      choices: [
        {
          image: "/assets/illustrations/achaku2.svg",
        },
        {
          image: "/assets/illustrations/achaku1.svg",
        },
      ],
      nextPage: 12,
    },
  ];

  const currentPage = storyPages[page];

  const handleChoiceClick = (nextPage) => {
    setPage(nextPage);
  };

  const handleCorrectAnswer = (selectedImage) => {
    if (currentPage.choices[1].image === selectedImage) {
      setCorrectAnswer(true);
      setGameStatus("Finished");
    } else {
      setCorrectAnswer(false);
      setGameStatus("Finished");
    }
  };

  const handleSelected = (index) => {
    setSelected(index);
  };

  return (
    <>
      {gameStatus === "Finished" && (
        <div>
          <CongratulationsStory isCorrect={correctAnswer} />
        </div>
      )}
      {gameStatus === "Playing" && (
        <div className="bg-[#181824] text-brand-beige py-4 font-outfit tex-lg flex h-screen flex-col gap-5 px-4 sm:px-0 sm:py-0">
          <ProgressBar
            answeredQuestions={page}
            totalQuestions={storyPages.length}
          />
          {currentPage.options && (
            <>
              <p className="text-xl font-outfitsemibold text-white text-center">
                {currentPage.text}
              </p>
              <div className="grid grid-cols-2 gap-6 mt-12">
                {currentPage.choices.map((choice, index) => (
                  <div key={index}>
                    <div
                      className={`choice ${selected === index && "selected"}`}
                      onClick={() => handleSelected(index)}
                    >
                      <Image
                        src={choice.image}
                        width={800}
                        height={800}
                        alt="Picture of the lesson"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 100vw, 33vw"
                        className="mb-2 relative"
                      />
                      <p className="text-white relative">{choice.text}</p>
                    </div>
                    <div className="fixed bottom-0 left-0 right-0 mx-4 mb-4">
                      {selected === 0 && (
                        <button
                          onClick={() =>
                            handleChoiceClick(currentPage.choices[0].nextPage)
                          }
                          className="w-full rounded-2xl border-accent border-2 bg-[#123837] py-2 text-white text-xl"
                        >
                          Seguir
                        </button>
                      )}
                      {selected === 1 && (
                        <button
                          onClick={() =>
                            handleChoiceClick(currentPage.choices[1].nextPage)
                          }
                          className="w-full rounded-2xl border-accent border-2 bg-[#123837] py-2 text-white text-xl"
                        >
                          Seguir
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          {currentPage.conversation && (
            <>
              <div className="w-full">
                <Image
                  src={currentPage.background}
                  width={800}
                  height={800}
                  alt="Picture of the lesson"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 100vw, 33vw"
                />
              </div>
              <h2 className="text-xl font-outfitsemibold text-white text-center">
                {currentPage.text}
              </h2>
              <div className="flex justify-content items-center">
                <div className="w-14">
                  <Image
                    src={currentPage.imageConversation}
                    width={800}
                    height={800}
                    alt="Picture of the lesson"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 100vw, 33vw"
                  />
                </div>
                <p className="border-2 border-gray-600 w-full text-white font-outfitsemibold rounded-lg p-2 ml-4 text-center">
                  {currentPage.textAymara}
                </p>
              </div>

              <div className="fixed bottom-0 left-0 right-0 mx-4 mb-4 lg:mx-56">
                <button
                  onClick={() => handleChoiceClick(currentPage.nextPage)}
                  className="w-full rounded-2xl border-accent border-2 bg-[#123837] py-2 text-white text-xl"
                >
                  Seguir
                </button>
              </div>
            </>
          )}
          {currentPage.optionsSelected && (
            <>
              <p className="text-xl font-outfitsemibold text-white text-center">
                {currentPage.text}
              </p>
              <div className="grid grid-cols-2 gap-6 mt-12">
                {currentPage.choices.map((choice, index) => (
                  <div key={index}>
                    <div
                      className={`choice ${selected === index && "selected"}`}
                      onClick={() => handleSelected(index)}
                    >
                      <Image
                        src={choice.image}
                        width={800}
                        height={800}
                        alt="Picture of the lesson"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 100vw, 33vw"
                        className="mb-2 relative"
                      />
                      <p className="text-white relative">{choice.text}</p>
                    </div>
                    <div className="fixed bottom-0 left-0 right-0 mx-4 mb-4 lg:mx-56">
                      {selected ? (
                        <button
                          onClick={() => handleCorrectAnswer(choice.image)}
                          className="w-full rounded-2xl border-accent border-2 bg-[#123837] py-2 text-white text-xl"
                        >
                          Seguir
                        </button>
                      ) : (
                        <button
                          onClick={() => handleCorrectAnswer("")}
                          className="w-full rounded-2xl border-accent border-2 bg-[#123837] py-2 text-white text-xl"
                        >
                          Seguir
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Story;
