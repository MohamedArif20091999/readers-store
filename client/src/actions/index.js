import axios from 'axios';

export const fetchProducts = () => async (dispatch) => {
  const { data } = await axios.get('/product/all-products');
  //   console.log(data);
  dispatch({ type: 'FETCH_PRODUCTS', payload: data });
};
