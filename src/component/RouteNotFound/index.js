import { Link } from "react-router-dom";
import swiggyLogo from "../../swiggy.svg";
import "./rootNotFound.css";
function RouteNotFound() {
  return (
    <div>
      <div className="border-bottom logo">
        <Link to="/">
          <img
            className="navbar-brand "
            src={swiggyLogo}
            height="70"
            width="120"
            alt="swiggy logo"
          ></img>
        </Link>
      </div>

      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="root-not-found"></div>
        <div className="">
          <h4 className="text-dark text-center mt-3">Page not found</h4>
          <div className="text-secondary text-center mt-2">
            Uh-oh! Looks like the page you are trying to access, doesn't exist.
            Please start afresh.
          </div>
        </div>

        <div className="btn mt-3 mb-2">
          <Link to="/">GO HOME</Link>
        </div>
      </div>
    </div>
  );
}
export default RouteNotFound;
