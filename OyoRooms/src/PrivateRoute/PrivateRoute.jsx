import React from 'react'
import { Navigate } from 'react-router-dom'


const PrivateRoute = ({children}) => {

  let isAuth = JSON.parse(localStorage.getItem("isAuth")) || false;

  return (
    isAuth ? children : <Navigate to="/login" />
  )
}

export default PrivateRoute