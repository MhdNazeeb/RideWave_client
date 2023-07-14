import React, { useEffect, useState } from "react";
import TotalRide from "../TotalRide";
import TotalDetails from "./TotalDetails";
import CompletdRide from "./completdRide";
import AdminWallet from "./AdminWallet";
import { LineChart } from "./LineChart";
import { Doughnutreport } from "./Doughnutreport";
import { adminReport } from "../../../../axios/services/admin/admin";
import { useSelector } from "react-redux";
import Loader from "../../../common/Loader";

export default function DashBoards() {
  const adminDetails = useSelector((state) => state.adminReducer.admin);
  const [data, setData] = useState({});
  const [loader, setLoader] = useState(false);
  const { token, admin } = adminDetails;
  useEffect(() => {
    (async function () {
      setLoader(true);
      const res = await adminReport(token, admin._id);
      setLoader(false);
      setData(res?.data);
    })();
  }, []);
  return (
    <div>
      {loader && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-white bg-opacity-25 backdrop-filter backdrop-blur z-50">
          <Loader />
        </div>
      )}
      
        <div className="flex flex-wrap justify-around mt-3">
          <TotalRide totalride={data?.totaltrip} />
          <CompletdRide CompletdRide={data?.completedTrip} />
          <TotalDetails
            monthly={
              data?.monthlyReport ? data?.monthlyReport[0].totalEarnings : 0
            }
          />
          <AdminWallet adminwallet={data?.adminwallet?.currentBalance} />
        </div>
       <div className="flex flex-wrap">
          <div className="md:w-2/3 h-96 w-full">
          <LineChart
            monthname={data?.monthName}
            monthlyEarning={data?.monthlyEarning}
          />
          </div>
        
       
         <div className="md:w-1/3 h-96 w-full mt-4">
         <Doughnutreport
            Pending={data?.Pending}
            cancelled={data?.cancelled}
            rejected={data?.rejected}
          />
         </div>
          </div>
       
     
    </div>
  );
}
