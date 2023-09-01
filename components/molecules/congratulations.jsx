import Link from "next/link";
import Image from "next/image";

export const Congratulations = ({ score }) => {
  return (
    <div className="bg-yellow-400 flex items-center justify-center h-screen w-full">
      <div className="flex items-center justify-center flex-col px-4">
        {score === 12 && (
          <span className="text-white font-outfitsemibold text-6xl mb-6">
            100%
          </span>
        )}
        <div className="w-full h-48 lg:h-64 relative">
          <Image
            src="/assets/illustrations/payaqawra.svg"
            alt="iconWin"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="m-auto"
          />
        </div>
        <h1 className="font-outfitsemibold text-red-900 mt-6 text-center  text-xl md:text-xl">
          ¡Si que estás dominando tus lecciones de aymara hoy!
        </h1>
        <p className="text-red-900 font-outfit text-center text-lg lg:text-xl">
          Hoy practicaste nuevas palabras con una precisión de {score}{" "}
          corazones.
        </p>
        <Link href="/blog/" className="w-full flex justify-center">
          <button className="my-4 lg:px-28 py-2 bg-white rounded-lg uppercase cursor-pointer w-full font-outfitsemibold text-yellow-500 sm:min-w-[150px] sm:max-w-fit sm:grow-0">
            Continuar
          </button>
        </Link>
      </div>
    </div>
  );
};
