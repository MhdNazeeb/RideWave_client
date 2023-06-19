import * as yup from 'yup';

export const userCheckout = yup.object().shape({
    date: yup.date()
    .min(new Date(), "Date must be today or a future date")
    .required("Date is required"),

    time: yup.string()
    .matches(
      /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
      "Invalid time format. Please enter a valid time in HH:mm format"
    )
    .required("Time is required")

});