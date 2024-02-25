import { useState } from "react"
import { useRouter } from "next/router"
import { auth } from "../initFirebase";
import { signInWithEmailAndPassword } from "@firebase/auth"
import { useAuth } from "./auth";
import LoadingButton from "../../components/other/loadingButton";

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { currentUser } = useAuth()

  const loginUser = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      setError("")
      await signInWithEmailAndPassword(auth, email, password)
      if (typeof window !== 'undefined') {
        router.push("/admin")
      }
    } catch(error) {
      setError(`Failed to sign in: ${error}`)
    }
    setLoading(false)
  }

  if (currentUser) {
    router.push("/admin")
    return <></>
  } else {
    return (
      <div>
        <h1>Sign in</h1>
        <form 
          onSubmit={loginUser}
          className="w-full sm:w-1/2 md:w-1/3 rounded p-4 dark:bg-gray-light bg-white shadow-xl flex flex-col gap-4"
        >
          {error && (
            <div className="bg-red dark:bg-red p-4 rounded">
              <p className="text-white dark:text-white">{error}</p>
            </div>
          )}
          <div>
            <label>Email</label>
            <input 
              type="email" 
              className="formInput w-full" 
              onChange={(event) => {
                setEmail(event.target.value)
              }} 
              required 
            />
          </div>
          <div>
            <label>Password</label>
            <input 
              type="password" 
              className="formInput w-full" 
              required 
              onChange={(event) => {
                setPassword(event.target.value)
              }} 
            />
          </div>
          <button disabled={loading} type="submit" className="submit">
            {!loading ? ( 
              <>Sign in</>
            ) : (
              <LoadingButton />
            )}
          </button>
        </form>
      </div>
    )
  }
}