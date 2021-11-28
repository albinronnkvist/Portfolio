import { useState } from "react"
import { setDoc, doc, collection } from '@firebase/firestore'
import { db } from "../../../initFirebase"
import LoadingButton from "../../../../components/other/loadingButton"

export default function AdminCreateTechnologyCategory() {
  const [loading, setLoading] = useState(false)

  const [title, setTitle] = useState("")
  const [titleEn, setTitleEn] = useState("")
  const [icon, setIcon] = useState("")

  const clearState = () => {
    setTitle(""),
    setTitleEn(""),
    setIcon("")
  }

  const clearForm = () => {
    document.getElementById("createCategoryForm").reset();
  }

  const createCategory = async (e) => {
    e.preventDefault();
    setLoading(true)

    const object = { 
      title: title,
      titleEn: titleEn,
      icon: icon
    }
    
    try {
      await setDoc(doc(collection(db, "technologiesCategories")), object);
      setLoading(false)
      alert("Teknologi-kategori skapad!")
      clearState()
      clearForm()
    } catch(error) {
      setLoading(false)
      alert(error)
    }
  }

  return (
    <>
      <form 
        id="createCategoryForm"
        onSubmit={createCategory} 
        className="rounded w-full p-4 dark:bg-gray-light2 bg-white shadow-xl flex flex-col gap-4"
      >
          <div>
            <div className="flex flex-row gap-4 w-full">
              <div className="w-1/2">
                <label>Titel</label>
                <br/>
                <input 
                  type="text" 
                  name="title"
                  onChange={(event) => {
                    setTitle(event.target.value)
                  }} 
                  className="formInput"
                  required
                />
              </div>
              <div className="w-1/2">
                <label>Titel (Engelska)</label>
                <br/>
                <input 
                  type="text" 
                  name="titleEn"
                  onChange={(event) => {
                    setTitleEn(event.target.value)
                  }} 
                  className="formInput"
                  required
                />
              </div>
            </div>
          </div>

        <div>
          <label>Ikon</label>
          <br/>
          <input 
            type="text" 
            onChange={(event) => {
              setIcon(event.target.value)
            }} 
            className="formInput"
          />
        </div>

        <div className="w-full">
          <button disabled={loading} type="submit" className="submit">
            {!loading ? ( 
              <>Skapa</>
            ) : (
              <LoadingButton />
            )}
          </button>
        </div>
      </form>
    </>
  )
}