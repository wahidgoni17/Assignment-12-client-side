import React from "react";
import Title from "../../../Component/Title";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useClassCart from "../../../Hooks/useClassCart";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  const [classCart] = useClassCart();
  const classInfo = useLoaderData()
  const price = parseFloat(classInfo.price);
  return (
    <>
      <Title title={"payment here"}></Title>
      <Elements stripe={stripePromise}>
        <CheckoutForm classCart={classCart} classInfo={classInfo} price={price}></CheckoutForm>
      </Elements>
    </>
  );
};

export default Payment;
