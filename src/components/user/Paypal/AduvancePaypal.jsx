import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React, { useState } from "react";



const paypal = import.meta.env.VITE_PAYPAL_TOKEN;

export default function PaypalFull() {
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
                    value: 12,
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((response) => {
            });
          }}
        />
      </PayPalScriptProvider>
      
    </>
  );
}
