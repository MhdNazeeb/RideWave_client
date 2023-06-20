import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React from "react";
import { rideBook } from "../../../axios/services/user/User";
import { useSelector } from "react-redux";
const paypal = import.meta.env.VITE_PAYPAL_TOKEN;

export default function AduvancePaypal({ values, tripDetails, Rate }) {
  const perSeat = +Rate / 4;
  const userDetails = useSelector((state) => state.userReducer.user);
  const { token } = userDetails;
  const userid = userDetails.user._id;

  const data = {
    ...tripDetails,
    ...values,
       Rate,
       userid,
  };

  async function firstCheckout() {
    const res = await rideBook(data, token);
    console.log(res);
  }

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
                    value: perSeat,
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((response) => {
              firstCheckout();
              console.log(response);
            });
          }}
        />
      </PayPalScriptProvider>
      ;
    </>
  );
}
