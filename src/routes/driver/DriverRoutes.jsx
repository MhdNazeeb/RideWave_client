import React from 'react'
import {Navigate, Route,Routes } from 'react-router-dom'
import DriverSignupPage from '../../pages/driver/signup/DriverSignupPage';
import Login from '../../pages/user/login/Login';
import { useSelector } from 'react-redux';



export default function DriverRoutes() {
    
  return (
    <>
      <Routes>
        <Route path='signup' element={<DriverSignupPage/>}/>
        
      </Routes>
    </>
  )
}
