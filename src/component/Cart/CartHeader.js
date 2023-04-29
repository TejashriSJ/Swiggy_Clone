import { useNavigate } from "react-router-dom";

import swiggyLogo from "../../swiggy.svg";
function CartHeader() {
  const navigate = useNavigate();
  return (
    <div className="d-flex cart-header  align-items-center justify-content-between">
      <div>
        <img
          src={swiggyLogo}
          alt="swiggy logo"
          height="60"
          width="120"
          onClick={() => {
            navigate("/");
          }}
        />
        <b className="ms-2">SECURE CHECKOUT</b>
      </div>

      <div className="d-flex align-items-center mt-2 align-slef-center gap-3 me-5">
        <p>Help</p>
        <p>Sign In</p>
      </div>
    </div>
  );
}

export default CartHeader;
