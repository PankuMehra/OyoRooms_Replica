import React from 'react'
import { Navigate } from 'react-router-dom'


const PrivateRoute = ({children}) => {

  let currentUser

  return (
    false ? children : <Navigate to="/login" />
  )
}

export default PrivateRoute