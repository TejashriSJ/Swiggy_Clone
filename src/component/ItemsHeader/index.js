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
    <nav className="d-none d-lg-flex align-self-xl-center align-self-lg-start items-header  align-items-center mt-5 ">
      <h3 className="restaurent-heading ">Restaurants </h3>
      <div className=" sortBar container d-flex ">
        <ul className=" text-dark d-flex  align-items-center gap-5">
          <li
            className="nav-link"
            onClick={() => {
              dispatch({ type: SORT_BY_RELEVANCE });
            }}
          >
            {" "}
            Relevance
          </li>
          <li
            className="nav-link"
            onClick={() => {
              dispatch({ type: SORT_BY_DELIVERY_TIME });
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
