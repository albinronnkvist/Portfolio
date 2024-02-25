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
      setError(`Failed to sign out: ${error}`)
    }
  }

  return (
    <div className="mt-8">
      <p className="mb-2">Signed in as: {currentUser.email}</p>
      <button onClick={logOutUser} className="formInputButton bg-red dark:bg-red w-auto py-2 px-4">
        Sign out
      </button>
    </div>
  )
}