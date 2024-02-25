import Breadcrumbs from '../../../components/sections/breadcrumbs'
import useTranslation from 'next-translate/useTranslation'
import { AuthProvider } from '../../../firebase/auth/auth'
import { db } from '../../../firebase/initFirebase'
import { collection, getDocs, query, orderBy } from '@firebase/firestore'
import AdminCreateProject from '../../../firebase/projects/adminCreateProject'
import AdminGetAllProjects from '../../../firebase/projects/adminGetAllProjects'

export default function AdminProjects({ projects }) {
  const { t } = useTranslation()

  const crumbs = [
    {
      title: 'Admin',
      route: '/admin'
    },
    {
      title: "navigation:menu.projects",
      route: '/admin#projects'
    }
  ]

  return (
    <AuthProvider>
      <Breadcrumbs crumbs={crumbs} />
      <h1>{t("navigation:menu.projects")}</h1>
      <section>
        <h2>All projects</h2>
        <AdminGetAllProjects projects={projects} />
      </section>

      <section className="mt-12">
        <h2>Create project</h2>
        <AdminCreateProject />
      </section>
    </AuthProvider>
  )
}

export const getStaticProps = async () => {
  const q = query(collection(db, "projects"), orderBy("year", "desc"))
  const data = await getDocs(q)
  const projects = data.docs.map((doc) => ({...doc.data(), id: doc.id}))

  return {
    props: {projects}
  }
}