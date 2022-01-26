import useTranslation from 'next-translate/useTranslation'
import GetAllJobs from './getAllJobs'

export default function Work({jobs}) {
  const { t } = useTranslation()

  return (
    <section id="education" className="w-full lg:w-1/2 mt-24 md:mt-48">
      <h2>{t("experience:work.title")}</h2>
      <p className="text-xs xl:text-sm">{t("experience:work.intro")}</p>
      <GetAllJobs jobs={jobs} />
    </section>
  )
}