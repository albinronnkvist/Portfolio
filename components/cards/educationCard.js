import FadeInWhenVisibleCard from '../animations/fadeInWhenVisibleCard'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function EducationCard({ courses }) {
  const { locale } = useRouter()

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
        {courses.map((course, index) => (
          <FadeInWhenVisibleCard key={index}>
            <div className="flex flex-row gap-3 text-lg lg:text-xl xl:text-2xl absolute top-5 right-5">
              {course.repository && (
                <div>
                  <a href={course.repository} target="_blank" rel="noreferrer" className="z-10" aria-label="github">
                    <i className="bi bi-github" />
                  </a>                        
                </div>
              )}
              {course.website && (
              <div>          
                <a href={course.website} target="_blank" rel="noreferrer" aria-label="website">
                  <i className="bi bi-box-arrow-up-right" />
                </a>
              </div>
              )}
              {course.report && (
                <div>
                  <a href={course.report} target="_blank" rel="noreferrer" aria-label="report">
                    <i className="bi bi-file-earmark-pdf" />
                  </a>
                </div>
              )}
            </div>
            <Link href="/experience/education/[id]" as={`/experience/education/${course.id}`} scroll={false}>
              <button className="text-left flex flex-col w-full dark:bg-gray-light bg-white shadow-xl rounded h-full z-5" tabIndex="0">
                <div className="flex flex-row justify-between px-5 pt-5">
                  <div className="text-4xl xl:text-5xl text-primary-dark dark:text-primary-default">
                    {course.complete ? (
                      <i className="bi bi-mortarboard" />
                    ) : (
                      <i className="bi bi-book" />
                    )}
                  </div>
                </div>
                <div className="w-full h-full p-5">
                  {locale === "sv" ? (
                    <>
                      <h3 className="text-base lg:text-lg xl:text-2xl">{course.title}</h3>
                      <div className="flex flex-row gap-2 mb-2">
                        <p className="text-xs xl:text-sm italic">{course.year}</p>
                        {!course.complete && (
                          <p className="text-yellow-500 dark:text-yellow-300 text-xxs xl:text-xs italic animate-pulse">
                            Pågår
                          </p>
                        )}
                      </div>
                      <p className="text-xs xl:text-base">{course.excerpt}</p>
                    </>
                  ) : (
                    <>
                      <h4>{course.titleEn}</h4>
                      <div className="flex flex-row gap-2 mb-2">
                        <p className="text-xs xl:text-sm italic">{course.year}</p>
                        {!course.complete && (
                          <p className="text-yellow-500 dark:text-yellow-300 text-xxs xl:text-xs italic animate-pulse">
                            Ongoing
                          </p>
                        )}
                      </div>
                      <p className="text-xs xl:text-base">{course.excerptEn}</p>
                    </>
                  )}
                </div>
                {course.tags.length > 0 && (
                  <div className="w-full mt-auto p-5 flex flex-row gap-2 flex-wrap">
                    {course.tags.map((tag, index) => (
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
    </>
  )
}