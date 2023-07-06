import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";
import {
  cancelTrip,
  carFind,
  tripFind,
} from "../../../axios/services/user/User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassStart } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const BookingDetails = () => {
  const userDetails = useSelector((state) => state.userReducer.user);
  const [cardata, setCardata] = useState({});
  const [bookingstatus, setbookingStatus] = useState();
  const { token } = userDetails;
  const locations = useLocation();
  const data = locations.state.data;
  const {
    driver,
    verficationCode,
    location,
    payment,
    bookingStatus,
    StartedToDestination,
    Reachedpickup,
    ReachedDestination,
    Arraivalstatus,
  } = data;
  const id = driver?._id;
  useEffect(() => {
    (async function () {
      const res = await carFind(id, token);
      setCardata(res?.data);
      const response = await tripFind(data._id);
      setbookingStatus(response?.data?.bookingStatus);
    })();
  }, []);
  async function rideCancel() {
    const res = await cancelTrip(data._id);
    setbookingStatus(res?.data?.cancelUpdate?.bookingStatus);
  }
     
  return (
    <>
      <div>
        <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto pb-0 bg-gray-200 h-screen ">
          <fieldset classname="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-regal-blue">
            <div classname="space-y-2 col-span-full lg:col-span-1">
              <p classname="font-extrabold text-lg text-real-orange">
                Trip Details
              </p>
            </div>
          </fieldset>
          <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
            <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
              <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full rounded-[50px] text-center shadow-[1px_1px_2px_2px_grey]">
                <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 bg-black-800">
                  Ride Details
                </p>
                <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                  <div className="pb-4 md:pb-8 w-full md:w-40">
                    <img
                      className="w-full hidden md:block"
                      src={cardata?.carimage}
                      alt="profile"
                    />
                    <img
                      className="w-full md:hidden"
                      src={cardata?.carimage}
                      alt="profile"
                    />
                  </div>
                  <div className="border-b border-gray-200  items-start w-full pb-8 space-y-4 md:space-y-0">
                    <div className="w-full flex flex-col justify-start items-start space-y-8">
                      <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 bg-black-800">
                        Driver: {driver?.name}
                      </h3>
                      <div className="flex justify-start items-start flex-col space-y-2">
                        <pre className="text-sm dark:text-white break-words leading-none bg-black-800">
                          <span className="dark:bg-black-400 bg-black-300">
                            Pickup: {location?.pickup}
                          </span>
                        </pre>
                        <p className="text-sm dark:text-white leading-none bg-black-800">
                          <span className="dark:bg-black-400 bg-black-300">
                            Dropoff:{location?.dropoff}
                          </span>
                        </p>
                        {/* <p className="text-sm dark:text-white leading-none bg-black-800">
                          <span className="dark:bg-black-400 bg-black-300">
                            Date: {"" + date}
                          </span>
                        </p>
                        <p className="text-sm dark:text-white leading-none bg-black-800">
                          <span className="dark:bg-black-400 bg-black-300">
                            Time: {time}
                          </span>
                        </p> */}
                      </div>
                    </div>
                    <div className="flex justify-between space-x-8 items-start w-full">
                      <p className="text-base dark:text-white xl:text-lg leading-6">
                        Aduvance Amount: ₹{payment?.aduvance}
                      </p>
                    </div>
                    <div className="flex justify-between space-x-8 items-start w-full">
                      <p className="text-base dark:text-white xl:text-lg leading-6">
                        Total amount:₹ {payment?.amount}
                      </p>
                    </div>
                    <div className="flex justify-between space-x-8 items-start w-full">
                      <p className="text-base dark:text-white xl:text-lg leading-6">
                        verification Code : {verficationCode}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full" />
                {bookingStatus === "Pending" &&
                Reachedpickup !== "confirmed" &&
                StartedToDestination !== "confirmed" &&
                ReachedDestination !== "confirmed" &&
                bookingstatus !== "Cancelled" ? (
                  <button
                    className="bg-red-700 rounded-lg text-white px-2 py-2"
                    onClick={rideCancel}
                  >
                    Cancel Ride
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex rounded-3xl  items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
              <h3 className="text-xl dark:text-white font-semibold leading-5 bg-black-800 mb-10">
                Status
              </h3>
              {bookingStatus === "rejected" ? (
                <h1 className="text-white bg-red-600 px-5 py-3 uppercase font-semibold rounded-lg">
                  rejected
                </h1>
              ) : bookingstatus === "Cancelled" ? (
                <h1 className="text-white bg-red-600 px-5 py-3 uppercase font-semibold rounded-lg">
                  Cancelled
                </h1>
              ) : (
                <ol className="relative bg-black-500 border-l border-gray-200 dark:border-gray-700 dark:bg-black-400">
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700 " />
                    <span className="absolute flex items-center justify-center w-8 h-8  rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green">
                      {Reachedpickup === "Pending" ? (
                        <FontAwesomeIcon icon={faHourglassStart} spin />
                      ) : Reachedpickup === "way" ? (
                        <FontAwesomeIcon icon={faArrowRight} />
                      ) : (
                        <FontAwesomeIcon icon={faCheck} bounce />
                      )}
                    </span>
                    <h3 className="font-medium leading-tight">
                      Reached pickup
                    </h3>
                  </li>
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700 " />
                    <span className="absolute flex items-center justify-center w-8 h-8  rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green">
                      {StartedToDestination === "Pending" ? (
                        <FontAwesomeIcon icon={faHourglassStart} spin />
                      ) : (
                        <FontAwesomeIcon icon={faCheck} bounce />
                      )}
                    </span>
                    <h3 className="font-medium leading-tight">
                      Started To Destination
                    </h3>
                  </li>{" "}
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700 " />
                    <span className="absolute flex items-center justify-center w-8 h-8  rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green">
                      {ReachedDestination === "Pending" ? (
                        <FontAwesomeIcon icon={faHourglassStart} spin />
                      ) : (
                        <FontAwesomeIcon icon={faCheck} bounce />
                      )}
                    </span>
                    <h3 className="font-medium leading-tight">
                      {" "}
                      Reached Destination
                    </h3>
                  </li>
                </ol>
              )}
            </div>
          </div>
        </div>
        <div className="m-5 w-90 w-full"></div>
      </div>
    </>
  );
};

export default BookingDetails;
