import { useState } from "react"
import { setDoc, doc, collection } from '@firebase/firestore'
import { db } from "../../initFirebase"
import LoadingButton from "../../../components/other/loadingButton"

export default function AdminCreateTechnology({categories}) {
  const [loading, setLoading] = useState(false)

  const [category, setCategory] = useState("Övrigt")
  const [title, setTitle] = useState("")
  const [icon, setIcon] = useState("")
  const [recent, setRecent] = useState(false)

  const clearState = () => {
    setCategory("")
    setTitle(""),
    setIcon("")
    setRecent(false)
  }

  const clearForm = () => {
    document.getElementById("createTechnologyForm").reset();
  }

  const createTechnology= async (e) => {
    e.preventDefault();
    setLoading(true)

    const object = { 
      category: category,
      title: title,
      icon: icon,
      recent: recent
    }
    
    try {
      await setDoc(doc(collection(db, "technologies")), object);
      setLoading(false)
      alert("Technology was created")
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
        id="createTechnologyForm"
        onSubmit={createTechnology} 
        className="rounded w-full p-4 dark:bg-gray-light2 bg-white shadow-xl flex flex-col gap-4"
      >
          <div>
            <label>Category</label>
            <br/>
            <select 
              defaultValue={categories[0].title}
              onChange={(event) => {
                setCategory(event.target.value)
              }} 
              className="formInput w-full"
            >
              <option value={categories[0].title} key="1">{categories[0].title}</option>
              {categories.map((category, index) => (
                <option value={category.title} key={index}>{category.title}</option>
              )).slice(1)}
            </select>
          </div>

          <div>
            <label>Title</label>
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

        <div>
          <label>Icon</label>
          <br/>
          <input 
            type="text" 
            onChange={(event) => {
              setIcon(event.target.value)
            }} 
            className="formInput"
          />
        </div>

        <div>
          <label>Recent</label>
          <br/>
          <input 
            type="checkbox" 
            onChange={(event) => {
              setRecent(!recent)
            }}  
            className="checked:bg-primary-default checked:border-transparent"
          />
        </div>

        <div className="w-full">
          <button disabled={loading} type="submit" className="submit">
            {!loading ? ( 
              <>Create</>
            ) : (
              <LoadingButton />
            )}
          </button>
        </div>
      </form>
    </>
  )
}