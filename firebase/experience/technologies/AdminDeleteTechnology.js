import { useRouter } from "next/router"
import { db } from "../../initFirebase"
import { doc, deleteDoc } from '@firebase/firestore'
import { useState } from "react"
import LoadingButton from "../../../components/other/loadingButton"

export default function AdminDeleteTechnology() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const deleteTechnology = async () => {
    setLoading(true)
    const { id } = router.query;

    try {
      await deleteDoc(doc(db, "technologies", id))
      setLoading(false)
      alert("Teknologi raderad.")
      router.back();
    } catch(error) {
      setLoading(false)
      alert(error)
    }
  }

  return (
    <button
      type="button"
      onClick={deleteTechnology}
      className="formInputButton bg-red dark:bg-red w-auto py-2 px-4"
    >
      {!loading ? ( 
        <>Radera teknologi</>
      ) : (
        <LoadingButton />
      )}
    </button>
  )
}