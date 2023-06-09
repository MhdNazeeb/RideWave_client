import { axiosAdminInstance } from "../../instances/instance";

export const adminLogin = async (values) => {
  try {
    const config = {
      headers: {
        // Accept: "application/json",
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    const response = await axiosAdminInstance.post("login", values, config);
    return response;
  } catch (error) {
    console.log(error.message, "error in signup client......");
  }
};
export const getUsers = async () => {
  try {
    const config = {
      headers: {
        // Accept: "application/json",
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    
    const response = await axiosAdminInstance.get("users", config);
    return response;
  } catch (error) {
    console.log(error.message, "error in signup client......");
  }
};
export const block = async (id,blocking) => {
 console.log(id ,blocking,'this is user block');
  try {
    const config = {
      headers: {
        // Accept: "application/json",
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    
    const response = await axiosAdminInstance.patch("block",{id,blocking},config);
    return response;
  } catch (error) {
    console.log(error.message, "error in signup client......");
  }
};
export const  getDrivers = async (id,blocking) => {
 console.log(id ,blocking,'this is user block');
  try {
    const config = {
      headers: {
        // Accept: "application/json",
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    
    
    const response = await axiosAdminInstance.get("drivers",config);
    return response;
  } catch (error) {
    console.log(error.message, "error in signup client......");
  }
};
export const  getDriver = async (id) => {
 console.log(id ,'this is user');
  try {
    const config = {
      headers: {
        // Accept: "application/json",
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    
    const response = await axiosAdminInstance.get("driver",{params:{id}},config);
    return response;
  } catch (error) {
    console.log(error.message, "error in signup client......");
  }
};
export const  blockDriver = async (status,id) => {
  try {
    const config = {
      headers: {
        // Accept: "application/json",
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    
    const response = await axiosAdminInstance.patch("driver",{status,id},config);
    return response;
  } catch (error) {
    console.log(error.message, "error in signup client......");
  }
};
export const  getCarList = async () => {
  
   try {
     const config = {
       headers: {
         // Accept: "application/json",
         // Authorization: `Bearer ${token}`,
         "Content-Type": "application/json",
       },
     };
 
     
     const response = await axiosAdminInstance.get("carlist",config);
     return response;
   } catch (error) {
     console.log(error.message, "error in signup client......");
   }
 };