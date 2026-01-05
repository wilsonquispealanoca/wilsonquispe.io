import Footer from "../molecules/footer";

export default function Layout({ children }) {
  var date = new Date().getFullYear();
  return (
    <>
      <div className="font-outfit min-h-screen bg-background overflow-x-hidden">
        <main>{children}</main>
      </div>
      <div id="contacto" className="relative bg-[#0a0b10] -z-10">
        <div className="absolute bg-soft-dark m-4 h-10 z-[10]">
          hola
        </div>
        <img src="bottomDetail.svg" loading="lazy" alt=""/>
        <img src="topDetail.svg" loading="lazy" alt=""/>
      </div>
      <Footer />
      <div className="py-16 bg-[#0a0b10] text-tertiary-text px-6 font-outfit border-t-[1px] border-[#ffffff29]">
        <p className="text-[1rem] md:text-lg md:px-32">
          Creado por Wilson Quispe Alanoca con 💙
        </p>
        <p className="mt-6  md:px-32">
          © {date} Todos los derechos reservados.
        </p>
      </div>
    </>
  );
}
