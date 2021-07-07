import { combineReducers } from 'redux';
import { cartItemsReducer } from './cart';

export const authReducer = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_USER':
      console.log('REDUCE USER:', action.payload);
    default:
      return state;
  }
};

export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  products: productsReducer,
  cart: cartItemsReducer,
});
