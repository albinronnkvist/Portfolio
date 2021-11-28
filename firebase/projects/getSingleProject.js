import FadeInWhenVisibleCardNoHover from '../../components/animations/fadeInWhenVisibleCardNoHover'
import { useRouter } from 'next/router'
import StarterSubImage from '../../components/animations/starterSubImage'
import useTranslation from 'next-translate/useTranslation'

export default function GetSingleProject({ project }) {
  let { t } = useTranslation()
  const { locale } = useRouter()

  return (
    <div className="flex flex-row gap-8 mb-16 md:mb-32">
      <FadeInWhenVisibleCardNoHover>
        <div className={`grid grid-cols-1 md:grid-cols-2 w-full h-full rounded relative gap-4 md:gap-12`}>
          <div className={`flex flex-col row-start-2 md:row-start-1 md:col-start-1`}>
            <div className="w-full">
              <h1 className="mb-0">{locale === "sv" ? project.title : project.titleEn}</h1>
              <p className="font-bold">{project.year}</p>
              <p className="text-xs xl:text-base">{locale === "sv" ? project.text : project.textEn}</p>
            </div>
            {project.tags.length > 0 && (
              <div className="w-full pt-5 flex flex-row gap-2 flex-wrap">
                {project.tags.map((tag, index) => (
                  <div key={index} className="text-xs xl:text-sm px-2 py-1 text-black-dark dark:text-white bg-gray-light3 dark:bg-gray-light2 rounded">
                    {tag}
                  </div>
                ))}
              </div>
            )}
            <div className="flex flex-row gap-6 text-lg lg:text-xl xl:text-2xl pt-5">
              {project.repository && (
                <div>
                  <a href={project.repository} target="_blank" rel="noreferrer">
                    <i className="bi bi-github" />
                  </a>                        
                </div>
              )}
              {project.website && (
                <div>          
                <a href={project.website} target="_blank" rel="noreferrer">
                  <i className="bi bi-box-arrow-up-right" />
                </a>
              </div>
              )}
              {project.report && (
                <div>
                  <a href={project.report} target="_blank" rel="noreferrer">
                    <i className="bi bi-file-earmark-pdf" />
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className={`row-start-1 md:col-start-2 mt-12 md:mt-6`}>
            <StarterSubImage>
              <img
                src={project.imageUrl}
                alt="Screenshot of a website"
                className="rounded shadow-xl w-auto"
              />
            </StarterSubImage>
          </div>
        </div>
      </FadeInWhenVisibleCardNoHover>
    </div>
  )
}