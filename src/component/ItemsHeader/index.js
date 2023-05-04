import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import FilterRestaurants from "../Restaurants/FilterRestaurants";
import "./ItemsHeader.css";

function ItemsHeader() {
  const navigate = useNavigate();
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const noOfRestaurants = useSelector((state) => {
    return state.restaurants.Restaurant.length;
  });

  useEffect(() => {
    if (checkedItems.length !== 0) {
      navigate(`/?filter=${checkedItems}`);
    } else {
      navigate("/");
    }
  }, [checkedItems]);

  return (
    <div>
      <nav className="d-none d-lg-flex align-self-xl-center align-self-lg-start items-header  align-items-center mt-5 justify-content-between ">
        <h3 className="restaurent-heading ">
          {noOfRestaurants}{" "}
          {noOfRestaurants === 1 ? "restaurant" : "restaurants"}{" "}
        </h3>
        <div className=" sortBar container d-flex ">
          <ul className=" text-dark d-flex  align-items-center gap-5">
            <li className="nav-link"> Relevance</li>
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
              <b> Filters</b>
            </li>
          </ul>
        </div>

        {showFilterOptions && (
          <div div className="background-blur">
            <FilterRestaurants
              setShowFilterOptions={setShowFilterOptions}
              checkedItems={checkedItems}
              setCheckedItems={setCheckedItems}
            />{" "}
          </div>
        )}
      </nav>
      {checkedItems.length !== 0 && (
        <div className="d-flex gap-2 checked-items">
          {checkedItems.map((item) => {
            return (
              <>
                <p className="each-item-name">
                  {item}
                  <span
                    onClick={() => {
                      setCheckedItems(
                        checkedItems.filter((eachItem) => {
                          return eachItem !== item;
                        })
                      );
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    X
                  </span>
                </p>
              </>
            );
          })}
          <p
            className="each-item-name"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setCheckedItems([]);
            }}
          >
            Clear All
          </p>
        </div>
      )}
    </div>
  );
}

export default ItemsHeader;
