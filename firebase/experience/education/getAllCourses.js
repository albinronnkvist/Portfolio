import { useState, useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation'
import EducationCard from '../../../components/cards/educationCard'
import Loading from '../../../components/other/loading'
import { motion } from 'framer-motion'

export default function GetAllCourses({ courses }) {
  let { t } = useTranslation()

  const breakpoints = (width) => {
    if(width < 640) {
      return 'xs';
    } else if(width >= 640 && width < 768 ) {
      return 'sm';
    } else if(width >= 768 && width < 1024) {
      return 'md';
    } else if(width >= 1024) {
      return 'lg';
    }
  };
  
  const [breakpoint, setBreakpoint] = useState(() => breakpoints(typeof window !== 'undefined' && (window.innerWidth)));

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const calcInnerWidth = function() {
        setBreakpoint(breakpoints(window.innerWidth))
      }
      window.addEventListener('resize', calcInnerWidth)
      return () => window.removeEventListener('resize', calcInnerWidth)
    }
  }, [])

  const [courseAmount, setCourseAmount] = useState(breakpoint)

  useEffect(() => {
    if(breakpoint === "xs" || breakpoint === "sm") {
      setCourseAmount(3)
    } else if (breakpoint === "md") {
      setCourseAmount(4)
    } else if(breakpoint === "lg") {
      setCourseAmount(6)
    }
  }, [breakpoint])

  const onSeeMore = () => {
    if(courseAmount >= courses.length) {
      if(breakpoint === "xs") {
        setCourseAmount(3)
      } else if (breakpoint === "md") {
        setCourseAmount(4)
      } else if(breakpoint === "lg") {
        setCourseAmount(6)
      }
    } else {
      if(breakpoint === "xs" || breakpoint === "sm") {
        setCourseAmount(courseAmount + 3)
      } else if (breakpoint === "md") {
        setCourseAmount(courseAmount + 2)
      } else if(breakpoint === "lg") {
        setCourseAmount(courseAmount + 3)
      }
    }
  }

  return (
    <>
      {courses.length > 0 ? (
          <>
            <EducationCard courses={courses.slice(0, courseAmount)} />

            <div className="flex flex-row justify-center items-center">
              <motion.button 
                whileHover={{
                  boxShadow: "0px 0px 12px rgb(52, 211, 153)"
                }}
                whileFocus={{ scale: 1.1, boxShadow: "0px 0px 12px rgb(52, 211, 153)" }} 
                onClick={onSeeMore} 
                className="readMore"
              >
                {courseAmount >= courses.length ? (
                    <>
                      {t("common:showLess")}
                    </>
                  ) : (
                    <>
                      {t("common:showMore")}
                    </>
                  )
                }
              </motion.button>
            </div>
          </>
        ) : (
          <Loading />
        )
      }
    </>
  )
}