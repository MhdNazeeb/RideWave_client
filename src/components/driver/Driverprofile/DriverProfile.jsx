import React, { useEffect, useState } from "react";
import moment from 'moment';
import  './driverProfile.css'
import ProfileModal from "../edit_profile/ProfileModal";
import { getProfile } from "../../../axios/services/driver/driverSignup";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


function DriverProfile({driver}) {

  const {token} = useSelector((state)=>state.driverReducer.driver)

  const [driverData,setdriverData] = useState({})

  const navigate = useNavigate()

  const [editModal,setEditModal] = useState(false)

  const [refresh ,setRefrsh] = useState()
  
  const formattedDate = moment(driver.updated).format('YYYY-MM-DD');
 
  function handleClick(status){
    if(status==='edit'){
      setEditModal(true)
    }else{
       navigate('/driver/car_deatails',{state:{driverData}})
    }
    
  }
  useEffect(()=>{
    
    getProfile(driver._id,token).then((res)=>{
     setdriverData(res.data)
    })
  },[refresh])


  return (
    
    <div className="bg-white">
     { editModal? <ProfileModal driver={driver} driverData={driverData} setEditModal={setEditModal} setRefrsh={setRefrsh} />:''}
      <div className="">
        <div className=" car md:flex no-wrap h-screen  ">
          <div className=" w-full md:mx-2 md:mb-2">
            <div className=" car profileside bg-gray-400 p-5">
              <div className="flex flex-wrap justify-between p-5 bg-transparent mb-3"></div>
              <div className="image overflow-hidden flex flex-wrap align-middle justify-center ">
                <div className="w-full flex flex-wrap align-middle justify-center">
                  <div class=""
                  >
                  </div>
                </div>
                
              </div>

              <div className="flex justify-center details">
                <ul className="w-full p-5 bg-gray-200 opacity-90 text-gray-600 hover:text-gray-700 hover:shadow  rounded shadow-sm md:w-1/3 md:p-10">
                  <li className="flex justify-end py-3 ">
                    <div>
                    <button className="px-5 p-1  text-white bg-blue-600 rounded-lg" onClick={()=>handleClick('edit')}>Edit</button>
                    </div>
                    <div className=" lg:px-3 sm:px-1">
                    <button className="px-5 p-1  text-white bg-blue-600 rounded-lg" onClick={()=>handleClick('car')}>Car Deatails </button>
                    </div>
                    
                   
                    <hr className="text-black bg-black"/>
                  </li>
                  <li className="flex items-center py-3">
                    <span>Name</span>
                    <span className="ml-auto font-bold uppercase">
                      {driverData.name}
                    </span>
                  </li>
                 
                  <li className="flex items-center py-3">
                    <span>Email</span>
                    <span className="ml-auto truncate">
                      {driverData.email}
                    </span>
                  </li>
                  <li className="flex items-center py-3">
                    <span>Designation</span>
                    <span className="ml-auto">Driver</span>
                  </li>
                  <li className="flex items-center py-3">
                    <span>Member since</span>
                    <span className="ml-auto">
                      {formattedDate}
                    </span>
                  </li>
                  <li className="flex items-center py-3">
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverProfile;
