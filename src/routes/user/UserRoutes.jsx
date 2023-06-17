import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../pages/user/home/Home";
import Login from "../../pages/user/login/Login";
import SignUP from "../../components/user/signup/Signup";
import Verification from "../../pages/verificationmail/verification";
import { useSelector } from "react-redux";
import MapPage from "../../pages/user/mapPage/MapPage";
import CheckoutPage from "../../pages/checkoutPage/CheckoutPage";

export default function UserRoutes() {
  const userDetails = useSelector((state) => state.userReducer.user);
  const client = userDetails?.user;
  const DriverDetails = useSelector((state) => state.driverReducer.driver);
  const driver = DriverDetails?.driver;
  console.log(driver, "this is driver");
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={client || driver ? <Navigate to="/" /> : <Login />}
        />
        <Route path="/signup" element={<SignUP />} />

        <Route path="/enterpassword/:id" element={<Verification />} />
        <Route
          path="/map"
          element={client ? <MapPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/map"
          element={client ? <MapPage/> : <Navigate to="/login" />}
        />
        <Route
          path="/checkout"
          element={client ? <CheckoutPage/> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}
