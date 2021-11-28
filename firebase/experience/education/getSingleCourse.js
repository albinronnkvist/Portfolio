import useTranslation from 'next-translate/useTranslation'
import Loading from "../../../components/other/loading";
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
                  <li>
                    <div className="flex flex-row gap-4">   
                      Projekt: 
                      {course.repository && ( 
                        <a 
                          href={course.repository} 
                          target="_blank"
                          rel="noreferrer"
                        >
                            <i className="bi bi-github"></i>
                        </a> 
                      )}
                      {course.website && (
                        <a 
                          href={course.website} 
                          target="_blank"
                          rel="noreferrer"
                        >
                            <i className="bi bi-box-arrow-up-right"></i>
                        </a> 
                      )}
                      {course.report && (
                        <a 
                          href={course.report} 
                          target="_blank"
                          rel="noreferrer"
                        >
                            <i className="bi bi-file-earmark-pdf"></i> 
                        </a> 
                      )}
                    </div>
                  </li>
                </ul>
                <a 
                  href={course.courseplan} 
                  target="_blank"
                  className="text-xs sm:text-sm md:text-sm xl:text-base 2xl:text-lg mt-4"
                >
                  {t("experience:education.seeCourseplan")} <i class="bi bi-box-arrow-up-right"></i>
                </a>
              </div>
            </div>

          </div>
        ) : (
          <Loading />
        )}  
    </>
  )
}