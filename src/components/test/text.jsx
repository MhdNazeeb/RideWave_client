import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { driverProfile } from "../../../validations/profileValidation";

const EditProfile = () => {

  const [license,setLicense] = useState([])
  const [driverData,setDriverData] = useState({})
  const location = useLocation()
   const  driver = location.state.driver
   let driverid = driver._id
  async  function onSubmit() {
    
      const data = {
        driverid,
        license,
       ... values,
       
      }
      console.log(values,'valuesss')
      // console.log(data)
      // const res = await editeProfile(data)
  }

   useEffect(()=>{
      getProfile(driverid).then((res)=>{
        console.log(res?.data,'data response')
        setDriverData(res?.data)
        
      })
   },[])

   console.log(driverData,'driver data')

   const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name:driver.name ,
        email:driver.email,
      },
      validationSchema:driverProfile,
      onSubmit,
    });
  return (
    <section className="bg-gray-800 w-full ">
      <div className="container py-5 ">
       
         <form onSubmit={handleSubmit}>
          <div className="flex md:justify-center md:items-center sm:justify-center sm:items-center w-full">
        <div className="w-10\12 flex flex-wrap   ">
          <div className="w-1/3 mr-4">
            <div className="mb-1">
              <div className="flex items-center justify-center flex-col">
                <img
                  src={driverData.license}
                  alt="avatar"
                  className="rounded-circle border-2"
                  style={{ width: "150px" }}
                />
                <div className="pt-6">
                <div className="ml-6 order-solid">
                <input  className="w-17 h-9 ml-3"
                 type="file"
                 id="file"
                 name="image"
                 onChange={handleImage}
                 required
                 accept="image/*"
                 autoComplete="off"
                 />
                 {errors.image && touched.image && (
                  <p className="text-red-600">{errors.image}</p>
                )}
                </div>
                </div>
                
                
              </div>
            </div>
            <div className="mb-4 flex-wrap justify-center">
              {/* <button
                className=" text-white p-2"
                onClick={() => setOption((state) => !state)}
              >
                Options
              </button> */}

              
               
             
            </div>
          </div>

          <div className="w-1/2 border-3 shadow-sm">
            <div className="mb-4">
              <div className="flex">
                <div className="w-1/3">
                  <p className="mb-2 ml-2 text-white">Full Name</p>
                  
                </div>
                <div className="w-2/3">
                  <input  
                   className="text-black bg-white"
                   name="name"
                   type="text"
                   value={values.name}
                   onChange={handleChange}
                   onBlur={handleBlur}
                  />
                  {errors.name && touched.name && (
                  <p className="text-red-600">{errors.name}</p>
                )}
                  
                </div>
              </div>
              <hr className="my-2" />
              <div className="flex">
                <div className="w-1/3">
                  <p className="mb-2 ml-2 text-white">Email</p>
                </div>
                <div className="w-2/3">
                  <input className="text-white ml-4 bg-gray-800"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  
                  />
                  {errors.email && touched.email && (
                  <p className="text-red-600">{errors.email}</p>
                )}
                  
                </div>
              </div>
              {/* <hr className="my-2" />
              <div className="flex">
                <div className="w-1/3">
                  <p className="mb-2 ml-2 text-white">Phone</p>
                </div>
                <div className="w-2/3">
                  <p className="text-white ml-4">097 234-5678</p>
                </div>
              </div>
              <hr className="my-2" />
              <div className="flex">
                <div className="w-1/3">
                  <p className="mb-2 ml-2 text-white">Mobile</p>
                </div>
                <div className="w-2/3">
                  <p className="text-white ml-4">098 765-4321</p>
                </div>
              </div>
              <hr className="my-2" />
              <div className="flex">
                <div className="w-1/3">
                  <p className="mb-2 ml-2 text-white">Address</p>
                </div>
                <div className="w-2/3">
                  <p className="text-white ml-4">Bay Area, San Francisco, CA</p>
                </div>
              </div> */}
            </div>

            <div className="flex"></div>
            <div className="className=pb-3 pl-2">
              <button className="bg-red-800 text-white w-20 p-1 shadow-xl" type="submit">
                submit
              </button>
            </div>
            
          </div>
        </div>
        </div>
        </form>
      </div>
    </section>
  );
};

export default EditProfile
