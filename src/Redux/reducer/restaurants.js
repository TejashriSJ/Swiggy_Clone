import Restaurant from "../../Data/Restaurant";
import {
  DELIVERY_TIME,
  RATING,
  COST_FOR_TWO,
  COST_FOR_TWO_H2L,
  RELEVANCE,
} from "../actionTypes";

const initRestaurents = { Restaurant };

const Restaurants = (state = initRestaurents, action) => {
  console.log("state", state);
  console.log("action type", action.type);
  switch (action.type) {
    case RELEVANCE:
      return { Restaurant: initRestaurents.Restaurant };
    case DELIVERY_TIME:
      return {
        Restaurant: [...state.Restaurant].sort((restaurant1, restaurant2) => {
          return (
            Number(restaurant1.delivery_time) -
            Number(restaurant2.delivery_time)
          );
        }),
      };

    case RATING:
      return {
        Restaurant: [...state.Restaurant].sort((restaurant1, restaurant2) => {
          return Number(restaurant2.rating) - Number(restaurant1.rating);
        }),
      };

    case COST_FOR_TWO:
      return {
        Restaurant: [...state.Restaurant].sort((restaurant1, restaurant2) => {
          return Number(restaurant1.price) - Number(restaurant2.price);
        }),
      };

    case COST_FOR_TWO_H2L:
      return {
        Restaurant: [...state.Restaurant].sort((restaurant1, restaurant2) => {
          return Number(restaurant2.price) - Number(restaurant1.price);
        }),
      };
    default:
      return state;
  }
};

export default Restaurants;
