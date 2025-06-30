import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Activelink from "../atoms/activeLink";
import Logo from "../atoms/logo";
import NavMobile from "./navMobile";
import LanguageSwitcher from "../atoms/languageSwitcher";
import { useTranslation } from "next-i18next";

function Navbar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="z-[100] w-full flex justify-center items-center pt-8 pb-8 lg:pt-16 lg:justify-between text-brand-beige text-xl font-semibold">
        <div className="flex">
          <Activelink href="/">{t("main")}</Activelink>
          <Activelink href="/blog">Blog</Activelink>
        </div>
        {/*<div className="overflow-x-auto">
          <LanguageSwitcher />
        </div>*/}
        <div className="lg:hidden fixed top-0 h-16 w-full bg-[#0f0329]/50 backdrop-blur-md shadow-2xl">
          <button 
            className="md:hidden fixed top-5 right-9 text-3xl z-[110]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
          
          <NavMobile 
            open={isMenuOpen} 
            onClose={() => setIsMenuOpen(false)} 
          />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
