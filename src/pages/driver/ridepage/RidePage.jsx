import React from 'react'
import RideMap from '../../../components/driver/ride/RideMap'
import Header from '../../../components/user/Header/Header'
import { useLocation } from 'react-router-dom'

export default function RidePage() {
  const location = useLocation()
  const tripid = location.state.tripid
  

  return (
    <>
    <Header/>
    <RideMap tripid={tripid} />
    </>
  )
}
