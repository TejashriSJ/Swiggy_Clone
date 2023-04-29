import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./header.css";
import swiggyLogo from "../../swiggy.svg";

function Header() {
  const [btnStatus, setBtnStatus] = useState({ signIn: false, signUp: false });
  const [logInStatus, setLogInStatus] = useState(false);
  const [logedInUser, setLogedInUser] = useState("Sign In");
  const [logoutStatus, setLogOutStatus] = useState(false);

  const navigate = useNavigate();
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
              <li className="d-flex align-items-center gap-1 ">
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
                  {logedInUser}
                </span>{" "}
              </li>
              {logoutStatus && (
                <li
                  onClick={() => {
                    setLogOutStatus(false);
                    setLogedInUser("Sign In");
                  }}
                >
                  Log Out
                </li>
              )}
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
              setLogedInUser={setLogedInUser}
              setLogOutStatus={setLogOutStatus}
            />
          )}
          {btnStatus.signUp && (
            <SignUp
              setBtnStatus={setBtnStatus}
              setLogedInUser={setLogedInUser}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
