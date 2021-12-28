import useTranslation from 'next-translate/useTranslation'
import Breadcrumbs from '../../components/sections/breadcrumbs'
import Meta from '../../components/other/meta'
import { db } from '../../firebase/initFirebase'
import { collection, getDocs, query, orderBy } from '@firebase/firestore'
import { useState } from 'react'
import { motion } from 'framer-motion'
import GetAllInterests from '../../components/pages/about/getAllInterests'

export default function About({interests}) {
  let { t } = useTranslation()

  const crumbs = [
    {
      title: "navigation:menu.about",
      route: '/about'
    }
  ]

  const [moreText, setMoreText] = useState(false)

  const showMoreText = () => {
    setMoreText(!moreText)
  }

  return (
    <>
      <Meta title="about:title" description="about:metaTags.description" keywords="about:metaTags.keywords" url="/about" />

      <section id="about" className="w-full">
        <Breadcrumbs crumbs={crumbs} />

        <h1>{t("about:title")}</h1>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="h-auto sm:h-64 w-full sm:w-64">
            <img 
              src="/images/profile.png" 
              alt="Profile picture of a guy" 
              className="h-full w-full rounded bg-primary-dark overflow-hidden shadow-xl" 
            />
          </div>

          <div className="w-full md:w-3/5 xl:w-1/2">
            <p>
              {t("about:text").slice(0, 166)}<span className={`${moreText ? 'hidden' : 'inline-block'}`}>...</span> 
              <button 
                onClick={showMoreText} 
                className={`${moreText ? 'hidden' : 'inline-block'} dark:text-primary-default text-primary-dark ml-2`}
              >
                {t("common:showMore")} <i className="bi bi-chevron-down"></i>
              </button>
              {moreText && (
                <motion.span 
                  initial="hidden" 
                  animate="visible"
                  variants={{
                    hidden: {
                      opacity: 0
                    },
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: .3
                      }
                    }
                  }}
                >
                  {t("about:text").substr(166)}
                  <br/><br/>
                  {t("about:text2")}
                  
                  &nbsp;
                  <button 
                    onClick={showMoreText} 
                    className={`${moreText ? 'inline-block' : 'hidden'} dark:text-primary-default text-primary-dark`}
                  >
                    {t("common:showLess")} <i className="bi bi-chevron-up"></i>
                  </button>
                  
                </motion.span>
              )}
            </p>
          </div>
        </div>

        <h2 className="mt-12 lg:mt-24">{t("about:interests")}</h2>
        <p className="md:w-3/5 xl:w-1/2">
          {t("about:text3")}
        </p>
        <GetAllInterests interests={interests} />  
      </section>  
    </>
  )
}

export const getStaticProps = async () => {
  const q = query(collection(db, "interests"), orderBy("title", "asc"))
  const data = await getDocs(q)
  const interests = data.docs.map((doc) => ({...doc.data(), id: doc.id}))

  return {
    props: {interests}
  }
}