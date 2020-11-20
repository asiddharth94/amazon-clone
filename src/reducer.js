export const initialState = {
  basket: [],
};

// Action would be adding or removing from basket
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const selectedProduct = state.basket.findIndex(
        (item) => item.id === action.id
      );
      let newBasket = [...state.basket];
      if (selectedProduct >= 0) {
        newBasket.splice(selectedProduct, 1);
      } else {
        console.warn("Cannot remove product as it is not in basket");
      }
      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;
