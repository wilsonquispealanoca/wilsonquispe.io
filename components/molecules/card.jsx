import Image from "next/image";
import Link from "next/link";

function Card() {
  return (
    <section className=" text-brand-beige mt-4">
      <h2 className="text-4xl my-12 text-white drop-shadow-[-2px_0_0_#c21aa5]">
        Mis proyectos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <Link href="https://duolingo-store.vercel.app/">
            <Image
              src="/mockupDuolingoStore.png"
              alt={`Cover Image for duolingo store`}
              width={1900}
              height={1200}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-lg cursor-pointer"
            />
          </Link>
          <h3 className="text-2xl my-4 font-averia text-white">
            Duolingo Store
          </h3>
          <p>
            Aplicación web clonada del sitio oficial de comercio electrónico de
            Duolingo
          </p>
          <ul className=" flex gap-3 mt-2">
            <li className="w-12 h-auto">
              <Image
                src="/qwik.png"
                alt={`Cover Image for duolingo store`}
                width={200}
                height={200}
                className="object-cover rounded-lg w-40 h-auto"
              />
            </li>
            <li className="w-12 h-auto">
              <Image
                src="/ts.png"
                alt={`Cover Image for duolingo store`}
                width={200}
                height={200}
                className="object-cover rounded-lg w-40 h-auto"
              />
            </li>
            <li className="w-12 h-auto">
              <Image
                src="/Vercel.png"
                alt={`Cover Image for duolingo store`}
                width={200}
                height={200}
                className="object-cover rounded-lg w-40 h-auto"
              />
            </li>
          </ul>
        </div>
        <div>
          <Link href="https://aynistore.vercel.app/">
            <Image
              src="/mockupAyniStore.png"
              alt={`Cover Image for duolingo store`}
              width={1900}
              height={1200}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-lg cursor-pointer"
            />
          </Link>
          <h3 className="text-2xl my-4 font-averia text-white">Ayni Store</h3>
          <p>
            Comercio electrónico de venta de items (monedas, gemas, diamantes y
            otros) de juegos populares.
          </p>
          <ul className=" flex gap-3 mt-2">
            <li className="w-12 h-auto">
              <Image
                src="/logoJavascript.png"
                alt={`Cover Image for duolingo store`}
                width={200}
                height={200}
                className="object-cover rounded-lg w-40 h-auto"
              />
            </li>
            <li className="w-12 h-auto">
              <Image
                src="/logoReact.png"
                alt={`Cover Image for duolingo store`}
                width={200}
                height={200}
                className="object-cover rounded-lg w-40 h-auto"
              />
            </li>
            <li className="w-12 h-auto">
              <Image
                src="/next-js-logo.webp"
                alt={`Cover Image for duolingo store`}
                width={200}
                height={200}
                className="object-cover rounded-lg w-40 h-auto"
              />
            </li>
            <li className="w-12 h-auto">
              <Image
                src="/Vercel.png"
                alt={`Cover Image for duolingo store`}
                width={200}
                height={200}
                className="object-cover rounded-lg w-40 h-auto"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Card;
