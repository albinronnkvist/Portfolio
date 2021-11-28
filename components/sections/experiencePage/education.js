import useTranslation from 'next-translate/useTranslation'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import useInView from 'react-cool-inview'
import Loading from '../../other/loading'

const GetAllCourses = dynamic(() => import('../../../firebase/experience/education/getAllCourses'))

export default function Education({courses}) {
  const { t } = useTranslation()

  const { observe, inView } = useInView({
    onEnter: ({unobserve}) => unobserve()
  })
  
  let [credits, setCredits] = useState()
  useEffect(() => {
    let total = 0.0

    courses.map(course => {
      if(course.complete) {
        total += Number(parseFloat(course.points).toFixed(1))
      }
    });
    
    setCredits(parseFloat(total))
  }, [])

  return (
    <section id="education" className="w-full mt-12 pt-4">
      <h2>{t("experience:education.title")}</h2>
      <p className="text-xs xl:text-sm">{t("experience:education.credits")}: <b>{credits}</b></p>
      <div ref={observe}>
        {inView ? (
          <GetAllCourses courses={courses} />
        ) : (
          <Loading />
        )}
      </div>
    </section>
  )
}