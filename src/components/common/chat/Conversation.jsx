import React, { useEffect, useState } from "react";
import { getUser } from "../../../axios/services/chat/chat";
import { getMessages } from "../../../axios/services/messsage/Messages";
import { format } from "timeago.js";
import InputEmoji from "react-input-emoji";
import { BsFillSendCheckFill } from 'react-icons/bs';

function Conversation({ chat, currentUser }) {
  const [userData, setUserData] = useState(null);
  const [messages, setMessage] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // feching data for header
  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUser);
    const getUserData = async () => {
      try {
        const { data } = await getUser(userId);
        setUserData(data);
      } catch (error) {
        console.log(error.Message);
      }
    };
    if (chat !== null) getUserData();
  }, [chat, currentUser]);

  // fetching data for messages
  useEffect(() => {
    const fetchingMessages = async () => {
      console.log("reach heare");
      try {
        const { data } = await getMessages(chat._id);
        console.log(data, "this is data");
        setMessage(data);
      } catch (error) {
        console.log(error.Message);
      }
    };
    if (chat !== null) fetchingMessages();
  }, [chat]);

  const handleChange = (newMessage) => {
    setNewMessage(newMessage);
  };
  console.log(messages,'this is delete message');
  console.log(chat,'this  is chat');
  return (
    <>
      {chat !== null ? (
        <>
            {messages.map((message) => (
          <div className={message.senderId === currentUser ? "flex justify-end mb-4 mt-36":"flex justify-start mb-4"}>
              <div
                className={
                  message.senderId === currentUser
                    ? "mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
                    : "ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
                }
              >
                <span>{message.text}</span>
                <span className="flex flex-row ml-6 font-size: 0.75rem;line-height: 1rem ">
                  {format(message.createdAt)}
                </span>
              </div>
            
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              className="object-cover h-8 w-8 rounded-full"
              alt
            />
          </div>
          ))}
          <div className="pt-9 flex">
            <InputEmoji value={newMessage} onChange={handleChange} />

            <BsFillSendCheckFill
            className="w-8 h-10 text-blue-500"
            />
          </div>
        </>
      ) : (
        <div className="flex justify-between">Tap To Start</div>
      )}
      {/* <div className="flex justify-start mb-4">
        <img
          src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
          className="object-cover h-8 w-8 rounded-full"
          alt
        />
        <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at
          praesentium, aut ullam delectus odio error sit rem. Architecto nulla
          doloribus laborum illo rem enim dolor odio saepe, consequatur quas?
        </div>
      </div> */}
    </>
  );
}

export default Conversation;
