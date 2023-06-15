import React, { useEffect, useState } from "react";
import CarDeatails from "./Components/CarDeatails";

function CarDeatailscard() {
    
  return (
    <div className="bg-white car h-screen">
      <div className="h-full">
        <div className="  md:flex no-wrap h-full ">
          <div className=" w-full md:mx-2 md:mb-2 h-full">
            <div className=" car profileside bg-gray-400 p-5 h-full">
              {/* STRT */}
              <div className="flex justify-center h-full">
                <div className="w-6/12 grid md:grid-cols-1 sm:grid-cols-1 gap-10 h-full items-center">
                 
                  < CarDeatails/>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDeatailscard;
