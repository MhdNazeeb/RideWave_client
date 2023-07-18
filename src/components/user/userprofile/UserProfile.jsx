import React, { useEffect, useState } from "react";
import moment from 'moment';
import { useSelector } from "react-redux";
import User_profile_edit from "../edit_profile/User_profile._edit";
import { findUser } from "../../../axios/services/user/User";


function UserProfile() {
 
    const userDetails =useSelector((state)=>state.userReducer.user)

    const [userData,setUserData] = useState({})

    const  { user,token }= userDetails
    const userid = user._id

    const formattedDate = moment(user?.updated).format('YYYY-MM-DD');

    const [usermodal,setusermodal] = useState(false)
     
    function modal() {
    setusermodal(true)
    
    }

    useEffect(()=>{
       async function user() {
        const res = await findUser(userid,token)
          setUserData(res?.data)
       }
       user()
    },[usermodal])
console.log(userData,'this is  userData');
    
    


  return (
    <>
    {usermodal?<User_profile_edit user={user} setusermodal={setusermodal}  token={token}  />:""}
    <div className="bg-gray-200">
      <div className="">
        <div className="md:flex no-wrap h-screen">
          <div className="w-full md:mx-2 md:mb-2">
            <div className="profileside p-5">
              <div className="flex flex-wrap justify-between p-5 bg-transparent mb-3"></div>
              <div className="image overflow-hidden flex flex-wrap align-middle justify-center ">
                <div className="w-full flex flex-wrap align-middle justify-center">
                  <div class=""
                  >
                  </div>
                </div>
                
              </div>

              <div className="flex justify-center details  ">
                <ul className="w-full p-5 m-24 bg-white opacity-90 text-gray-600 hover:text-gray-700 hover:shadow drop-shadow-[6px_8px_6px_rgba(1,1,0,0.5)] rounded shadow-sm md:w-1/3 md:p-10">
                  <li className="flex justify-end py-3 ">
                    <div>
                    <button className="px-5 p-1  text-white bg-blue-600 rounded-lg"
                    onClick={modal}
                    >Edit</button>
                    </div>
                    
                   
                    <hr className="text-black bg-black"/>
                  </li>
                  <li className="flex items-center py-3">
                    <span>Name</span>
                    <span className="ml-auto font-bold uppercase">
                      {userData?.name}
                    </span>
                  </li>
                 
                  <li className="flex items-center py-3">
                    <span>Email</span>
                    <span className="ml-auto truncate">
                     {userData?.email}
                    </span>
                  </li>
                  <li className="flex items-center py-3">
                    <span>Designation</span>
                    <span className="ml-auto">Client</span>
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
    </>
  );
}

export default UserProfile;
