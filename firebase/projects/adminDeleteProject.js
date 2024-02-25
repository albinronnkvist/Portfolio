import { useRouter } from "next/router"
import { db } from "../initFirebase"
import { doc, deleteDoc } from '@firebase/firestore'
import { getStorage, ref, deleteObject } from "@firebase/storage"
import { useState } from "react"
import LoadingButton from "../../components/other/loadingButton"

export default function AdminDeleteProject({ project }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const deleteProject = async () => {
    setLoading(true)
    const { id } = router.query;
    const projectRef = doc(db, "projects", id)
    const storage = getStorage()
    const imageRef = ref(storage, project.imagePath);

    try {
      await deleteDoc(projectRef)
      await deleteObject(imageRef)
      setLoading(false)
      alert("Project was deleted")
      router.back();
    } catch(error) {
      setLoading(false)
      alert(error)
    }
  }
  return (
    <button
      type="button"
      onClick={deleteProject}
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