import React from 'react'
import Header from '../../../components/user/Header/Header'
import UserProfile from '../../../components/user/userprofile/UserProfile'
import Footer from '../../../components/user/footer/footer'
import DriverProfile from '../../../components/user/userprofile/UserProfile'

export default function DriverProfilePage() {
  return (
    <div>
      <Header/>
      <DriverProfile />
      <Footer />
    </div>
  )
}
