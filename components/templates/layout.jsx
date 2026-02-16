import Footer from "../molecules/footer";

export default function Layout({ children }) {
  var date = new Date().getFullYear();
  return (
    <>
      <div className="font-outfit min-h-screen overflow-x-hidden">
        <main>{children}</main>
      </div>
      <div id="contacto" className="relative bg-[#0a0b10] h-full p-6 text-white text-center">

        <div className="mt-24 mb-12">
          <h3 className="font-rivetto text-4xl md:text-7xl mb-4 md:mb-6">Sé el primero en saber cuándo lancemos.</h3>
          <span className="text-xl md:text-4xl text-graw">No te quedes atrás</span>
        </div>
  
        {/* Imágenes de fondo (con z-0 para que no tapen el borde) */}
        <img src="/bottomDetail.png" className="absolute top-0 left-0 z-0"/>
        <img src="/topDetail.png" className="absolute bottom-0 left-0 z-0"/>
        
        {/* El Cuadrado con "Margen" real */}
        <div className="font-rivetto text-2xl relative w-full h-96 bg-bg-soft-dark z-10 translate-x-1 translate-y-1 rounded-2xl text-white p-6 font-outfitsemibold">
          Formulario de registro
          <div class="growth-container">
            <svg class="plant-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path class="draw-line soil" d="M20,90 L80,90" />
              
              <path class="draw-line stem" d="M50,90 L50,30" />
              
              <path class="draw-line leaf-left" d="M50,70 Q30,70 30,55 Q50,55 50,70" />
              
              <path class="draw-line leaf-right" d="M50,55 Q70,55 70,40 Q50,40 50,55" />
              
              <circle class="draw-line flower" cx="50" cy="25" r="8" />
            </svg>

            <div class="text-sm">
              <h2>Sección en Crecimiento</h2>
              <p>Estamos cultivando algo nuevo para ti. El formulario estará listo pronto.</p>
            </div>
          </div>
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
