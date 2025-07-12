import { Outlet,Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

const PrivateRoute = () =>{
  const {loading,isAutheticated} = useAuth()
  const location = useLocation()

  if (loading) return <p>Loading...</p>

  return isAutheticated ? <Outlet/> : <Navigate to="/login" state={{from:location}} replace/>
}

export default PrivateRoute