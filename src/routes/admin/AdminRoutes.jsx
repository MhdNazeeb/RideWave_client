import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../../pages/admin/login/LoginPage'

export default function AdminRoutes() {
  return (
    <div>
      <Routes>
        <Route path='login' element={<LoginPage />} />
      </Routes>
    </div>
  )
}
