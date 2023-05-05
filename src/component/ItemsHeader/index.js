import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { RESET } from "../../Redux/actionTypes";

import FilterRestaurants from "../Restaurants/FilterRestaurants";
import "./ItemsHeader.css";

function ItemsHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUrl = useLocation();

  let params = new URLSearchParams(currentUrl.search);

  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const [isActive, setIsActive] = useState("relavance");

  const noOfRestaurants = useSelector((state) => {
    return state.restaurants.Restaurant.length;
  });

  useEffect(() => {
    if (checkedItems.length !== 0) {
      params.set("filter", checkedItems);
      navigate({ pathname: currentUrl.pathname, search: params.toString() });
    } else {
      params.delete("filter");
      dispatch({ type: RESET });
      navigate({ pathname: currentUrl.pathname, search: params.toString() });
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
            <li
              className={
                isActive === "relavance"
                  ? "apply-underline nav-link"
                  : "nav-link"
              }
              onClick={() => {
                setIsActive("relavance");
              }}
            >
              {" "}
              Relevance
            </li>
            <li
              className={
                isActive === "delivery-time"
                  ? "apply-underline nav-link"
                  : "nav-link"
              }
              onClick={() => {
                setIsActive("delivery-time");
                params.set("sortBy", "DELIVERY_TIME");
                navigate({
                  pathname: currentUrl.pathname,
                  search: params.toString(),
                });
              }}
            >
              {" "}
              Delivery Time
            </li>
            <li
              className={
                isActive === "rating" ? "apply-underline nav-link" : "nav-link"
              }
              onClick={() => {
                setIsActive("rating");
                params.set("sortBy", "RATING");
                navigate({
                  pathname: currentUrl.pathname,
                  search: params.toString(),
                });
              }}
            >
              {" "}
              Rating
            </li>
            <li
              className={
                isActive === "low-to-high"
                  ? "apply-underline nav-link"
                  : "nav-link"
              }
              onClick={() => {
                setIsActive("low-to-high");
                params.set("sortBy", "COST_FOR_TWO");
                navigate({
                  pathname: currentUrl.pathname,
                  search: params.toString(),
                });
              }}
            >
              {" "}
              Cost: Low To High
            </li>
            <li
              className={
                isActive === "high-to-low"
                  ? "apply-underline nav-link"
                  : "nav-link"
              }
              onClick={() => {
                setIsActive("high-to-low");
                params.set("sortBy", "COST_FOR_TWO_H2L");
                navigate({
                  pathname: currentUrl.pathname,
                  search: params.toString(),
                });
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
