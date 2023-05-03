import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SignIn from "../Header/SignIn";
import SignUp from "../Header/SignUp";

import "./footer.css";
import MyAccount from "../Header/MyAccount";

function MobileFooter() {
  const navigate = useNavigate();

  const [btnStatus, setBtnStatus] = useState({ signIn: false, signUp: false });
  const [logoutStatus, setLogOutStatus] = useState(false);
  const [displayDetails, setDisplayDetails] = useState(false);
  const registeredUsers = useSelector((state) => {
    return state.user.users;
  });
  const loggedInUser = useSelector((state) => {
    return state.user.loggedInUser;
  });

  return (
    <div className="mobile-footer align-self-start p-2  d-lg-none d-flex align-items-center justify-content-around">
      <div>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <p>SWIGGY</p>
        </Link>
      </div>
      <div>
        <p>FOOD</p>
      </div>
      <div>
        <p>INSTAMART</p>
      </div>
      <div>
        <p
          onClick={() => {
            navigate("/search");
          }}
        >
          SEARCH
        </p>
      </div>
      <div className="d-flex flex-column">
        <p
          onClick={() => {
            if (!logoutStatus && loggedInUser === "Sign In") {
              setBtnStatus({ signIn: true, signUp: false });
            } else {
              setDisplayDetails(true);
            }
          }}
        >
          ACCOUNT
        </p>
      </div>
      {btnStatus.signIn && (
        <SignIn setBtnStatus={setBtnStatus} setLogOutStatus={setLogOutStatus} />
      )}
      {btnStatus.signUp && <SignUp setBtnStatus={setBtnStatus} />}
      {displayDetails && (
        <MyAccount
          setDisplayDetails={setDisplayDetails}
          setLogOutStatus={setLogOutStatus}
        />
      )}
    </div>
  );
}

export default MobileFooter;
