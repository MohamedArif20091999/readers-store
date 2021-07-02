export const cartItemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_CART_ITEM':
      console.log(action.payload);
    default:
      return state;
  }
};
