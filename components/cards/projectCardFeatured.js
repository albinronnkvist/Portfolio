import FadeInWhenVisibleCardNoHover from '../animations/fadeInWhenVisibleCardNoHover'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import StarterSubImage from '../animations/starterSubImage'
import useTranslation from 'next-translate/useTranslation'

export default function ProjectCardFeatured({ projects }) {
  let { t } = useTranslation()
  const { locale } = useRouter()

  const [allProjects, setAllProjects] = useState(projects)

  useEffect(() => {
    setAllProjects(projects)
  }, [locale])

  useEffect(() => {
    setAllProjects(projects)
  }, [projects])

  return (
    <>
        {allProjects.map((project, index) => (
          <div className="flex flex-row gap-8 mb-32 md:mb-32 mt-12" key={index}>
            <FadeInWhenVisibleCardNoHover key={index}>
              <div className={`grid grid-cols-1 md:grid-cols-2 w-full h-full rounded relative gap-4 md:gap-12`}>
                <div className={`flex flex-col row-start-2 md:row-start-1 ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}>
                  <div className="w-full">
                    <p className="text-primary-dark dark:text-primary-default text-xs xl:text-sm italic animate-pulse">
                      {locale === "sv" ? 'Utvalt projekt' : 'Featured project'}
                    </p>
                    <h2 className="xl:text-3xl">{locale === "sv" ? project.title : project.titleEn}</h2>
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
                  <div className="flex flex-row gap-6 text-3xl lg:text-xl xl:text-2xl pt-5">
                    {project.repository && (
                      <div>
                        <a href={project.repository} target="_blank" rel="noreferrer" aria-label="github">
                          <i className="bi bi-github" />
                        </a>                        
                      </div>
                    )}
                    {project.website && (
                      <div>          
                      <a href={project.website} target="_blank" rel="noreferrer" aria-label="website">
                        <i className="bi bi-box-arrow-up-right" />
                      </a>
                    </div>
                    )}
                    {project.report && (
                      <div>
                        <a href={project.report} target="_blank" rel="noreferrer" aria-label="report">
                          <i className="bi bi-file-earmark-pdf" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
                <div className={`row-start-1 ${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'}`}>
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
        ))}
    </>
  )
}