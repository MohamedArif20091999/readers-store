import axios from 'axios';

// export const fetchCartItems=async()=> {
//     const {data}= await axios.get()
// }

// export const addToCart = async (productId) => {
//   console.log('Sending request');
//   const res = await axios.post('/cart/add-to-cart', productId);
//   console.log(res);

// };
export const addToCart = (prodId) => async (dispatch) => {
  console.log('sending request');
  const res = await axios.post('/cart/add-to-cart', { productId: prodId });
  console.log(res.data);
  dispatch({ type: 'NEW_CART_ITEM', payload: res.data });
};
