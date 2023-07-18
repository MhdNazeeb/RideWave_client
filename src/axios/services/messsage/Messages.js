import { chats } from "../../instances/instance";


export const getMessages = async (id) => {
    try {
      const response = await chats.get(`/message/${id}`);
      return response;
    } catch (error) {
      console.log(error.message, "error in signup client......");
    }
  };
export const addMessage = async (data) => {
  
    try {
      const response = await chats.post('/message/',data);
      return response;
    } catch (error) {
      console.log(error.message, "error in signup client......");
    }
  };