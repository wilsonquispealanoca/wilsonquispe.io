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
        <div className="lg:hidden fixed top-0 h-20 w-full bg-white">
          <div className="flex flex justify-end items-center px-6 gap-4 h-full">
            <a href="#contacto" className="primary-button">Contacto</a>
            <button 
              className="md:hidden text-3xl z-[110] text-primary-text"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
          
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
