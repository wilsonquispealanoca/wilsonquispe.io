import Image from "next/image";
import { useState } from "react";
import { CongratulationsStory } from "./congratulationsStory";
import { ProgressBar } from "./ProgressBar";
//javascript audio library
import { Howl } from "howler";

const StoryFamily = () => {
  const soundNext = new Howl({
    src: ["/sounds/continuebuttonselect.mp3"], // Ruta de tu archivo de audio
  });

  const [page, setPage] = useState(0);
  const [gameStatus, setGameStatus] = useState("Playing");
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [selected, setSelected] = useState(null);

  const storyPages = [
    {
      text: "Preguntando los nombres de los padres de Mario y Justina.",
      conversationHome: true,
      nextPage: 1,
    },
    {
      text: "Al volver de clase Mario se encuentra con su compañera de clase Justina y ella le pregunta:",
      conversation: true,
      textAymara: "Jilata Mario, kuna sutinis tatamaxa?",
      background: "/assets/illustrations/conversation3.svg",
      imageConversation: "/assets/illustrations/warmi.svg",
      nextPage: 2,
    },
    {
      text: "Mario sin dudarlo dice:",
      conversation: true,
      textAymara: "Tatajax Florencio Aruni satawa",
      background: "/assets/illustrations/conversation3.svg",
      imageConversation: "/assets/illustrations/faceKid.svg",
      nextPage: 3,
    },
    {
      text: "Ahora Justina responde en aymara: ",
      conversation: true,
      textAymara: "Mamamasti?",
      background: "/assets/illustrations/conversation2.svg",
      imageConversation: "/assets/illustrations/warmi.svg",
      nextPage: 4,
    },
    {
      text: "Mario sin dudar dice: ",
      conversation: true,
      textAymara: "Mamajax Simona Cantuta satawa",
      background: "/assets/illustrations/conversation3.svg",
      imageConversation: "/assets/illustrations/faceKid.svg",
      nextPage: 5,
    },
    {
      text: "Ahora, Justina quiere saber el nombre de su hermano mayor y dice:",
      conversation: true,
      textAymara: "Jilir jilamax kuna sutinisa?",
      background: "/assets/illustrations/conversation2.svg",
      imageConversation: "/assets/illustrations/warmi.svg",
      nextPage: 6,
    },
    {
      text: "Obvio que Mario sabe el nombre de su hermano y dice:",
      conversation: true,
      textAymara: "Jilir jilajan sutipax Marcowa",
      background: "/assets/illustrations/conversation3.svg",
      imageConversation: "/assets/illustrations/faceKid.svg",
      nextPage: 7,
    },
    {
      text: "Ahora, Justina quiere saber el nombre de su hermana menor y dice: ",
      conversation: true,
      textAymara: "Sullka kullakamansti?",
      background: "/assets/illustrations/conversation2.svg",
      imageConversation: "/assets/illustrations/warmi.svg",
      nextPage: 8,
    },
    {
      text: "Mario sin dudarlo dice:",
      conversation: true,
      textAymara: "Sullka kullakajax Abrilawa.",
      background: "/assets/illustrations/conversation3.svg",
      imageConversation: "/assets/illustrations/faceKid.svg",
      nextPage: 9,
    },
    {
      text: "Bueno es hora de despedirse y ambos se van y se olvidaron la mesa",
      conversation: true,
      textAymara: "Qhipürkam Jilata",
      background: "/assets/illustrations/mesa.svg",
      imageConversation: "/assets/illustrations/warmi.svg",
      nextPage: 10,
    },
    {
      text: "Ahora que conoces a Mario y Justina dime quien es Justina",
      optionsSelected: true,
      choices: [
        {
          image: "/assets/illustrations/faceKid.svg",
        },
        {
          image: "/assets/illustrations/warmi.svg",
        },
      ],
      nextPage: 11,
    },
    {
      text: "Ahora que conoces a Mario y Justina dime quien es Justina",
      optionsSelected: true,
      choices: [
        {
          image: "/assets/illustrations/faceKid.svg",
        },
        {
          image: "/assets/illustrations/warmi.svg",
        },
      ],
      nextPage: 12,
    },
  ];

  const currentPage = storyPages[page];

  const handleChoiceClick = (nextPage) => {
    setPage(nextPage);
    soundNext.play();
  };

  const handleCorrectAnswer = (selectedImage) => {
    if (currentPage.choices[1].image === selectedImage) {
      setCorrectAnswer(true);
      soundNext.play();
      setGameStatus("Finished");
    } else {
      setCorrectAnswer(false);
      setGameStatus("Finished");
    }
  };

  const handleSelected = (index) => {
    setSelected(index);
    soundNext.play();
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
          {currentPage.conversationHome && (
            <>
              <h2 className="text-3xl font-outfitsemibold text-white text-center">
                Historia 2
              </h2>
              <h2 className="text-xl font-outfitsemibold text-white text-center">
                {currentPage.text}
              </h2>
              <div className="fixed bottom-0 left-0 right-0 mx-4 mb-4">
                <button
                  onClick={() => handleChoiceClick(currentPage.nextPage)}
                  className="w-full rounded-2xl border-accent border-2 bg-[#123837] py-2 text-white text-xl"
                >
                  Seguir
                </button>
              </div>
            </>
          )}

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

              <div className="fixed bottom-0 left-0 right-0 mx-4 mb-4">
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
                    <div className="fixed bottom-0 left-0 right-0 mx-4 mb-4">
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

export default StoryFamily;
