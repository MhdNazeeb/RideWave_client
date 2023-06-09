import React, { useState } from "react";
import { CarSchema } from "../../../validations/carRegister";
import { useFormik } from "formik";
import { carRegistor } from "../../../axios/services/driver/driverSignup";
import { toast } from "react-toastify";

export default function CarRegisterForm() {
  const [Carimage, setCarImage] = useState([]);
  async function onSubmit() {
    const data = {
      ...values,
      Carimage,
    };
     const res = await carRegistor(data)
      if(res.data.message === 'it  may take 24 houres to verify your car'){
        toast.success(res?.data?.message);
      }else if(res.data.message === 'something  wrong'){
        console.log('this is 500 ');
        toast.error(res?.data?.message);
      }else if(res.data.message === 'Registration number allready exists'){
        toast.error(res?.data?.message);
      }
  }
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        model: "",
        year: "",
        RegistrationNumber: "",
        Seats: "",
        Features: "",
        Rate: "",
      },
      validationSchema: CarSchema,
      onSubmit,
    });
  const handleImage = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        setCarImage(reader.result);
    };
  };

  return (
    <>
      <section className="w-full h-full p-6  bg-gray-800 text-gray-50 ">
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="container flex flex-col mx-auto space-y-12 md:mt-16 md:w-3/5"
        >
          <div className="alert alert-error shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>

          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md  bg-gray-900 shadow-[5px_5px_10px_10px_rgba(0,0,0,0.3)]">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-extrabold text-lg text-red-700 ">
                Car Registration Details
              </p>
              <p className="text-xs  tif (response === 200)racking-wide font-sans">
                Submit an application with their personal information, driving
                history, and vehicle information
              </p>
              <p className="text-xs  tracking-wide font-sans">
                The vehicle must pass a vehicle inspection to ensure it meets
                the company's safety standards
              </p>
              <p className="text-xs tracking-wide font-sans">
                The vehicle and driver must continue to meet the company's
                standards, and the driver must regularly update their
                information to maintain their eligibility to drive for the
                service.
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text"> Modal </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    name="model"
                    value={values.model}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="input input-bordered input-accent w-full max-w-xs text-black"
                  />
                  {errors.model && touched.model && (
                    <p className="text-red-600">{errors.model}</p>
                  )}
                </div>
              </div>
              <div className="col-span-full sm:col-span-3">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text"> year</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    name="year"
                    value={values.year}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="input input-bordered input-accent w-full max-w-xs text-black"
                  />
                  {errors.year && touched.year && (
                    <p className="text-red-600">{errors.year}</p>
                  )}
                </div>
              </div>
              <div className="col-span-full sm:col-span-3">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Registration number</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    name="RegistrationNumber"
                    value={values.RegistrationNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="input input-bordered input-accent w-full max-w-xs text-black"
                  />
                  {errors.RegistrationNumber && touched.RegistrationNumber && (
                    <p className="text-red-600">{errors.RegistrationNumber}</p>
                  )}
                </div>
              </div>
              <div className="col-span-full sm:col-span-3">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text"> seats</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    name="Seats"
                    value={values.Seats}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="input input-bordered input-accent w-full max-w-xs text-black"
                  />
                  {errors.Seats && touched.Seats && (
                    <p className="text-red-600">{errors.Seats}</p>
                  )}
                </div>
              </div>
              <div className="col-span-full sm:col-span-3">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    Features
                    <textarea
                      className="label-text text-black"
                      name="Features"
                      value={values.Features}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      {" "}
                      Features
                    </textarea>
                  </label>
                  {errors.Features && touched.Features && (
                    <p className="text-red-600">{errors.Features}</p>
                  )}
                </div>
              </div>
              <div className="form-control w-full  max-w-xs">
                <label className="label">
                  <span className="label-text">Rate/Km</span>
                </label>
                <input
                  type="number"
                  placeholder="₹"
                  name="Rate"
                  value={values.Rate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="input input-bordered input-accent w-full max-w-xs text-black"
                />
                {errors.Rate && touched.Rate && (
                  <p className="text-red-600">{errors.Rate}</p>
                )}
              </div>
              <div className="col-span-full">
                <label for="bio" className="text-sm">
                  Photo
                </label>
                <div className="flex  items-center space-x-2">
                  <div className="form-control w-full max-w-xs">
                    <input
                      type="file"
                      id="filef"
                      name="image"
                      onChange={handleImage}
                      required
                      accept="image/*"
                      autoComplete="off"
                      className="file-input file-input-bordered w-full max-w-xs"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:mx-96 md:mt-5 ">
              <button
                className="btn btn-active px-8 py-1 md:px-auto place-items-center bg-red-800 shadow-[5px_5px_10px_10px_rgba(0,0,0,0.3)]"
                type="submit"
              >
                submit
              </button>
            </div>
          </fieldset>
        </form>
            
      </section>
    </>
  );
}
