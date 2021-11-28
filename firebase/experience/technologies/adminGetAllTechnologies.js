import Link from 'next/link'
import Loading from '../../../components/other/loading'
import { useState, useEffect } from 'react'

export default function AdminGetAllTechnologies({technologies, categories}) {

  const [techWithCat, setTechWithCat] = useState([])
  const [techOther, setTechOther] = useState([])

  useEffect(() => {
    setTechOther([])
    setTechWithCat([])

    categories.map(cat => {
      technologies.map(tech => {
        if((cat.title === tech.category) && (tech.category !== "Övrigt")) {
          setTechWithCat(techWithCat => [...techWithCat, tech])
        }
      })
    })
    
    technologies.map(tech => {
      if((tech.category === "") || (tech.category === "Övrigt")) {
        setTechOther(techOther => [...techOther, tech])
      } 
    })
  }, [])


  return (
    <>
      <div className="rounded w-full p-4 dark:bg-gray-light2 bg-white shadow-xl">
        <div className="dark:text-white text-black-dark flex flex-col gap-12 md:gap-4">
          {categories.map(category => (
            <div key={category.title}>
              <h4>
                {category.title !== "Övrigt" && (
                  category.title
                )}
              </h4>
              {techWithCat.map(technology => (
                <div key={technology.title}>
                  {technology.category === category.title && (
                    <div
                      className="flex flex-row gap-4"
                    >
                      <Link href="/admin/experience/technologies/[id]" as={`/admin/experience/technologies/${technology.id}`}>
                        <a>
                          <i class="bi bi-pencil-square cursor-pointer text-primary-default hover:opacity-75 transition-opacity duration-300"></i>
                        </a>
                      </Link>
                      {technology.title}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
          <h4>
            Övrigt
          </h4>
          {techOther.map(technology => (
            <div
              className="flex flex-row gap-4"
              key={technology.title}
            >
              <Link href="/admin/experience/technologies/[id]" as={`/admin/experience/technologies/${technology.id}`}>
                <a>
                  <i class="bi bi-pencil-square cursor-pointer text-primary-default hover:opacity-75 transition-opacity duration-300"></i>
                </a>
              </Link>
              {technology.title}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}