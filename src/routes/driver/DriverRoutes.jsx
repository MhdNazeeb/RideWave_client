import React from 'react'
import {Route,Routes } from 'react-router-dom'
import DriverSignupPage from '../../pages/driver/signup/DriverSignupPage';

export default function DriverRoutes() {
    console.log('reached driver page ');
  return (
    <>
      <Routes>
        <Route path='signup' element={<DriverSignupPage/>}/>
      </Routes>
    </>
  )
}
