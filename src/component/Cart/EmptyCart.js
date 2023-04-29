import { useNavigate } from "react-router-dom";

function EmptyCart() {
  const navigate = useNavigate();
  return (
    <div class="empty-cart d-flex flex-column align-items-center">
      <div className="empty-cart-image"></div>
      <b className="p-2">Your cart is empty</b>
      <div>You can go to home page to view more restaurants</div>

      <button
        className="btn mb-5 mt-3"
        onClick={() => {
          navigate("/");
        }}
      >
        See restaurants near you
      </button>
    </div>
  );
}

export default EmptyCart;
