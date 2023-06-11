import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { blockDriver, getDriver } from "../../../axios/services/admin/admin";
import DriverModal from "../driverModalVerification/driverModal";

export default function DriverVerify() {
    const [driverList,setDriverList] = useState({})
    const [driverModal,setDriverModal] = useState(false)
    const [driverStatus,setDriverStatus] = useState('')
    const location = useLocation()

    const driverid = location.state.id

    useEffect(()=>{
        console.log('use efect working')
        getDriver(driverid).then((res)=>{
            console.log(res);
         setDriverList(res.data)
        })
    },[driverModal])

    function handleVerify(status){
     
     setDriverStatus(status)
     setDriverModal(!driverModal) 
    
    }

   
  return (
    <div>
    {  driverModal?<DriverModal  driverStatus={driverStatus} id={driverid} setDriverModal={setDriverModal} />:''}
      <div className="flex justify-around p-10">
        <div className="bg-gray-900 rounded-lg pb-5 max-w-5xl px-4 pt-5 sm:px-6 flex md:flex-nowrap  flex-wrap justify-around">
          <div className="py-10  lg:pb-16 lg:pr-8 lg:pt-6">
            <div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                 {  driverList.name}
                </h1>
              </div>
              <div className="space-y-6">
                <p className="text-base text-gray-400">{driverList.email}</p>
              </div>
            </div>

            {/* <div className="mt-5">
              <h3 className="text-sm font-medium text-white">{driverList.phone}</h3>

              <div className="mt-2">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  <li key="" className="text-gray-400">
                    <span className="text-gray-400">phone</span>
                  </li>
                </ul>
              </div>
            </div> */}

            {/* <div className="mt-3">
              <h2 className="text-sm font-medium text-white">
                Domain Looking for
              </h2>

              <div className="mt-2 space-y-6">
                <p className="text-sm text-gray-400">domail</p>
              </div>
            </div> */}
          </div>
          <div>
            <div>
              <img
                src={driverList.license}
                alt=""
                className=" md:h-64 w-64  object-cover object-center"
              ></img>
            </div>
          {driverList.isverify === 'not verified' ?
          <>
           <button
              type="button"
              className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
           onClick={()=>handleVerify('verify')} >
             verify Driver
            </button>
            <button
              type="submit"
              className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={()=>handleVerify('reject')}>
              Reject
            </button>
          
           </>: driverList.isverify === 'verified' ? <button
              type="submit"
              className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled"
              >
              verified ☑️
            </button>: <button
              type="submit"
              className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 "
              // onClick={()=>handleVerify('reject')}
              >
              Rejected
            </button> }
          

          
          </div>
        </div>
                
      </div>
    </div>
  );
}
