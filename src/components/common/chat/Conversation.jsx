import React, { useEffect, useRef, useState } from "react";
import { getUser } from "../../../axios/services/chat/chat";
import {
  addMessage,
  getMessages,
} from "../../../axios/services/messsage/Messages";
import { format } from "timeago.js";
import InputEmoji from "react-input-emoji";
import { BsFillSendCheckFill } from "react-icons/bs";


function Conversation({ chat, currentUser, setSendMessage, receiveMessage }) {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const scrollRef = useRef()

  const messagesContainerRef = useRef();

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (receiveMessage !== null && receiveMessage.chatId === chat._id) {
      setMessages([...messages, receiveMessage]);
    }
  }, [receiveMessage]);

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
  }, [chat, currentUser,messages]);

  // fetching data for messages
  useEffect(() => {
    const fetchingMessages = async () => {
      console.log("reach heare");
      try {
        const { data } = await getMessages(chat._id);
        console.log(data, "this is data");
        setMessages(data);
      } catch (error) {
        console.log(error.Message);
      }
    };
    if (chat !== null) fetchingMessages();
  }, [chat,messages]);

  const handleChange = (newMessage) => {
    setNewMessage(newMessage);
  };

  async function handleSend(e) {
    e.preventDefault();

    const message = {
      senderId: currentUser,
      text: newMessage,
      chatId: chat._id,
    };

    // send message to data base

    try {
      const { data } = await addMessage(message);
      
      setNewMessage([...messages, data]);
      setNewMessage("");
    } catch (error) {
      console.log(error.message);
    }

    // send message to socket server

    const receiverId = chat.members.find((id) => id !== currentUser);
    setSendMessage({ ...message, receiverId });
  }

  return (
    <>
      {chat !== null ? (
        <>
          {messages.map((message) => (
            <div 
            
              className={
                message.senderId === currentUser
                  ? "flex justify-end mt-4"
                  : "flex justify-start mb-7"
              }
              ref={messagesContainerRef}
            >
              <div
                className={
                  message.senderId === currentUser
                    ? "mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
                    : "ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
                }
              >
                <span>{message.text}</span>
                <span className="flex flex-row ml-6 font-size: 0.75rem;line-height: 1rem "></span>
                <span className="text-xs">{format(message.createdAt)}</span>
              </div>

             {  message.senderId === currentUser ?<img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="object-cover h-8 w-8 rounded-full"
                alt
              />:
              <img
              src="../img/user.png"
              className="object-cover h-5 w-5 rounded-full"
              alt
            />
              }
            </div>
          ))}
          <div className="flex">
            <InputEmoji value={newMessage} onChange={handleChange}
         
             
            
            />

            <BsFillSendCheckFill
              className="w-8 h-10 text-blue-500"
              onClick={handleSend}
             
            />
          </div>
        </>
      ) : (
        <div className="flex justify-between">
          <img src="../img/4112338.jpg" alt="user" />
        
        </div>
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
