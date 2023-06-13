import Script from "next/script";
import "../styles/globals.css";

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

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
