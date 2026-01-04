import Image from "next/image";
import Link from "next/link";

function Card() {
  return (
    <section className="my-12">
      <h2 className="subtitles">
        Mis proyectos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border-[1px] p-3 rounded-3xl shadow-lg">
          <Link href="https://testcolor.vercel.app/">
            <Image
              src="/titlesApp.jpg"
              alt={`Cover Image for titles app`}
              width={1900}
              height={1200}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-2xl cursor-pointer"
            />
            <div className="px-4 py-2">
              <h3 className="sub-subtitles">
                Aplicación de diseño gráfico de títulos
              </h3>
              <p className="paragraph">
                Expresate a través de los detalles, resaltando tu creatividad en cada título que
                diseñes. Con la capacidad de subir tus propias fuentes, cambiar
                colores de bordes &quot;hasta 3 veces&quot;.
              </p>
            </div>
            </Link>
        </div>
        <div className="border-[1px] p-3 rounded-3xl shadow-lg">
          <Link href="https://duolingo-store.vercel.app/">
            <Image
              src="/mockupDuolingoStore.png"
              alt={`Cover Image for duolingo store`}
              width={1900}
              height={1200}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-2xl cursor-pointer"
            />
          <div className="px-4 py-2">
            <h3 className="sub-subtitles">
              Duolingo Store
            </h3>
            <p className="paragraph">
              Comercio electrónico de Duolingo realizado en React JS
            </p>
          </div>
          </Link>
        </div>
        <div className="border-[1px] p-3 rounded-3xl shadow-lg">
          <Link href="https://aynistore.vercel.app/">
            <Image
              src="/mockupAyniStore.png"
              alt={`Cover Image for duolingo store`}
              width={1900}
              height={1200}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-2xl cursor-pointer"
            />
          <div className="px-4 py-2">
            <h3 className="sub-subtitles">
              Ayni Store
            </h3>
            <p className="paragraph">
              Comercio electrónico de venta de monedas, gemas, diamantes y
              otros de juegos populares.
            </p>
          </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Card;
