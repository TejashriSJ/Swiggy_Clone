import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
} from "../../Redux/actionTypes";

function DisplayAllItems(props) {
  const { name, price, img_url, veg, best_seller, category } = props.item;

  const cartData = useSelector((state) => {
    return state.cart.cartItems;
  });

  const presentItem = cartData.find((item) => {
    return item.name === name;
  });

  const [addBtnstatus, setAddBtnStatus] = useState(presentItem ? true : false);

  const dispatch = useDispatch();

  const onClickAdd = () => {
    setAddBtnStatus(true);
    dispatch({
      type: ADD_TO_CART,
      payload: {
        item: { ...props.item, quantity: 1 },
        restaurant: props.restaurant,
      },
    });
  };

  const incrementCount = () => {
    dispatch({
      type: INCREASE_QUANTITY,
      payload: name,
    });
  };

  const decrementCount = () => {
    if (presentItem.quantity > 1) {
      dispatch({
        type: DECREASE_QUANTITY,
        payload: name,
      });
    } else {
      setAddBtnStatus(false);
    }
  };
  return (
    <>
      <div className="item d-flex">
        <div className="item-description">
          <div className="mb-2">
            {veg ? (
              <b className="text-success">Veg</b>
            ) : (
              <b className="text-danger">Non Veg</b>
            )}{" "}
            {best_seller && (
              <>
                {" "}
                <i
                  class="fa-solid fa-star fa-sm"
                  style={{ color: "rgb(250, 219, 42)" }}
                ></i>{" "}
                <b className="text-warning">Best Seller</b>
              </>
            )}
          </div>

          <h6 className="item-title"> {name}</h6>
          <b className="item-rate">
            <i
              class="fa-sharp fa-solid fa-indian-rupee-sign fa-sm"
              style={{ color: "#000000;" }}
            ></i>{" "}
            {price}{" "}
          </b>
        </div>
        <div className="item-image">
          <img src={img_url} alt={name} />
          <div className="addToCounter">
            {!addBtnstatus && (
              <button className="p-2 add-btn text-success" onClick={onClickAdd}>
                ADD
              </button>
            )}
            {addBtnstatus && (
              <div className="counter d-flex  p-2 text-success">
                <button onClick={decrementCount}>-</button>
                <span>{presentItem.quantity}</span>
                <button onClick={incrementCount}>+</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayAllItems;
