import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { walletFinding } from "../../../axios/services/user/User";
import { useSelector } from "react-redux";
   
  export function Wallet() {
    const {token,user} = useSelector((state) => state?.userReducer?.user);
    const [balance,setBalance]=useState({})
       
    useEffect(()=>{
    (async function () {
        const res = await walletFinding(token,user._id)
        setBalance(res?.data)
    })()
    },[])
    
    return (
    <div className=" h-screen flex justify-center items-center bg-slate-200">

      <Card className="mt-6 w-96 drop-shadow-[6px_8px_6px_rgba(1,1,0,0.5)]">
        <CardBody>
         <div className="flex justify-center">
            <div className="border-solid border-b-2 border-teal-900 p-8 inline-block">
               CURRENT BALANCE
            </div>
            </div>
            <div className="flex justify-center">

                <div className="pt-7 text-8xl">
                 {balance?.currentBalance}
                </div>
            </div>
         
         
        </CardBody>
      </Card>
    </div>
    );
  }
