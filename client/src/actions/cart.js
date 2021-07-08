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
  const res = await axios.post('/cart/add-to-cart', { productId: prodId });
  dispatch({ type: 'NEW_CART_ITEM', payload: res.data });
};

export const getCart = () => async (dispatch) => {
  const res = await axios.get('/cart/user-cart');
  dispatch({ type: 'GET_CART', payload: res.data });
};

export const deleteItem = (id) => async (dispatch) => {
  const { data } = await axios.post('/cart/delete-item', { productId: id });
  dispatch({ type: 'DELETE_ITEM', payload: data });
};
