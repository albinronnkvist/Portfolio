import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Breadcrumbs({ crumbs }) {
  let { t } = useTranslation()
  let {locale} = useRouter()
  const [breadcrumbs, setBreadcrumbs] = useState(crumbs)

  useEffect(() => {
    setBreadcrumbs(crumbs)
  }, [locale])

  return (
    <motion.div initial="hidden" animate="visible" variants={{
      hidden: {
        scale: .8,
        opacity: 0
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          delay: .4,
          duration: .3
        }
      }
    }}>
      <div className="flex flex-row flex-nowrap overflow-scroll sm:overflow-auto text-sm xl:text-base font-mono mt-2 xl:mt-6">
        {/* Standard back to start should be displayed on all pages */}
        <Link href="/">
          <a className="mr-2 text-xs sm:text-sm md:text-sm xl:text-base 2xl:text-lg">
            {t("navigation:menu.start")}
          </a>
        </Link>

        {/* Arrow after start-nav */}
        <span className="text-gray-light dark:text-white text-xs sm:text-sm md:text-sm xl:text-base 2xl:text-lg"><i className="bi bi-chevron-right"></i></span>

        {/* All crumbs except the last one */}
        {breadcrumbs.map((crumb, index) => (
          <div key={crumb.route} className="flex flex-row">
            <Link href={crumb.route}>
              <a className="ml-2 text-xs sm:text-sm md:text-sm xl:text-base 2xl:text-lg">
                {t(crumb.title)}
              </a>
            </Link>

            {/* Arrow after each crumb */}
            <span className="text-gray-light dark:text-white ml-2 text-xs sm:text-sm md:text-sm xl:text-base 2xl:text-lg"><i className="bi bi-chevron-right"></i></span>
          </div>
        )).slice(0, -1)} 

        {/* Last crumb */}
        {breadcrumbs.map((crumb) => (
          <p className="ml-2 leading-normal text-xs sm:text-sm md:text-sm xl:text-base 2xl:text-lg" key={crumb.title}>{t(crumb.title)}</p>
        )).slice(-1)[0]} 
        
      </div>
    </motion.div>
  )
}