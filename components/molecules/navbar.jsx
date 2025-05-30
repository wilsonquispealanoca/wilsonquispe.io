import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Activelink from "../atoms/activeLink";
import Logo from "../atoms/logo";
import NavMobile from "./navMobile";
import LanguageSwitcher from "../atoms/languageSwitcher";
import { useTranslation } from "next-i18next";

function Navbar() {
  const { t } = useTranslation();
  return (
    <>
      <nav className="w-full flex justify-center items-center pt-8 pb-8 lg:pt-16 lg:justify-between text-brand-beige text-xl font-semibold">
        <div className="flex">
          <Activelink href="/">{t("main")}</Activelink>
          <Activelink href="/blog">Blog</Activelink>
        </div>
        {/*<div className="overflow-x-auto">
          <LanguageSwitcher />
        </div>*/}
      </nav>
    </>
  );
}

export default Navbar;
