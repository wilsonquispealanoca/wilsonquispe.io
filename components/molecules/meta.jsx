import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="/safari-pinned-tab.svg"
        color="#000000"
      />
      <link
        rel="icon"
        href="/favicon.ico"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="theme-color" content="#0F102E" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      {/* Primary Meta Tags */}
      <title>Ayni Store — Recarga de diamantes al instante y por ID</title>
      <meta name="title" content="Ayni Store — Recarga de diamantes al instante y por ID" />
      <meta name="description" content="Recarga aquí tus diamantes para Free Fire y Mobile Legends" />
      <meta name="name" content="https://i.ibb.co/D86TPct/cover-Ayni-Store.png"/>

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://aynistore.vercel.app/"/>
      <meta property="og:title" content="Ayni Store — Recarga de diamantes al instante y por ID" />
      <meta property="og:description" content="Recarga aquí tus diamantes para Free Fire y Mobile Legends" />
      <meta property="og:image" content="https://i.ibb.co/D86TPct/cover-Ayni-Store.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://aynistore.vercel.app/" />
      <meta property="twitter:title" content="Ayni Store — Recarga de diamantes al instante y por ID" />
      <meta property="twitter:description" content="Recarga aquí tus diamantes para Free Fire y Mobile Legends" />
      <meta property="twitter:image" content="https://i.ibb.co/D86TPct/cover-Ayni-Store.png" /> 
    </Head>
  );
}