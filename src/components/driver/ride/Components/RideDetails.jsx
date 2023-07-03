import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { tripFind } from "../../../../axios/services/driver/driverSignup";
import Loader from "../../../common/Loader";


function RideDetails() {
  const rideData = useSelector((state) => state.rideReducer);
  const [rideDatas,setDatas] = useState({})
  const [loader, setLoader] = useState(false);
  useEffect(()=>{
    (async function () {
        setLoader(true)
      const res = await tripFind(rideData.id)
      setLoader(false)
      setDatas(res?.data?.findtrip)
      
     
    }())
      
  },[])

  return (

   <>
   {loader && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-white bg-opacity-25 backdrop-filter backdrop-blur z-50">
          <Loader />
        </div>
      )}

    
    <div class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0 ">
      <div class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
        <div class="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full rounded-lg">
          <p class="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
            Ride Details
          </p>
          <div class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
            <div class="pb-4  w-full md:w-40"></div>
            <div class="border-b  border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
              <div class="w-full flex flex-col justify-start items-start space-y-8">
                <h3 class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                  Customer:{rideDatas?.passenger?.name}
                </h3>
                <div class="flex justify-start items-start flex-col space-y-2">
                  <p class="text-sm dark:text-white leading-none text-gray-800">
                    <span class="dark:text-gray-400 text-black">
                      Pickup:{rideDatas?.location?.pickup}
                    </span>
                  </p>
                  <p class="text-sm dark:text-white leading-none text-gray-800">
                    <span class="dark:text-gray-400 text-black">
                      Dropoff:{rideDatas?.location?.dropoff}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col rounded-lg">
      
        <div class="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
          <div class="flex flex-col justify-start items-start flex-shrink-0">
            <div class="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
              <div class="flex justify-start items-start flex-col space-y-2">
                <button className="btn btn-xs btn-success" onClick="">
                  Reached Pickup
                </button>

                <label
                  htmlFor="my-modal-8"
                  className="btn btn-xs btn-success text-black hover:bg-red"
                >
                  Start To Destination
                </label>
              </div>
            </div>

            <div class="flex flex-col gap-2  justify-start text-gray-800 dark:text-white md:justify-start py-4 border-b border-gray-200 w-full">
              <div className="flex gap-4">
                <FontAwesomeIcon className="pt-1 ps-4" icon={faCar} fade />
                <label
                  htmlFor="my-modal-7"
                  className="btn bg-error border-none text-black hover:bg-red"
                >
                  Start ride
                </label>
              </div>
              <div className="flex gap-4">
              <FontAwesomeIcon className="pt-1 ps-4" icon={faMessage}  />
                <label
                  htmlFor="my-modal-7"
                  className="btn bg-error border-none text-black hover:bg-red"
                >
                  chat
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default RideDetails;
