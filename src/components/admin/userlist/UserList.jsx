import React, { useEffect, useState } from "react";
import { getUsers } from "../../../axios/services/admin/admin";
import UserModal from "../usermodalverification/UserModal";


<<<<<<< HEAD
=======
export default function UserList() {
>>>>>>> 3e7426a829355d3949359c8ae60763aac56bcbb2
  const [userData, setUserData] = useState([]);
  const [blockStatus, setBlockStatus] = useState(false);
  const [usermodal, setUserModal] = useState(false);
  const [userId, setuserId] = useState('');
  const [userStatus, setUserstatus] = useState('');

  useEffect(() => {
    getUsers().then((res) => {
      setUserData(res?.data);

    });
  }, [blockStatus]);
   
  console.log(userData,'this is user data')

  const statusChange = async (id,blocking) => {
    setUserModal(true);
    setuserId(id);
    setUserstatus(blocking);
  };


  return (
    <>
     { usermodal && <UserModal id={userId} setBlockStatus={setBlockStatus} status={userStatus} setUserModal={setUserModal} />}
      <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-regal-blue">
        <div className="space-y-2 col-span-full lg:col-span-1">
          <p className="font-extrabold text-lg text-real-orange">
            User Information
          </p>
        </div>
      </fieldset>
      <div className="">
        <div className="min-w-screen  flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
          <div className="w-full lg:w-5/6">
            <div className="bg-white shadow-md rounded my-6 overflow-x-scroll scrollbar-hide">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Client</th>
                    <th className="py-3 px-6 text-center">Email</th>
                    <th className="py-3 px-6 text-center">Rides</th>
                    <th className="py-3 px-6 text-center">Status</th>
                    <th className="py-3 px-6 text-center">user rights</th>
                    {/* <th className="py-3 px-6 text-center">Actions</th> */}
                  </tr>
                </thead>
                {userData &&
                  userData.map((item) => {
                    return (
                      <tbody className="text-gray-600 text-sm font-light">
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                          <td className="py-3 px-6 text-left">
                            <div className="flex items-center">
                              <div className="mr-2">
                              
                              </div>
                              <span>{item.name}</span>
                            </div>
                          </td>
                          <td className="py-3 px-6 text-center whitespace-nowrap">
                            <div className=" text-center">
                              <span className="font-medium ">{item.email}</span>
                            </div>
                          </td>
                          <td className="py-3 px-6 text-center">
                            <div className="flex items-center justify-center">
                              0
                            </div>
                          </td>
                          <td className="py-3 px-6 text-center">
                            {item.status ? (
                              <button
                                className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs"
                                onClick={() => statusChange(item._id, "active")}
                              >
                                active
                              </button>
                            ) : (
                              <button
                                className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs"
                                onClick={() =>
                                  statusChange(item._id, "block")
                                }
                              >
                                 block
                              </button>
                            )}
                          </td>
                          <td className="py-3 px-6 text-center">
                            {item.userVerify ? (
                              <button
                                className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs"
                                onClick=""
                              >
                                verified
                              </button>
                            ) : (
                              <button
                                className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs"
                                onClick=""
                                  
                                
                              >
                                not verified
                              </button>
                            )}
                          </td>
                          {/* <td className="py-3 px-6 text-center">
                            <div className="flex item-center justify-center">
                              <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td> */}
                        </tr>
                      </tbody>
                    );
                  })}
              </table>
            </div>
          </div>
        </div>
            
      </div>
    </>
  );
}
