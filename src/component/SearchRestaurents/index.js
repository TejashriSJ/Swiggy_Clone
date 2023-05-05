import { useState } from "react";
import { useSelector } from "react-redux";

import Header from "../Header";
import Footer from "../Footer";
import MobileFooter from "../Footer/MobileFooter";
import MobileViewHeader from "../Header/MobileViewHeader";
import DisplayRestaurantDetails from "../Restaurants/DisplayRestaurantDetails";

import "./search.css";

function SearchRestaurants() {
  const [searchValue, setSeachValue] = useState("");
  const [matchedRestaurants, setMatchedRestaurants] = useState([]);

  const restaurants = useSelector((state) => {
    return state.restaurants.Restaurant;
  });

  const onChangeSeachvalue = (event) => {
    setSeachValue(event.target.value);

    let matchedRestaurantsList = restaurants.filter((restaurant) => {
      if (
        restaurant.title
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      ) {
        return true;
      } else if (
        restaurant.items
          .reduce((itemsNames, item) => {
            return (itemsNames += item.name.toLowerCase());
          }, "")
          .includes(event.target.value.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    });
    setMatchedRestaurants(matchedRestaurantsList);
  };

  return (
    <>
      <Header />
      <MobileViewHeader />
      <div className="d-flex search-container flex-column align-items-center">
        <div className="search-bar input-group d-flex align-items-center">
          <input
            className="form-control"
            type="text"
            placeholder="Search for restaurants and food"
            value={searchValue}
            onChange={onChangeSeachvalue}
          />
          <div className="input-group-append mx-5">
            <i
              className="fa-solid fa-magnifying-glass fa-sm "
              style={{ color: "#000000" }}
            ></i>
          </div>
        </div>
        <div>
          {matchedRestaurants.length === 0 && searchValue !== "" ? (
            <>
              <h4 className="mt-5">No Restaurants Matched</h4>
            </>
          ) : (
            <>
              {matchedRestaurants.map((restaurant) => {
                return (
                  <DisplayRestaurantDetails
                    restaurant={restaurant}
                    key={restaurant.title}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
      <Footer />
      <MobileFooter />
    </>
  );
}

export default SearchRestaurants;
