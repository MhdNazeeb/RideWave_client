// import React, { useState, createContext } from "react";

// export const selectTripContext = createContext();

// export const TripProvider = ({ children }) => {
//   const [tripDetails, setTripDetails] = useState({
//     pickup: "",
//     dropoff: "",
//     driver: "",
//     distance: "",
//   });
//   const [tripDate, setTripDate] = useState();
//   const [tripTime, setTripTime] = useState();

//   return (
//     <selectTripContext.Provider
//       value={{
//         tripDetails,
//         setTripDetails,
//         tripDate,
//         setTripDate,
//         tripTime,
//         setTripTime,
//       }}>
//       {children}
//     </selectTripContext.Provider>
//   );
// };