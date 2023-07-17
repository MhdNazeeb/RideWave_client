
import { chats } from "../../instances/instance";

export const userChats = async (id) => {
    console.log(id,'this is id');
  try {
    const response = await chats.get(`/chat/${id}`);
    return response;
  } catch (error) {
    console.log(error.message, "error in signup client......");
  }
};

export const getUser = async (id) => {
  try {
    const response = await chats.get(`/chat/user/${id}`);
    return response;
  } catch (error) {
    console.log(error.message, "error in signup client......");
  }
};

