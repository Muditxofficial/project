import CardIcon from "./credit-card.svg";
import ProductImage from "./product-image.webp";
import { loadStripe } from "@stripe/stripe-js";
import "./styles.css";
import { useState } from "react";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUSH);
  }
  return stripePromise;
};

const Checkout = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const item = {
    price: "price_1KpO3xSHHajhpDSavobNoEBJ",
    quantity: 1,
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    // console.log(first)
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };
  if (stripeError) alert(stripeError);

  return (
    <div className='checkout'>
      <h1>Rewards Checkout</h1>
      <p className='checkout-title'>Terms And Conditions:</p>
      <p className='checkout-description'>
        1.On successful processing charges deduction, details about rewards will
        be sent to email.
        <br />
        2.User then needs to choose the reward of his liking and reply to that
        mail.
        <br />
        3.Reward tab gets unlocked after certain number of events are created.
        <br />
        4.Tab gets locked after reward has been redeemed but unlocks again if
        conditions are met.
        <br />
        5.Happy Creating!!!!
      </p>
      <h1 className='checkout-price'>100 rupees</h1>
      <img
        className='checkout-product-image'
        src={ProductImage}
        alt='Product'
      />
      <button
        className='checkout-button'
        onClick={redirectToCheckout}
        disabled={isLoading}>
        <div className='grey-circle'>
          <div className='purple-circle'>
            <img className='icon' src={CardIcon} alt='credit-card-icon' />
          </div>
        </div>
        <div className='text-container'>
          <p className='text'>{isLoading ? "Loading..." : "Buy"}</p>
        </div>
      </button>
    </div>
  );
};

export default Checkout;
