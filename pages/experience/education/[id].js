import Meta from "../../../components/other/meta";
import Breadcrumbs from "../../../components/sections/breadcrumbs";
import useTranslation from "next-translate/useTranslation";
import { db } from "../../../firebase/initFirebase";
import { doc, getDoc, collection, getDocs } from '@firebase/firestore'
import GetSingleCourse from "../../../components/pages/experience/education/getSingleCourse";
import { useRouter } from "next/router";

export default function Course({course}) {
  const { t } = useTranslation()
  const { locale } = useRouter()

  const crumbs = [
    {
      title: "navigation:menu.experience",
      route: '/experience'
    },
    {
      title: "navigation:subSections.education",
      route: '/experience/#education'
    },
    {
      title: locale === "sv" ? course.title : course.titleEn,
      route: `/experience/education/${course.id}`
    }
  ]

  return (
    <>
      <Meta title={locale === "sv" ? course.title : course.titleEn} description={locale === "sv" ? course.excerpt : course.excerptEn} keywords={course.tags} url={`/experience/education/${course.id}`} />
      <section className="w-full">
        <Breadcrumbs crumbs={crumbs} />
        <GetSingleCourse course={course} />
      </section>
    </>
  )
}

export const getStaticPaths = async () => {
  const data = await getDocs(collection(db, "courses"))
  const courses = data.docs.map((doc) => ({...doc.data(), id: doc.id}))

  const pathsEn = courses.map(course => {
    return {
      params: { id: course.id.toString() }, locale: 'en-US'
    }
  })

  const pathsSv = courses.map(course => {
    return {
      params: { id: course.id.toString() }, locale: 'sv'
    }
  })

  return {
    paths: [...pathsEn, ...pathsSv],
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const data = await getDoc(doc(db, "courses", id))
  const course = data.data()

  return {
    props: {course}
  }
}