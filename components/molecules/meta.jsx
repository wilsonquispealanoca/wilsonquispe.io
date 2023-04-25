import Head from "next/head";

export default function Meta({ url, title, description, ogImage, fbAppID, twitter, isBlogPost }) {
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
      {/* General tags */}
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta name='image' content={ogImage} />
			<meta name='theme-color' content='#000000'></meta>

			{/* Og tags Facebook*/}
			<meta property='fb:app_id' content={fbAppID}></meta>
			<meta property='og:url' content={url}></meta>
			<meta property='og:title' content={title}></meta>
			<meta property="og:type" content="website"></meta>
			<meta property='og:description' content={description}></meta>
			<meta property='og:image' content={ogImage}></meta>
			<meta property="og:image:alt" content={title}></meta>
			<meta property="og:site_name" content="Wilson Quispe"></meta>
			

			{/* Twitter Card tags */}
			<meta name='twitter:card' content={isBlogPost ? 'summary_large_image' : 'summary'} />
			<meta name='twitter:creator' content={twitter} />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:image' content={ogImage} />

			{/* SEO */}
			<link rel="canonical" href={url}></link>
			{/* Og tags Google+ */}
			<meta itemProp="description" content={description}></meta>

			<link rel='icon' href='/favicon.ico' />
    </Head>
  );
}