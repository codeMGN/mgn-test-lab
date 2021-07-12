import Head from 'next/head'

const SEO = ({ title, description, url, image, alt }) => {
  return (
    <Head>
      <meta charSet="utf-8" />

      {/* main */}
      <title>MGN Test Lab</title>
      <meta name="description" content={description} />
      <meta name="author" content="MGN" />

      {/* links */}
      <link rel="manifest" href="site.webmanifest" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon/favicon-16x16.png" sizes="16x16" />
      <link rel="icon" href="/favicon/favicon-32x32.png" sizes="32x32" />
      <link
        rel="apple-touch-icon"
        href="/favicon/apple-touch-icon.png"
        sizes="180x180"
      />
      <link rel="canonical" href="https://www.mgn.social/" />

      {/* og */}
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={alt} />

      {/* twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:decription" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={alt} />
      <meta name="twitter:site" content="@mgn_tech_cr" />
      <meta name="twitter:creator" content="@mgn_tech_cr" />

      {/* basic */}
      <meta name="theme-color" content="#ffffff" />
      <meta name="apple-mobile-web-app-status-bar" content="#ffffff" />
      <meta name="robots" content="index, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
        key="viewport"
      />
      <meta httpEquiv="Content-Type" content="text/html" />
    </Head>
  )
}

export default SEO
