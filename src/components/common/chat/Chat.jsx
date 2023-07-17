import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import Conversation from "./Conversation";
import { userChats } from "../../../axios/services/chat/chat";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

export default function Chat() {
  const { user } = useSelector((state) => state.userReducer.user);
  const { driver } = useSelector((state) => state.driverReducer.driver);

  const [chats, setChat] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState("");
  const [onlineUsers, setOnlineUsers] = useState([]);
  let id = user?._id ?? driver?._id;
  const socket = useRef();
  useEffect(() => {
    socket.current = io("http://localhost:8800");
    socket.current.emit("new-user-add", id);
    socket.current.on("get-users", (users) => {
     
      setOnlineUsers(users);
      
    });
  }, [user, driver]);
  

  useEffect(() => {
    const getchats = async () => {
      try {
        const { data } = await userChats(id);
        setChat(data);
      } catch (error) {
        console.log(error.Message);
      }
    };
    getchats();
  }, [user, driver]);

  // fetching data for messages

  return (
    <div className="container mx-auto shadow-lg rounded-lg">
      {/* headaer */}
      <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
        <div className="font-semibold text-2xl">GoingChat</div>
        {/* <div className="w-1/2">
      <input type="text" name id placeholder="search IRL" className="rounded-2xl bg-gray-100 py-3 px-5 w-full" />
    </div> */}
        <div className="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center">
          RA
        </div>
      </div>
      {/* end header */}
      {/* Chatting */}
      <div className="flex flex-row justify-between bg-white">
        {/* chat list */}
        <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
          {/* search compt */}
          <div className="border-b-2 py-4 px-2">
            <input
              type="text"
              placeholder="search chatting"
              className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
            />
          </div>
          {/* end search compt */}
          {/* user list */}

          {chats.map((chat) => (
            <div onClick={() => setCurrentChat(chat)}>
              <Message data={chat} currentUserId={user?._id ?? driver?._id} />
            </div>
          ))}

          {/* end user list */}
        </div>
        {/* end chat list */}
        {/* message */}
        <div className="w-full px-5 flex flex-col justify-between">
          <div className="flex flex-col mt-5">
            <Conversation
              chat={currentChat}
              currentUser={user?._id ?? driver?._id}
            />
          </div>
        </div>
        {/* end message */}
        {/* <div className="w-2/5 border-l-2 px-5">
      <div className="flex flex-col">
        <div className="font-semibold text-xl py-4">Mern Stack Group</div>
        <img src="https://source.unsplash.com/L2cxSuKWbpo/600x600" className="object-cover rounded-xl h-64" alt />
        <div className="font-semibold py-4">Created 22 Sep 2021</div>
        <div className="font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          perspiciatis!
        </div>
      </div>
    </div> */}
      </div>
    </div>
  );
}
