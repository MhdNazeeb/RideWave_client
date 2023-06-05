import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";

import { driverSchema } from "../../../validations/driverSignup";
import { driverSignup } from "../../../axios/services/driver/driverSignup";

export default function DriverSignup() {
  const [license, setLicense] = useState([]);
  const navigate = useNavigate()

  async function onSubmit() {
    const data = {
      ...values,
      license,
    };

    const response = await driverSignup(data);
    if (response === "Request failed with status code 500") {
      toast.error("something went wrong");
    }
    console.log(response, "response");
    if (response?.data?.message === "something wrong") {
      toast.error(response?.data?.message);
    } else if (response?.data?.message === "new account created sucessfully") {
      toast.success(response?.data?.message);
         navigate('/login')
    } else if (response?.data?.message === "email is all ready registred") {
      toast.error(response?.data?.message);
    }
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        fname: "",
        email: "",
        password: "",
        cpassword: "",
        image: "",
      },
      validationSchema: driverSchema,
      onSubmit,
    });

  const handleImage = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setLicense(reader.result);
    };
  };

  return (
    <div>
      <div className="signup flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div></div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-gray-800 shadow-md sm:max-w-md sm:rounded-lg">
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="fname"
                  value={values.fname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {errors.fname && touched.fname && (
                  <p className="text-red-600">{errors.fname}</p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {errors.email && touched.email && (
                  <p className="text-red-600">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {errors.password && touched.password && (
                  <p className="text-red-600">{errors.password}</p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Confirm Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="cpassword"
                  value={values.cpassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {errors.cpassword && touched.cpassword && (
                  <p className="text-red-600">{errors.cpassword}</p>
                )}
              </div>
              <div className="mt-2">
                <input
                  type="file"
                  id="filef"
                  name="image"
                  onChange={handleImage}
                  required
                  accept="image/*"
                  autoComplete="off"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.image && touched.image && (
                  <p className="text-red-600">{errors.image}</p>
                )}
              </div>
            </div>
            <div className="flex items-center justify-end mt-4">
              <button className="text-sm text-gray-600 underline hover:text-gray-900" onClick={()=>{
                navigate('/login')
              }}>
                Already registered?
              </button>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
