import { useSelector } from "react-redux";

import Footer from "../Footer";
import CartHeader from "./CartHeader";
import Header from "../Header";
import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";
import "./cart.css";
import amazonPayLogo from "./images/amazonPay.jpeg";
import googlePayLogo from "./images/googlePay.png";
import phonePayLogo from "./images/phonePay.png";

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
  let loggedInUser = useSelector((state) => {
    return state.user.loggedInUser;
  });
  let users = useSelector((state) => {
    return state.user.users;
  });

  let restaurantDetails = restaurants.find((restaurant) => {
    return restaurant.title === restaurantName;
  });
  let totalAmountToPay = cartItems.reduce((cost, item) => {
    return (cost += item.totalAmount);
  }, 0);

  return (
    <div className="cart-page d-flex align-items-center flex-column">
      <Header />
      {cartItems.length === 0 && <EmptyCart />}
      {cartItems.length !== 0 && (
        <div className="container ">
          <div className="row">
            <div className="col-6 payment-page">
              {loggedInUser === "Sign In" ? (
                <div className="p-3 mb-4 mt-4 account">
                  <h4>Account</h4>
                  <p>
                    To Place your order now, log in to your existing account or
                    sign up.
                  </p>
                </div>
              ) : (
                <div className="p-3 mb-4 mt-4 account">
                  <h4>
                    Logged In{" "}
                    <span>
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#2d8000" }}
                      ></i>
                    </span>
                  </h4>
                  <p className="pt-3">
                    {users[loggedInUser].name}
                    <span className="ms-2">|</span>{" "}
                    <span> {loggedInUser} </span>
                  </p>
                </div>
              )}
              <div className="p-3 mb-3 address">
                <b>Delivery adderss</b>
                {loggedInUser !== "Sign In" && (
                  <textarea
                    className="form-control"
                    placeholder="Enter your address"
                  />
                )}
              </div>
              <div className="p-3 payment">
                <b>Payment</b>
                {loggedInUser !== "Sign In" && (
                  <>
                    <p>Select your payment method</p>
                    <div className="container ">
                      <div className="row">
                        <div className="col-3">
                          <img
                            src={amazonPayLogo}
                            alt="amazon pay"
                            height="50px"
                            style={{ objectFit: "contain" }}
                          />
                          <p>Amazon Pay</p>
                          <button>PAY {totalAmountToPay}</button>
                        </div>
                        <div className="col-3">
                          <img
                            src={googlePayLogo}
                            alt="amazon pay"
                            height="30px"
                            style={{ objectFit: "contain" }}
                            className="mb-3"
                          />
                          <p>Google Pay</p>
                          <button>PAY {totalAmountToPay}</button>
                        </div>
                        <div className="col-3">
                          <img
                            src={phonePayLogo}
                            alt="amazon pay"
                            height="30px"
                            style={{ objectFit: "contain" }}
                            className="mb-3"
                          />
                          <p>Phone Pay</p>
                          <button>PAY {totalAmountToPay}</button>
                        </div>
                        <div className="col-2">
                          <p className="cash-on-delivery">Pay On Delivery</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
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
              <div className="cart-items">
                {cartItems.map((item) => {
                  return (
                    <CartItems key={item.name + restaurantName} item={item} />
                  );
                })}
              </div>

              <div className="cart-footer d-flex align-items-center justify-content-around">
                <h5>To Pay: </h5>
                <b>
                  <i
                    class="fa-sharp fa-solid fa-indian-rupee-sign fa-sm"
                    style={{ color: "#000000;" }}
                  ></i>{" "}
                  {totalAmountToPay}
                </b>
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
