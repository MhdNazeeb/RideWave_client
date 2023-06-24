import { axiosClientInstance } from "../../instances/instance";

export const userSignup = async (values) => {
  try {
    const config = {
      headers: {
        // Accept: "application/json",
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    const response = await axiosClientInstance.post("signup", values, config);
    return response;
  } catch (error) {
    console.log(error.message, "error in signup client......");
  }
};
export const userLogin = async (values) => {
  try {
    const config = {
      headers: {
        // Accept: "application/json",
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    const response = await axiosClientInstance.post("login", values, config);
    console.log(response, "response");
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
 export const verifyByLink = async (userid) => {
  try {
    const config = {
      headers: {
        // Accept: "application/json",
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
        
    const response = await axiosClientInstance.get(`verify?userid=${userid}`, config);
    return response;
  } catch (error) {
    console.log(error.message, "error in signup client......");
  }
};
 export const rideBook = async (data,token) => {
  try {

    const config = {
      headers: {
        // Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
        
    const response = await axiosClientInstance.post('book',data,config);
    return response;
  } catch (error) {
    console.log(error.message, "error in signup client......");
  }
};
 export const carFind = async (id,token) => {
  try {
    const config = {
      headers: {
        // Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      params:{id}
    };
        
    const response = await axiosClientInstance.get('car',config)
    return response;
  } catch (error) {
    console.log(error.message, "error in signup client......");
  }
};
