/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useState } from "react";
import RiderSelector from "../Rideselector/RideSelector";
// import Datepicker from "tailwind-datepicker-react";
// import { selectTripContext } from "../../Context/SelectTrip";
// import { handleBookTrip, options } from "../../Helpers/user";
// import { useSelector } from "react-redux";
// import StarIcon from "@mui/icons-material/Star";
// import StarHalfIcon from "@mui/icons-material/StarHalf";
// import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useNavigate } from "react-router-dom";
// import axiosInstance from "../../api/axios";

// import { LocationContext } from "../../Context/locationContext";

const RideConfirm = () => {
  //   const token = useSelector((state) => state.userLogin.token);
  const navigate = useNavigate();
  //   const { tripDetails, setTripDate, tripDate, tripTime, setTripTime } = useContext(selectTripContext);
  // const { setPickup, setDropoff } = useContext(LocationContext);
  const [show, setShow] = useState(false);
  const [driver, setDriver] = useState();
  const [error, setError] = useState("");
  const [booked, setBooked] = useState(true);
  const BookedTrip = async (token, tripDetails, tripDate, tripTime) => {
    try {
      // const form = new FormData();
      // form.append("date", tripDate);
      // form.append("time", tripTime);
      // form.append("driverID", tripDetails.driver);
      // form.append("pickup", tripDetails.pickup);
      // form.append("dropoff", tripDetails.dropOff);
      // form.append("distance", tripDetails.distance);

      const response = await axiosInstance.post("/trip-book", form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      return error.response;
    }
  };

  const handleDatePicker = (state) => {
    setShow(state);
  };

  const handleBooking = async (id) => {
    const response = await handleBookTrip(id);
    setDriver(response.data.driver);
  };

  const handleChange = (selectedDate) => {
    const date = new Date(selectedDate);
    const options = { day: "numeric", month: "short", year: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("en-IN", options).format(
      date
    );
    setTripDate(formattedDate);
  };

  const tripComform = () => {
    setBooked(!booked);
    navigate("/ride");
  };

  const bookTrip = async () => {
    // if (
    //   tripDetails.driver === "" ||
    //   tripDetails.pickup === "" ||
    //   tripDetails.dropOff === "" ||
    //   tripDate === undefined ||
    //   tripTime === undefined
    // ) {
    //   setError("Please select everything");
    //   return false;
    // } else {
    //   setError("");
    // }

    if (!token) return navigate("/login");
    const response = await BookedTrip(token, tripDetails, tripDate, tripTime);
    if (response.status === 404) return setError("Please enter correct number");
    if (response.status === 200) return tripComform();
    if (response.status === 500) return navigate("/login");
  };

  return (
    <>
      <div className="flex flex-col overflow-y-hidden no-scrollbar ">
        <RiderSelector />
        <RiderSelector />
      
      </div>
    </>
  );
};

export default RideConfirm;
