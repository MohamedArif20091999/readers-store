export const cartItemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_CART_ITEM':
      let filtered = state.filter((item) => item.id !== action.payload[0].id);
      return [...filtered, action.payload[0]];
    case 'GET_CART':
      return action.payload;
    case 'DELETE_ITEM':
      console.log(action.payload);
      let filteredCart = state.filter((item) => item.id !== action.payload);
      return filteredCart;
    default:
      return state;
  }
};
