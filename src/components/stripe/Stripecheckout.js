import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from "@stripe/react-stripe-js";
import { useCartContext } from "../../Context/Contexti/cart_context";
import { useUserContext } from "../../Context/Contexti/user_context";
import { formatPrice } from "../../Context/utilis/helpers";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const promise = loadStripe(process.env.REACT_APP_AUTH_STRIPE_PUBLIC_KEY);

const CheckoutForm = () => {
  const { cart, total_amount, shipping_fee, clearCart } = useCartContext();
  const { myUser } = useUserContext();
  const navigate = useNavigate();

  const [succeded, setSucceded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [disabled, setDisabled] = useState(true);
  const stripe = useStripe();
  const elements = useElements();
  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const createPaymentIntent = async () => {
    try {
      const { data } = await axios.post(
        "/.netlify/functions/create-payment-intent",
        JSON.stringify({ cart, shipping_fee, total_amount })
      );
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    createPaymentIntent();
  }, []);

  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (payload.setError) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceded(true);
      setTimeout(() => {
        clearCart();
        navigate("/");
      }, 5000);
    }
  };

  return (
    <div className="stripeCheckout">
      <div className="stripe-title">
        {succeded ? (
          <article>
            <h4>Thank you</h4>
            <h4>Your payment was successful</h4>
            <h4>Redirecting to home page shortly</h4>
          </article>
        ) : (
          <article>
            <h4>Hello, {myUser && myUser.name}</h4>
            <p>Your total is : {formatPrice(shipping_fee + total_amount)}</p>
            <p>Test card : 4242 4242 4242 4242</p>
          </article>
        )}
      </div>
      <form id="payment-form" onSubmit={handleSubmit}>
        <CardElement
          id="card-element"
          options={cardStyle}
          onChange={handleChange}
        />
        <button disabled={processing || disabled || succeded} id="submit">
          <span id="button-text">
            {processing ? <div className="spinner" id="spinner"></div> : "Pay"}
          </span>
        </button>
        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}
        <p className={succeded ? "result-message" : "result-message hidden"}>
          <br />
          Payment succeded, see the result in your
          <br />
          <br />
          <a href={`https://dashboard.stripe.com/test/payments`}>
            Stripe Dashboard
          </a>
          <br />
          <br />
          Refresh the page to pay again !
        </p>
      </form>
    </div>
  );
};
const Stripecheckout = () => {
  return (
    <Container>
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </Container>
  );
};

export default Stripecheckout;
