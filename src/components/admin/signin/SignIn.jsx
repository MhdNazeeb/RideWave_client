import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { userLoginSchema } from "../../../validations/userLogin";
import { adminLogin } from "../../../axios/services/admin/admin";
import { adminLoginRedux } from "../../../redux/adminSlice";

export default function Signin() {
  console.log("compontn");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function onSubmit() {
    const response = await adminLogin(values);
    
    if (response?.data?.status === "Login success") {
     
      toast.success(response?.data?.status);
      dispatch(
        adminLoginRedux({
          admin: response?.data?.admin,
          token: response?.data?.token,
        })
      );
      navigate('/admin/dashboard')
      
    } else if (response?.data?.status === "incorrect password") {
      toast.error(response?.data?.status);
    } else if (response?.data?.status === "something wrong") {
      toast.error(response?.data?.status);
    } else if (response?.data?.status === "User doesn't exist") {
      toast.error(response?.data?.status);
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
    <div className="login relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-gray-800 rounded-md shadow-xl lg:max-w-xl">
        <div className="flex justify-around">
          <div className="bg-violet-900 rounded-lg w-1/2 p-5 text-2xl font-semibold text-center  text-white uppercase cursor-pointer">
            login admin
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
        <div className="flex mt-4 gap-x-2">
          <button
            type="button"
            className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div>
 
      </div>
    </div>
  );
}
