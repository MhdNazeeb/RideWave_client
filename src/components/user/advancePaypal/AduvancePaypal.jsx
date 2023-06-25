import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const paypal = import.meta.env.VITE_PAYPAL_TOKEN;

export default function AduvancePaypal({ values, tripDetails, Rate,setconfrim ,setLoader,firstCheckout}) {
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
                    value: Rate,
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((response) => {
              firstCheckout();
            });
          }}
        />
      </PayPalScriptProvider>
      ;
    </>
  );
}
