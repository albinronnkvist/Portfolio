import useTranslation from 'next-translate/useTranslation'
import Breadcrumbs from '../../components/sections/breadcrumbs'
import Education from '../../components/pages/experience/education/education'
import Technologies from '../../components/pages/experience/technologies/technologies'
import Work from '../../components/pages/experience/work/work'
import { db } from '../../firebase/initFirebase'
import { collection, getDocs, query, orderBy } from '@firebase/firestore'
import Meta from '../../components/other/meta'

export default function Experience({courses, technologies, categories, jobs}) {
  const { t } = useTranslation()

  const crumbs = [
    {
      title: "navigation:menu.experience",
      route: '/experience'
    }
  ]

  return (
    <>
      <Meta title="experience:title" description="experience:metaTags.description" keywords="experience:metaTags.keywords" url="/experience" />
      <section id="experience" className="w-full">
        <Breadcrumbs crumbs={crumbs} />
        <h1>{t("navigation:menu.experience")}</h1>
        <div className="w-full md:w-3/5 xl:w-1/2">
          <p>
            {t("experience:intro")}
          </p>
        </div>

        <Work jobs={jobs} />
        <Education courses={courses} />
        <Technologies technologies={technologies} categories={categories} />
      </section>
    </>
  )
}

export const getStaticProps = async () => {
  const q = query(collection(db, "courses"), orderBy("year", "desc"))
  const data = await getDocs(q)
  const courses = data.docs.map((doc) => ({...doc.data(), id: doc.id}))

  const q2 = query(collection(db, "technologies"), orderBy("title", "asc"))
  const data2 = await getDocs(q2)
  const technologies = data2.docs.map((doc) => ({...doc.data(), id: doc.id}))

  const q3 = query(collection(db, "technologiesCategories"), orderBy("title", "asc"))
  const data3 = await getDocs(q3)
  const categories = data3.docs.map((doc) => ({...doc.data(), id: doc.id}))

  const q4 = query(collection(db, "jobs"), orderBy("order", "asc"))
  const data4 = await getDocs(q4)
  const jobs = data4.docs.map((doc) => ({...doc.data(), id: doc.id}))

  return {
    props: {courses, technologies, categories, jobs}
  }
}