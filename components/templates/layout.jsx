import Footer from "../molecules/footer";
import Meta from "../molecules/meta";

export default function Layout({children}) {
  return (
    <>
      <Meta/>
      <div className="min-h-screen bg-white dark:bg-background-dark">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}