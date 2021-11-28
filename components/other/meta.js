import Head from 'next/head'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

export const siteTitle = "Albin Rönnkvist"
export const mainUrl = "https://albinronnkvist.se"

export default function Meta({title, keywords, description, type, url, image}) {
  const route = useRouter()
  const { t } = useTranslation()

  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      {title !== siteTitle ? (
        <title>{t(title)} - {siteTitle}</title>
      ) : (
        <title>{siteTitle}</title>
      )}
      
      
      <meta name="keywords" content={t(keywords)} />
      <meta name="description" content={t(description)} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="copyright"content="Albin Rönnkvist" />
      <meta name="robots" content="index,follow" />

      {/* Og: */}
      {title !== siteTitle ? (
        <meta property="og:title" content={`${t(title)} - ${siteTitle}`} />
      ) : (
        <meta property="og:title" content={siteTitle} />
      )}
      <meta property="og:description" content={t(description)} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={`${mainUrl}${url}`} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={route.locale} />
      <meta property="og:locale:alternate" content="sv" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:site_name" content="Albin Rönnkvist" />
      <meta property="og:email" content="kontakt@albinronnkvist.se"/>
    </Head>
  ) 
}

Meta.defaultProps = {
  title: siteTitle,
  keywords: "meta:keywords",
  description: "meta:description", 
  type: "website",
  url: "/",
  image: "/images/ogimage.jpg"
}