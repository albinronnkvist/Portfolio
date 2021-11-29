import useTranslation from 'next-translate/useTranslation'
import Loading from "../../../other/loading";
import { useRouter } from 'next/router';

export default function GetSingleCourse({course}) {
  let { t } = useTranslation()
  const { locale } = useRouter()

  return (
    <>
      {course ? (
          <div className="flex flex-col">
            <h1 className="lg:w-2/3 mb-0">
              {locale === "sv" ? (
                course.title
              ) : (
                course.titleEn
              )}
            </h1>
            {course.tags.length > 0 && (
              <div className="w-full flex flex-row gap-2 flex-wrap">
                {course.tags.map((tag, index) => (
                  <div key={index} className="text-xs xl:text-sm pr-4 py-1 text-black-dark dark:text-white rounded">
                    {tag}
                  </div>
                ))}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 lg:mt-12">
              <div className="flex flex-col w-full h-full">
                <p>
                  {locale === "sv" ? (
                    course.text
                  ) : (
                    course.textEn
                  )}
                </p>
                <ul className="dark:text-white mb-4 mt-2 list-disc ml-5">
                  <li>{t("experience:education.points")}: {course.points}</li>
                  <li>{t("experience:education.level")}: {course.level}</li>
                  <li>{t("experience:education.complete")}: {course.year}</li>
                </ul>
                <a 
                  href={course.courseplan} 
                  target="_blank"
                  className="text-base sm:text-sm md:text-sm xl:text-base 2xl:text-lg"
                >
                  {t("experience:education.seeCourseplan")} <i className="bi bi-box-arrow-up-right" aria-label="Link" />
                </a>
                <div>
                  <h2 className="mt-12 mb-2">
                    {t("experience:education.project")}
                  </h2>
                  <div className="flex flex-row gap-6 text-3xl lg:text-xl xl:text-2xl">
                    {course.repository && ( 
                      <a 
                        href={course.repository} 
                        target="_blank"
                        rel="noreferrer"
                      >
                          <i className="bi bi-github" aria-label="Github" />
                      </a> 
                    )}
                    {course.website && (
                      <a 
                        href={course.website} 
                        target="_blank"
                        rel="noreferrer"
                      >
                          <i className="bi bi-box-arrow-up-right" aria-label="Link" />
                      </a> 
                    )}
                    {course.report && (
                      <a 
                        href={course.report} 
                        target="_blank"
                        rel="noreferrer"
                      >
                          <i className="bi bi-file-earmark-pdf" aria-label="File" /> 
                      </a> 
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Loading />
        )}  
    </>
  )
}