import { useSelector } from "react-redux";
import { availableRides } from "../../../axios/services/driver/driverSignup";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../common/Loader";

function Rides() {
  const [rides, setRides] = useState([]);
  const DriverDetails = useSelector((state) => state.driverReducer.driver);
  const navigate = useNavigate()
  const driver = DriverDetails?.driver;
  let driverid = driver?._id;
  const token = DriverDetails?.token;
  const [loader, setLoader] = useState(false);
  const page=localStorage.getItem('page')
  const [currentPage, setCurrentPage] = useState(page ?? 1);
  const recordPerPage = 5;
  const lastindex = currentPage * recordPerPage;
  const firstindex = lastindex - recordPerPage;
  const records = rides.slice(firstindex, lastindex);
  const npage = Math.ceil(rides.length / recordPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);


  

  useEffect(() => {
    async function ride() {
      setLoader(true)
      const res = await availableRides(driverid, token);
      setLoader(false)
      setRides(res.data);
    }
    ride();
  }, []);
  function nextPage() {
    if (currentPage !== npage) {
      localStorage.setItem('page',currentPage+ 1)
      setCurrentPage(currentPage + 1);
    }
  }
  function prevPage() {
    if (currentPage !== 1) {
      localStorage.setItem('page', currentPage - 1)
      setCurrentPage(currentPage - 1);
    }
  }
  function changePage(id) {
    localStorage.setItem('page', id)
   setCurrentPage(id)
  }

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
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      trip_id
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
                      PAID
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      DETAILS
                    </th>
                  </tr>
                </thead>
               
                {records?.map((val) => {

                  return (
                    <tbody>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10"></div>
                            <div className="flex justify-start">
                              <p className="text-gray-900 whitespace-no-wrap">{val._id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{val.location.pickup}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                          {val.location.dropoff}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                          {val.bookingStatus}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">₹ {val.payment.amount}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                          ₹ {val.payment.aduvance}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                              onClick={()=>{
                                navigate('/driver/rider_details',{state:{tripid:val._id}})
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
                      </tr>
                    </tbody>
                  );
                })}
              </table>
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
                  {numbers?.map((item, i) => {
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Rides;
