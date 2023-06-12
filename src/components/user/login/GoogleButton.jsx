import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { axiosClientInstance } from "../../../axios/instances/instance";
import { ClientLogin } from "../../../redux/userSlice";

const GoogleButton = () => {
  const dispatch=useDispatch()
  const navigate = useNavigate();
   const GoogleAuth = async (id) => {
    const response = await axiosClientInstance.post("/login", { id ,google:true});
    const data = response;
  
    return data;
   }
  const responseMessage = async (response) => {
    await GoogleAuth(response.credential).then((response) => {
      console.log(response)
        if (response?.data?.status === "Login success") {
          toast.success(response?.data?.status);
          dispatch(
            ClientLogin({
              token: response?.data?.token,
              user: response?.data?.user,
            })
          );
          navigate("/");
        } else if (response?.data.status === "User doesn't exist") {
          toast.error(response?.data?.status);
        } else if (
          response.data.status === "Account has been verified successfully"
        ) {
          dispatch(
            ClientLogin({
              token: response?.data?.token,
              user: response?.data?.user,
            })
          );
          navigate("/");
        } else if (response?.data?.status === "something wrong") {
          toast.error(response?.data?.status);
        } else if (response?.data?.message === "your account has been banned") {
          toast.error(response?.data?.message);
        } else toast.success(response?.data?.status);
      
    });
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <>
      <GoogleOAuthProvider clientId="117505505210-ea4bhk9rdtn1qk4k52ffrijj3kkvf9uu.apps.googleusercontent.com">
        <button className="flex items-center  justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative">
          <span className="absolute left-4"></span>
          <span className="flex items-center text-black">
            <GoogleLogin
              className="text-black"
              onSuccess={responseMessage}
              onError={errorMessage}
            />
          </span>
        </button>
      </GoogleOAuthProvider>
    </>
  );
}


export default GoogleButton;