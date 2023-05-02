import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { EMPTY_CART, LOG_OUT } from "../../Redux/actionTypes";
import "./header.css";
import swiggyLogo from "../../swiggy.svg";

function Header() {
  const dispatch = useDispatch();
  const [btnStatus, setBtnStatus] = useState({ signIn: false, signUp: false });
  const logedInUser = useSelector((state) => {
    return state.user.loggedInUser;
  });
  const registeredUsers = useSelector((state) => {
    return state.user.users;
  });

  const [logInStatus, setLogInStatus] = useState(false);
  const [logoutStatus, setLogOutStatus] = useState(false);
  const [logOutPrompt, setLogOutPrompt] = useState(false);

  const cartItems = useSelector((state) => {
    return state.cart.cartItems;
  });
  let cartItemsCount = cartItems.reduce((count, item) => {
    return (count += item.quantity);
  }, 0);

  const navigate = useNavigate();

  const onClickYes = () => {
    setLogOutStatus(false);
    dispatch({ type: LOG_OUT });
    dispatch({ type: EMPTY_CART });
    setLogOutPrompt(false);
    // setLogedInUser("Sign In");
  };
  const onClickNo = () => {
    setLogOutPrompt(false);
  };

  const onClickLogOut = () => {
    setLogOutPrompt(true);
  };

  return (
    <div>
      <nav>
        <div className="container header d-none  d-lg-flex align-items-center align-self-xl-center align-self-lg-start justify-content-xl-between justify-content-lg-start">
          <div className="d-flex align-items-center gap-2 ">
            <Link to="/">
              <img
                className="navbar-brand "
                src={swiggyLogo}
                height="60"
                width="120"
                alt="swiggy logo"
              ></img>
            </Link>

            <p className="">
              <b className="pb-1 border-bottom border-dark">Other </b>
              <small className="text-secondary">
                Bengaluru,Karnataka,India{" "}
              </small>
              <i
                class="fa-solid fa-chevron-down fa-sm"
                style={{ color: "#f22602" }}
              ></i>
            </p>
          </div>

          <div>
            <ul className="d-none-md text-dark d-flex align-items-center justify-content-center gap-5 ">
              <li
                className="d-flex align-items-center gap-1 "
                onClick={() => {
                  navigate("/search");
                }}
              >
                {" "}
                <i
                  class="fa-solid fa-magnifying-glass fa-sm"
                  style={{ color: "#000000" }}
                ></i>{" "}
                Search
              </li>
              <li className="d-flex align-items-center gap-1 ">
                {" "}
                <i
                  class="fa-thin fa-percent fa-sm"
                  style={{ color: "#000205" }}
                ></i>{" "}
                Offers
              </li>
              <li className=""> Help</li>
              <li className=" d-flex align-items-center gap-1">
                {" "}
                <i
                  class="fa-regular fa-user"
                  style={{ color: "#000000" }}
                ></i>{" "}
                <span
                  onClick={() => {
                    if (logedInUser === "Sign In") {
                      setBtnStatus({ signIn: true, signUp: false });
                    } else {
                      setLogOutStatus(true);
                    }
                  }}
                >
                  {logedInUser === "Sign In"
                    ? logedInUser
                    : registeredUsers[logedInUser].name}
                </span>{" "}
              </li>
              {logoutStatus && <li onClick={onClickLogOut}>Log Out</li>}
              <li
                className="d-flex align-items-center gap-1"
                onClick={() => {
                  navigate("/checkout");
                }}
              >
                <i
                  class="fa-solid fa-cart-shopping fa-sm"
                  style={{ color: "#000000" }}
                ></i>
                <span className="cartItemsCount">{cartItemsCount}</span>
                Cart
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {(btnStatus.signIn || btnStatus.signUp) && (
        <div className="background-blur">
          {btnStatus.signIn && (
            <SignIn
              setBtnStatus={setBtnStatus}
              //setLogedInUser={setLogedInUser}
              setLogOutStatus={setLogOutStatus}
            />
          )}
          {btnStatus.signUp && (
            <SignUp
              setBtnStatus={setBtnStatus}
              //setLogedInUser={setLogedInUser}
            />
          )}
        </div>
      )}
      {logOutPrompt && (
        <div className="background-blur">
          <div className="log-out-prompt">
            <h5>Are you sure you want to log out?</h5>
            <p>Your cart data will be lost if you log out!</p>
            <div className="d-flex justify-content-around">
              <button className="yesbtn" onClick={onClickYes}>
                Yes
              </button>{" "}
              <button className="nobtn" onClick={onClickNo}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
