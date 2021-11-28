import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { siteTitle } from '../components/other/meta'
import useTranslation from 'next-translate/useTranslation'

export default function FourOhFour() {
  let { t } = useTranslation()

  return (
    <>
      <Head>
        <title>404 - {siteTitle}</title>
      </Head>
      <div className="mx-auto w-full min-h-screen bg-black-dark font-mono overflow-hidden">
        <h1 className="text-center text-white pt-12 text-4xl font-bold">404</h1>
        <h2 className="text-center text-white pt-2 text-3xl font-semibold">{t("navigation:pageNotFound")}</h2>
        <div className="mx-auto text-center pt-2">
          <Link href="/">
            <a className="text-primary-default text-sm hover:opacity-75">
              <i className="bi bi-arrow-left"></i> {t("navigation:backToStart")}
            </a>
          </Link>
        </div>
        <div className="text-center mx-auto pt-10">
          <Image src='/images/confused.gif'
              width={350}
              height={350}
          />
        </div>
      </div>
    </>
  )
}