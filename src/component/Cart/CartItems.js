import { useDispatch } from "react-redux";
import {
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_ITEM,
} from "../../Redux/actionTypes";

function CartItems(props) {
  const { name, price, quantity } = props.item;
  const dispatch = useDispatch();

  return (
    <>
      <div className="d-flex each-item">
        <div className="cart-section d-flex align-items-center justify-content-between w-100">
          <h6 className="w-5">{name}</h6>
          <div className="d-flex g-5 mr-5">
            <div className="button d-flex align-items-center justify-content-around">
              <button
                onClick={() => {
                  if (props.item.quantity > 1) {
                    dispatch({ type: DECREASE_QUANTITY, payload: name });
                  } else {
                    dispatch({ type: REMOVE_ITEM, payload: name });
                  }
                }}
              >
                -
              </button>{" "}
              <span>{quantity}</span>{" "}
              <button
                onClick={() => {
                  dispatch({ type: INCREASE_QUANTITY, payload: name });
                }}
              >
                +
              </button>
            </div>
            <b className="ms-5">{price * quantity}</b>
          </div>
        </div>
      </div>
    </>
  );
}
export default CartItems;
