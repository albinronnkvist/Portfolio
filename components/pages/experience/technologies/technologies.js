import useTranslation from 'next-translate/useTranslation'
import GetRecentTechnologies from '../../../../components/pages/experience/technologies/getRecentTechnologies'
import dynamic from 'next/dynamic'
import useInView from 'react-cool-inview'
import Loading from '../../../other/loading'

const GetAllTechnologies = dynamic(() => import('../../../../components/pages/experience/technologies/getAllTechnologies'))

export default function Education({technologies, categories}) {
  const { t } = useTranslation()

  const { observe, inView } = useInView({
    onEnter: ({unobserve}) => unobserve()
  })

  return (
    <section id="technologies" className="w-full mt-24 md:mt-48">
      <h2>{t("experience:technologies.title")}</h2>
      <div className="w-full md:w-3/5 xl:w-1/2">
        <p>
          {t("experience:technologies.intro")}
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <p>
            {t("experience:technologies.recentlyText")}
          </p>
          <GetRecentTechnologies technologies={technologies} />

          <p className="pb-2 mt-10">
            {t("experience:technologies.allText")}
          </p>
          <div ref={observe}>
            {inView ? (
              <GetAllTechnologies technologies={technologies} categories={categories} />
            ) : (
              <Loading />
            )}
          </div>
        </div>

        <div>
        </div>
      </div>
    </section>
  )
}