import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirm, rideCleanup } from "../../../redux/rideSlice";
import { trip } from "../../../axios/services/driver/driverSignup";
import { useNavigate } from "react-router-dom";

export default function ConfirmModal({ know, setmodal, setstatus }) {
  const drivers = useSelector((state) => state.driverReducer.driver);
  const tripes = useSelector((state) => state.rideReducer);
  
  const { id } = tripes;
  const dispatch = useDispatch(); 
  const { driver, token } = drivers;
  const navigate = useNavigate()
  async function decision(status) {
    console.log(status,'this is status');
    const res = await trip(id, driver._id,status,token);
    console.log(res.data,'confrmtion')
    if(res.data.message==='rejected'){
      console.log('trueee case');
      setmodal(false);
      setstatus("rejected");
      dispatch(rideCleanup());
      navigate('/')
    }else{
     setmodal(false);
     setstatus(res?.data?.message)

    }
    
  }
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Alert</h3>
              <button
                className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setmodal(false)}
              >
                X
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              {know ? (
                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  do you want to accept this ride
                </p>
              ) : (
                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  do you want to reject this ride
                </p>
              )}
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setmodal(false)}
              >
                Close
              </button>
              {know ? (
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={()=>decision('confirm')}
                >
                  Save
                </button>
              ) : (
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={()=>decision('reject')}
                >
                  Save
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
