import Image from "next/image";
import Link from "next/link";

function Card() {
  return (
    <section className=" text-brand-beige">
      <h2 className="font-outfitsemibold text-4xl my-12 text-white drop-shadow-[-2px_0_0_#c21aa5]">
        Mis proyectos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <Link href="https://testcolor.vercel.app/">
            <Image
              src="/titlesApp.jpg"
              alt={`Cover Image for titles app`}
              width={1900}
              height={1200}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-lg cursor-pointer"
            />
          <h3 className="font-outfitsemibold text-2xl my-4 font-averia text-white">
            Aplicación de diseño gráfico de títulos
          </h3>
          </Link>
          <p>
            Expresate a través de los detalles, resaltando tu creatividad en cada título que
            diseñes. Con la capacidad de subir tus propias fuentes, cambiar
            colores de bordes &quot;hasta 3 veces&quot;.
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
          <h3 className="font-outfitsemibold text-2xl my-4 font-averia text-white">
            Duolingo Store
          </h3>
          </Link>
          <p>
            Comercio electrónico de Duolingo realizado en React JS
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
          <h3 className="font-outfitsemibold text-2xl my-4 font-averia text-white">
            Ayni Store
          </h3>
          </Link>
          <p>
            Comercio electrónico de venta de monedas, gemas, diamantes y
            otros de juegos populares.
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
