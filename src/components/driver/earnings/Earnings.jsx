import React, { useEffect, useState } from "react";
import { GraphComponents } from "./Components/Graph";
import Cards from "./Components/Cards";
import { PieChart } from "./Components/PieChart";
import CompletedRide from "./Components/CompletedRide";
import RideCard from "./Components/RideCard";
import WalletCard from "./Components/WalletCard";
import { riport } from "../../../axios/services/driver/driverSignup";
import { useSelector } from "react-redux";
import Loader from "../../common/Loader";

function Earnings() {
    const driverFound = useSelector((state)=>state.driverReducer.driver)
    const driverid = driverFound.driver._id
    const [data,setData]=useState({})
    const [loader, setLoader] = useState(false);
    
    const {token} = driverFound
    
  useEffect(() => {
    ( async function () {
        setLoader(true)
        const res = await riport(token,driverid)
        setLoader(false)
        if(res){
          console.log(res.data,'data')
          setData(res?.data)
        }else{
          
        }
  
    })();
  },[]);
  return (
    <div>
         {loader && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-white bg-opacity-25 backdrop-filter backdrop-blur z-50">
          <Loader />
        </div>
      )}
      <div className="flex flex-wrap justify-between gap-10 mt-10 px-10 ">
       
        <RideCard total={data?.totalride}  />
        <CompletedRide completed={data?.completedRide} />
        <Cards monthlyRport={data?.montherning}/>
        <WalletCard wallet={data?.driverwallet?.currentBalance} />
        
      </div>
        <div className="flex flex-wrap w-full h-full px-5 border-opacity-0  ">
        <div className="md:w-1/2 w-full mt-8 mb-8">
          <GraphComponents count={data?.monthcount} earnings={data?.monthgraph} monthname={data?.monthname} />
        </div>
        <div className="flex items-center justify-center md:w-1/2 w-full h-full md:h-80 mt-8 mb-8">
          <PieChart cancelled={data?.cancelled} rejected={data?.cancelled} completed={data?.completedRide} />
        </div>
      </div>
    </div>
  );
}

export default Earnings;
