import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/admin/login/LoginPage";
import DashBoard from "../../pages/admin/dashboard/DashBoard";
import { useSelector } from "react-redux";
import DriverListPage from "../../pages/admin/driverlist/DriverListPage";
import DriverVerifyPage from "../../pages/admin/driververifypage/DriverVerifyPage";
import CarListPage from "../../pages/admin/carlist/CarListPage";
import CarVerifyPage from "../../pages/admin/carvrify/CarVerifyPage";
import Booking from "../../pages/admin/Booking/Booking";
import BookingDetailspage from "../../pages/admin/bookingDetails/BookingDetailspage";
import PageNotFoundPage from "../../pages/common/pagenotfoundpage/PageNotFoundPage";
import UserListPage from "../../pages/admin/userlist/UserListPage";


export default function AdminRoutes() {
  console.log('this admin roues')
  const adminDetails = useSelector((state) => state.adminReducer.admin);
  const admin = adminDetails?.admin;
  return (
    <div>
      <Routes>
        <Route path="/" element={ admin ? <DashBoard />:<Navigate to='/admin/login' />} />
        <Route path="/login" element={ admin ? <Navigate to='/admin/' />:<LoginPage />} />
        <Route path="/" element={ admin ? <DashBoard /> :<Navigate to='/admin'/>} />
        <Route path="/userlist"element={admin ? <UserListPage/> : <Navigate to='/admin'/>}/>
        <Route path="/driverlist"element={admin ? <DriverListPage /> : <Navigate to='/admin'/>}/>
        <Route path="/driver_verify"element={admin ? <DriverVerifyPage/> : <Navigate to='/admin'/>}/>
        <Route path="/carlist"element={admin ? <CarListPage/> : <Navigate to='/admin'/>}/>
        <Route path="/car_verify"element={admin ? <CarVerifyPage/> : <Navigate to='/admin'/>}/>
        <Route path="/Ride_history"element={admin ? <Booking/> : <Navigate to='/admin'/>}/>
        <Route path="/booking_details"element={admin ? <BookingDetailspage/> : <Navigate to='/admin'/>}/>
        <Route path="/dashboard"element={admin ? <DashBoard/> : <Navigate to='/admin'/>}/>
        <Route path="/*"element={admin ? <PageNotFoundPage home={'adminhome'}/> : <Navigate to='/admin'/>}/>
      </Routes>
    </div>
  );
}

