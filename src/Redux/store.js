import { configureStore } from "@reduxjs/toolkit";

import restaurants from "./reducer/restaurants";
import cart from "./reducer/cart";

const store = configureStore({
  reducer: {
    restaurants,
    cart,
  },
});

export default store;
