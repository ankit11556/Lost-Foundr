import { Outlet,Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

const PrivateRoute = () =>{
  const {loading,isAuthetication} = useAuth()
  if (loading) return <p>Loading...</p>

  return isAuthetication ? <Outlet/> : <Navigate to="/login"/>
}

export default PrivateRoute