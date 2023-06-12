import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { userLoginSchema } from "../../../validations/userLogin";
import { userLogin } from "../../../axios/services/user/User";
import { ClientLogin } from "../../../redux/userSlice";
import { driverLogin } from "../../../axios/services/driver/driverSignup";
import { driverLoginRedux } from "../../../redux/driverSlice";
import "./UserLogin.css";
import GoogleButton from "./GoogleButton";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, setLogin] = useState("user");

  async function onSubmit() {
    if (login === "user") {
      const response = await userLogin(values);
      console.log(response?.data?.status,'this status ');
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
    } else {
      const response = await driverLogin(values);
      if (response?.data?.status === "Login success") {
        toast.success(response?.data?.status);
        dispatch(
          driverLoginRedux({
            token: response?.data?.token,
            driver: response?.data?.driver,
          })
        );
        navigate("/");
      } else if (response?.data?.status === "something wrong") {
        toast.error(response?.data?.status);
      } else if (response?.data?.status === "User doesn't exist") {
        toast.error(response?.data?.status);
      } else if (response?.data?.status === "incorrect password") {
        toast.error(response?.data?.status);
      } else if (response?.data?.status === "your account has been banned") {
        toast.error(response?.data?.status);
      } else if (
        response?.data?.status === "it may take 24 houres to verify driver"
      ) {
        toast.success(response?.data?.status);
      } else if (response?.data?.status === "We regret to inform you that your account verification request has been rejected") {
        console.log(response?.data?.status);
        toast.error(response?.data?.status);
      }
    }
  }
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: userLoginSchema,
      onSubmit,
    });

  return (
    <div className="bg-gray-800 relative flex flex-col justify-center min-h-screen overflow-hidden ">
      <div className="w-full p-6 m-auto bg-gray-900 rounded-md shadow-xl lg:max-w-xl">
        <div className="flex justify-around">
          <div
            className={
              login === "user"
                ? "bg-violet-900 rounded-lg w-1/2 p-5 text-2xl font-semibold text-center  text-white uppercase cursor-pointer"
                : "bg-gray-800 w-1/2 p-5  text-2xl font-semibold text-center  text-white uppercase cursor-pointer"
            }
            onClick={() => setLogin("user")}
          >
            login user
          </div>
          <div
            className={
              login === "driver"
                ? "bg-violet-900 rounded-lg w-1/2 p-5 text-2xl font-semibold text-center  text-white uppercase cursor-pointer"
                : " bg-gray-800 w-1/2 p-5  text-2xl font-semibold text-center  text-white uppercase cursor-pointer"
            }
            onClick={() => setLogin("driver")}
          >
            login driver
          </div>
        </div>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.email && touched.email && (
              <p className="text-red-700">{errors.email}</p>
            )}
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.password && touched.password && (
              <p className="text-red-700">{errors.password}</p>
            )}
          </div>
          <a href="#" className="text-xs text-purple-600 hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button
              type="submit"
              className=" w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Login
            </button>
          </div>
        </form>
        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 bg-white">Or</div>
        </div>
       {login==='user'?<div className="flex mt-4 gap-x-2">
          <button
            type="button"
            className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
          >
            <GoogleButton />
          </button>
        </div>:<button
            type="button"
            className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
          >
            
          </button>}

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          {login === "user" ? (
            <Link to="/signup" className="text-white font-bold">
              Signup
            </Link>
          ) : (
            <Link to="/driver/signup" className="text-white font-bold">
              Signup
            </Link>
          )}
        </p>
      </div>
    </div>
  );
}
