import FadeInWhenVisibleCard from '../animations/fadeInWhenVisibleCard'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function ProjectCard({ projects }) {
  const { locale } = useRouter()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
      {projects.map((project, index) => (
        <FadeInWhenVisibleCard key={index}>
          <div className="flex flex-row gap-3 text-lg lg:text-xl xl:text-2xl absolute top-5 right-5 z-10">
            {project.repository && (
              <a href={project.repository} target="_blank" rel="noreferrer" className="w-full">
                <i className="bi bi-github"></i>
              </a>                        
            )}
            {project.website && (
              <a href={project.website} target="_blank" rel="noreferrer">
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
            )}
            {project.report && (
              <a href={project.report} target="_blank" rel="noreferrer">
                <i className="bi bi-file-earmark-pdf"></i>
              </a>
            )}
          </div>
          <Link href="/projects/[id]" as={`/projects/${project.id}`}>
            <button className="text-left flex flex-col w-full dark:bg-gray-light bg-white shadow-xl rounded h-full" tabIndex="0">
              <div className="flex flex-row justify-between px-5 pt-5">
                <div className="text-4xl xl:text-5xl text-primary-dark dark:text-primary-default">
                  <i className="bi bi-folder" />
                </div>
              </div>
              <div className="w-full h-full p-5">
                {locale === "sv" ? (
                  <>
                    <h3 className="text-base lg:text-lg xl:text-2xl">{project.title}</h3>
                    <div className="flex flex-row gap-2 mb-2">
                      <p className="text-xs xl:text-sm italic">{project.year}</p>
                    </div>
                    <p className="text-xs xl:text-base">{project.excerpt}</p>
                  </>
                ) : (
                  <>
                    <h4>{project.titleEn}</h4>
                    <div className="flex flex-row gap-2 mb-2">
                      <p className="text-xs xl:text-sm italic">{project.year}</p>
                    </div>
                    <p className="text-xs xl:text-base">{project.excerptEn}</p>
                  </>
                )}
              </div>
              {project.tags.length > 0 && (
                <div className="w-full mt-auto p-5 flex flex-row gap-2 flex-wrap">
                  {project.tags.map((tag, index) => (
                    <div key={index} className="text-xs xl:text-sm px-2 py-1 text-black-dark dark:text-white bg-gray-light3 dark:bg-gray-light2 rounded">
                      {tag}
                    </div>
                  ))}
                </div>
              )}
            </button>
          </Link>
        </FadeInWhenVisibleCard>
      ))}
    </div>
  )
}