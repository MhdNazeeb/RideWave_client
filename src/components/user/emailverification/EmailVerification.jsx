import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { verifyByLink } from "../../../axios/services/user/User";
import GridLoader from "react-spinners/BeatLoader";
import { useDispatch } from "react-redux";
import { ClientLogin } from "../../../redux/userSlice";

export default function EmailVerification() {
 const navigete=useNavigate()
  const [loader, setLoader] = useState(true);
  const userid = useParams();
  const dispatch=useDispatch()
  useEffect(() => {
    const verified = async () => {
      const response = await verifyByLink(userid.id);
      console.log(response,'this is response ');
      dispatch(ClientLogin({user:response?.data?.user,token:response?.data?.token}))
      if (response) {
        console.log(loader, "loader");
       setTimeout(() => {
        setLoader(false);
       }, 3000);
      }
      if (response.status === 200) {
        console.log(response.data.token, "token ");
      }
    };
    verified();
  }, []);
  function home(){
    navigete('/')
  }
  
  return (
    <div>
      {loader ? (
        
        <GridLoader
        
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          color={"#0000FF"}
          loading={loader}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        
    
      <div class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
        <div class="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
          <div class="w-full">
            <div class="m-8 my-20 max-w-[400px] mx-auto">
              <div class="mb-8">
              
                <p class="text-green-600">
                Verification Process Successfully Completed
                </p>
              </div>
              <div class="space-y-4">
                <button class="p-3 bg-black rounded-full text-white w-full font-semibold" onClick={home}>
                  home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        )}
    </div>
  );
}
