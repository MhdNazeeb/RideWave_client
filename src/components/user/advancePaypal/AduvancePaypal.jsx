import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React, { useState } from "react";
import { rideBook } from "../../../axios/services/user/User";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const paypal = import.meta.env.VITE_PAYPAL_TOKEN;

export default function AduvancePaypal({ values, tripDetails, Rate }) {
  const userDetails = useSelector((state) => state.userReducer.user);
  const navigate = useNavigate();
  const { token } = userDetails;
  const userid = userDetails.user._id;

  const data = {
    ...tripDetails,
    ...values,
    Rate,
    userid,
  };

  async function firstCheckout() {
    await rideBook(data, token).then((res) => {
      if (res?.data?.message) {
        toast.error(res?.data?.message);
      } else {
        navigate("/success", { state: { data: res?.data } });
      }
    });
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
