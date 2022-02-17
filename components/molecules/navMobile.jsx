import Footer from "./footer";

function NavMobile() {
  return (
    <div className="md:hidden h-screen w-screen bg-card dark:bg-background-dark z-30 fixed top-0 left-0 right-0">
      <div className="flex flex-col items-center justify-center h-full w-full">
        <Footer />
      </div>
    </div>
  );
}

export default NavMobile;