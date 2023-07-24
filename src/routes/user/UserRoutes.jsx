import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../pages/user/home/Home";
import Login from "../../pages/user/login/Login";
import SignUP from "../../components/user/signup/Signup";
import Verification from "../../pages/verificationmail/verification";
import { useSelector } from "react-redux";
import MapPage from "../../pages/user/mapPage/MapPage";
import CheckoutPage from "../../pages/user/checkoutPage/CheckoutPage";
import SuccessPage from "../../pages/user/successpage/SuccessPage";
import BookingDetailsPage from "../../pages/user/bookingDeatails/BookingDetailsPage";
import ProfilePage from "../../pages/user/userprofile/ProfilePage";
import History from "../../pages/user/History/History";
import LastSuccessPage from "../../pages/user/lastsuccesspage/LastSuccessPage";
import PageNotFoundPage from "../../pages/common/pagenotfoundpage/PageNotFoundPage";
import ChatPage from "../../pages/common/chatpage/ChatPage";
import WalletPage from "../../pages/user/wallet/WalletPage";


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
      
        <Route
          path="/success"
          element={client ? <SuccessPage/> : <Navigate to="/login" />}
        />
        <Route
          path="/details"
          element={client ? <BookingDetailsPage/> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={client ? <ProfilePage/> : <Navigate to="/login" />}
        />
        <Route
          path="/history"
          element={client ? <History/> : <Navigate to="/login" />}
        />
        <Route
          path="/last_success"
          element={client ? <LastSuccessPage/> : <Navigate to="/login" />}
        />
        <Route
          path="/chat"
          element={client ? <ChatPage/> : <Navigate to="/login" />}
        />
        <Route
          path="/wallet"
          element={client ? <WalletPage/> : <Navigate to="/login" />}
        />
       
        <Route
          path="/*"
          element={client ? <PageNotFoundPage home={'userhome'}/> : <Navigate to="/login" />}
        />
         </Routes>
       
      
    </>
  );
}
