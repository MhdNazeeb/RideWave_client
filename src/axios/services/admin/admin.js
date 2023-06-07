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
export const  getdriver = async (id,blocking) => {
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