import { useSelector } from "react-redux";
import DisplayRestaurantDetails from "./DisplayRestaurantDetails";

function Restaurants() {
  const restaurantData = useSelector((state) => {
    return state.restaurants.Restaurant;
  });

  return (
    <div className="d-flex restaurants justify-content-center align-items-center gap-5 flex-wrap mt-2">
      {restaurantData.map((restaurant) => {
        return (
          <DisplayRestaurantDetails
            key={restaurant.title}
            restaurant={restaurant}
          />
        );
      })}
    </div>
  );
}
export default Restaurants;
