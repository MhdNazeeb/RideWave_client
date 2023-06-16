import React from "react";
import Map from "../../../components/user/map/Map";
import LocationSelector from "../../../components/user/locationselector/LocationSelector";
import RideConfirm from "../../../components/user/RideConfirm/RIdeConfirm";

function MapPage() {
  return (
    <>
      <div className="h-screen w-screen flex flex-col text-black">
        <div className="h-full w-screen flex-1 z-10">
          <Map />
        </div>
        <div className="md:h-full  md:w-2\3 sm:w-[450px] md:ml-[9rem] md:py-[9rem] absolute inset-x-0 bottom-0 md:left-0 md:top-0 flex flex-col justify-end z-20">
          <div className="flex flex-col h-fit  bg-white rounded-lg overflow-scroll no-scrollbar">
            <div className="sticky top-0 w-full  opacity-100 z-10">
              <LocationSelector />
            </div>
            <RideConfirm />
          </div>
        </div>
      </div>
    </>
  );
}

export default MapPage;
