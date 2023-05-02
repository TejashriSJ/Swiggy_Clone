import { useState } from "react";
import { Link } from "react-router-dom";
import SignIn from "../Header/SignIn";
import SignUp from "../Header/SignUp";

import "./footer.css";

function MobileFooter() {
  const [btnStatus, setBtnStatus] = useState({ signIn: false, signUp: false });
  const [logoutStatus, setLogOutStatus] = useState(false);

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
        <p>SEARCH</p>
      </div>
      <div className="d-flex flex-column">
        <p
          onClick={() => {
            setBtnStatus({ signIn: true, signUp: false });
          }}
        >
          ACCOUNT
        </p>
      </div>
      {btnStatus.signIn && (
        <SignIn setBtnStatus={setBtnStatus} setLogOutStatus={setLogOutStatus} />
      )}
      {btnStatus.signUp && <SignUp setBtnStatus={setBtnStatus} />}
    </div>
  );
}

export default MobileFooter;
