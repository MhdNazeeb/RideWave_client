import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getCar } from "../../../axios/services/admin/admin";
import CarModal from "../carModalVerification/CarModal";

export default function CarVerify() {
  const location = useLocation();
  const [carData, setCarData] = useState([]);
  const [carModal,setCarModal]=useState(false)
  const [status,setStatus] = useState('')
  const [carid,setCarid] = useState('')

  const carId = location.state.id;

  useEffect(() => {
    getCar(carId).then((res) => {
      console.log(res, "this is response");
      setCarData(res.data);
    });
  }, []);

  function handleVerify(carstatus,Id) {
    setStatus(carstatus)
    setCarid(Id)
   setCarModal(true)
  }

  return (

    <div>
       {carModal? <CarModal status={status} carid={carid} setCarModal={setCarModal}/>:''}
      <div className="flex justify-around p-10">
        <div className="bg-gray-900 rounded-lg pb-5 max-w-5xl px-4 pt-5 sm:px-6 flex md:flex-nowrap  flex-wrap justify-around">
          <div className="py-10  lg:pb-16 lg:pr-8 lg:pt-6">
            <div>
              <div>
                <h6
                  htmlFor=""
                  className=" text-lg  tracking-tight text-white sm:text-sm uppercase"
                >
                  car Model
                  {/* <h6 className=" text-red-800">
                  {carData.model}
                </h6> */}
                </h6>
                <input
                  type="text"
                  className="rounded-xl mt-2 mb-3"
                  value={carData.model}
                />
              </div>
              <div className="">
                <h6
                  htmlFor=""
                  className="mb-1 mt-3 text-lg  tracking-tight text-white sm:text-sm uppercase"
                >
                  year
                  {/* <h6 className=" text-red-800">
                  {carData.model}
                </h6> */}
                </h6>
                <input
                  type="text"
                  className="rounded-xl mb-3"
                  value={carData.year}
                />
              </div>
            </div>
            <div className="mt-5">
              <h6
                htmlFor=""
                className=" text-lg  tracking-tight text-white sm:text-sm uppercase"
              >
                Registration Number
                {/* <h6 className=" text-red-800">
                  {carData.model}
                </h6> */}
              </h6>
              <input
                type="text"
                className="rounded-xl  mt-2 mb-4"
                value={carData.RegistrationNumber}
              />

              {/* <div className="mt-2">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  <li key="" className="text-gray-400">
                    <span className="text-gray-400"></span>
                  </li>
                </ul>
              </div> */}
            </div>
            <div className="mt-3">
              <h6
                htmlFor=""
                className=" text-lg  tracking-tight text-white sm:text-sm uppercase"
              >
                Features
                {/* <h6 className=" text-red-800">
                  {carData.model}
                </h6> */}
              </h6>
              <input
                type="text"
                className="rounded-xl  mt-2 mb-3"
                value={carData.Features}
              />

              {/* <div className="mt-2 space-y-6">
              <h6 htmlFor="" className=" text-xl  tracking-tight text-white sm:text-lg uppercase">car Model
                 <h6 className=" text-red-800">
                  {carData.model}
                </h6> 
                </h6>
                <input type="text" className="rounded xl  mt-2" value={carData.model} />
              </div> */}
            </div>{" "}
          </div>
          <div>
            <div>
              <img
                src={carData.carimage}
                alt=""
                className=" md:h-64 w-64  object-cover object-center"
              ></img>
            </div>

            {carData.carVerify === "not verified" ? (
                <>
              <button
                type="button"
                className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => handleVerify("verified",carData._id)}
              >
                verify Driver
              </button>
               <button
               type="submit"
               className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
               onClick={() => handleVerify("Rejected",carData._id)}>
               Reject
             </button>
             </>
            ) : carData.carVerify === "verified" ? (
              <button
                type="submit"
                className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                 verified ☑️
              </button>
            ) : (
              <button
                type="submit"
                className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled"
              >
                Rejected
              </button>
            )}
          </div>
        </div>
                
      </div>
    </div>
  );
}
