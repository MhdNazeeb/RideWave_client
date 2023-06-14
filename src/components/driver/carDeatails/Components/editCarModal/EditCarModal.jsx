import { useFormik } from "formik";
import React from "react";
import { useSelector } from "react-redux";


function EditCarModal() {
  const {token}= useSelector((state)=>state.driverReducer.driver)

  async function onSubmit() {


  }
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  useFormik({
    initialValues: {
      model: "",
      year: "",
      RegistrationNumber: "",
      Features: "",
      Rate: "",
    },
    validationSchema: CarSchema,
    onSubmit,
  });


  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-10/12 my-6 mx-auto max-w-3xl">
          {/*content*/}
          <form onSubmit="" >
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Alert</h3>
              <button
                className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick=""
              >
                X
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              
             
            <label htmlFor="" className="flex-col">name</label>
            <div className="flex-col">
            
            <input type="text" name="name" id="" />
        
              </div>
              <label htmlFor="mail" className="mb-7">email</label>
            <div className="pt-3">
            
            <input type="text" name="email" id=""
           />
            </div>
            <div className="pt-3">
            
            <input type="text" name="email" id=""
           />
            </div>
            <div className="pt-3">
            
            <input type="text" name="email" id=""
           />
            </div>
            <div className="pt-3">
            
            <input type="file" name="email" id=""
           />
            </div>
         
            
           
              {<p className="my-4 text-slate-500 text-lg leading-relaxed">
               {/* do you want to {status === 'active' ? 'block':'unblock'} user */}
              </p>}
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                 onClick=""
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
                onClick=""
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
