import React from 'react';
import Appbar from '@material-ui/core/AppBar';
import { Box, Toolbar, Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Badge } from '@material-ui/core';
import './css/Appbar.css';

const Header = () => {
  return (
    <div>
      <Appbar elevation={0} className="Appbar" position="fixed">
        <Toolbar>
          <Typography className="app-text" variant="h5">
            ReactStore
          </Typography>
          <div style={{ marginLeft: 'auto' }}>
            <Box display="flex" justifyContent="flex-end">
              <Box pl={3} pb={3}>
                <Button variant="contained" className="login-btn" color="#0000" disableElevation>
                  LOGIN
                </Button>
              </Box>
              <Box pl={1}>
                <IconButton className="cart-btn">
                  <Badge color="secondary" badgeContent={99}>
                    <ShoppingBasketIcon fontSize="" />
                  </Badge>
                </IconButton>
              </Box>
            </Box>
          </div>
        </Toolbar>
      </Appbar>
      <Toolbar />
    </div>
  );
};

export default Header;
