// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchProducts } from '../actions';

// import BookItems from './BookItems';

// const Home = () => {
//   // const products = useSelector((state) => state.products);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchProducts());

//     const getProducts = () => {
//       let products = useSelector((state) => state.products);
//     };

//     getProducts();
//   }, []);

//   console.log('PRODUCTS', products);

//   return (
//     <div>
//       {/* <h1>{products[0].title}</h1> */}
//       <BookItems book={products[0]} />
//     </div>
//   );
// };

// export default Home;
