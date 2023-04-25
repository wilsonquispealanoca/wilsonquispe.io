import Footer from "./footer";

function NavMobile({ open }) {
  return (
    <div
      className={`md:hidden h-screen w-screen z-30 fixed top-0 left-0 right-0 transform {open ? "translate-x-0 duration-500" : "-translate-x-28 duration-300"}`}
    >
    </div>
  );
}

export default NavMobile;
