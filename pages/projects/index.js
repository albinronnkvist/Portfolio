import useTranslation from 'next-translate/useTranslation'
import Breadcrumbs from '../../components/sections/breadcrumbs'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import useInView from 'react-cool-inview'
import { db } from '../../firebase/initFirebase'
import { collection, getDocs, query, orderBy } from '@firebase/firestore'
import Meta from '../../components/other/meta'
import Loading from '../../components/other/loading'

const GetAllFeaturedProjects = dynamic(() => import('../../firebase/projects/getAllFeaturedProjects'))
const GetAllOtherProjects = dynamic(() => import('../../firebase/projects/getAllOtherProjects'))

export default function Projects({projects}) {
  const { t } = useTranslation()

  const { observe, inView } = useInView({
    onEnter: ({unobserve}) => unobserve()
  })

  const crumbs = [
    {
      title: "navigation:menu.projects",
      route: '/#projects'
    }
  ]

  const [allOtherProjects, setAllOtherProjects] = useState([])
  const [allFeaturedProjects, setAllFeaturedProjects] = useState([])
  
  useEffect(() => {
    projects.map(project => {
      if(project.featured == true) {
        setAllFeaturedProjects(allFeaturedProjects => [...allFeaturedProjects, project])
      } else {
        setAllOtherProjects(allOtherProjects => [...allOtherProjects, project])
      }
    }) 
  }, [])

  return (
    <>
      <Meta title="projects:title" description="projects:metaTags.description" keywords="projects:metaTags.keywords" url="/projects" />
      <section id="projects" className="w-full">
        <Breadcrumbs crumbs={crumbs} />
        <h1>{t("navigation:menu.projects")}</h1>
        <div ref={observe}>
          {inView ? (
            <GetAllFeaturedProjects projects={allFeaturedProjects} />
          ) : (
            <Loading />
          )}
        </div>
        <h2 className="mt-12 md:mt-48">{t("projects:other.title")}</h2>
          <div className="w-full md:w-3/5 xl:w-1/2 mb-4">
            <p>
              {t("projects:other.intro")}
            </p>
          </div>
        <div ref={observe}>
          {inView ? (
            <GetAllOtherProjects projects={allOtherProjects} />
          ) : (
            <Loading />
          )}
        </div>
      </section>
    </>
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