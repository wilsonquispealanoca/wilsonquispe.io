import Footer from "../molecules/footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="font-sans min-h-screen bg-white dark:bg-[#111111]">
        <main>{children}</main>
      </div>
      <Footer />
      <small className="text-center text-[1rem] md:text-lg text-primary-text dark:text-secondary-dark py-8 px-8 md:px-32 lg:px-56 xl:px-80 bg-background dark:bg-[#111111] block">
        Hecho con 💙 durante la cuarentena
      </small>
    </>
  );
}
