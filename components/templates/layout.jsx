import Footer from "../molecules/footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="font-outfit min-h-screen bg-white dark:bg-brand-coal">
        <main>{children}</main>
      </div>
      <Footer />
      <small className="text-center text-[1rem] md:text-lg text-primary-text dark:text-white px-8 md:px-32 lg:px-56 xl:px-80 bg-background dark:bg-brand-coal block">
        Hecho con 💙 durante la cuarentena
      </small>
      <p class="text-center py-6">
        © 2023 <a href="https://wilsonquispe.vercel.app">Wilson Quispe</a>
      </p>
    </>
  );
}
