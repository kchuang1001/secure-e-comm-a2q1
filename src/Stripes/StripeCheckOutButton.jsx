import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Stripe from "stripe";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      // Show error to your customer
      setErrorMessage(submitError.message);
      return;
    }

    // Create the PaymentIntent and obtain clientSecret from your server endpoint
    // const res = await fetch('/create-intent', {
    //   method: 'POST',
    // });
    const stripeBack = Stripe("sk_test_51Nt0zyGc6sAjTpWE0XRWBre20fs7TDJvUign3c3z9T3YaHGMpqJig6OhEu7AasZKWYztMoWr7G8td6TWtmL4hxcl00H7voKJe9");

    const paymentIntent = await stripeBack.paymentIntents.create(
      {
        amount: 50,
        currency: "aud",
        // payment_method_types: ["card"],
      },
    );
    console.log(paymentIntent);
    const { client_secret: clientSecret } = paymentIntent;

    const paymentConfirmation = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      clientSecret,
      confirmParams: {
        return_url: "http://localhost",
      },
    });

    if (paymentConfirmation.error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      console.log("Something wrong", error);
      setErrorMessage(error.message);
    } else {
      console.log(paymentConfirmation)
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

const stripePromise = loadStripe("pk_test_51Nt0zyGc6sAjTpWEu2r3xyu5bHEV1hGe178czCEDrXx3DXbOk90FfRceS2naWnDNCT3tj1qkrHrvWRL0Bt0agy0k006lPNghLo");

const options = {
  mode: "payment",
  amount: 50,
  currency: "aud",
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};

const StripeCheckOutButton = () => (
  <Elements stripe={stripePromise} options={options}>
    <CheckoutForm />
  </Elements>
);

export default StripeCheckOutButton;
