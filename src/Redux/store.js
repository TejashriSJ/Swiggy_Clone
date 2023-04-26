import { configureStore } from "@reduxjs/toolkit";

import restaurants from "./reducer/restaurants";

const store = configureStore({
  reducer: {
    restaurants,
  },
});

export default store;
