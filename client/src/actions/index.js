import axios from 'axios';
// import { addToCart } from './cart';

export * from './cart';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/auth/api/user');
  console.log('USERDATA:');
  console.log('USER', res.data ? 'yes' : 'undef?');
  dispatch({ type: 'FETCH_USER', payload: res.data });
};

export const fetchProducts = () => async (dispatch) => {
  const { data } = await axios.get('/product/all-products');
  //   console.log(data);
  dispatch({ type: 'FETCH_PRODUCTS', payload: data });
};
