import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import DisplayRestaurantDetails from "./DisplayRestaurantDetails";
import Header from "../Header";
import MobileViewHeader from "../Header/MobileViewHeader";
import Footer from "../Footer";
import MobileViewFooter from "../Footer/MobileFooter";

import "./restaurant.css";

function Restaurant() {
  const restaurantName = useParams();
  const restaurantsData = useSelector((state) => {
    return state.restaurants.Restaurant;
  });

  const restaurantDetails = restaurantsData.find((restaurant) => {
    return (
      restaurant.title.toLowerCase().replaceAll(" ", "-") ===
      restaurantName.name
    );
  });

  return (
    <>
      <Header />
      <MobileViewHeader />
      <DisplayRestaurantDetails restaurantDetails={restaurantDetails} />
      <Footer />
      <MobileViewFooter />
    </>
  );
}

export default Restaurant;
