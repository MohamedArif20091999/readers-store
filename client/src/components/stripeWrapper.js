import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import StripeCheckout from 'react-stripe-checkout';

const StripeWrapper = ({ amount }) => {
  let history = useHistory();
  const paymentFinished = () => {
    return history.push('/');
  };

  return (
    <StripeCheckout
      name="React store"
      amount={parseFloat(amount * 100).toFixed(2)}
      token={(token) => paymentFinished()}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <Button variant="contained" color="primary">
        Place Order
      </Button>
    </StripeCheckout>
  );
};

export default StripeWrapper;
