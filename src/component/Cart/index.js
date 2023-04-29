import { useSelector } from "react-redux";

import Footer from "../Footer";
import CartHeader from "./CartHeader";
import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";
import "./cart.css";

function Cart() {
  let cartItems = useSelector((state) => {
    return state.cart.cartItems;
  });
  let restaurantName = useSelector((state) => {
    return state.cart.restaurantName;
  });
  let restaurants = useSelector((state) => {
    return state.restaurants.Restaurant;
  });
  let restaurantDetails = restaurants.find((restaurant) => {
    return restaurant.title === restaurantName;
  });
  let totalAmountToPay = cartItems.reduce((cost, item) => {
    return (cost += item.totalAmount);
  }, 0);

  return (
    <div className="cart-page d-flex align-items-center flex-column">
      <CartHeader />
      {cartItems.length === 0 && <EmptyCart />}
      {cartItems.length !== 0 && (
        <div className="container">
          <div className="row">
            <div className="col-5 payment-page">
              <div className="p-3 mb-4 mt-4">
                <h4>Account</h4>
                <p>
                  To Place your order now, log in to your existing account or
                  sign up.
                </p>
              </div>
              <div className="p-3 mb-3">
                <p>Delivery adderss</p>
              </div>
              <div className="p-3">
                <p>Payment</p>
              </div>
            </div>
            <div className="col-5 cart-details p-3">
              <div className=" mb-2 d-flex align-items-center justify-content-start gap-3">
                <div className="">
                  <img
                    className="restaurant-image"
                    src={restaurantDetails.image_url}
                    alt="restaurant img"
                  />
                </div>
                <div className="">
                  <b>{restaurantDetails.title}</b>
                  <p>{restaurantDetails.address}</p>
                </div>
              </div>

              {cartItems.map((item) => {
                return (
                  <CartItems key={item.name + restaurantName} item={item} />
                );
              })}
              <div className="cart-footer d-flex align-items-center justify-content-around">
                <h5>To Pay: </h5>
                <b>{totalAmountToPay}</b>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Cart;
