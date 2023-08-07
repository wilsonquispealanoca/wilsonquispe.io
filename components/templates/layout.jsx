import Footer from "../molecules/footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="font-outfit min-h-screen bg-brand-coal">
        <main>{children}</main>
      </div>
      <Footer />
      <p className="bg-brand-coal font-outfit text-center text-[1rem] md:text-lg text-brand-beige/70 px-8 md:px-32 lg:px-56 lg:pt-8 xl:px-80">
        Creado por Wilson con 💙
      </p>
      <p className="bg-brand-coal text-center py-6 font-outfit text-brand-beige/70">
        © 2023 Todos los derechos reservados. Lo izquierdos también.
      </p>
    </>
  );
}
