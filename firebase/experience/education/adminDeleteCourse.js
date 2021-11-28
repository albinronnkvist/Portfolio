import { useRouter } from "next/router"
import { db } from "../../initFirebase"
import { doc, deleteDoc } from '@firebase/firestore'
import { useState } from "react"
import LoadingButton from "../../../components/other/loadingButton"

export default function AdminDeleteCourse() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const deleteCourse = async () => {
    setLoading(true)
    const { id } = router.query;
    const courseRef = doc(db, "courses", id)

    try {
      await deleteDoc(courseRef)
      setLoading(false)
      alert("Kurs raderad.")
      router.back();
    } catch(error) {
      setLoading(false)
      alert(error)
    }
  }
  return (
    <button
      type="button"
      onClick={deleteCourse}
      className="formInputButton bg-red dark:bg-red w-auto py-2 px-4"
    >
      {!loading ? ( 
        <>Radera kursen</>
      ) : (
        <LoadingButton />
      )}
    </button>
  )
}