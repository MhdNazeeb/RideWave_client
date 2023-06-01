import React from 'react'
import {Route,Routes } from 'react-router-dom'
import Home from '../../pages/user/home/Home'
import Login from '../../pages/user/login/Login'
import SignUP from '../../components/user/signup/Signup'

export default function UserRoutes() {
  return (
    <>
    <Routes>
     
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUP />} />
        
    </Routes>
      
    </>
  )
}
