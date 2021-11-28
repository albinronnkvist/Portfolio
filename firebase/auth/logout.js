import { signOut } from "@firebase/auth"
import { auth } from "../initFirebase"
import { useState } from "react"
import { useAuth } from "./auth";

export default function Logout() {
  const [error, setError] = useState("")
  const { currentUser } = useAuth()

  const logOutUser = async () => {
    try {
      await signOut(auth)
    } catch(error) {
      setError(`Utloggning misslyckades: ${error}`)
    }
  }

  return (
    <div className="mt-8">
      <p className="mb-2">Inloggad som: {currentUser.email}</p>
      <button onClick={logOutUser} className="formInputButton bg-red dark:bg-red w-auto py-2 px-4">
        Logga ut
      </button>
    </div>
  )
}