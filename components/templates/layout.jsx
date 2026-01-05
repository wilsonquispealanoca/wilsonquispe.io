import Footer from "../molecules/footer";

export default function Layout({ children }) {
  var date = new Date().getFullYear();
  return (
    <>
      <div className="font-outfit min-h-screen bg-background overflow-x-hidden">
        <main>{children}</main>
      </div>
      <div id="contacto" className="relative bg-[#0a0b10] h-full p-6 text-white text-center">

        <div className="my-24">
          <h3 className="font-outfitsemibold text-5xl md:text-7xl mb-4 md:mb-6">Ready to take action?</h3>
          <span className="font-outfit text-2xl md:text-4xl text-secondary-text">Your success starts here</span>
        </div>
  
        {/* Imágenes de fondo (con z-0 para que no tapen el borde) */}
        <img src="bottomDetail.svg" className="absolute top-0 left-0 z-0"/>
        <img src="topDetail.svg" className="absolute bottom-0 left-0 z-0"/>
        
        {/* El Cuadrado con "Margen" real */}
        <div className="relative w-full h-96 bg-bg-soft-dark z-10 translate-x-1 translate-y-1 rounded-2xl text-white p-6 font-outfitsemibold">
          Formulario de registro
        </div>
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
