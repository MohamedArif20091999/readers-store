export const cartItemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_CART_ITEM':
      console.log(action.payload);
    case 'GET_CART':
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};
