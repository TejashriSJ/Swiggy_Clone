import { useState } from "react";

function FilterRestaurants(props) {
  const [checkedItems, setCheckedItems] = useState([]);
  return (
    <div className="filter-restaurants p-3">
      <h4 className="mb-5">
        <span
          onClick={() => {
            props.setShowFilterOptions(false);
          }}
          style={{ cursor: "pointer" }}
        >
          X{" "}
        </span>
        Filters
      </h4>
      <b>Cuisines:</b>
      <div className="d-flex justify-content-around mt-4">
        <div className="d-flex flex-column gap-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="North Indian"
              name="North Indian"
            />
            <label className="form-check-label" for="North Indian">
              North Indian
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="Beverages"
              name="Beverages"
            />
            <label className="form-check-label" for="Beverages">
              Beverages
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="Italian"
              name="Italian"
            />
            <label className="form-check-label" for="Italian">
              Italian
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="Pizzas"
              name="Pizzas"
            />
            <label className="form-check-label" for="Pizzas">
              Pizzas
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="Fast Food"
              name="Fast Food "
            />
            <label className="form-check-label" for="Fast Food ">
              Fast Food
            </label>
          </div>
        </div>
        <div className="d-flex flex-column gap-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="Indian"
              name="Indian"
            />
            <label className="form-check-label" for="Indian">
              Indian
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="Chinese"
              name="Chinese"
            />
            <label className="form-check-label" for="Chinese">
              Chinese
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="Snacks"
              name="Snacks"
            />
            <label className="form-check-label" for="Snacks">
              Snacks
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="Desserts"
              name="Desserts"
            />
            <label className="form-check-label" for="Desserts">
              Desserts
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="Continental"
              name="Continental"
            />
            <label className="form-check-label" for="North Indian">
              Continental
            </label>
          </div>
        </div>
      </div>
      <div className="d-flex mt-5 justify-content-between p-2 gap-5">
        <button className="filter-clear-btn p-1 w-50">CLEAR</button>
        <button className="filter-show-btn w-50">SHOW RESTAURANTS</button>
      </div>
    </div>
  );
}

export default FilterRestaurants;
