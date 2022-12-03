import React from 'react'
import { Navigate } from 'react-router-dom'


const PrivateRoute = ({children}) => {


  return (
    false ? children : <Navigate to="/login" />
  )
}

export default PrivateRoute