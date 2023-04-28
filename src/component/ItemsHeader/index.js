import { useNavigate } from "react-router-dom";

import "./ItemsHeader.css";

function ItemsHeader() {
  const navigate = useNavigate();
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
          <li className="nav-link">Filters</li>
        </ul>
      </div>
    </nav>
  );
}

export default ItemsHeader;
