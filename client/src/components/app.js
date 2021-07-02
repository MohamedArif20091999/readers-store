import { AppBar } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchProducts } from '../actions';
import Header from './Appbar';
import BookItems from './BookItems';
// import Home from './Home';
import './main.css';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header></Header>
        <BookItems></BookItems>
      </div>
    </ThemeProvider>
  );
};

export default App;
