import React, { useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Link from 'next/link';
import axios from 'axios';
import { ProductsContext } from '../context';
import CartList from '../components/CartList';
import Button from '../components/Button';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
);

export default function PreviewPage() {
  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);

  const { cartItemsList } = useContext(ProductsContext);

  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  const stripePromise = loadStripe(publishableKey);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(cartItemsList);
    const item = cartItemsList[0];
    const stripe = await stripePromise;
    const checkoutSession = await axios.post('/api/checkout_sessions',
      item);
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <div className="container mx-auto">
      {cartItemsList.length > 0
    && (
      <div className="my-8 mx-20">
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {cartItemsList.map((item) => (
              <CartList item={item} />
            ))}
          </ul>
        </div>
      </div>
    )}
      {cartItemsList.length === 0
        && (
          <div>
            <h1>Cart is empty!</h1>
            <Link href="/shop" passHref><div><Button text="Head back" /></div></Link>
          </div>
        )}
      <form action="api/checkout_sessions" method="POST">
        <section>
          <button name="cartitems">
            Checkout
          </button>
        </section>
      </form>
      <button onClick={handleSubmit}>
        Send
      </button>
      {cartItemsList.length > 0 && (
      <form onClick={handleSubmit}>
        <section>
          <button name="cartitems" value="hello" type="submit" role="link">
            Checkout
          </button>
        </section>
        <style jsx>
          {`
          section {
            background: #ffffff;
            display: flex;
            flex-direction: column;
            width: 400px;
            height: 112px;
            border-radius: 6px;
            justify-content: space-between;
          }
          button {
            height: 36px;
            background: #556cd6;
            border-radius: 4px;
            color: white;
            border: 0;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
          }
          button:hover {
            opacity: 0.8;
          }
        `}
        </style>
      </form>
      )}
    </div>
  );
}
