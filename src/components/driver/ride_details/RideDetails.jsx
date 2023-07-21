import React, { useEffect, useState } from "react";
import Button from "../../common/confirmbutton/Button";
import Reject from "../../common/rejectbutton/Reject";
import { useDispatch, useSelector } from "react-redux";
import ConfirmModal from "../confirmmodal/ConfirmModal";
import Ride from "../../common/rideButton/Ride";
import { availableRides, tripFind } from "../../../axios/services/driver/driverSignup";
import Loader from "../../common/Loader";
import { useLocation, useNavigate } from "react-router-dom";



function RideDetails() {
  const rideData = useSelector((state)=>state.rideReducer)
  const DriverDetails = useSelector((state) => state.driverReducer.driver);
  const [modal,setmodal] = useState(false)
  const [know,setknow] = useState(false)
  const [status,setstatus] = useState()
  const [rideDatas,setDatas] = useState({})
  const [loader, setLoader] = useState(false);
  const [id,setid]=useState("")
  const [startmodal,setStartmodal] = useState(false)
  const driver = DriverDetails?.driver;
  let driverid = driver?._id;
  const token = DriverDetails?.token;
  const navigate = useNavigate()
  const location = useLocation()
  const tripid = location.state.tripid
 
 
    useEffect(()=>{

    (async function  () {
      setLoader(true)
      const res = await tripFind(tripid)
      console.log(res.data,'this is response');
      setDatas(res?.data)
      setLoader(false) 
      
      
    }())

  
      
  },[modal])
  
 function startdrive(tripid) {
  navigate('/driver/ride',{state:{tripid}})
 }


  
  return (
    <>
         {loader && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-white bg-opacity-25 backdrop-filter backdrop-blur z-50">
          <Loader />
        </div>
      )}
      {/*  */}
      { modal  ? <ConfirmModal know={know} setmodal={setmodal} setstatus={setstatus} id={tripid}/> :""}
     
      {rideDatas !== null? (
        
        <div>
           {console.log(rideDatas,'this dtaaa111111111111')}
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
                    {/* <div className="pb-4 md:pb-8 w-full md:w-40">
                    <img
                      className="w-full hidden md:block"
                      src=""
                      alt="profile"
                    />
                    <img
                      className="w-full md:hidden"
                      src=""
                      alt="profile"
                    />
                  </div> */}
                    <div className="border-b border-gray-200  items-start w-full pb-8 space-y-4 md:space-y-0">
                      <div className="w-full flex flex-col justify-start items-start space-y-8">
                        <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 bg-black-800">
                          Customer: {rideDatas?.passenger?.name}
                        </h3>
                        <div className="flex justify-start items-start flex-col space-y-2">
                          <p className="flex text-sm text-left break-words font-semibold leading-none bg-black-800">
                            <span className="dark:bg-black-400 bg-black-300">
                              Pickup:{rideDatas?.location?.pickup}
                            </span>
                          </p>
                          <p className="flex text-sm text-left break-words font-semibold leading-none bg-black-800">
                            <span className="dark:bg-black-400 bg-black-300">
                              Dropoff:{rideDatas?.location?.dropoff}
                            </span>
                          </p>
                          <p className="flex text-sm text-left break-words font-semibold leading-none bg-black-800">
                            <span className="dark:bg-black-400 bg-black-300">
                            Total amount:₹ :{rideDatas?.payment?.amount}
                            </span>
                          </p>
                          <p className="flex text-sm text-left break-words font-semibold leading-none bg-black-800">
                            <span className="dark:bg-black-400 bg-black-300">
                            Paid: ₹ :{rideDatas?.payment?.aduvance}
                            </span>
                          </p>
                          <p className="text-sm dark:text-white leading-none bg-black-800">
                            <span className="dark:bg-black-400 bg-black-300">
                              Trip_id: {rideDatas?._id}
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
                    
                    </div>
                  </div>
                  <div className="mt-6  md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full" />
                  <>
                      
                   {(rideDatas?.bookingStatus === 'confirmed') && (rideDatas?.Reachedpickup !== 'way' )&& (rideDatas?.Reachedpickup !== 'confirmed' )? <Ride setStartmodal={setStartmodal} />:(rideDatas?.bookingStatus === 'Pending')?<div className="flex flex-wrap justify-between pl-20">
                    <Button setmodal={setmodal}  setknow={setknow}/>
                    <Reject setmodal={setmodal}  setknow={setknow}/>
                   </div>:(rideDatas?.bookingStatus === 'confirmed' &&rideDatas?.ReachedDestination !== 'confirmed') ? <button className="bg-green-600 rounded-lg text-white px-2 py-2" onClick={()=>startdrive(tripid)}>start drive</button> :(rideDatas?.bookingStatus === 'rejected') ?<div><button className="bg-red-600 rounded-lg text-white px-2 py-2 cursor-not-allowed">Rejected</button></div>:rideDatas?.bookingStatus === 'Cancelled'?<button className="bg-red-600 rounded-lg text-white px-2 py-2">Cancelled</button>:<button className="bg-green-600 rounded-lg text-white px-2 py-2">Completed</button>}
                  </>
                </div>
              </div>
              {/* <div className="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex rounded-3xl justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                <h3 className="text-xl dark:text-white font-semibold leading-5 bg-black-800 mb-10">
                  Status
                </h3>
                <ol className="relative bg-black-500 border-l border-gray-200 dark:border-gray-700 dark:bg-black-400">
                
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700 " />
                    <span
                      className={
                        !bookingStatus === "rejected"
                          ? "absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900"
                          : "absolute flex items-center justify-center w-8 h-8 bg-yellow-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900"
                      }
                    >
                      {!bookingStatus === "Pending" ? (
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-green-500 dark:text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="0.875em"
                          viewBox="0 0 384 512"
                        >
                          <path d="M0 32C0 14.3 14.3 0 32 0H64 320h32c17.7 0 32 14.3 32 32s-14.3 32-32 32V75c0 42.4-16.9 83.1-46.9 113.1L237.3 256l67.9 67.9c30 30 46.9 70.7 46.9 113.1v11c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 64 32c-17.7 0-32-14.3-32-32s14.3-32 32-32V437c0-42.4 16.9-83.1 46.9-113.1L146.7 256 78.9 188.1C48.9 158.1 32 117.4 32 75V64C14.3 64 0 49.7 0 32zM96 64V75c0 25.5 10.1 49.9 28.1 67.9L192 210.7l67.9-67.9c18-18 28.1-42.4 28.1-67.9V64H96zm0 384H288V437c0-25.5-10.1-49.9-28.1-67.9L192 301.3l-67.9 67.9c-18 18-28.1 42.4-28.1 67.9v11z" />
                        </svg>
                      )}
                    </span>
                    <h3 className="font-medium leading-tight">
                      Reached Pickup
                    </h3>
                  </li>
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700" />
                    <span
                      className={
                        !bookingStatus === "Pending"
                          ? "absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900"
                          : "absolute flex items-center justify-center w-8 h-8 bg-yellow-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900"
                      }
                    >
                      {!bookingStatus === "Pending" ? (
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-green-500 dark:text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="0.875em"
                          viewBox="0 0 384 512"
                        >
                          <path d="M0 32C0 14.3 14.3 0 32 0H64 320h32c17.7 0 32 14.3 32 32s-14.3 32-32 32V75c0 42.4-16.9 83.1-46.9 113.1L237.3 256l67.9 67.9c30 30 46.9 70.7 46.9 113.1v11c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 64 32c-17.7 0-32-14.3-32-32s14.3-32 32-32V437c0-42.4 16.9-83.1 46.9-113.1L146.7 256 78.9 188.1C48.9 158.1 32 117.4 32 75V64C14.3 64 0 49.7 0 32zM96 64V75c0 25.5 10.1 49.9 28.1 67.9L192 210.7l67.9-67.9c18-18 28.1-42.4 28.1-67.9V64H96zm0 384H288V437c0-25.5-10.1-49.9-28.1-67.9L192 301.3l-67.9 67.9c-18 18-28.1 42.4-28.1 67.9v11z" />
                        </svg>
                      )}
                    </span>
                    <h3 className="font-medium leading-tight">
                      Started To Destination
                    </h3>
                  </li>
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700" />
                    <span
                      className={
                        !bookingStatus === "Pending"
                          ? "absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900"
                          : "absolute flex items-center justify-center w-8 h-8 bg-yellow-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900"
                      }
                    >
                      {!bookingStatus === "Pending" ? (
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-green-500 dark:text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="0.875em"
                          viewBox="0 0 384 512"
                        >
                          <path d="M0 32C0 14.3 14.3 0 32 0H64 320h32c17.7 0 32 14.3 32 32s-14.3 32-32 32V75c0 42.4-16.9 83.1-46.9 113.1L237.3 256l67.9 67.9c30 30 46.9 70.7 46.9 113.1v11c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 64 32c-17.7 0-32-14.3-32-32s14.3-32 32-32V437c0-42.4 16.9-83.1 46.9-113.1L146.7 256 78.9 188.1C48.9 158.1 32 117.4 32 75V64C14.3 64 0 49.7 0 32zM96 64V75c0 25.5 10.1 49.9 28.1 67.9L192 210.7l67.9-67.9c18-18 28.1-42.4 28.1-67.9V64H96zm0 384H288V437c0-25.5-10.1-49.9-28.1-67.9L192 301.3l-67.9 67.9c-18 18-28.1 42.4-28.1 67.9v11z" />
                        </svg>
                      )}
                    </span>
                    <h3 className="font-medium leading-tight">
                      Reached Destination
                    </h3>
                  </li>
                </ol>
              </div> */}
            </div>
          </div>
          <div className="m-5 w-90 w-full"></div>
        </div>
      ) : (
        <div>keep</div>
      )}
    </>
  );
}

export default  RideDetails;
