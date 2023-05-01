import { useDispatch } from "react-redux";
import {
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_ITEM,
} from "../../Redux/actionTypes";

function CartItems(props) {
  const { name, price, quantity, veg } = props.item;
  const dispatch = useDispatch();

  return (
    <>
      <div className="d-flex each-item pt-4 pb-4 ">
        <div className="cart-section d-flex align-items-center justify-content-between w-100">
          <div className="d-flex gap-2">
            {veg && (
              <i
                className="veg-logo align-self-start fa-solid fa-circle fa-2xs"
                style={{ color: "green" }}
              ></i>
            )}
            {!veg && (
              <i
                className="non-veg-logo align-self-start fa-solid fa-circle fa-2xs"
                style={{ color: "red" }}
              ></i>
            )}
            <h6 className="w-5">{name}</h6>
          </div>

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
            <b className="ms-5">
              <i
                class="fa-sharp fa-solid fa-indian-rupee-sign fa-sm"
                style={{ color: "#000000;" }}
              ></i>{" "}
              {price * quantity}
            </b>
          </div>
        </div>
      </div>
    </>
  );
}
export default CartItems;
