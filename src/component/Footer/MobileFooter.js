import { Link } from "react-router-dom";

import "./footer.css";

function MobileFooter() {
  return (
    <div className="mobile-footer align-self-start p-2 w-100 d-lg-none d-flex align-items-center justify-content-around">
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
        <p>ACCOUNT</p>
      </div>
    </div>
  );
}

export default MobileFooter;
