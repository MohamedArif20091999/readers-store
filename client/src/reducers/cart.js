export const cartItemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_CART_ITEM':
      console.log('NEW ');
      console.log([...state, action.payload]);
    case 'GET_CART':
      console.log('STATE:', [action.payload]);
      console.log('STTATE NOW: ', state);
      return action.payload;
    default:
      return state;
  }
};
