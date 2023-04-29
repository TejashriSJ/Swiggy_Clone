import { configureStore } from "@reduxjs/toolkit";

import restaurants from "./reducer/restaurants";
import cart from "./reducer/cart";
import user from "./reducer/user";

const store = configureStore({
  reducer: {
    restaurants,
    cart,
    user,
  },
});

export default store;
