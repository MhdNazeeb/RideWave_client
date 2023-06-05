import React from 'react'
import {Route,Routes } from 'react-router-dom'
import DriverSignupPage from '../../pages/driver/signup/DriverSignupPage';



export default function DriverRoutes() {
    console.log('reached route driver ');
    
  return (
    <>
      <Routes>
        <Route path='signup' element={<DriverSignupPage/>}/>
      </Routes>
    </>
  )
}
