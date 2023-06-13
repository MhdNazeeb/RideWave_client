import React from 'react'
import Header from '../../../components/user/Header/Header'
import DriverProfile from '../../../components/driver/Driverprofile/DriverProfile'

export default function DriverProfilePage ({driver}) {
  return (
    <div>
      <Header/>
      <DriverProfile driver={driver} />
      
    </div>
  )
}
DriverProfilePage