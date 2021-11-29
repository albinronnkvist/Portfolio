import useTranslation from 'next-translate/useTranslation'
import Loading from '../../other/loading'
import ProjectCardFeatured from './projectCardFeatured'

export default function GetAllFeaturedProjects({ projects }) {
  let { t } = useTranslation()

  return (
    <>
      {projects.length > 0 ? (
          <>
            <ProjectCardFeatured projects={projects} />
          </>
        ) : (
          <Loading />
        )
      }
    </>
  )
}