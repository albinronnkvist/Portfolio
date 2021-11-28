import useTranslation from 'next-translate/useTranslation'
import Loading from '../../components/other/loading'
import ProjectCardFeatured from '../../components/cards/projectCardFeatured'

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