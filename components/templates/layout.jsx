import Head from "next/head";
import Footer from "../molecules/footer";

export default function Layout({children}) {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-background-dark">
        <main>{children}</main>
      </div>
      <Footer />
      <small className="text-[1rem] md:text-lg text-primary-text dark:text-secondary-dark py-8 px-8 md:px-32 lg:px-56 xl:px-80 bg-background dark:bg-card-dark block">Hecho con 💙 durante la cuarentena</small>
    </>
  );
}