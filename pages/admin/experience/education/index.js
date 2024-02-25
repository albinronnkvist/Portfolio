import Breadcrumbs from '../../../../components/sections/breadcrumbs'
import useTranslation from 'next-translate/useTranslation'
import { AuthProvider } from '../../../../firebase/auth/auth'
import { db } from '../../../../firebase/initFirebase'
import { collection, getDocs, query, orderBy } from '@firebase/firestore'
import AdminGetAllCourses from '../../../../firebase/experience/education/adminGetAllCourses'
import AdminCreateCourse from '../../../../firebase/experience/education/adminCreateCourse'

export default function AdminEducation({ courses }) {
  const { t } = useTranslation()

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
    }
  ]

  return (
    <AuthProvider>
      <Breadcrumbs crumbs={crumbs} />
      <h1>{t("navigation:subSections.education")}</h1>
      <section>
        <h2>All courses</h2>
        <AdminGetAllCourses courses={courses} />
      </section>

      <section className="mt-12">
        <h2>Create course</h2>
        <AdminCreateCourse />
      </section>
    </AuthProvider>
  )
}

export const getStaticProps = async () => {
  const q = query(collection(db, "courses"), orderBy("year", "desc"))
  const data = await getDocs(q)
  const courses = data.docs.map((doc) => ({...doc.data(), id: doc.id}))

  return {
    props: {courses}
  }
}