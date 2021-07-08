import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, addToCart } from '../actions';
import {
  Box,
  Snackbar,
  CircularProgress,
  Grid,
  Card,
  CardMedia,
  Typography,
  CardContent,
  Button,
  CardActionArea,
  CardActions,
  Link,
  Alert,
  Backdrop,
  IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import MuiAlert from '@material-ui/lab/Alert';
import Rating from '@material-ui/lab/Rating';
import './css/Card.css';

const BookItems = () => {
  const [open, setOpen] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const dispatch = useDispatch();
  let products = useSelector((state) => state.products);
  let cart = useSelector((state) => state.cart);
  let user = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  function Alert(props) {
    return <MuiAlert elevation={0} variant="filled" {...props} />;
  }

  const addToCartClicked = (prodId) => {
    if (!user) {
      return setSnackbarOpen({ open: true });
    }
    return dispatch(addToCart(prodId));
  };

  const imageURL =
    'https://images.unsplash.com/photo-1624542313043-40df8401b342?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';

  const renderItems = () => {
    if (products.length) {
      return (
        <Grid container direction="rows" spacing={0} className="main-grid">
          {products.map((product) => (
            <Grid container item xs={12} sm={6} md={4} mx="auto">
              <Card class="">
                <CardActionArea>
                  <CardMedia component="img" alt="Contemplative Reptile" className="card-image" image={product.image} title="Contemplative Reptile" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {product.description.slice(0, 95) + '...'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Rating name="half-rating-read" value={product.rating} precision={0.5} readOnly></Rating>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {product.ratings_count}
                    </Typography>
                  </CardActions>
                  <Typography className="price" variant="h5">
                    {'$' + product.price}
                  </Typography>
                  <CardActions className="add-to-cart-btn">
                    <Button onClick={() => addToCartClicked(product.id)} className="a-cart-btn" variant="contained" disableElevation>
                      Add to cart
                    </Button>
                  </CardActions>
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
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      );
    }
    return (
      <div>
        <Backdrop open={open}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    );
  };
  return renderItems();
};

export default BookItems;
