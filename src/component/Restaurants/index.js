import { useSelector } from "react-redux";
import DisplayRestaurantDetails from "./DisplayRestaurantDetails";

function Restaurants() {
  const restaurantData = useSelector((state) => {
    return state.restaurants.Restaurant;
  });

  return (
    <div className="restaurant-block">
      <h3 className="d-lg-none ps-2">All Restaurants Nearby</h3>
      <p className="d-lg-none ps-2 text-secondary">
        Discover unique tastes near you
      </p>
      <div className="d-flex   restaurants justify-content-center align-items-center gap-5 flex-wrap mt-2">
        {restaurantData.map((restaurant) => {
          return (
            <DisplayRestaurantDetails
              key={restaurant.title}
              restaurant={restaurant}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Restaurants;
