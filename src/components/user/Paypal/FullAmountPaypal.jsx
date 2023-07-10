import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React, { useState } from "react";
import { fullAmounTrip } from "../../../axios/services/user/User";



const paypal = import.meta.env.VITE_PAYPAL_TOKEN;

export default function FullAmountPaypal({tripid,pay,token,fullAmount}) {

  return (
    <>
     
      <PayPalScriptProvider
        options={{
          "client-id": paypal,
        }}
      >
        <PayPalButtons
          style={{ layout: "vertical" }}
          className="mt-5"
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: pay,
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((response) => {
              fullAmount()
            });
          }}

        />
      </PayPalScriptProvider>
      
    </>
  );
}
