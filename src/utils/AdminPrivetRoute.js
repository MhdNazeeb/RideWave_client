import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function AdminPublicRoutes() {
  const adminToken = JSON.parse(localStorage.getItem("admin"))
  return (
    adminToken ? <Navigate to="/admin/dashboard"/> :<Outlet/>
  )
}

export default AdminPublicRoutes