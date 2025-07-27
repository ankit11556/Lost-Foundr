import { checkAuthApi, logoutApi } from "../services/AuthApi";

import { createContext, useEffect, useContext,useState }  from 'react';

const AuthContext = createContext();

 export const AuthProvider = ({children}) =>{
  const [isAutheticated,setIsAutheticated] = useState(false);
  const [loading,setLoading] = useState(true);
  const [user,setUser] = useState(null)

  useEffect(()=>{
   const checkAuth = async () => {
      try {
         const res = await checkAuthApi();
         setIsAutheticated(true)
         setUser(res.data.user)
      } catch (error) {
        setIsAutheticated(false)
        setUser(null)
      } finally {
        setLoading(false)
      }
   }
   checkAuth()
  },[])

  const userLogout = async () => {
    try {
      const res = await logoutApi();
      setUser(null);
      setIsAutheticated(false)
      localStorage.removeItem("access_token");
      window.location.href = "/login"; 
      alert(res.data.message)
    } catch (error) {
      alert("Logout faild, Please try again")
    }
  }

  return (
    <AuthContext.Provider value={{isAutheticated,setIsAutheticated,user,setUser,loading,userLogout}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)