import { axiosClientInstance } from "../../instances/instance";

export const DriverSignup = async (values) => {
  try {
    const config = {
      headers: {
        // Accept: "application/json",
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    const response = await axiosClientInstance.post("/driver/signup", values, config);
    return response;
  } catch (error) {
    console.log(error.message, "error in signup client......");
  }
};

 