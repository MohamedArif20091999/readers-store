import axios from 'axios';
import axiosInstance from '../axiosInstance';

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

export const getCart = () => async (dispatch) => {
  console.log('get cart----');
  // const res = await axios.get('/cart/user-cart');
  const res = await axiosInstance.get('/cart/user-cart');
  console.log('res', res.data);
  dispatch({ type: 'GET_CART', payload: res.data });
};

export const deleteItem = (id) => async (dispatch) => {
  console.log('delete');
  const { data } = await axios.post('/cart/delete-item', { productId: id });
  console.log(data);
  dispatch({ type: 'DELETE_ITEM', payload: data });
};
