import React, { useEffect, useId, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { filttering, history } from "../../../axios/services/user/User";
import { useLocation, useNavigate } from "react-router-dom";
import { array } from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { createNewChat } from "../../../axios/services/chat/chat";
import Loader from "../../common/Loader";

function RideHistory() {
  const [rides, setRides] = useState([]);
  const [loader, setLoader] = useState(false);
 
  const navigate = useNavigate();
  const ref = useRef();

  useEffect(() => {
    async function findRides() {
      setLoader(true);
      const res = await history(userid);
      setLoader(false);
      setRides(res?.data);
    }
    findRides();
  }, []);

  function nextPage() {
    if (currentPage !== npage) {
      localStorage.setItem("page", currentPage + 1);
      setCurrentPage(currentPage + 1);
    }
  }
  function prevPage() {
    if (currentPage !== 1) {
      localStorage.setItem("page", currentPage - 1);
      setCurrentPage(currentPage - 1);
    }
  }
  function changePage(id) {
    localStorage.setItem("page", id);
    setCurrentPage(id);
  }
  // create conversation
  async function chatCreate(driverid, userid) {
    try {
      const data = await createNewChat(driverid, userid);
      if (data) {
        navigate("/chat");
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  const filtter = async (event) => {
    let status;
    event.preventDefault();

    status = event.target.value;

    if (
      status === "Rejected" ||
      status === "Pending" ||
      status === "Cancelled" ||
      status === "confirmed" ||
      status === "All"
    ) {
      setLoader(true);
      const res = await filttering(status);
      setLoader(false);
      setRides(res?.data);
    } 
  };

  const doSomeMagic =  function (fn,d) {
    let timer
    return function () {
      clearTimeout(timer)
      timer = setTimeout(async()=>{
        const res = await fn(ref.current.value);
        setRides(res?.data);
      },d)
    }
  }

  const betterFunction = doSomeMagic(filttering,1000)

  return (
    <>
      {loader && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-white bg-opacity-25 backdrop-filter backdrop-blur z-50">
          <Loader />
        </div>
      )}
      <div className="bg-white p-8 rounded-md w-full">
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <div>
                <div className="flex justify-between  ">
                  <div className="w-3/5 mb-5">
                    <form>
                      <label
                        htmlFor="default-search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                      >
                        Search
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                          </svg>
                        </div>
                        <input
                          type="search"
                          id="default-search"
                          ref={ref}
                          onChange={betterFunction}
                          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Search"
                          required
                        />
                        <button
                          type="submit"
                          
                          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Search
                        </button>
                      </div>
                    </form>
                  </div>
                  <div>
                    <div className="pr-6 w-1/3 ">
                      <select
                        className="rounded-lg"
                        name="filtter"
                        onChange={filtter}
                        id=""
                      >
                        filtter
                        <option className="rounded-lg" value="confirmed">
                          confirmed
                        </option>
                        <option className="rounded-lg" value="Cancelled">
                          Cancelled
                        </option>
                        <option className="rounded-lg" value="Pending">
                          Pending
                        </option>
                        <option className="rounded-lg" value="Rejected">
                          Rejected
                        </option>
                        <option className="rounded-lg" value="All">
                          All
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      driver
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      FROM
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      TO
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      rideStatus
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      AMOUNT
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      aduvance
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      PAID
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      DETAILS
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Chat
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {records?.map((data) => {
                    return (
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              {/* <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                alt
                              /> */}
                            </div>
                            <div className="flex justify-start">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {data.driver.name}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {data.location.pickup}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {data.location.dropoff}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {data.bookingStatus}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {data.payment.amount}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {data.payment.aduvance}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          {data.bookingStatus !== "rejected" ? (
                            <p className="text-gray-900 whitespace-no-wrap">
                              {data.payment.status !== true
                                ? data.payment.aduvance
                                : data.payment.amount}
                            </p>
                          ) : (
                            <p className="text-gray-900 whitespace-no-wrap">
                              {0}
                            </p>
                          )}
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                              onClick={() => {
                                navigate("/details", { state: { data: data } });
                              }}
                            />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 576 512"
                            >
                              <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                            </svg>
                          </span>
                        </td>
                        <div>
                          
                          <FontAwesomeIcon icon={faMessage}
                          className="w-5 h-5 mx-8 my-8" 
                            onClick={() =>
                              chatCreate(data.driver._id, data.passenger)
                            }
                          />
                          
                        </div>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* pagination */}
        <div className="flex justify-center items-center mt-3 w-full">
          <nav aria-label="Page navigation example" className="mt-4">
            <ul className="inline-flex -space-x-px">
              <li>
                <a
                  className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={prevPage}
                >
                  Prev
                </a>
              </li>
              {numbers.map((item, i) => {
                return (
                  <li key={i}>
                    <a
                      onClick={() => changePage(item)}
                      className={
                        currentPage == item
                          ? "px-3 py-2 leading-tight text-gray-500 bg-blue-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                          : "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      }
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
              <li>
                <a
                  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={nextPage}
                >
                  next
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* pagination */}
      </div>
    </>
  );
}

export default RideHistory;
