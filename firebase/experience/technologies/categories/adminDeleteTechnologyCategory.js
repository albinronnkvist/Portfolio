import { useRouter } from "next/router"
import { db } from "../../../initFirebase"
import { doc, deleteDoc } from '@firebase/firestore'
import { useState } from "react"
import LoadingButton from "../../../../components/other/loadingButton"

export default function AdminDeleteTechnologyCategory() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const deleteCategory = async () => {
    setLoading(true)
    const { id } = router.query;

    try {
      await deleteDoc(doc(db, "technologiesCategories", id))
      setLoading(false)
      alert("Technology category was deleted")
      router.back();
    } catch(error) {
      setLoading(false)
      alert(error)
    }
  }
  return (
    <button
      type="button"
      onClick={deleteCategory}
      className="formInputButton bg-red dark:bg-red w-auto py-2 px-4"
    >
      {!loading ? ( 
        <>Delete</>
      ) : (
        <LoadingButton />
      )}
    </button>
  )
}