import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";



import React from 'react'

const PrivateRoute = () => {
    const { userInfo } = useSelector((state) => state.auth1);
  return userInfo ? <Outlet /> : <Navigate to={'/login'} />
}

export default PrivateRoute
