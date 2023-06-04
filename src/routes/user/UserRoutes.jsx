import React from 'react'
import {Navigate, Route,Routes } from 'react-router-dom'
import Home from '../../pages/user/home/Home'
import Login from '../../pages/user/login/Login'
import SignUP from '../../components/user/signup/Signup'
import Verification from '../../pages/verificationmail/verification'
import { useSelector } from 'react-redux'



export default function UserRoutes() {
  const userDetails=useSelector((state)=>state.userReducer.user)
  const client=userDetails?.user
  console.log(client,'this is  user');
  return (
    <>
    <Routes>
     
        <Route path='/' element={   <Home />} />
        <Route path='/login' element={client?<Navigate to='/'/>:<Login />} />
        <Route path='/signup' element={<SignUP />} />
        <Route path='/enterpassword/:id' element={ <Verification/>} />
        
    </Routes>
      
    </>
  )
}
