import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState } from "react";

const LanguageSwitcher = () => {
  const router = useRouter();
  const { i18n } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLanguageChange = (locale) => {
    i18n.changeLanguage(locale);
    //router.push(router.pathname, router.asPath, { locale });
    setSelectedLanguage(locale);
  };

  return (
    <div className="flex gap-3">
      <button
        onClick={() => handleLanguageChange("en")}
        className={
          selectedLanguage === "en"
            ? "bg-white text-black py-2 px-3 text-sm rounded-md"
            : "border border-neutral-700 bg-neutral-800 rounded-md py-2 px-3 text-sm inline-flex items-center leading-4 text-neutral-100 no-underline"
        }
      >
        English
      </button>
      <button
        onClick={() => handleLanguageChange("es")}
        className={
          selectedLanguage === "es"
            ? "bg-white text-black py-2 px-3 text-sm rounded-md"
            : "border border-neutral-700 bg-neutral-800 rounded-md py-2 px-3 text-sm inline-flex items-center leading-4 text-neutral-100 no-underline"
        }
      >
        Español
      </button>
      <button
        onClick={() => handleLanguageChange("ay")}
        className={
          selectedLanguage === "ay"
            ? "bg-white text-black py-2 px-3 text-sm rounded-md"
            : "border border-neutral-700 bg-neutral-800 rounded-md py-2 px-3 text-sm inline-flex items-center leading-4 text-neutral-100 no-underline"
        }
      >
        Aymara
      </button>
    </div>
  );
};

export default LanguageSwitcher;
