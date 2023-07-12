import React, { useState, useContext, useEffect } from "react";
import { LocationContext } from "../../../context/LocationContext";
import { axiosClientInstance } from "../../../axios/instances/instance";
import axios from "axios";
import mapboxgl from "mapbox-gl";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTrip, location } from "../../../redux/tripdetails";
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

const RiderSelector = () => {
  const { pickupCoordinates, dropoffCoordinates } = useContext(LocationContext);
  const tripDetails = useSelector((state) => state.tripdetailsReducer.trip);
  console.log(tripDetails,"this is tridetails")
  const dispatch = useDispatch();
  const [carlist, setCarlist] = useState([]);
  const [dropOff, setDropoff] = useState();
  const [distance, setDistance] = useState();

  const navigate = useNavigate();




  useEffect(() => {
    setDropoff(dropoffCoordinates);
    const carList = async () => {
      const response = await getCarList(pickupCoordinates);
    };
    carList();
    const tripDetails = async () => {
      const response = await getDirection(
        pickupCoordinates,
        dropoffCoordinates
      );
      const data = response?.data?.routes[0].distance;
      let distance = Math.floor(data / 1000);
      setDistance(distance);
    };

    tripDetails();
    async function LocationName() {
      if (pickupCoordinates?.length && dropoffCoordinates?.length) {
        const response = await getLocationName(
          pickupCoordinates[0],
          pickupCoordinates[1]
        );

        const response2 = await getLocationName(
          dropoffCoordinates[0],
          dropoffCoordinates[1]
        );  
       
        
      }
    }
    LocationName();
  }, [distance, dropoffCoordinates, pickupCoordinates]);

 

  const getDirection = async (pickupCoordinates, dropoffCoordinates) => {
    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?alternatives=true&geometries=geojson&language=en&overview=simplified&steps=true&access_token=${mapboxgl.accessToken}`;
    const result = await axios.get(url);

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
      let ShowCars=[]
      setCarlist([])
      const response = await axiosClientInstance.get("/carlist");
      const distance = await getDistance(pickupCoordinates, dropoffCoordinates);

      response?.data?.forEach((element) => {
        let DriverLocation = element.location;
        async function dis() {
          const distance1 = await DriverDistatnce(
            pickupCoordinates,
            DriverLocation
          );
          
          if (distance1 < 250) {
            ShowCars.push(element)
            setCarlist(state => [...state,element])
           
          }
        }
        dis();
        
      });
        
      
      
    } catch (error) {
      console.log(error.message,'eror in ca')
      return error;
    }
  };

  const DriverDistatnce = async (pickupCoordinates, DriverLocation) => {
    const findDistance = await getDirection(pickupCoordinates, DriverLocation);
    const distance = (findDistance.data.routes[0].distance / 1000).toFixed(0);
    return distance;
  };
  const getDistance = async (pickupCoordinates, dropoffCoordinates) => {
    const findDistance = await getDirection(
      pickupCoordinates,
      dropoffCoordinates
    );
    const distance = (findDistance.data.routes[0].distance / 1000).toFixed(0);
    return distance;
  };

  const handleClick = async (car, driverId) => {
    const carDetails = carlist?.filter((item) => car === item._id)[0];

    const response = await getLocationName(
      pickupCoordinates[0],
      pickupCoordinates[1]
    );

    const response2 = await getLocationName(
      dropoffCoordinates[0],
      dropoffCoordinates[1]
    );

    dispatch(
      addTrip({
        pickup:tripDetails.pickup,
        dropOff:tripDetails.dropOff,
        car: car,
        driver: driverId,
        distance: distance,
        carDetails: carDetails,
      })
    );

    navigate("/checkout");
  };
    
  return (
    
    <div className="h-fit flex flex-col w-full">
      {console.log(carlist,'this car11')}
      <div className="text-gray-500 text-center text-xs py-2 "></div>
      {dropOff?.length > 0 && carlist?.length > 0
        ? carlist?.filter((val, ind, arr) => {
          return arr.findIndex((elem) => elem._id === val._id) === ind;
        }).map((car) => {
          
            return (
              <div
                className="flex flex-col flex-1 overflow-scroll no-scrollbar"
                onClick={() => handleClick(car._id, car.userId)}
              >
                <div className="flex p-3 m-2 items-center border-2 border-white hover:bg-slate-200 cursor-pointer z-0">
                  <img
                    src={car.carimage}
                    alt="carimage"
                    height="50"
                    width="50"
                    className="h-14"
                  />
                  <div className="ml-2 flex-1">
                    <div className="font-bold">Vehicle : {car.model}</div>
                    {/* <div className="text-xs text-black font-mediumf"></div> */}
                    <div className="text-xs text-black">Distance : {distance} km</div>

                    <div className="text-xs text-green-500">
                      Driver : {car.userId.name}
                    </div>
                  </div>
                  <div className="mr-[-0.8rem]">₹{+car?.Rate * distance}</div>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default RiderSelector;
