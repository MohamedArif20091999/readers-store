import { combineReducers } from 'redux';

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
});
