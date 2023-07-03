import { useEffect, useState } from "react";
import "./Banner.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  DriverLocation,
  availableRides,
  carfind,
} from "../../../axios/services/driver/driverSignup";
import { toast } from "react-toastify";
import { confirm } from "../../../redux/rideSlice";

let accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Banner() {
  const [active, setActive] = useState(false);

  const [carFind, setCarFind] = useState({});

  const userDetails = useSelector((state) => state.userReducer.user);

  const user = userDetails?.user;
  const dispatch  = useDispatch()

  const DriverDetails = useSelector((state) => state.driverReducer.driver);
  const token = DriverDetails?.token;
  const navigte = useNavigate();

  const driver = DriverDetails?.driver;
  let driverid = driver?._id;

  function carRegister() {
    navigte("/driver/car_register");
  }
  function handleStart() {
    navigte("/map");
  }
  function LocationStatus() {
    setActive((state) => !state);
    let driverCoordinets = [];

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        driverCoordinets.push(longitude);
        driverCoordinets.push(latitude);

        async function driveLo() {
          const res = await DriverLocation(
            token,
            driverCoordinets,
            driverid,
            !active
          );
          if (res?.data?.message === "Your location on") {
            toast.success(res?.data?.message);
          } else {
            toast.error(res?.data?.message);
          }
        }
        driveLo();
      });
    }
  }
  useEffect(() => {
    carfind(driverid).then((res) => {
      setCarFind(res.data);
    });
  }, []);

  useEffect(() => {
    async function ride() {

      const res = await availableRides(driverid, token);
      console.log(res.data,'this is datta');
      dispatch(confirm({
        passenger:res.data.passenger,
        location:res.data.location,
        bookingStatus:res.data.bookingStatus,
        id:res.data._id

      }))
    }
    ride();
    
  }, []);


  return (
    <div className="bg-gray-800 banner">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          {console.log(active, "this active")}
          <div />
        </div>
        <div className="mx-auto max-w-2xl  sm:py-48 lg:py-20">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-800 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{" "}
              <a className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            {driver?<div>
              <h1 className="text-4xl font-bold tracking-tight text-opacity-90 text-gray-900  sm:text-6xl">
              Be your own  
              </h1>
              <h1 className="text-4xl font-bold tracking-tight text-opacity-90 text-gray-900 sm:text-6xl">
              boss behind
              </h1>
              <h1 className="text-4xl font-bold tracking-tight text-opacity-90 text-gray-900 sm:text-6xl">
              the wheel
              </h1>
            </div>:<div>
              <h1 className="text-4xl font-bold tracking-tight text-opacity-70 text-gray-900 sm:text-6xl">
              Travel with 
              </h1>
              <h1 className="text-4xl font-bold tracking-tight text-opacity-70 text-gray-900 sm:text-6xl">
              confidence
              </h1>
               <h1 className="text-4xl font-bold tracking- text-opacity-70 text-gray-900 sm:text-6xl">
               arrive with a smile
              </h1> 
            </div>}
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            {driver ? (
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={carRegister}
                >
                  register your car
                </a>

                {carFind ? (
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultValue
                      className="sr-only peer"
                      onClick={LocationStatus}
                    />
                    <div className="w-11 h-6 bg-black peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                  </label>
                ) : (
                  ""
                )}
              </div>
            ) : (
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <button
                  className=" rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={handleStart}
                >
                  Get started{" "}
                </button>
                <button className=" rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Learn more<span aria-hidden="true">→</span>
                </button>
              </div>
            )}
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div />
        </div>
      </div>
    </div>
  );
}
