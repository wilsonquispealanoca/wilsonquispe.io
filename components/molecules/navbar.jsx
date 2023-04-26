import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Activelink from "../atoms/activeLink";
import Logo from "../atoms/logo";
import NavMobile from "./navMobile";

function Navbar() {

  return (
    <>
      <nav
        className="mx-8 md:mx-32 lg:mx-56 xl:mx-80 pt-16 flex lg:flex-initial text-brand-beige text-xl font-semibold`}
      ">
        <div className="flex">
          <Activelink href="/">Inicio</Activelink>
          <Activelink href="/blog">Blog</Activelink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
