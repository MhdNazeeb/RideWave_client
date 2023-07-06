import { axiosClientInstance } from "../../instances/instance";
import { trip } from "../driver/driverSignup";

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
 export const userPrfile = async (token,data) => {

  try {
    const config = {
      headers: {
        // Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
        
    const response = await axiosClientInstance.patch('user',data,config)
    return response;
  } catch (error) {
    console.log(error.message, "error in signup client......");
  }
};
 export const findUser = async (id,token) => {
console.log(id,token ,'this is token');
  try {
    const config = {
      headers: {
        // Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      params:{id}
    };
    
        
    const response = await axiosClientInstance.get('user',config)
    return response;
  } catch (error) {
    console.log(error.message, "error in signup client......");
  }
};
export const history = async (userid)=>{

  try {
   const config = {
     headers: {
       // Accept: "application/json",
       // Authorization: `Bearer ${token}`,
       "Content-Type": "application/json",
     },
     params:{userid}
   };
   
   
   const response = await axiosClientInstance.get('/history',config);
   return response;
  } catch (error) {
   console.log(error.message);
 
  }
 }
export const cancelTrip = async (tripid)=>{
  try {
   const config = {
     headers: {
       // Accept: "application/json",
       // Authorization: `Bearer ${token}`,
       "Content-Type": "application/json",
     },
     
   };
   
   
   const response = await axiosClientInstance.post('/cancel_ride',{tripid},config);
   return response;
  } catch (error) {
   console.log(error.message);
 
  }
 }
export const tripFind = async (tripid)=>{
  try {
   const config = {
     headers: {
       // Accept: "application/json",
       // Authorization: `Bearer ${token}`,
       "Content-Type": "application/json",
     },
     params:{tripid}
   };
   
   
   const response = await axiosClientInstance.get('/trip',config);
   return response;
  } catch (error) {
   console.log(error.message);
 
  }
 }
