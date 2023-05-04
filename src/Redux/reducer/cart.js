import {
  ADD_TO_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_ITEM,
  EMPTY_CART,
} from "../actionTypes";

const initCart = { cartItems: [], restaurantName: "" };

const Cart = (state = initCart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (
        state.restaurantName !== "" &&
        action.payload.restaurant === state.restaurantName
      ) {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload.item],
          restaurantName: state.restaurantName,
        };
      } else {
        return {
          ...state,
          cartItems: [action.payload.item],
          restaurantName: action.payload.restaurant,
        };
      }

    case INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: [
          ...state.cartItems.map((item) => {
            if (item.name === action.payload) {
              return {
                ...item,
                quantity: item.quantity + 1,
                totalAmount: item.totalAmount + item.price,
              };
            } else {
              return item;
            }
          }),
        ],
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: [
          ...state.cartItems.map((item) => {
            if (item.name === action.payload) {
              return {
                ...item,
                quantity: item.quantity - 1,
                totalAmount: item.totalAmount - item.price,
              };
            } else {
              return item;
            }
          }),
        ],
      };

    case REMOVE_ITEM:
      console.log("removed", state.name);
      let resetRestaurant =
        state.cartItems.length === 1 ? "" : state.restaurantName;

      return {
        ...state,
        cartItems: state.cartItems.filter((item) => {
          return item.name !== action.payload;
        }),
        restaurantName: resetRestaurant,
      };

    case EMPTY_CART:
      return initCart;

    default:
      return state;
  }
};

export default Cart;
