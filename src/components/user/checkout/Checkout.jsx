import { PayPalButtons } from "@paypal/react-paypal-js";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AduvancePaypal from "../advancePaypal/AduvancePaypal";
import { rideBook } from "../../../axios/services/user/User";
import { toast } from "react-toastify";
import Loader from "../../common/Loader";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const tripDetails = useSelector((state) => state.tripdetailsReducer.trip);
  console.log(tripDetails,"lllllllllllllloveeeeeeeeeeee")
  const userDetails = useSelector((state) => state.userReducer.user);
  const [confrim, setconfrim] = useState(false);
  const [loader, setLoader] = useState(false);
  const { distance, dropOff, pickup, carDetails } = tripDetails;
  const Rate = carDetails?.Rate * distance;
  const rate = (Rate * 5) / 100;
  const currentDate = new Date().toISOString().split("T")[0];
  const navigate = useNavigate();
  const { token } = userDetails;
  const userid = userDetails.user._id;


  const data = {
    ...tripDetails,
    rate,
    Rate,
    userid,
  };

  function handleSubmit(e) {
    e.preventDefault();
    setconfrim(true)
  }

  async function firstCheckout() {
    setconfrim(false);
    setLoader(true);
    await rideBook(data, token).then((res) => {
      if (res?.data?.message) {
        toast.error(res?.data?.message);
      } else {
        navigate("/success", { state: { data: res?.data } });
      }
      setLoader(false);
    });
  }

  return (
    <div>
      {loader && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-white bg-opacity-25 backdrop-filter backdrop-blur z-50">
          <Loader />
        </div>
      )}
      <form className="mt-5 grid gap-6" onSubmit={handleSubmit}>
        <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
          <div className="px-4 pt-8">
            <p className="text-xl font-medium">Order Summary</p>
            {/* <p className="text-gray-400">Check your items. And select a suitable shipping method.</p> */}
            <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
              <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                <img
                  className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                  src={carDetails?.carimage}
                  alt
                />
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold">
                    Modal: {carDetails?.model}{" "}
                  </span>
                  <span className="float-right">
                    RG: {carDetails?.RegistrationNumber}
                  </span>
                  <p className="text-lg font-bold"> Rate: ₹{Rate}</p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                <div className="flex w-full flex-col px-4 py-4">
                  <div className="flex"></div>
                </div>
              </div>
            </div>

            <div className="relative">
              <input
                className="peer hidden"
                id="radio_1"
                type="radio"
                name="radio"
                defaultChecked
              />
            </div>
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_2"
                type="radio"
                name="radio"
                defaultChecked
              />
            </div>
          </div>
          <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
            <p className="text-xl font-medium">Payment Details</p>
            {/* <p className="text-gray-400">Complete your order by providing your payment details.</p> */}
            <div className>
              <label
                htmlFor="email"
                className="mt-4 mb-2 block text-sm font-medium "
              >
                Pickup
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="pickup"
                  value={pickup}
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path />
                  </svg>
                </div>
              </div>
              <label
                htmlFor="card-holder"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Dropof
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={dropOff}
                  id="card-holder"
                  name="dropOff"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  readOnly
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path />
                  </svg>
                </div>
              </div>
              {/* <label
                htmlFor="card-no"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Date Time
              </label>
              <div className="flex">
                <div className="relative w-7/12 flex-shrink-0">
                  <input
                    type="date"
                    id="card-no"
                    name="date"
                    value={values.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    min={currentDate}
                    className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                  />
                  {errors.date && touched.date && (
                    <p className="text-red-700">{errors.date}</p>
                  )}

                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      className="h-4 w-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                      <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                    </svg>
                  </div>
                </div>
                <input
                  type="time"
                  name="time"
                  className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="MM/YY"
                  value={values.time}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  min={currentDate}
                />
                {errors.time && touched.time && (
                  <p className="text-red-700">{errors.time}</p>
                )}
              </div> */}

              {/* Total */}
              <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Total</p>
                  <p className="font-semibold text-gray-900"> ₹{Rate}</p>
                </div>
                <div className="flex items-center justify-between">
                  {/* <p className="text-sm font-medium text-gray-900">Per Seat</p> */}
                  {/* <p className="font-semibold text-gray-900">₹{Rate / 4}</p> */}
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">₹{rate}</p>
              </div>
            </div>
            {confrim ? (
              <AduvancePaypal
                tripDetails={tripDetails}
                Rate={rate}
                setconfrim={setconfrim}
                setLoader={setLoader}
                firstCheckout={firstCheckout}
              />
            ) : (
              <button
                className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
                
              >
                Confirm Ride
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
