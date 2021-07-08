import React from 'react';
import { Button } from '@material-ui/core';
import StripeCheckout from 'react-stripe-checkout';

const stripeWrapper = ({ amount }) => {
  return (
    <StripeCheckout
      name="React store"
      amount={parseFloat(amount * 100).toFixed(2)}
      token={(token) => console.log(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <Button variant="contained" color="primary">
        Place Order
      </Button>
    </StripeCheckout>
  );
};

export default stripeWrapper;
