import { useNavigate } from "react-router-dom";
import {
  SORT_BY_RELEVANCE,
  SORT_BY_COST_ASCENDING,
  SORT_BY_COST_DESCENDING,
  SORT_BY_DELIVERY_TIME,
  SORT_BY_RATING,
} from "../../Redux/actionTypes";
import { useDispatch } from "react-redux";

import "./ItemsHeader.css";

function ItemsHeader() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <nav className=" navbar d-flex justify-content-between   navbar-expand mt-5 ">
      <h3 className="me-2">Restaurants</h3>
      <div className=" sortBar container">
        <ul className=" navbar-nav text-dark">
          <li
            className="nav-link"
            onClick={() => {
              dispatch({ type: SORT_BY_RELEVANCE });
              navigate("/?sortBy=RELEVANCE");
            }}
          >
            {" "}
            Relevance
          </li>
          <li
            className="nav-link"
            onClick={() => {
              dispatch({ type: SORT_BY_DELIVERY_TIME });
              navigate("/?sortBy=DELIVERY_TIME");
            }}
          >
            {" "}
            Delivery Time
          </li>
          <li
            className="nav-link"
            onClick={() => {
              dispatch({
                type: SORT_BY_RATING,
              });
              navigate("/?sortBy=RATING");
            }}
          >
            {" "}
            Rating
          </li>
          <li
            className="nav-link"
            onClick={() => {
              dispatch({
                type: SORT_BY_COST_ASCENDING,
              });
              navigate("/?sortBy=COST_FOR_TWO");
            }}
          >
            {" "}
            Cost: Low To High
          </li>
          <li
            className="nav-link"
            onClick={() => {
              dispatch({
                type: SORT_BY_COST_DESCENDING,
              });
              navigate("/?sortBy=COST_FOR_TWO_H2L");
            }}
          >
            {" "}
            Cost: High To Low{" "}
          </li>
          <li className="nav-link">Filters</li>
        </ul>
      </div>
    </nav>
  );
}

export default ItemsHeader;
