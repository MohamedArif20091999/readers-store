import React from 'react';
import StripeWrapper from './stripeWrapper';
import { useSelector } from 'react-redux';
import { Typography, Button, Icon } from '@material-ui/core';

import './css/Confirm.css';

const Confirm = () => {
  const products = useSelector((state) => state.cart);
  let sum = products.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="Confirm">
      <div className="total">
        <Typography variant="h2">Total: ${sum.toFixed(2)} </Typography>
      </div>
      <div className="place-order">
        {/* <Button variant="contained" color="primary">
          Place Order
        </Button> */}
        <StripeWrapper amount={sum}></StripeWrapper>
      </div>
    </div>
  );
};

export default Confirm;
