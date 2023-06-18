import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const tripDetails = useSelector((state) => state.tripdetailsReducer.trip);
  const { distance, driver, dropOff, pickup, carDetails } = tripDetails;
  const Rate = carDetails?.Rate * distance


  return (
    <div>
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
                <div className="flex">
                  <div>
                    <div className="m-3">
                      <input
                        type="text"
                        className="h-10 w-20 rounded-lg"
                        placeholder="Booked"
                        readOnly
                      />
                    </div>
                    <div className="m-3">
                      <input
                        type="text"
                        className="h-10 w-20 rounded-lg"
                        placeholder="Booked"
                        readOnly
                      />
                    </div>
                  </div>
                  <div>
                    <div className="m-3">
                      <input
                        type="text"
                        className="h-10 w-20 rounded-lg"
                        placeholder="Booked"
                        readOnly
                      />
                    </div>
                    <div className="m-3">
                      <input
                        type="text"
                        className="h-10 w-20 rounded-lg"
                        placeholder="Booked"
                        readOnly
                      />
                    </div>
                  </div>
                </div>

                {/* <span className="font-semibold">
                  Nike Air Max Pro 8888 - Super Light
                </span> */}
                {/* <span className="float-right text-gray-400">42EU - 8.5US</span>
                <p className="mt-auto text-lg font-bold">$238.99</p> */}
              </div>
            </div>
          </div>

          <form className="mt-5 grid gap-6">
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
          </form>
        </div>
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Payment Details</p>
          {/* <p className="text-gray-400">Complete your order by providing your payment details.</p> */}
          <div className>
            <label
              htmlFor="email"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              pickUp
            </label>
            <div className="relative">
              <input
                type="text"
                name="email"
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
              DropOf
            </label>
            <div className="relative">
              <input
                type="text"
                value={dropOff}
                id="card-holder"
                name="card-holder"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
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
                  name="card-no"
                  className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                />
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
                name="credit-expiry"
                className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="MM/YY"
              />
            </div>
            {/* Total */}
            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="font-semibold text-gray-900"> ₹{Rate}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Per Seat</p>
                <p className="font-semibold text-gray-900">₹{Rate/4}</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">$408.00</p>
            </div>
          </div>
          <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
