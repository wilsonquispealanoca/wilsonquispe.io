import Link from "next/link";
import Activelink from "../components/atoms/activeLink";
import Container from "../components/templates/container";
import Layout from "../components/templates/layout";


export default function Historias() {
  return (
    <Layout>
        <Container>
        <>
            <div className="flex items-center justify-center">
                <div className="max-w-2xl w-full px-4">
                    <h1 className="text-4xl font-bold text-center mb-8 text-white">¡Muy pronto estará listo!</h1>
                    <p className="text-lg text-gray-600 text-center mb-12">Está sección aún la voy construyendo. ¡Volveré pronto!
                    </p>
                    {/* <form className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <input className="w-full md:w-80  py-2 px-4 border text-gray-800 border-gray-200 bg-white" type="email" placeholder="Ingresa tu correo electrónico"/>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 border">Notifícame cuando este listo</button>
                    </form> */}
                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 border w-full">
                        <Link href="/">Volver al inicio</Link>
                    </button>
                </div>
            </div>
        </>
        </Container>
    </Layout>
  );
}