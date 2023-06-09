import React from 'react'
import {Navigate, Route,Routes } from 'react-router-dom'
import DriverSignupPage from '../../pages/driver/signup/DriverSignupPage';
import Login from '../../pages/user/login/Login';
import { useSelector } from 'react-redux';
import CarRegisterPage from '../../pages/driver/carregisterpage/CarRegisterPage';



export default function DriverRoutes() {

  const driverFound = useSelector((state)=>state.driverReducer.driver)
  const driver = driverFound?.driver
  
  return (
    <>
      <Routes>
        <Route path='/signup' element={<DriverSignupPage/>}/>
        <Route path='/car_register' element={driver?<CarRegisterPage/>:<Navigate to='/login'/>}/>
        
      </Routes>
    </>
  )
}
