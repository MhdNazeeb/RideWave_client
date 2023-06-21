import { useFormik } from "formik";
import React from "react";
import { driverProfile } from "../../../validations/profileValidation";
import { editeProfile } from "../../../axios/services/driver/driverSignup";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function ProfileModal({ driver, setEditModal, driverData, setRefrsh }) {
  const { token } = useSelector((state) => state.driverReducer.driver);

  async function onSubmit() {
    const driverid = driver._id;
    console.log(values, "this values");
    const data = {
      ...values,
      driverid,
    };
    setEditModal(false);

  

    const res = await editeProfile(data, token);
    setRefrsh((state) => !state);
    if (res?.data?.message === "email already registered") {
      toast.error(res?.data?.message);
      
    }
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: driverData?._doc?.name,
        email: driverData?._doc?.email,
      },
      validationSchema: driverProfile,
      onSubmit,
    });

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <form onSubmit={handleSubmit}>
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold">Alert</h3>
                <button
                  className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setEditModal(false)}
                >
                  X
                </button>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <label htmlFor="" className="flex-col">
                  name
                </label>
                <div className="flex-col">
                  <input
                    type="text"
                    name="name"
                    id=""
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name && (
                    <p className="text-red-600">{errors.name}</p>
                  )}
                </div>
                <label htmlFor="mail" className="mb-7">
                  email
                </label>
                <div className="pt-3">
                  <input
                    type="text"
                    name="email"
                    id=""
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <p className="text-red-600">{errors.email}</p>
                  )}
                </div>

                {
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {/* do you want to {status === 'active' ? 'block':'unblock'} user */}
                  </p>
                }
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setEditModal(false)}
                >
                  Close
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                  onClick={handleSubmit}
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

export default ProfileModal;
