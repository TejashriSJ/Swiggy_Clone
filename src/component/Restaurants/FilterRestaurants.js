function FilterRestaurants(props) {
  const onCheckCuisines = (event) => {
    if (event.target.checked) {
      props.setCheckedItems([...props.checkedItems, event.target.name]);
    } else {
      props.setCheckedItems([
        ...props.checkedItems.filter((item) => {
          return item !== event.target.name;
        }),
      ]);
    }
  };

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
              id="NorthIndian"
              name="North Indian"
              onChange={onCheckCuisines}
              checked={props.checkedItems.includes("North Indian")}
            />
            <label className="form-check-label" htmlFor="NorthIndian">
              North Indian
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="Beverages"
              name="Beverages"
              onChange={onCheckCuisines}
              checked={props.checkedItems.includes("Beverages")}
            />
            <label className="form-check-label" htmlFor="Beverages">
              Beverages
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="Italian"
              name="Italian"
              onChange={onCheckCuisines}
              checked={props.checkedItems.includes("Italian")}
            />
            <label className="form-check-label" htmlFor="Italian">
              Italian
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="Pizzas"
              name="Pizzas"
              onChange={onCheckCuisines}
              checked={props.checkedItems.includes("Pizzas")}
            />
            <label className="form-check-label" htmlFor="Pizzas">
              Pizzas
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="FastFood"
              name="Fast Food"
              onChange={onCheckCuisines}
              checked={props.checkedItems.includes("Fast Food")}
            />
            <label className="form-check-label" htmlFor="FastFood ">
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
              onChange={onCheckCuisines}
              checked={props.checkedItems.includes("Indian")}
            />
            <label className="form-check-label" htmlFor="Indian">
              Indian
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="Chinese"
              name="Chinese"
              onChange={onCheckCuisines}
              checked={props.checkedItems.includes("Chinese")}
            />
            <label className="form-check-label" htmlFor="Chinese">
              Chinese
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="Snacks"
              name="Snacks"
              onChange={onCheckCuisines}
              checked={props.checkedItems.includes("Snacks")}
            />
            <label className="form-check-label" htmlFor="Snacks">
              Snacks
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="Desserts"
              name="Desserts"
              onChange={onCheckCuisines}
              checked={props.checkedItems.includes("Desserts")}
            />
            <label className="form-check-label" htmlFor="Desserts">
              Desserts
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="Continental"
              name="Continental"
              onChange={onCheckCuisines}
              checked={props.checkedItems.includes("Continental")}
            />
            <label className="form-check-label" htmlFor="North Indian">
              Continental
            </label>
          </div>
        </div>
      </div>
      <div className="d-flex mt-5 justify-content-between p-2 gap-5">
        <button
          className="filter-clear-btn p-1 w-50"
          onClick={() => {
            props.setCheckedItems([]);
          }}
        >
          CLEAR
        </button>
        <button
          className="filter-show-btn w-50"
          onClick={() => {
            props.setShowFilterOptions(false);
          }}
        >
          SHOW RESTAURANTS
        </button>
      </div>
    </div>
  );
}

export default FilterRestaurants;
