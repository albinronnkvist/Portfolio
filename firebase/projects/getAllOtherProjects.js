import { useState, useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Loading from '../../components/other/loading'
import ProjectCard from '../../components/cards/projectCard'
import { motion } from 'framer-motion'

export default function GetAllOtherProjects({ projects }) {
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
  }
  
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

  const [projectAmount, setProjectAmount] = useState(breakpoint)

  useEffect(() => {
    if(breakpoint === "xs" || breakpoint === "sm") {
      setProjectAmount(3)
    } else if (breakpoint === "md") {
      setProjectAmount(4)
    } else if(breakpoint === "lg") {
      setProjectAmount(6)
    }
  }, [breakpoint])

  const onSeeMore = () => {
    if(projectAmount >= projects.length) {
      if(breakpoint === "xs") {
        setProjectAmount(3)
      } else if (breakpoint === "md") {
        setProjectAmount(4)
      } else if(breakpoint === "lg") {
        setProjectAmount(6)
      }
    } else {
      if(breakpoint === "xs" || breakpoint === "sm") {
        setProjectAmount(projectAmount + 3)
      } else if (breakpoint === "md") {
        setProjectAmount(projectAmount + 2)
      } else if(breakpoint === "lg") {
        setProjectAmount(projectAmount + 3)
      }
    }
  }

  return (
    <>
      {projects.length > 0 ? (
          <>
            <ProjectCard projects={projects.slice(0, projectAmount)} />

            <div className="flex flex-row justify-center items-center">
              <motion.button 
                whileHover={{
                  boxShadow: "0px 0px 12px rgb(52, 211, 153)"
                }}
                whileFocus={{ scale: 1.1, boxShadow: "0px 0px 12px rgb(52, 211, 153)" }} 
                onClick={onSeeMore} 
                className="readMore"
              >
                {projectAmount >= projects.length ? (
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