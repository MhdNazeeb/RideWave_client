import { useState } from "react";
import { StartedToDestination } from "../../../../axios/services/driver/driverSignup";
import { toast } from "react-toastify";

export default function RideModal({ setModal, tripid, token, setRe ,re}) {
  const [validate, setValidte] = useState('');
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);

  async function destinationChange(event) {
    if (validate == "") {
      setFirst(true);
    } else if (!/^\d+$/.test(validate)) {
      setSecond(true);
    } else {
      setModal(false);

      const res = await StartedToDestination(tripid, validate, token);
      if (res.data.message === "otp incorrect") {
        toast.error(res?.data?.message);
      }
      else
      setRe(!re)
      

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
                onClick={() => setModal(false)}
              >
                X
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <input
                type="text"
                name="Rate"
                id="floating_email"
                value={validate}
                onChange={(e) => {
                  setValidte(e.target.value);
                }}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              {first ? (
                <p className="text-red-700">enter otp</p>
              ) : second ? (
                <p className="text-red-700">enter correct otp</p>
              ) : (
                ""
              )}
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setModal(false)}
              >
                Close
              </button>

              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={destinationChange}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
