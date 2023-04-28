import DisplayAllItems from "./DisplayAllItems";

function DisplayRestaurantDetails(props) {
  const { title, categories, rating, address, items } = props.restaurantDetails;
  console.log(items, "items");
  return (
    <>
      <div className="d-flex restaurant-page flex-column align-items-center">
        <div className="restaurant-details d-flex align-items-center justify-content-between  mt-5">
          <div>
            <h3>{title}</h3>
            <p className="text-secondary">{categories}</p>
            <p className="text-secondary">{address}</p>
          </div>
          <div className="ratings align-self-start">
            <b className="text-success">
              <i
                class="fa-solid fa-star fa-sm"
                style={{ color: "#007007;" }}
              ></i>{" "}
              {rating}
            </b>
          </div>
        </div>
        <div className="all-items">
          {items.map((item) => {
            return (
              <DisplayAllItems key={item.name} item={item} restaurant={title} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default DisplayRestaurantDetails;
