export const cartItemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_CART_ITEM':
      let filtered = state.filter((item) => item.id !== action.payload[0].id);
      return [...filtered, action.payload[0]];
    case 'GET_CART':
      return action.payload;
    default:
      return state;
  }
};
