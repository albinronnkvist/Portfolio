import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import FadeInWhenVisibleCardNoHover from '../../../animations/fadeInWhenVisibleCardNoHover'
import { useRouter } from 'next/router'
import React from "react"

export default function GetAllTechnologies({jobs}) {
  const { locale } = useRouter()
  const [allJobs, setAllJobs] = useState(jobs)

  useEffect(() => {
    setAllJobs(jobs)
  }, [locale])

  useEffect(() => {
    setAllJobs(jobs)
  }, [jobs])

  const [currentJob, setCurrentJob] = useState("")

  const changeJob = (title) => {
    if(currentJob !== title) {
      setCurrentJob(title)
    } else {
      setCurrentJob("")
    }
  }

  return (
    <FadeInWhenVisibleCardNoHover>
      <div className="rounded flex flex-col shadow-xl dark:bg-gray-light w-full xl:w-5/6 mt-2">
        {jobs.map(job => (
          <React.Fragment key={job.title}>
            <button 
              onClick={() => {changeJob(job.title)}}
              className={`${job.title === currentJob ? 'dark:bg-gray-light dark:text-white text-black-dark' : 'dark:text-primary-default text-primary-dark'} dark:hover:bg-primary-default dark:hover:text-black-dark hover:bg-primary-dark hover:text-white px-5 py-3 text-left transition-colors duration-200`}
            >
              <div className="flex flex-row justify-between text-xs sm:text-sm md:text-sm xl:text-base 2xl:text-lg">
                <div>
                  {locale === "sv" ? job.title : job.titleEn}
                </div>
                <div>
                  <i className="bi bi-chevron-down"></i>
                </div>
              </div>
            </button>
            {job.title === currentJob && (
              <div
                className="dark:bg-gray-light text-black-dark dark:text-white pb-4 px-5 pt-2"
              >
                {allJobs.map(job => (
                  job.title === currentJob && (
                    <div key={job.title}>
                      {job.title === currentJob && (
                        <motion.div 
                          initial="hidden" 
                          animate="visible"
                          variants={{
                            hidden: {
                              height: 0,
                              opacity: 0
                            },
                            visible: {
                              opacity: 1,
                              height: 'auto',
                              transition: {
                                duration: .3
                              }
                            }
                          }} 
                          className="flex flex-col mb-4 ml-5 transition-colors duration-300 text-xs sm:text-sm md:text-sm xl:text-base 2xl:text-lg"
                        >
                          <div className="mb-2">
                            <h3>{locale === "sv" ? job.title : job.titleEn}</h3>
                          </div>
                          {job.companyWebsite && (
                            <div>
                              <i className="bi bi-building" />&nbsp;
                              <a href={job.companyWebsite} target="_blank" rel="noreferrer" aria-label="website">
                                {job.company} <i className="bi bi-box-arrow-up-right" />
                              </a>
                            </div>   
                          )}
                          <div className="mt-2">
                            <i className="bi bi-clock" />&nbsp; 
                            {locale === "sv" ? job.date : job.dateEn}
                          </div>  

                          <img
                            src={job.image}
                            alt="Screenshot of a website"
                            className="rounded shadow-xl w-auto mt-8"
                          />

                          <div className="mt-4 mb-8">
                            {locale === "sv" ? job.text : job.textEn}
                          </div> 

                          <hr/>  
                          
                          {job.referenceText && (
                              <div className="mt-4 italic">
                                "{locale === "sv" ? job.referenceText : job.referenceTextEn}"
                              </div>    
                            )
                          }

                          {job.referenceName && (
                            <div className="mt-4">
                              <i class="bi bi-person-circle"></i>&nbsp;
                              {job.referenceName}
                            </div>  
                          )}

                          {job.referenceEmail && (
                            <div className="mt-2">
                              <i className="bi bi-envelope"></i>&nbsp;
                              <a href={`mailto:${job.referenceEmail}`} target="_blank" rel="noreferrer" aria-label="Email">{job.referenceEmail}</a>
                            </div>
                          )}            
                        </motion.div>
                      )}
                    </div>
                  )
                ))}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </FadeInWhenVisibleCardNoHover>
  )
}