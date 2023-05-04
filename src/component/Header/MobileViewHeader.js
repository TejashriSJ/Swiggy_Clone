import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./header.css";

function MobileViewHeader() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => {
    return state.cart.cartItems;
  });
  let cartItemsCount = cartItems.reduce((count, item) => {
    return (count += item.quantity);
  }, 0);
  return (
    <div className="mobile-header align-self-start p-2   d-flex d-lg-none align-items-center justify-content-between">
      <div className="d-flex flex-column">
        <div className="d-flex  align-items-center gap-2">
          <i
            className="fa-solid fa-location-dot"
            style={{ color: "#000000" }}
          ></i>
          <b>
            <big>Other</big>
          </b>
        </div>
        <p className="text-secondary">Bengaluru,Karnataka,India</p>
      </div>
      <div className="d-flex align-items-center gap-5">
        <b>Offers</b>
        <b
          onClick={() => {
            navigate("/checkout");
          }}
        >
          Cart <span className="cartItemsCount"> {cartItemsCount}</span>
        </b>
      </div>
    </div>
  );
}

export default MobileViewHeader;
