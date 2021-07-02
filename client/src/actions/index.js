import axios from 'axios';
import { addToCart } from './cart';

export * from './cart';

export const fetchProducts = () => async (dispatch) => {
  const { data } = await axios.get('/product/all-products');
  //   console.log(data);
  dispatch({ type: 'FETCH_PRODUCTS', payload: data });
};
