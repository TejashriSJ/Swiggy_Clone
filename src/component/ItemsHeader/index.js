import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FilterRestaurants from "../Restaurants/FilterRestaurants";
import "./ItemsHeader.css";

function ItemsHeader() {
  const navigate = useNavigate();
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  return (
    <nav className="d-none d-lg-flex align-self-xl-center align-self-lg-start items-header  align-items-center mt-5 ">
      <h3 className="restaurent-heading ">Restaurants </h3>
      <div className=" sortBar container d-flex ">
        <ul className=" text-dark d-flex  align-items-center gap-5">
          <li
            className="nav-link"
            onClick={() => {
              navigate("/?sortBy=RELEVANCE");
            }}
          >
            {" "}
            Relevance
          </li>
          <li
            className="nav-link"
            onClick={() => {
              navigate("/?sortBy=DELIVERY_TIME");
            }}
          >
            {" "}
            Delivery Time
          </li>
          <li
            className="nav-link"
            onClick={() => {
              navigate("/?sortBy=RATING");
            }}
          >
            {" "}
            Rating
          </li>
          <li
            className="nav-link"
            onClick={() => {
              navigate("/?sortBy=COST_FOR_TWO");
            }}
          >
            {" "}
            Cost: Low To High
          </li>
          <li
            className="nav-link"
            onClick={() => {
              navigate("/?sortBy=COST_FOR_TWO_H2L");
            }}
          >
            {" "}
            Cost: High To Low{" "}
          </li>
          <li
            className="nav-link"
            onClick={() => {
              setShowFilterOptions(true);
            }}
          >
            Filters
          </li>
        </ul>
      </div>

      {showFilterOptions && (
        <div div className="background-blur">
          <FilterRestaurants setShowFilterOptions={setShowFilterOptions} />{" "}
        </div>
      )}
    </nav>
  );
}

export default ItemsHeader;
