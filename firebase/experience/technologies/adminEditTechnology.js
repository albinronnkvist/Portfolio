import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { db } from "../../initFirebase"
import { doc, updateDoc } from '@firebase/firestore'
import LoadingButton from "../../../components/other/loadingButton"

export default function AdminEditTechnology({technology, categories}) {
  const router = useRouter()
  const { id } = router.query;
  const [loading, setLoading] = useState(false)

  const [category, setCategory] = useState("")
  const [title, setTitle] = useState("")
  const [icon, setIcon] = useState("")
  const [recent, setRecent] = useState(false)

  useEffect(async () => { 
    setCategory(technology.category),
    setTitle(technology.title),
    setIcon(technology.icon),
    setRecent(technology.recent)
  }, [router])

  const updateTechnology = async (e) => {
    e.preventDefault()
    setLoading(true)

    const newData = { 
      category: category,
      title: title,
      icon: icon,
      recent: recent
    }
    
    try {
      await updateDoc(doc(db, "technologies", id), newData)
      
      setLoading(false)
      alert("Teknologi uppdaterad.")
    } catch(error) {
      setLoading(false)
      alert(error)
    }
  }

  return (
    <>
      <form 
        id="updateTechnologyForm"
        onSubmit={updateTechnology} 
        className="rounded w-full p-4 dark:bg-gray-light bg-white shadow-xl flex flex-col gap-4"
      >
        <div>
          <label>kategori</label>
          <br/>
          <select 
            defaultValue={category}
            onChange={(event) => {
              setCategory(event.target.value)
            }} 
            className="formInput w-full"
          >
            <option value={category} key={category}>{category}</option>
            {categories.map((categoryItem, index) => (
              <option value={categoryItem.title} key={index}>{categoryItem.title}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Titel</label>
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

        <div>
          <label>Ikon</label>
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

        <div>
          <label>Nyligen</label>
          <br/>
          <input 
            type="checkbox" 
            checked={recent}
            onChange={(event) => {
              setRecent(!recent)
            }}  
            className="checked:bg-primary-default checked:border-transparent"
          />
        </div>

        <div className="w-full">
          <button type="submit" className="submit">
          {!loading ? ( 
            <>Uppdatera</>
          ) : (
            <LoadingButton />
          )}
          </button>
        </div>
      </form>
    </>
  )
}