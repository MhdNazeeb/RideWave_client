import React from 'react'
import {Navigate, Route,Routes } from 'react-router-dom'
import DriverSignupPage from '../../pages/driver/signup/DriverSignupPage';
import { useSelector } from 'react-redux';
import CarRegisterPage from '../../pages/driver/carregisterpage/CarRegisterPage';
import DriverProfilePage from '../../pages/driver/DriverProfile/DriverProfilePage';
import CarDeatailsPage from '../../pages/driver/car_deatails/carDeatailsPage';
import RidesPage from '../../pages/driver/Rides/RidesPage';
import RidePage from '../../pages/driver/ridepage/RidePage';





export default function DriverRoutes() {

  const driverFound = useSelector((state)=>state.driverReducer.driver)
  const driver = driverFound?.driver
  console.log('car deatails')
  return (
  
    <>
      <Routes>
        <Route path='/signup' element={<DriverSignupPage/>}/>
        <Route path='/car_register' element={driver?<CarRegisterPage/>:<Navigate to='/login'/>}/>
        <Route path="/driver_profile" element={driver? <DriverProfilePage driver={driver}/>:<Navigate to='/login'/>} />
        <Route path='/car_deatails' element={driver? <CarDeatailsPage />:<Navigate to='/login'/>} />
        <Route path='/rides' element={driver? <RidesPage />:<Navigate to='/login'/>} />
        <Route path='/ride' element={driver? <RidePage/>:<Navigate to='/login'/>} />
      </Routes>
    </>
  )
}
