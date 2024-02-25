import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { db } from "../../../initFirebase"
import { doc, updateDoc } from '@firebase/firestore'
import LoadingButton from "../../../../components/other/loadingButton"

export default function AdminEditTechnologyCategory({category}) {
  const router = useRouter()
  const { id } = router.query;
  const [loading, setLoading] = useState(false)

  const [title, setTitle] = useState("")
  const [titleEn, setTitleEn] = useState("")
  const [icon, setIcon] = useState("")

  useEffect(async () => { 
    setTitle(category.title),
    setTitleEn(category.titleEn),
    setIcon(category.icon)
  }, [router])

  const updateCategory = async (e) => {
    e.preventDefault()
    setLoading(true)

    const newData = { 
      title: title,
      titleEn: titleEn,
      icon: icon
    }
    
    try {
      await updateDoc(doc(db, "technologiesCategories", id), newData)
      
      setLoading(false)
      alert("Technology category was updated")
    } catch(error) {
      setLoading(false)
      alert(error)
    }
  }

  return (
    <>
      <form 
        id="updateCourseForm"
        onSubmit={updateCategory} 
        className="rounded w-full p-4 dark:bg-gray-light bg-white shadow-xl flex flex-col gap-4"
      >
          <div>
            <div className="flex flex-row gap-4 w-full">
              <div className="w-1/2">
                <label>Title</label>
                <br/>
                <input 
                  type="text" 
                  name="title"
                  onChange={(event) => {
                    setTitle(event.target.value)
                  }} 
                  className="formInput"
                  value={title}
                  required
                />
              </div>
              <div className="w-1/2">
                <label>Title (Engelska)</label>
                <br/>
                <input 
                  type="text" 
                  name="titleEn"
                  onChange={(event) => {
                    setTitleEn(event.target.value)
                  }} 
                  className="formInput"
                  value={titleEn}
                  required
                />
              </div>
            </div>
          </div>

        <div>
          <label>Icon</label>
          <br/>
          <input 
            type="text" 
            value={icon}
            onChange={(event) => {
              setIcon(event.target.value)
            }} 
            className="formInput"
          />
        </div>

        <div className="w-full">
          <button type="submit" className="submit">
          {!loading ? ( 
            <>Update</>
          ) : (
            <LoadingButton />
          )}
          </button>
        </div>
      </form>
    </>
  )
}