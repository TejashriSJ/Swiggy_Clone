import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import DisplayAllItems from "./DisplayAllItems";

function DisplayRestaurantDetails(props) {
  const navigate = useNavigate();
  const { title, categories, rating, address, items } = props.restaurantDetails;

  const [itemsToDisplay, setItemsToDisplay] = useState(items);
  const [searchValue, setSeachValue] = useState("");
  const [toggleStatus, setToggleStatus] = useState(false);
  const currentLocation = useLocation();
  const searchParams = new URLSearchParams(currentLocation.search);

  const nonVegItem = items.find((item) => {
    return !item.veg;
  });

  let searchQuery = searchParams.get("searchQuery");

  useEffect(() => {
    searchValue === ""
      ? (() => {
          setItemsToDisplay(items);
          searchParams.delete("searchQuery");
          navigate({ pathname: currentLocation.pathname });
        })()
      : setItemsToDisplay(
          items.filter((item) => {
            return item.name.toLowerCase().includes(searchQuery.toLowerCase());
          })
        );
  }, [searchQuery]);

  const onChangeSearchValue = (event) => {
    setToggleStatus(false);
    setSeachValue(event.target.value);
    searchParams.set("searchQuery", event.target.value);
    navigate({
      pathname: currentLocation.pathname,
      search: searchParams.toString(),
    });
  };

  const ontoggleType = (event) => {
    setToggleStatus((prevToggleStatus) => {
      return !prevToggleStatus;
    });

    if (event.target.checked) {
      setItemsToDisplay(
        itemsToDisplay.filter((item) => {
          return item.veg;
        })
      );
    } else {
      if (searchValue === "") {
        setItemsToDisplay(items);
      } else {
        setItemsToDisplay(
          items.filter((item) => {
            return item.name.toLowerCase().includes(searchQuery.toLowerCase());
          })
        );
      }
    }
  };

  return (
    <>
      <div className="d-flex restaurant-page flex-column align-items-center">
        <div className="input-group items-search-bar">
          <i
            className="input-group-append fa-solid fa-arrow-left align-self-center ms-3 me-2"
            style={{ color: "#000000" }}
          ></i>
          <input
            type="text"
            className=" form-control p-2"
            id="search-bar"
            placeholder={`Search in ${title}`}
            value={searchValue}
            onChange={onChangeSearchValue}
          />
          <div className="input-group-append  mx-2 align-self-center">
            {searchValue ? (
              <i
                className="fa-solid fa-circle-xmark fa-lg"
                style={{ color: "#999999", cursor: "pointer" }}
                onClick={() => {
                  setToggleStatus(false);
                  setSeachValue("");
                  setItemsToDisplay(items);
                  searchParams.delete("searchQuery");
                  navigate({ pathname: currentLocation.pathname });
                }}
              ></i>
            ) : (
              <i
                className="fa-solid  fa-magnifying-glass fa-sm "
                style={{ color: "#000000", cursor: "pointer" }}
              ></i>
            )}
          </div>
        </div>

        <div className="restaurant-details d-flex align-items-center justify-content-between  mt-5">
          <div>
            <h3>{title}</h3>
            <p className="text-secondary">{categories}</p>
            <p className="text-secondary">{address}</p>
            <div className="food-type ">
              {nonVegItem ? (
                <div className="food-type-toggle">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="toggle-food-type"
                      checked={toggleStatus}
                      onChange={ontoggleType}
                    />
                    <label class="form-check-label" htmlFor="toggle-food-type">
                      <b>Veg Only</b>
                    </label>
                  </div>
                </div>
              ) : (
                <div className="d-flex gap-2 mt-1 ">
                  <i
                    className="fa-solid fa-leaf fa-sm mt-2"
                    style={{ color: "#098500" }}
                  ></i>
                  <p className="text-success">Pure Veg</p>
                </div>
              )}
            </div>
          </div>
          <div className="ratings align-self-start">
            <b className="text-success">
              <i
                className="fa-solid fa-star fa-sm"
                style={{ color: "#007007" }}
              ></i>{" "}
              {rating}
            </b>
          </div>
        </div>

        <div className="all-items">
          {itemsToDisplay.length !== 0 ? (
            itemsToDisplay.map((item) => {
              return (
                <DisplayAllItems
                  key={item.name + title}
                  item={item}
                  restaurant={title}
                />
              );
            })
          ) : (
            <h4 className="mt-4">No Items Matched</h4>
          )}
        </div>
      </div>
    </>
  );
}

export default DisplayRestaurantDetails;
