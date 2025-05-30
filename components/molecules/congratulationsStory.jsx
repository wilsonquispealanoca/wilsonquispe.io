import Link from "next/link";
import Image from "next/image";
//javascript audio library
import { Howl } from "howler";

export const CongratulationsStory = ({ isCorrect }) => {
  const soundTriumphant = new Howl({
    src: ["/sounds/triumphant.mp3"], // Ruta de tu archivo de audio
  });
  soundTriumphant.play();
  return (
    <div className="bg__lines-diagonals relative z-10 flex items-center justify-center h-screen w-full">
      <div className="bg__congratulation-degrade z-20 flex items-center justify-center flex-col px-4 h-screen">
        <div className="w-full h-48 lg:h-64 relative">
          {isCorrect && (
            <Image
              src="/assets/illustrations/warmi.svg"
              alt="iconWin"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="m-auto"
            />
          )}
          {isCorrect === false && (
            <Image
              src="/assets/illustrations/faceKid.svg"
              alt="iconLose"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="m-auto"
            />
          )}
        </div>
        <h1 className="font-outfitsemibold text-red-900 mt-6 text-center  text-xl md:text-xl">
          ¡Si que estás dominando tus lecciones de aymara hoy!
        </h1>
        <h2 className="font-outfitsemibold text-red-900 my-6 text-center  text-2xl md:text-2xl">{`${
          isCorrect ? "Y sí, ella es Justina" : "Y no, él es mario "
        }`}</h2>
        <p className="text-red-900 font-outfit text-center text-lg lg:text-xl mb-4">
          Hoy hiciste nuevos amigos, ya conoces a Justina y Mario
        </p>
        <div className="flex flex-col gap-2 w-full">
          <Link href="/blog/" className="w-full flex justify-center">
            <button className="border-2 border-[#fee481] lg:px-28 py-2  rounded-lg uppercase cursor-pointer w-full font-outfitsemibold text-white sm:min-w-[150px] sm:max-w-fit sm:grow-0">
              Continuar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
