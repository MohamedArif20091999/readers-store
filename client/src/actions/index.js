import axios from 'axios';
// import { addToCart } from './cart';

export * from './cart';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/auth/api/user');
  if (res.data.status === 'unAuthenticated') {
    let data = false;
    return dispatch({ type: 'FETCH_USER', payload: data });
  }
  return dispatch({ type: 'FETCH_USER', payload: true });
};

export const fetchProducts = () => async (dispatch) => {
  const { data } = await axios.get('/product/all-products');
  //   console.log(data);
  dispatch({ type: 'FETCH_PRODUCTS', payload: data });
};
