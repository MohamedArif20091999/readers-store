import React from 'react';
import { Box, Grid, Card, CardMedia, Typography, CardContent, Button, CardActionArea, CardActions } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import './css/Card.css';

const BookItems = () => {
  const imageURL =
    'https://images.unsplash.com/photo-1624542313043-40df8401b342?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';

  return (
    <div className="BookItems">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} mx="auto">
          <Card className="item">
            <CardActionArea>
              <CardMedia className="card-image" image={imageURL} title="Contemplative Reptile" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Book title
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Book description
                </Typography>
              </CardContent>
            </CardActionArea>
            <Grid container item>
              <Box style={{ textAlign: 'center' }}>
                <Rating name="half-rating" value={4} readOnly></Rating>
              </Box>
              <Box mt={0.5} pl={1}>
                <Typography variant="body2" color="textSecondary" component="p">
                  13,453
                </Typography>
              </Box>
            </Grid>
            <CardActions className="add-to-cart-btn">
              <Button className="a-cart-btn" variant="contained" disableElevation>
                Add to cart
              </Button>
              {/* <Button size="small" color="primary">
                Learn More
              </Button> */}
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} mx="auto">
          <Card className="item">
            <CardActionArea>
              <CardMedia className="card-image" image={imageURL} title="Contemplative Reptile" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Book title
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Book description
                </Typography>
              </CardContent>
            </CardActionArea>
            <Grid container item>
              <Box style={{ textAlign: 'center' }}>
                <Rating name="half-rating" value={4} readOnly></Rating>
              </Box>
              <Box mt={0.5} pl={1}>
                <Typography variant="body2" color="textSecondary" component="p">
                  13,453
                </Typography>
              </Box>
            </Grid>
            <CardActions className="add-to-cart-btn">
              <Button className="a-cart-btn" variant="contained" disableElevation>
                Add to cart
              </Button>
              {/* <Button size="small" color="primary">
                Learn More
              </Button> */}
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} mx="auto">
          <Card className="item">
            <CardActionArea>
              <CardMedia className="card-image" image={imageURL} title="Contemplative Reptile" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Book title
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Book description
                </Typography>
              </CardContent>
            </CardActionArea>
            <Grid container item>
              <Box style={{ textAlign: 'center' }}>
                <Rating name="half-rating" value={4} readOnly></Rating>
              </Box>
              <Box mt={0.5} pl={1}>
                <Typography variant="body2" color="textSecondary" component="p">
                  13,453
                </Typography>
              </Box>
            </Grid>
            <CardActions className="add-to-cart-btn">
              <Button className="a-cart-btn" variant="contained" disableElevation>
                Add to cart
              </Button>
              {/* <Button size="small" color="primary">
                Learn More
              </Button> */}
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} mx="auto">
          <Card className="item">
            <CardActionArea>
              <CardMedia className="card-image" image={imageURL} title="Contemplative Reptile" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Book title
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Book description
                </Typography>
              </CardContent>
            </CardActionArea>
            <Grid container item>
              <Box style={{ textAlign: 'center' }}>
                <Rating name="half-rating" value={4} readOnly></Rating>
              </Box>
              <Box mt={0.5} pl={1}>
                <Typography variant="body2" color="textSecondary" component="p">
                  13,453
                </Typography>
              </Box>
            </Grid>
            <CardActions className="add-to-cart-btn">
              <Button className="a-cart-btn" variant="contained" disableElevation>
                Add to cart
              </Button>
              {/* <Button size="small" color="primary">
                Learn More
              </Button> */}
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} mx="auto">
          <Card className="item">
            <CardActionArea>
              <CardMedia className="card-image" image={imageURL} title="Contemplative Reptile" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Book title
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Book description
                </Typography>
              </CardContent>
            </CardActionArea>
            <Grid container item>
              <Box style={{ textAlign: 'center' }}>
                <Rating name="half-rating" value={4} readOnly></Rating>
              </Box>
              <Box mt={0.5} pl={1}>
                <Typography variant="body2" color="textSecondary" component="p">
                  13,453
                </Typography>
              </Box>
            </Grid>
            <CardActions className="add-to-cart-btn">
              <Button className="a-cart-btn" variant="contained" disableElevation>
                Add to cart
              </Button>
              {/* <Button size="small" color="primary">
                Learn More
              </Button> */}
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} mx="auto">
          <Card className="item">
            <CardActionArea>
              <CardMedia className="card-image" image={imageURL} title="Contemplative Reptile" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Book title
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Book description
                </Typography>
              </CardContent>
            </CardActionArea>
            <Grid container item>
              <Box style={{ textAlign: 'center' }}>
                <Rating name="half-rating" value={4} readOnly></Rating>
              </Box>
              <Box mt={0.5} pl={1}>
                <Typography variant="body2" color="textSecondary" component="p">
                  13,453
                </Typography>
              </Box>
            </Grid>
            <CardActions className="add-to-cart-btn">
              <Button className="a-cart-btn" variant="contained" disableElevation>
                Add to cart
              </Button>
              {/* <Button size="small" color="primary">
                Learn More
              </Button> */}
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} mx="auto">
          <Card className="item">
            <CardActionArea>
              <CardMedia className="card-image" image={imageURL} title="Contemplative Reptile" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Book title
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Book description
                </Typography>
              </CardContent>
            </CardActionArea>
            <Grid container item>
              <Box style={{ textAlign: 'center' }}>
                <Rating name="half-rating" value={4} readOnly></Rating>
              </Box>
              <Box mt={0.5} pl={1}>
                <Typography variant="body2" color="textSecondary" component="p">
                  13,453
                </Typography>
              </Box>
            </Grid>
            <CardActions className="add-to-cart-btn">
              <Button className="a-cart-btn" variant="contained" disableElevation>
                Add to cart
              </Button>
              {/* <Button size="small" color="primary">
                Learn More
              </Button> */}
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} mx="auto">
          <Card className="item">
            <CardActionArea>
              <CardMedia className="card-image" image={imageURL} title="Contemplative Reptile" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Book title
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Book description
                </Typography>
              </CardContent>
            </CardActionArea>
            <Grid container item>
              <Box style={{ textAlign: 'center' }}>
                <Rating name="half-rating" value={4} readOnly></Rating>
              </Box>
              <Box mt={0.5} pl={1}>
                <Typography variant="body2" color="textSecondary" component="p">
                  13,453
                </Typography>
              </Box>
            </Grid>
            <CardActions className="add-to-cart-btn">
              <Button className="a-cart-btn" variant="contained" disableElevation>
                Add to cart
              </Button>
              {/* <Button size="small" color="primary">
                Learn More
              </Button> */}
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} mx="auto">
          <Card className="item">
            <CardActionArea>
              <CardMedia className="card-image" image={imageURL} title="Contemplative Reptile" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Book title
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Book description
                </Typography>
              </CardContent>
            </CardActionArea>
            <Grid container item>
              <Box style={{ textAlign: 'center' }}>
                <Rating name="half-rating" value={4} readOnly></Rating>
              </Box>
              <Box mt={0.5} pl={1}>
                <Typography variant="body2" color="textSecondary" component="p">
                  13,453
                </Typography>
              </Box>
            </Grid>
            <CardActions className="add-to-cart-btn">
              <Button className="a-cart-btn" variant="contained" disableElevation>
                Add to cart
              </Button>
              {/* <Button size="small" color="primary">
                Learn More
              </Button> */}
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default BookItems;