import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getCart } from '../actions';
import Appbar from '@material-ui/core/AppBar';
import { Box, Toolbar, Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Badge } from '@material-ui/core';
import './css/Appbar.css';

const Header = () => {
  const dispatch = useDispatch();
  let cart = useSelector((state) => state.cart);
  let user = useSelector((state) => state.auth);

  let history = useHistory();

  useEffect(() => {
    dispatch(getCart());
  }, []);

  const get = () => {
    console.log(cart);
    history.push('/checkout');
  };

  const renderCartBadge = () => {
    if (user) {
      return (
        <Badge color="secondary" badgeContent={cart.length}>
          <ShoppingBasketIcon fontSize="" />
        </Badge>
      );
    }
    return (
      <Badge color="secondary" badgeContent={0}>
        <ShoppingBasketIcon fontSize="" />
      </Badge>
    );
  };

  const loginButton = () => {
    if (user) {
      return (
        <Button href="/auth/google" variant="contained" className="login-btn" color="#0000" disableElevation>
          LOGOUT
        </Button>
      );
    }
    return (
      <Button href="/auth/google" variant="contained" className="login-btn" color="#0000" disableElevation>
        LOGIN
      </Button>
    );
  };

  const renderItem = () => {
    return (
      <div>
        <Appbar elevation={0} className="Appbar" position="fixed">
          <Toolbar>
            <Typography onClick={() => history.push('/')} className="app-text" variant="h5">
              ReactStore
            </Typography>
            <div style={{ marginLeft: 'auto' }}>
              <Box display="flex" justifyContent="flex-end">
                <Box pl={3} pb={3}>
                  {loginButton()}
                </Box>
                <Box pl={1}>
                  <IconButton onClick={get} className="cart-btn">
                    {renderCartBadge()}
                  </IconButton>
                </Box>
              </Box>
            </div>
          </Toolbar>
        </Appbar>
        <Toolbar />
        {/* {renderItem()} */}
      </div>
    );
  };
  return renderItem();
};

export default Header;
