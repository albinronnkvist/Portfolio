import Breadcrumbs from "../../../components/sections/breadcrumbs";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { AuthProvider } from "../../../firebase/auth/auth";
import { db } from "../../../firebase/initFirebase";
import { doc, getDoc, collection, getDocs } from '@firebase/firestore'
import AdminDeleteProject from "../../../firebase/projects/adminDeleteProject";
import AdminEditProject from '../../../firebase/projects/adminEditProject'

export default function AdminSingleProject({ project }) {
  const { t } = useTranslation()
  const { locale } = useRouter()

  const crumbs = [
    {
      title: 'Admin',
      route: '/admin'
    },
    {
      title: "navigation:menu.projects",
      route: '/admin/projects'
    },
    {
      title: locale === "sv" ? project.title : project.titleEn,
      route: `/admin/projects/${project.id}`
    }
  ]

  return (
    <AuthProvider>
      <Breadcrumbs crumbs={crumbs} />
      <h1>{project.name}</h1>
      
      <section className="mb-8">
        <h2>Delete</h2>
        <AdminDeleteProject project={project} />
      </section>
      
      <section>
        <h2>Edit</h2>
        <AdminEditProject project={project} />
      </section>
    </AuthProvider>
  )
}

export const getStaticPaths = async () => {
  const data = await getDocs(collection(db, "projects"))
  const projects = data.docs.map((doc) => ({...doc.data(), id: doc.id}))

  const pathsEn = projects.map(project => {
    return {
      params: { id: project.id.toString() }, locale: 'en-US'
    }
  })

  const pathsSv = projects.map(project => {
    return {
      params: { id: project.id.toString() }, locale: 'sv'
    }
  })

  return {
    paths: [...pathsEn, ...pathsSv],
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const data = await getDoc(doc(db, "projects", id))
  const project = data.data()

  return {
    props: {project}
  }
}