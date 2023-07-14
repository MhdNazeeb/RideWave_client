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
     console.log('this car list');
     return response;
   } catch (error) {
     console.log(error.message, "error in signup client......");
   }
 };
export const  blockDrivers = async (status,id) => {
   try {
     const config = {
       headers: {
         // Accept: "application/json",
         // Authorization: `Bearer ${token}`,
         "Content-Type": "application/json",
       },
     };
 
     
     const response = await axiosAdminInstance.patch("drivers",{id,status},config);
     return response;
   } catch (error) {
     console.log(error.message, "error in signup client......");
   }
 };
export const  getCar = async (id) => {
  console.log(id,'this car id');
   try {
     const config = {
       headers: {
         // Accept: "application/json",
         // Authorization: `Bearer ${token}`,
         "Content-Type": "application/json",
       },
     };
 
     
     const response = await axiosAdminInstance.get("car",{params:{id}},config);
     return response;
   } catch (error) {
     console.log(error.message, "error in signup client......");
   }
 };
 export const  verifyCar = async (status,id) => {
  try {
    const config = {
      headers: {
        // Accept: "application/json",
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    
    const response = await axiosAdminInstance.patch("car",{id,status},config);
    return response;
  } catch (error) {
    console.log(error.message, "error in signup client......");
  }
};
 export const  tripFind = async (token,id) => {
  try {
    const config = {
      headers: {
        // Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      params:{id}
    };

    
    const response = await axiosAdminInstance.get("trip_find",config);
    return response;
  } catch (error) {
    console.log(error.message, "error in signup client......");
  }
};

export const findTrip = async (token)=>{
 try {
  const config = {
    headers: {
      // Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  const response = await axiosAdminInstance.get("find_trip",config);
    return response;
 } catch (error) {
  console.log(error.message, "error in signup client......");
 }
}
export const adminReport = async (token,adminid)=>{
 try {
  const config = {
    headers: {
      // Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    params:{adminid}
  };
  const response = await axiosAdminInstance.get("admin_report",config);
    return response;
 } catch (error) {
  console.log(error.message, "error in signup client......");
 }
}