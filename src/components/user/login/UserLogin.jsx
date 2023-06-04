import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";


import { userLoginSchema } from "../../../validations/userLogin";
import { userLogin } from "../../../axios/services/user/User";
import { ClientLogin } from "../../../redux/userSlice";
import "./UserLogin.css";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login,setLogin]=useState('user')

  async function onSubmit() {
    if(login==='user'){
    const response = await userLogin(values);
    if (response?.data?.status === "Login success") {
      toast.success(response?.data?.status);
      dispatch(
        ClientLogin({
          token: response?.data?.token,
          user: response?.data?.user,
        })
      );
      navigate('/')
    } else if (response.data.message === "not verified") {
      toast.success(response?.data?.status);
    } else if (
      response.data.status === "Account has been verified successfully"
    ) {
      dispatch(
        ClientLogin({
          token: response?.data?.token,
          user: response?.data?.user,
        })
      );
      navigate('/')

      toast.success(response?.data?.status);
    } else {
      toast.error(response?.data?.status);
    }
  }else{
    
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
        <div  className="flex justify-around">
        <div  className={login === 'user' ? "bg-violet-900 rounded-lg w-1/2 p-5 text-2xl font-semibold text-center  text-white uppercase cursor-pointer" : "bg-gray-800 w-1/2 p-5  text-2xl font-semibold text-center  text-white uppercase cursor-pointer"} onClick={()=>setLogin('user')}>
          login user
        </div>
        <div className={login === 'driver' ? "bg-violet-900 rounded-lg w-1/2 p-5 text-2xl font-semibold text-center  text-white uppercase cursor-pointer" : " bg-gray-800 w-1/2 p-5  text-2xl font-semibold text-center  text-white uppercase cursor-pointer"} onClick={()=>setLogin('driver')} >
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

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <Link to="/signup" className="text-white font-bold">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}
