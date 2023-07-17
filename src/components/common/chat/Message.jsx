import React, { useEffect, useState } from "react";
import { getUser } from "../../../axios/services/chat/chat";

function Message({ currentUserId, data }) {
  const [userData, setUserData] = useState(null);
  useEffect(()=>{
    const userId = data.members.find((id)=>id!==currentUserId)
    const getUserData = async()=>{
        try {
            const {data} = await getUser(userId)

        setUserData(data)
        } catch (error) {
            console.log(error.Message);
        }
        
        
    }
    getUserData()

  },[])

  return (
    <>
      <div className="flex flex-row py-4 px-2 justify-center items-center border-b-2">
        <div className="w-1/4">
          <img
            src="../img/user.png"
            className="object-cover h-12 w-12 rounded-full"
            alt
          />
        </div>
        <div className="w-full">
          <div className="text-lg font-semibold">{userData?.name}</div>
          <span className="text-gray-500">online</span>
        </div>
      </div>
    </>
  );
}

export default Message;
