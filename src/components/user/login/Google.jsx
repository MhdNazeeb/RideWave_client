// import React from "react";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import { GoogleLogin } from "@react-oauth/google";

// import { useNavigate } from "react-router-dom";
// import { axiosClientInstance } from "../../../axios/instances/instance";

// const GoogleButton = () => {
//   const navigate = useNavigate();
//   export const GoogleAuth = async (id) => {
//     const response = await axiosClientInstance.post("/google", { id });
//     const data = response;
  
//     return data;

//   const responseMessage = async (response) => {
//     await GoogleAuth(response.credential).then((res) => {
//       if (res.status === 200)
//         navigate("/otp", {
//           state: { Phone: res.data.phone, email: res.data.email },
//         });

//       if (res.status === 201)
//         navigate("/signup", { state: { Phone: res.data.phone,email: res.data.email } });

//       if (res.status === 500) navigate("/login");
//     });
//   };

//   const errorMessage = (error) => {
//     console.log(error);
//   };

//   return (
//     <>
//       <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
//         <button className="flex items-center  justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative">
//           <span className="absolute left-4"></span>
//           <span className="flex items-center text-black">
//             <GoogleLogin
//               className="text-black"
//               onSuccess={responseMessage}
//               onError={errorMessage}
//             />
//           </span>
//         </button>
//       </GoogleOAuthProvider>
//     </>
//   );
// };

// export default GoogleButton;