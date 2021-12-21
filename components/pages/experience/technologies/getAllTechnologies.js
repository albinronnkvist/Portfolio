import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import FadeInWhenVisibleCardNoHover from '../../../animations/fadeInWhenVisibleCardNoHover'
import { useRouter } from 'next/router'
import React from "react"

export default function GetAllTechnologies({technologies, categories}) {
  const { locale } = useRouter()
  const [allTechnologies, setAllTechnologies] = useState(technologies)
  const [allCategories, setAllCategories] = useState(categories)

  useEffect(() => {
    setAllTechnologies(technologies)
  }, [locale])

  useEffect(() => {
    setAllTechnologies(technologies)
  }, [technologies])

  useEffect(() => {
    setAllCategories(categories)
  }, [locale])

  useEffect(() => {
    setAllCategories(categories)
  }, [categories])

  const [currentCategory, setCurrentCategory] = useState("")

  const changeCategory = (title) => {
    if(currentCategory !== title) {
      setCurrentCategory(title)
    } else {
      setCurrentCategory("")
    }
  }

  return (
    <FadeInWhenVisibleCardNoHover>
      <div className="rounded flex flex-col shadow-xl dark:bg-gray-light w-full xl:w-5/6 mt-2">
        {allCategories.map(category => (
          <React.Fragment key={category.title}>
            <button 
              onClick={() => {changeCategory(category.title)}}
              className={`${category.title === currentCategory ? 'dark:bg-gray-light dark:text-white bg-gray-light3 text-black-dark' : 'dark:text-primary-default text-primary-dark'} dark:hover:bg-primary-default dark:hover:text-black-dark hover:bg-primary-dark hover:text-white px-5 py-3 text-left transition-colors duration-200`}
            >
              <div className="flex flex-row justify-between text-xs sm:text-sm md:text-sm xl:text-base 2xl:text-lg">
                <div>
                  <i className={category.icon}></i> {locale === "sv" ? category.title : category.titleEn}
                </div>
                <div>
                  <i className="bi bi-chevron-down"></i>
                </div>
              </div>
            </button>
            {category.title === currentCategory && (
              <div
                className="dark:bg-gray-light bg-gray-light3 text-black-dark dark:text-white pb-4 px-5 pt-2"
              >
                {allTechnologies.map(technology => (
                  technology.category === currentCategory && (
                    <div key={technology.title}>
                      {technology.category === currentCategory && (
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
                          <div>
                            {technology.title}
                          </div>                       
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