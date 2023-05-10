import Link from "next/link";
import Image from "next/image";

import cat404 from "../public/catronaut.svg";

export default function Custom404() {
  return (
    <div className="h-screen w-screen bg-[#14102c] flex items-center">
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto">
        <div className="max-w-lg px-6">
          <div className="text-3xl lg:text-5xl text-brand-beige font-averia font-bold my-10 lg:mb-16">
            Parece que estás perdido
          </div>
          <p className="text-lg lg:text-2xl md:text-3xl font-light text-brand-beige font-outfit mb-3 lg:mb-6">
            Quédate donde estas, enviaremos a alguien a buscarte
          </p>
          <Link href="/">
            <button className="px-4 inline py-2 text-sm lg:text-lg text-black font-outfit rounded-md w-full lg:w-64 focus:outline-none focus:shadow-outline-blue bg-brand-yellow">
              Regresar al inicio
            </button>
          </Link>
        </div>
        <div className="max-w-xl">
          <Image
            priority
            src="/cat.png"
            width={1000}
            height={1000}
            alt="Follow us on Twitter"
          />
        </div>
      </div>
    </div>
  );
}
