import "./restaurant.css";

function DisplayRestaurantDetails(props) {
  const { title, categories, rating, delivery_time, price, image_url } =
    props.restaurant;

  return (
    <div className="card">
      <img className="card-img-top" src={image_url} alt="card image" />
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
        <i class="fa-solid fa-period fa-2xs" style={{ color: "#050505" }}></i>
        <small className="card-subtitle text-secondary">{categories}</small>
        <div className="mt-2 d-flex  justify-content-between text-secondary align-items-center ">
          <small className="rating">
            <i
              className="fa-solid fa-star fa-sm p-1 "
              style={{ color: "#ffffff" }}
            ></i>
            <span className="p-1">{rating}</span>
          </small>
          <div className="mb-2 ">.</div>
          <small>{delivery_time} MINS</small>
          <div className="mb-2">.</div>
          <small>{price * 2} FOR TWO</small>
        </div>
      </div>
    </div>
  );
}

export default DisplayRestaurantDetails;
