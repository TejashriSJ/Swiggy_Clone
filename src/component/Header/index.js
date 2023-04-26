import swiggyLogo from "../../swiggy.svg";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./header.css";
import { useState } from "react";

function Header() {
  const [btnStatus, setBtnStatus] = useState({ signIn: false, signUp: false });

  return (
    <div>
      <nav className="navbar navbar-expand ">
        <div className="container header d-flex ">
          <div className="d-flex align-items-center gap-2 me-5">
            <Link to="/">
              <img
                className="navbar-brand "
                src={swiggyLogo}
                height="70"
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
            <ul className="navBar navbar-nav text-dark d-flex gap-4 ml-5">
              <li className="nav-link d-flex align-items-center gap-1">
                {" "}
                <i
                  class="fa-solid fa-magnifying-glass fa-sm"
                  style={{ color: "#000000" }}
                ></i>{" "}
                Search
              </li>
              <li className="nav-link d-flex align-items-center gap-1">
                {" "}
                <i
                  class="fa-thin fa-percent fa-sm"
                  style={{ color: "#000205" }}
                ></i>{" "}
                Offers
              </li>
              <li className="nav-link "> Help</li>
              <li className="nav-link d-flex align-items-center gap-1">
                {" "}
                <i
                  class="fa-regular fa-user"
                  style={{ color: "#000000" }}
                ></i>{" "}
                <span
                  onClick={() => {
                    setBtnStatus({ signIn: true, signUp: false });
                  }}
                >
                  Login
                </span>{" "}
              </li>
              <li className="nav-link"> Cart</li>
            </ul>
          </div>
        </div>
      </nav>
      {(btnStatus.signIn || btnStatus.signUp) && (
        <div className="background-blur">
          {btnStatus.signIn && <SignIn setBtnStatus={setBtnStatus} />}
          {btnStatus.signUp && <SignUp setBtnStatus={setBtnStatus} />}
        </div>
      )}
    </div>
  );
}

export default Header;
