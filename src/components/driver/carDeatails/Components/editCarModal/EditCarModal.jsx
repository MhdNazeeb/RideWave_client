import { useFormik } from "formik";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CarEditSchema } from "../../../../../validations/carDeatailsEdit";
import { editCar } from "../../../../../axios/services/driver/driverSignup";
import { toast } from "react-toastify";

function EditCarModal({setEditModal,carData}) {
 
  const [carimage,setCarimage] = useState([])
   
  const { token ,driver} = useSelector((state) => state.driverReducer.driver);

   const driverid = driver._id

  async function onSubmit() {

     const data = {
      ...values,
      carimage ,
      driverid 

     }
     console.log(data,'this car ima');
     
     editCar(data,token).then((res)=>{
      if(res?.data?.message==='updated successfully'){
        setEditModal(state=>!state)
        console.log(res.data,'fffffffffff');
        toast.success(res?.data?.message);
      }
      
     })

  }
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        model:carData.model,
        year:carData.year,
        RegistrationNumber:carData.RegistrationNumber ,
        Features:carData.Features,
        Rate:carData.Rate,
        image:carData.carimage
      },
      validationSchema: CarEditSchema,
      onSubmit,
    });

    const handleImage = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
          setCarimage(reader.result);
      };
    };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-10/12 my-6 mx-auto max-w-3xl">
          {/*content*/}
          <form onSubmit={handleSubmit}>
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-2xl uppercase ps-10 font-bold">Edit Profile</h3>
                <button
                  className="pe-10 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={()=>setEditModal(false)}
                >
                  X
                </button>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                {/* start */}
                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="model"
                      id="floating_email"
                      value={values.model}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                     {errors.model && touched.model && (
                    <p className="text-red-600">{errors.model}</p>
                  )}
                    <label
                      for="floating_email"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Model
                    </label>
                  </div>
                  {/* second start here */}
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="year"
                      id="floating_email"
                      value={values.year}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                     {errors.year && touched.year && (
                    <p className="text-red-600">{errors.year}</p>
                  )}
                    <label
                      for="floating_email"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Year
                    </label>
                  </div>
                  {/* second end here */}
                </div>
                {/* another */}
                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="RegistrationNumber"
                      id="floating_email"
                      value={values.RegistrationNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                      {errors.RegistrationNumber && touched.RegistrationNumber && (
                    <p className="text-red-600">{errors.RegistrationNumber}</p>
                  )}

                    <label
                      for="floating_email"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      RegistrationNumber
                    </label>
                  </div>
                  {/* second start here */}
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="Features"
                      id="floating_email"
                      value={values.Features}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    {errors.Features && touched.Features && (
                    <p className="text-red-600">{errors.Features}</p>
                  )}
                    <label
                      for="floating_email"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Features
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="Rate"
                      id="floating_email"
                      value={values.Rate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    {errors.Rate && touched.Rate && (
                    <p className="text-red-600">{errors.Rate}</p>
                  )}
                    <label
                      for="floating_email"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Rate
                    </label>
                  </div>
                  {/* second end here */}
                </div>
                {/* end */}
                

                <div className="pt-3">
                  <input  
                  type="file"
                  id="filef"
                  name="image"
                  onChange={handleImage}

                  
                  accept="image/*"
                  autoComplete="off"
                  
                  />
                   {errors.image && touched.image && (
                    <p className="text-red-600">{errors.image}</p>
                  )}
                </div>

                {
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {/* do you want to {status === 'active' ? 'block':'unblock'} user */}
                  </p>
                }
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={()=>setEditModal(false)}
                >
                  Close
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                  onSubmit={handleSubmit}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default EditCarModal;
