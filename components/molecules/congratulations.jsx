import Link from "next/link";
import Image from "next/image";

export const Congratulations = () => {
  return (
    <div className="bg-[#181824] flex items-center justify-center h-screen w-full">
      <div className="flex items-center justify-center flex-col px-4">
        <div className="w-full h-48 lg:h-64 relative">
          <Image
            src="/assets/illustrations/Phisi.svg"
            alt="iconWin"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="m-auto"
          />
        </div>
        <h1 className="font-outfitsemibold drop-shadow-[-2px_0_0_#c21aa5] text-white mb-8 text-4xl text-center md:text-6xl">
          ¡Felicidades, lo lograste!
        </h1>
        <p className="text-brand-beige font-outfit text-center text-lg lg:text-xl">
          Recuerda, <strong>&quot;phisi&quot;,</strong>{" "}
          <strong>&quot; mishi&quot;</strong> y
          <strong>&quot; michi&quot; </strong>
          significa gato.
        </p>
        <Link href="/blog/">
          <button className="my-4 px-16 py-4 bg-green-500 rounded-full uppercase cursor-pointer font-outfit text-white font-black sm:min-w-[150px] sm:max-w-fit sm:grow-0">
            Continuar
          </button>
        </Link>
      </div>
    </div>
  );
};
