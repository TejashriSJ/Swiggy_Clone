import {
  ADD_TO_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../actionTypes";

const initCart = { cartItems: [], restaurantName: "" };

const Cart = (state = initCart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("item added");
      console.log("state", state);
      return {
        cartItems: [...state.cartItems, action.payload.item],
        restaurantName: action.payload.restaurant,
      };

    default:
      return state;
  }
};

export default Cart;
