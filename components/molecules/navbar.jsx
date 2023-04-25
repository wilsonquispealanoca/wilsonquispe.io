import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Activelink from "../atoms/activeLink";
import Logo from "../atoms/logo";
import NavMobile from "./navMobile";

function Navbar() {

  return (
    <>
      <nav
        className="flex items-center w-full justify-between h-[4rem] lg:h-28 fixed left-0 right-0 top-0 mx-auto z-40 px-6 md:px-32 lg:px-56 xl:px-80 text-xl font-semibold`}
      ">
        <figure
          className="flex items-center justify-center w-10 h-10 cursor-pointer lg:hidden"
        >
        </figure>
        <div className="flex items-center">
          <Activelink href="/">Inicio</Activelink>
          <Activelink href="/blog">Blog</Activelink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
