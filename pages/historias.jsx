import Link from "next/link";
import Container from "../components/templates/container";
import Layout from "../components/templates/layout";

export default function Historias() {
  return (
    <Layout>
      <Container>
        <>
          <div className="flex items-center justify-center pt-16">
            <div className="max-w-2xl w-full px-4">
              <h1 className="text-5xl lg:text-6xl font-bold font-averia text-center mb-8 text-brand-beige">
                ¡Muy pronto estará listo!
              </h1>
              <p className="text-2xl md:text-3xl text-brand-beige font-outfit text-center mb-12">
                Está sección aún la voy construyendo. ¡Volveré pronto!
              </p>
              {/* <form className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <input className="w-full md:w-80  py-2 px-4 border text-gray-800 border-gray-200 bg-white" type="email" placeholder="Ingresa tu correo electrónico"/>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 border">Notifícame cuando este listo</button>
                    </form> */}
              <Link href="/">
                <button
                  className="px-6 py-4 bg-brand-yellow rounded-full uppercase font-black
             border border-black cursor-pointer text-brand-charcoal font-outfit"
                >
                  Volver al inicio
                </button>
              </Link>
            </div>
          </div>
        </>
      </Container>
    </Layout>
  );
}
