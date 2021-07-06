import { AppBar } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React from 'react';
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
          <Route path="/" exact component={Home} />
          <Route path="/checkout" component={CheckOut} />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
