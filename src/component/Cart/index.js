import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../Footer";
import Header from "../Header";
import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";
import { EMPTY_CART } from "../../Redux/actionTypes";
import amazonPayLogo from "./images/amazonPay.jpeg";
import googlePayLogo from "./images/googlePay.png";
import phonePayLogo from "./images/phonePay.png";
import MobileFooter from "../Footer/MobileFooter";
import MobileViewHeader from "../Header/MobileViewHeader";

import "./cart.css";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  let [address, setAddress] = useState("");
  let [payment, setPayment] = useState(false);
  let [paymentBtn, setPaymentBtn] = useState(false);
  let [yesBtnStatus, setYesBtnStatus] = useState(false);

  const onProvideAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleOnClickPay = (event) => {
    setPaymentBtn(true);
    if (address !== "") {
      setPayment(true);
    }
  };

  const onClickOk = () => {
    dispatch({ type: EMPTY_CART });
    navigate("/");
  };

  return (
    <div className="cart-page d-flex align-items-center  flex-column">
      <Header />
      <MobileViewHeader />
      {cartItems.length === 0 && <EmptyCart />}
      {cartItems.length !== 0 && (
        <div className="container ">
          <div className="row">
            <div className="col-lg-6 col-12 mt-5  mt-lg-3 ms-0  payment-page">
              {loggedInUser === "Sign In" ? (
                <div className="p-3 mb-4 mt-lg-4 mt-5 pt-5 account">
                  <h4>Account</h4>
                  <p>
                    To Place your order now, sign in to your existing account or
                    sign up.
                  </p>
                </div>
              ) : (
                <div className="p-3 mb-4 mt-5 mt-lg-4  account">
                  <h4>
                    Logged In{" "}
                    <span>
                      <i
                        className="fa-solid fa-circle-check"
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
                    onChange={onProvideAddress}
                  />
                )}
              </div>
              <div className="p-3 payment ">
                <b>Payment</b>
                {loggedInUser !== "Sign In" && (
                  <>
                    <p>Select your payment method</p>
                    <div
                      className="container"
                      style={{ backgroundColor: "white" }}
                    >
                      <div className="row">
                        <div className="col-lg-3 col-5 mb-5 mt-2">
                          <img
                            src={amazonPayLogo}
                            alt="amazon pay"
                            height="50px"
                            style={{ objectFit: "contain" }}
                          />
                          <p>Amazon Pay</p>
                          <button onClick={handleOnClickPay}>
                            PAY {totalAmountToPay}
                          </button>
                        </div>
                        <div className="col-lg-3 col-5 mb-5 mt-3">
                          <img
                            src={googlePayLogo}
                            alt="google pay"
                            height="30px"
                            style={{ objectFit: "contain" }}
                            className="mb-3"
                          />
                          <p>Google Pay</p>
                          <button onClick={handleOnClickPay}>
                            PAY {totalAmountToPay}
                          </button>
                        </div>
                        <div className="col-lg-3 col-5 mb-2 mt-lg-3">
                          <img
                            src={phonePayLogo}
                            alt="phone pay"
                            height="30px"
                            style={{ objectFit: "contain" }}
                            className="mb-3"
                          />
                          <p>Phone Pay</p>
                          <button onClick={handleOnClickPay}>
                            PAY {totalAmountToPay}
                          </button>
                        </div>
                        <div className="col-lg-2 col-4 mt-lg-5 mt-5">
                          <p
                            className="cash-on-delivery"
                            onClick={handleOnClickPay}
                          >
                            Pay On Delivery
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="col-lg-5 col-11  cart-details p-3">
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
                    className="fa-sharp fa-solid fa-indian-rupee-sign fa-sm"
                    style={{ color: "#000000" }}
                  ></i>{" "}
                  {totalAmountToPay}
                </b>
              </div>
            </div>
          </div>
        </div>
      )}

      {paymentBtn && (
        <div className="background-blur">
          {!payment && (
            <div className="payment-prompt d-flex flex-column justify-content-between align-items-center">
              <b className="text-danger">
                {" "}
                Please provide address to place order{" "}
              </b>
              <button
                onClick={() => {
                  setPaymentBtn(false);
                }}
                className="btn btn-success p-2 mt-3  w-100"
              >
                OK
              </button>
            </div>
          )}
          {payment && yesBtnStatus && (
            <div className="payment-prompt d-flex flex-column justify-content-between align-items-center">
              <i
                className="fa-solid fa-circle-check fa-2xl mb-4"
                style={{ color: "#008f18" }}
              ></i>
              <p>Thank You</p>
              <b className="text-center">Order Placed Successfully</b>
              <p>Enjoy Eating!!</p>
              <button
                onClick={onClickOk}
                className="btn btn-success p-2  w-100"
              >
                OK
              </button>
            </div>
          )}

          {payment && !yesBtnStatus && (
            <div className="payment-prompt d-flex flex-column justify-content-between align-items-center">
              <p className="text-dark">
                Are you sure you want to place the order?
              </p>
              <div className="d-flex gap-5">
                <button
                  className="btn yesBtn  btn-success"
                  onClick={() => {
                    setYesBtnStatus(true);
                  }}
                >
                  Yes
                </button>{" "}
                <button
                  className="btn noBtn btn-danger"
                  onClick={() => {
                    setPaymentBtn(false);
                  }}
                >
                  No
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <Footer />
      <MobileFooter />
    </div>
  );
}

export default Cart;
