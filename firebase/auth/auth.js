import { getAuth } from "@firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import Loading from "../../components/other/loading";
import Login from "./login";
import Logout from "./logout";

const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const auth = getAuth()
    return auth.onIdTokenChanged(async (user) => {
      if(!user) {
        setCurrentUser(null)
        setLoading(false)
        return
      } 
      const token = await user.getIdToken()
      setCurrentUser(user)
      setLoading(false)
    })
  }, [])

  if(loading) {
    return (
      <Loading />
    )
  } 

  if(!currentUser) {
    return <Login />
  } else {
    return (
      <AuthContext.Provider value={{ currentUser }}>
        {children}
        <Logout />
      </AuthContext.Provider>
    )
  }
}

export const useAuth = () => useContext(AuthContext)