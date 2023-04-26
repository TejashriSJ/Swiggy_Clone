import Restaurant from "../../Data/Restaurant";
import {
  SORT_BY_DELIVERY_TIME,
  SORT_BY_RATING,
  SORT_BY_COST_ASCENDING,
  SORT_BY_COST_DESCENDING,
  SORT_BY_RELEVANCE,
} from "../actionTypes";

const initRestaurents = { Restaurant };

const Restaurants = (state = initRestaurents, action) => {
  console.log("state", state);
  console.log("action type", action.type);
  switch (action.type) {
    case SORT_BY_RELEVANCE:
      return { Restaurant: initRestaurents.Restaurant };
    case SORT_BY_DELIVERY_TIME:
      return {
        Restaurant: [...state.Restaurant].sort((restaurant1, restaurant2) => {
          return (
            Number(restaurant1.delivery_time) -
            Number(restaurant2.delivery_time)
          );
        }),
      };

    case SORT_BY_RATING:
      return {
        Restaurant: [...state.Restaurant].sort((restaurant1, restaurant2) => {
          return Number(restaurant2.rating) - Number(restaurant1.rating);
        }),
      };

    case SORT_BY_COST_ASCENDING:
      return {
        Restaurant: [...state.Restaurant].sort((restaurant1, restaurant2) => {
          return Number(restaurant1.price) - Number(restaurant2.price);
        }),
      };

    case SORT_BY_COST_DESCENDING:
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
