import React, { useState, useContext, useEffect } from "react";
import { LocationContext } from "../../../context/LocationContext";
// import { selectTripContext } from "../../Context/SelectTrip";
import {axiosClientInstance} from "../../../axios/instances/instance"
import axios from "axios";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

const RiderSelector = () => {
  const { pickupCoordinates, dropoffCoordinates } = useContext(LocationContext);
  //   const { driver, selectDriver, setTripDetails } = useContext(selectTripContext);
  const [carlist, setCarlist] = useState([]);
  const [dropOff, setDropoff] = useState();
  const [distance, setDistance] = useState();
  const getDirection = async (pickupCoordinates, dropoffCoordinates) => {
    console.log(pickupCoordinates);
    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?alternatives=true&geometries=geojson&language=en&overview=simplified&steps=true&access_token=${mapboxgl.accessToken}`;
    const result = await axios.get(url);
    console.log(result);
    return result;
  };

  const getLocationName = async (lng, lat) => {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${mapboxgl.accessToken}`
    );
    const data = await response.json();

    const location = data.features[0].place_name;
    const parts = location.split(",");
    let locationName;
    if (parts.length > 2) {
      locationName = `${parts[parts.length - 3]}, ${parts[parts.length - 2]}, ${
        parts[parts.length - 1]
      }`;
    } else {
      locationName = `${parts[0]}`;
    }
    return locationName;
  };

  const getCarList = async (pickupCoordinates) => {
    try {
      
      const response = await axiosClientInstance.get("/carlist");
      const data = await response.data.Driver;
      
      const availableCars = [];

      for (let i = 0; i < data.length; i++) {
        const car = data[i];
        const availableCar = await getAvaiableCar(pickupCoordinates, car);
        console.log(availableCar, "vail");
        if (availableCar.length > 0) {
          availableCars.push(availableCar[0]);
        }
      }
      return availableCars;
    } catch (error) {
      return error;
    }
  };

  const getAvaiableCar = async (pickupCoordinates, driver) => {
    const carLists = [];
    console.log("entered");
    const driverLocation = driver.current_location.location[0];
   
    const findDistance = await getDirection(pickupCoordinates, driverLocation);
    console.log(findDistance, "findDistance");
    const distance = (findDistance.data.routes[0].distance / 1000).toFixed(0);
    console.log(distance);

    carLists.push(driver);

    return carLists;
  };

  const handleClick = async (car) => {
    const response = await getLocationName(
      pickupCoordinates[0],
      pickupCoordinates[1]
    );
    const response2 = await getLocationName(
      dropoffCoordinates[0],
      dropoffCoordinates[1]
    );
    selectDriver(car);
    setTripDetails({
      pickup: response,
      dropOff: response2,
      driver: driver,
      distance: distance,
    });
  };

  useEffect(() => {
    setDropoff(dropoffCoordinates);
    const carList = async () => {
      
      const response = await getCarList(pickupCoordinates);

      setCarlist(response);
    };
    carList();
    const tripDetails = async () => {

      const response = await getDirection(
        pickupCoordinates,
        dropoffCoordinates
      );
      const data = response.data.routes[0].distance;
      let distance = Math.floor(data / 1000);
      setDistance(distance);
    };

    tripDetails();
  }, [distance, dropoffCoordinates, pickupCoordinates]);

  return (
    <div className="h-fit flex flex-col ">
      <div className="text-gray-500 text-center text-xs py-2 "></div>
      <div className="flex flex-col flex-1 overflow-scroll no-scrollbar">
        <div className="flex p-3 m-2 items-center border-2 border-white hover:bg-slate-200 cursor-pointer">
          <img src="" alt="" height="50" width="50" className="h-14" />
          <div className="ml-2 flex-1">
            <div className="font-bold">lll</div>
            <div className="text-xs text-black font-medium"></div>
            <div className="text-xs text-black"></div>

            <div className="text-xs text-green-500">jjjj</div>
          </div>
          <div className="flex items-center">
            <div className="mr-[-0.8rem]">₹ jjjj</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiderSelector;
