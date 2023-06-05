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