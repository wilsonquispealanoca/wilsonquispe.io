import Footer from "../molecules/footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="font-outfit min-h-screen bg-brand-coal">
        <main>{children}</main>
      </div>
      <Footer />
      <p className="bg-brand-coal font-outfit text-center text-[1rem] md:text-lg text-brand-yellow px-8 md:px-32 lg:px-56 xl:px-80">
        Hecho con 💙 durante la cuarentena
      </p>
      <p className="bg-brand-coal text-center py-6 font-outfit text-brand-yellow">
        © 2023 <a href="https://wilsonquispe.vercel.app">Wilson Quispe</a>
      </p>
    </>
  );
}
