import Script from "next/script";
import "../styles/globals.css";

import i18n from "i18next";
import { I18nextProvider } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Importa tus archivos de traducción
import enTranslation from "../public/locales/en.json";
import esTranslation from "../public/locales/es.json";
import ayTranslation from "../public/locales/ay.json";

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    es: {
      translation: esTranslation,
    },
    ay: {
      translation: ayTranslation, // aymar arunaka = idioma aymara
    },
  },
  fallbackLng: "es",
  debug: false, // Cambia a true si deseas ver información de depuración
  interpolation: {
    escapeValue: false, // No es necesario escapar los valores en React
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Microsoft Clarity */}
      <Script id="microsoftofclarity" strategy="lazyOnload">
        {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", 'gu3w4acz8x');
        `}
      </Script>

      {/* Google analitycs */}
      <Script
        id="google"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-2K2TY0B4Y1`}
      />
      <Script id="google-analitycs" strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-2K2TY0B4Y1', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nextProvider>
    </>
  );
}

export default MyApp;
