import Meta from "../../components/other/meta";
import Breadcrumbs from "../../components/sections/breadcrumbs";
import useTranslation from "next-translate/useTranslation";
import { db } from "../../firebase/initFirebase";
import { doc, getDoc, collection, getDocs } from '@firebase/firestore'
import GetSingleProject from "../../firebase/projects/getSingleProject";
import { useRouter } from "next/router";

export default function Project({project}) {
  const { t } = useTranslation()
  const { locale } = useRouter()

  const crumbs = [
    {
      title: "navigation:menu.projects",
      route: '/projects'
    },
    {
      title: locale === "sv" ? project.title : project.titleEn,
      route: `/projects/${project.id}`
    }
  ]

  return (
    <>
      <Meta title={locale === "sv" ? project.title : project.titleEn} description={locale === "sv" ? project.excerpt : project.excertpEn} keywords={project.tags} url={`/projects/${project.id}`} image={project.imageUrl} />
      <section className="w-full">
        <Breadcrumbs crumbs={crumbs} />
        <GetSingleProject project={project} />
      </section>
    </>
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