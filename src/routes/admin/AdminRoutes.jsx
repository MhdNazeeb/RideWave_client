import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from '../../pages/admin/login/LoginPage'
import DashBoard from '../../pages/admin/dashboard/DashBoard'
import { useSelector } from 'react-redux'
import UserList from '../../pages/admin/userlist/userList'

export default function AdminRoutes() {
  const adminDetails = useSelector((state)=>state.adminReducer.admin)
  const admin = adminDetails?.admin
  return (
    <div>
      <Routes>
        <Route path='/' element={<DashBoard />} />
        <Route path='/login' element={ admin?<Navigate to='/admin'/>:<LoginPage />} />
        <Route path='/userlist' element={<UserList />} />
      </Routes>
    </div>
  )
}
