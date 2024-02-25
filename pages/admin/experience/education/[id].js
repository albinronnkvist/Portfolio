import Breadcrumbs from "../../../../components/sections/breadcrumbs";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { AuthProvider } from "../../../../firebase/auth/auth";
import { db } from "../../../../firebase/initFirebase";
import { doc, getDoc, collection, getDocs } from '@firebase/firestore'
import AdminDeleteCourse from "../../../../firebase/experience/education/adminDeleteCourse";
import AdminEditCourse from '../../../../firebase/experience/education/adminEditCourse'

export default function AdminSingleCourse({ course }) {
  const { t } = useTranslation()
  const { locale } = useRouter()

  const crumbs = [
    {
      title: 'Admin',
      route: '/admin'
    },
    {
      title: "navigation:menu.experience",
      route: '/admin#experience'
    },
    {
      title: "navigation:subSections.education",
      route: '/admin/experience/education'
    },
    {
      title: locale === "sv" ? course.title : course.titleEn,
      route: `/admin/experience/education/${course.id}`
    }
  ]

  return (
    <AuthProvider>
      <Breadcrumbs crumbs={crumbs} />
      <h1>{course.name}</h1>
      
      <section className="mb-8">
        <h2>Delet</h2>
        <AdminDeleteCourse />
      </section>
      
      <section>
        <h2>Edit</h2>
        <AdminEditCourse course={course} />
      </section>
    </AuthProvider>
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