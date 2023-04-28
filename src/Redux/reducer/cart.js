import {
  ADD_TO_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../actionTypes";

const initCart = { cartItems: [], restaurantName: "" };

const Cart = (state = initCart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        cartItems: [...state.cartItems, action.payload.item],
        restaurantName: action.payload.restaurant,
      };
    case INCREASE_QUANTITY:
      return {
        cartItems: [
          ...state.cartItems.map((item) => {
            if (item.name === action.payload) {
              return { ...item, quantity: item.quantity + 1 };
            } else {
              return item;
            }
          }),
        ],
      };

    case DECREASE_QUANTITY:
      return {
        cartItems: [
          ...state.cartItems.map((item) => {
            if (item.name === action.payload) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return item;
            }
          }),
        ],
      };

    default:
      return state;
  }
};

export default Cart;
