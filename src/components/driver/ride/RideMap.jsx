import React, { useEffect, useState } from "react";
import Map from "../map/Map";
import RideDetail from "./Components/RideDetail";

const RideMap = ({tripid}) => {
  return (
    <>
      <div class="pl-10 pr-10 bg-gray-200 2xl:mx-auto">
        <div class="flex justify-start  item-start space-y-2 flex-col">
          <h1 class="text-2xl dark:text-white lg:text-2xl font-semibold leading-7 lg:leading-9 text-gray-800">
            Ride
          </h1>
          <p class="text-base dark:text-gray-300 font-medium leading-6 text-gray-600"></p>
        </div>
        <RideDetail tripid={tripid} />
        <Map tripid={tripid} />
      </div>
    </>
  );
};

export default RideMap;
