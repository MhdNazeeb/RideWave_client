import { axiosDriverInstance } from "../../instances/instance";

export const driverSignup = async (values) => {

  try {
    const config = {
      headers: {
        // Accept: "application/json",
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
   
    
    const response = await axiosDriverInstance.post("/signup", values, config);
    return response;
  } catch (error) {
    if(error.message==='Request failed with status code 500');
    return error.message
   
  }

};
export const driverLogin = async(values)=>{
 try {
  const config = {
    headers: {
      // Accept: "application/json",
      // Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
 
  
  const response = await axiosDriverInstance.post("/login", values, config);
  return response;
 } catch (error) {
  console.log(error.message);
 }
}
export const carRegistor = async(values)=>{
  console.log(values,'this is vvalue');
 try {
  const config = {
    headers: {
      // Accept: "application/json",
      // Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
 
  
  const response = await axiosDriverInstance.post("/car", values, config);
  return response;
 } catch (error) {
  console.log(error.message);
 }
}
export const editeProfile = async(data)=>{
 try {
  const config = {
    headers: {
      // Accept: "application/json",
      // Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
 
  
  const response = await axiosDriverInstance.patch("/profile", {data}, config);
  return response;
 } catch (error) {
  console.log(error.message);
 }
}
export const getProfile = async(data)=>{
 try {
  const config = {
    headers: {
      // Accept: "application/json",
      // Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
 
  
  const response = await axiosDriverInstance.get("/profile", {params:{data}}, config);
  return response;
 } catch (error) {
  console.log(error.message);
 }
}


 