import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getCart, logOut } from '../actions';
import Appbar from '@material-ui/core/AppBar';
import { Box, Toolbar, Typography, Snackbar } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Badge } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import './css/Appbar.css';

const Header = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const dispatch = useDispatch();
  let cart = useSelector((state) => state.cart);
  let user = useSelector((state) => state.auth);

  let history = useHistory();

  useEffect(() => {
    dispatch(getCart());
  }, []);

  const Alert = (props) => {
    return <MuiAlert elevation={0} variant="filled" {...props} />;
  };

  const get = () => {
    if (user) {
      return history.push('/checkout');
    }
    return setSnackbarOpen({ open: true });
  };

  const logout = () => {
    // alert('User logging out');
    dispatch(logOut());
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
        <Button onClick={() => logout()} variant="contained" className="login-btn" color="#0000" disableElevation>
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
            <Snackbar
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={snackbarOpen}
              autoHideDuration={6000}
              onClose={() => setSnackbarOpen(false)}
            >
              <Alert severity="error">Please login to continue!</Alert>
            </Snackbar>
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
