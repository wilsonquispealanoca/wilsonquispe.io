import Link from "next/link";
import Image from "next/image";

export default function Custom404() {
  return (
    <div className="h-screen w-screen bg-[#14102c] flex items-center">
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto">
        <div className="max-w-lg px-6">
          <div className="text-center md:text-left text-5xl lg:text-6xl text-brand-beige font-averia font-bold my-10 lg:mb-16">
            Parece que estás perdido
          </div>
          <p className="text-center md:text-left text-2xl md:text-3xl font-light text-brand-beige font-outfit mb-8 lg:mb-6">
            Quédate donde estas, enviaremos a alguien a buscarte
          </p>
          <Link
            href="/"
            className="flex items-center justify-center md:justify-start"
          >
            <button className="btn-pink">Regresar al inicio</button>
          </Link>
        </div>
        <div className="max-w-xl">
          <Image
            priority
            src="/cat.png"
            width={1000}
            height={1000}
            alt="cat-404"
          />
        </div>
      </div>
    </div>
  );
}
