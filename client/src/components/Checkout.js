import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCart, deleteItem } from '../actions';
import Header from './Appbar';
import { Button, Card, CardContent, Typography, CardMedia } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import './css/Checkout.css';

const CheckOut = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  useEffect(() => {
    console.log(cartItems);
    // dispatch(getCart());
  }, []);

  const deleteFromCart = (id) => {
    dispatch(deleteItem(id));
  };

  console.log(cartItems.length);
  const renderItems = () => {
    if (cartItems.length) {
      return (
        // <h1>CartItems</h1>
        <div>
          <Header></Header>
          <div className="container">
            {cartItems.map((item) => (
              <Card className="card">
                <div>
                  <CardMedia className="image" image={item.image} title="Live from space album cover" />
                </div>
                <div>
                  <CardContent>
                    <Typography component="h5" variant="h5">
                      {item.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                  <div className="delete-btn">
                    <Button onClick={() => deleteFromCart(item.id)} variant="contained" color="secondary" startIcon={<DeleteIcon />}>
                      Delete
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      );
    }
    return <h1>Loading....</h1>;
  };

  return renderItems();
};

export default CheckOut;
