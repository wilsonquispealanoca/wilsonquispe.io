import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Activelink from "../atoms/activeLink";
import Logo from "../atoms/logo";
import NavMobile from "./navMobile";

function Navbar() {

  return (
    <>
      <nav
        className="w-full pt-16 flex justify-between text-brand-beige text-xl font-semibold`}
      ">
          <Activelink href="/">Inicio</Activelink>
          <Activelink href="/blog">Blog</Activelink>
      </nav>
    </>
  );
}

export default Navbar;
