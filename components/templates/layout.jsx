import Footer from "../molecules/footer";

export default function Layout({ children }) {
  var date = new Date().getFullYear();
  return (
    <>
      <div className="font-outfit min-h-screen bg-[#181824]">
        <main>{children}</main>
      </div>
      <Footer />
      <p className="bg-[#181824] font-outfit text-center text-[1rem] md:text-lg text-brand-beige/70 px-8 md:px-32 lg:px-56 lg:pt-8 xl:px-80">
        Creado por Wilson Quispe Alanoca con 💙
      </p>
      <p className="bg-[#181824] text-center py-6 font-outfit text-brand-beige/70">
        © {date} Todos los derechos reservados.
      </p>
    </>
  );
}
