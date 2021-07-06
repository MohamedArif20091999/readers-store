import { AppBar } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchProducts } from '../actions';
// import Header from './Appbar';
// import BookItems from './BookItems';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import CheckOut from './Checkout';
import './main.css';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div>
          {/* <Home></Home> */}

          <Route path="/" exact component={Home} />
          <Route path="/checkout" component={CheckOut} />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
