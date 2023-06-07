import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'


function AdminPrivateRoutes() {
    console.log('kkkkkkkkkkkkkkkkk');
  const adminToken = JSON.parse(localStorage.getItem("admin"))
  console.log(adminToken,'thia admin token');

  return (
    adminToken ? <Outlet/> : <Navigate to="/admin" />
  )
}

export default AdminPrivateRoutes