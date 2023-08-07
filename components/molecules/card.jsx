import Image from "next/image";
import Link from "next/link";

function Card() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-brand-beige mt-4">
      <div>
        <h2 className="text-3xl mb-4 font-averia">Mis proyectos</h2>
        <Link href="https://duolingo-store.vercel.app/">
          <Image
            src="/mockupDuolingoStore.png"
            alt={`Cover Image for duolingo store`}
            layout="responsive"
            width={1900}
            height={1200}
            className="object-cover rounded-lg cursor-pointer"
          />
        </Link>
        <h3 className="text-2xl my-4 font-averia">Duolingo Store</h3>
        <h4 className="text-xl font-averia mb-4">Tecnologías usadas</h4>
        <p>
          Aplicación web clonada del sitio oficial de comercio electrónico de
          Duolingo
        </p>
        <ul className=" flex gap-3 mt-2">
          <li className="w-12 h-auto">
            <Image
              src="/qwik.png"
              alt={`Cover Image for duolingo store`}
              layout="responsive"
              width={200}
              height={200}
              className="object-cover rounded-lg w-40 h-auto"
            />
          </li>
          <li className="w-12 h-auto">
            <Image
              src="/ts.png"
              alt={`Cover Image for duolingo store`}
              layout="responsive"
              width={200}
              height={200}
              className="object-cover rounded-lg w-40 h-auto"
            />
          </li>
          <li className="w-12 h-auto">
            <Image
              src="/Vercel.png"
              alt={`Cover Image for duolingo store`}
              layout="responsive"
              width={200}
              height={200}
              className="object-cover rounded-lg w-40 h-auto"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Card;
