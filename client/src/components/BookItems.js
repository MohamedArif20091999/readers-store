import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, addToCart } from '../actions';
import { Box, Grid, Card, CardMedia, Typography, CardContent, Button, CardActionArea, CardActions, Link } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import './css/Card.css';

const BookItems = () => {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const addToCartClicked = (prodId) => {
    console.log(prodId);
    dispatch(addToCart(prodId));
  };

  console.log(products);
  const imageURL =
    'https://images.unsplash.com/photo-1624542313043-40df8401b342?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';

  const renderItems = () => {
    if (products.length) {
      return (
        // <div>
        //   <h1>Show items</h1>
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
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      );
    }
    return <h1>Show loader</h1>;
  };
  return renderItems();

  // <div className="BookItems">
  // <Grid container direction="rows" spacing={4} className="main-grid">
  // {renderItems()}
  //  <Grid container item xs={12} sm={6} md={4} mx="auto"></Grid>
  // <Grid container item xs={12} sm={6} md={4} mx="auto">
  //   <Card>
  //     <CardActionArea>
  //       <CardMedia component="img" alt="Contemplative Reptile" className="card-image" image={imageURL} title="Contemplative Reptile" />
  //       <CardContent>
  //         <Typography gutterBottom variant="h5" component="h2">
  //           Lizard
  //         </Typography>
  //         <Typography variant="body2" color="textSecondary" component="p">
  //           Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
  //         </Typography>
  //       </CardContent>
  //     </CardActionArea>
  //     <CardActions>
  //       <Button size="small" color="primary">
  //         Share
  //       </Button>
  //       <Button size="small" color="primary">
  //         Learn More
  //       </Button>
  //     </CardActions>
  //   </Card>
  // </Grid>
  // <Grid container item xs={12} sm={6} md={4} spacing={3}>
  //   <Card>
  //     <CardActionArea>
  //       <CardMedia component="img" alt="Contemplative Reptile" className="card-image" image={imageURL} title="Contemplative Reptile" />
  //       <CardContent>
  //         <Typography gutterBottom variant="h5" component="h2">
  //           Lizard
  //         </Typography>
  //         <Typography variant="body2" color="textSecondary" component="p">
  //           Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
  //         </Typography>
  //       </CardContent>
  //     </CardActionArea>
  //     <CardActions>
  //       <Button size="small" color="primary">
  //         Share
  //       </Button>
  //       <Button size="small" color="primary">
  //         Learn More
  //       </Button>
  //     </CardActions>
  //   </Card>
  // </Grid>
  // <Grid container item xs={12} sm={6} md={4} spacing={3}>
  //   <Card>
  //     <CardActionArea>
  //       <CardMedia component="img" alt="Contemplative Reptile" className="card-image" image={imageURL} title="Contemplative Reptile" />
  //       <CardContent>
  //         <Typography gutterBottom variant="h5" component="h2">
  //           Lizard
  //         </Typography>
  //         <Typography variant="body2" color="textSecondary" component="p">
  //           Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
  //         </Typography>
  //       </CardContent>
  //     </CardActionArea>
  //     <CardActions>
  //       <Button size="small" color="primary">
  //         Share
  //       </Button>
  //       <Button size="small" color="primary">
  //         Learn More
  //       </Button>
  //     </CardActions>
  //   </Card>
  // </Grid>
  {
    /* </Grid> */
  }
  // </div>
};

export default BookItems;

// const renderItems = () => {
//   if (products.length) {
//     return (
//       <div>
//         {products.map((product) => (

//         ))}
//         )
//       </div>
//     );
//   }
//   return <h1>Show loader</h1>;
// };

// return (
//   <div className="BookItems">
//     {renderItems()}
//     <Grid container spacing={3}>
//       <Grid item xs={12} sm={6} md={4} mx="auto"></Grid>
//       {renderItems()}
//     </Grid>
//   </div>
// );
