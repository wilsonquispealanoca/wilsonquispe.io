import Image from "next/image";
import Link from "next/link";

function Card() {
  return (
    <section className="grid grid-cols-3">
      <div>
        <h2 className="text-2xl text-white mb-4">Mis proyectos</h2>
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
        <h3 className="text-xl text-white my-2">Duolingo Store</h3>
        <span className="text-sm text-white">Tecnologías usadas</span>
        <ul className=" flex gap-4">
          <li className="w-40 h-auto">
            <Image
              src="/qwik.png"
              alt={`Cover Image for duolingo store`}
              layout="responsive"
              width={200}
              height={200}
              className="object-cover rounded-lg w-40 h-auto"
            />
          </li>
          <li className="w-40 h-auto">
            <Image
              src="/ts.png"
              alt={`Cover Image for duolingo store`}
              layout="responsive"
              width={200}
              height={200}
              className="object-cover rounded-lg w-40 h-auto"
            />
          </li>
          <li className="w-40 h-auto">
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
