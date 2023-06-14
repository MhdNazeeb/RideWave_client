import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { car } from "../../../../axios/services/driver/driverSignup";
import EditCarModal from "./editCarModal/EditCarModal";

function carDeatails() {
  const [carData, setCarData] = useState({});

  const { driver, token } = useSelector((state) => state.driverReducer.driver);

  const [editmodal,setEditModal] = useState(false)

  const driverid = driver._id;


  useEffect(() => {

    car(driverid, token).then((res) => {
      
      setCarData(res.data)
    });

  },[]);
  function handleClick() {
    setEditModal(true)
  }
 
  return (
  
    <div className="flex-wrap  h-fit w-full details bg-white drop-shadow-[95px_65px_5px_rgba(0,0,0,0.5)]">
    {editmodal?<EditCarModal/>:""}
      <img
        src={carData.carimage}
        alt=""
        className="w-1/2 h-3/4"
      />

      <ul className=" bg-gray-200 opacity-90 text-gray-600 hover:text-gray-700 hover:shadow  rounded shadow-sm w-full p-10">
        <li className="flex justify-end py-3  ">
          <div>
            <button
              className="px-5 p-1  text-white bg-blue-600 rounded-lg"
              onClick={handleClick}
              >
              Edit
            </button>
          </div>

          <hr className="text-black bg-black" />
        </li>
        <li className="flex items-center py-3">
          <span>Modal</span>
          <span className="ml-auto font-bold uppercase">{carData.model}</span>
        </li>
        <li className="flex items-center py-3">
          <span>Features</span>
          <span className="ml-auto truncate">{carData.Features}</span>
        </li>
        <li className="flex items-center py-3">
          <span>Registration NO</span>
          <span className="ml-auto">{carData.RegistrationNumber}</span>
        </li>
        <li className="flex items-center py-3">
          <span>Year</span>
          <span className="ml-auto">{carData.year}</span>
        </li>
      </ul>
    </div>
  );
}

export default carDeatails;
