import { useContext } from "react"
import { AuthContext } from "../context"
import { Navigate } from "react-router-dom"


function PrivateRoutes({ children }) {
    
    const { user } = useContext(AuthContext)
    
    if (user) {
        return children
    }
  return (
    <Navigate to={'/log-in'}></Navigate>
  )
}

export function PrivateRouteAdmin({ children }) {
    
    const { user, loader } = useContext(AuthContext)
    
    if (loader) { 
        return <div className="flex items-center justify-center w-full h-screen"><span className="loading loading-infinity loading-xl w-52 h-52"></span></div>
    }
    
    if (user?.email === 'ibrahim06978@gmail.com') {
        return children
    }
  return (
    <Navigate to={'/'}></Navigate>
  )
}

export default PrivateRoutes