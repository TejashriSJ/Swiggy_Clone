import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  ADD_TO_CART,
  REMOVE_ITEM,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
} from "../../Redux/actionTypes";

function DisplayAllItems(props) {
  const { name, price, img_url, veg, best_seller, category } = props.item;
  const restaurant = props.restaurant;

  const cartData = useSelector((state) => {
    return state.cart.cartItems;
  });

  const cartRestaurant = useSelector((state) => {
    return state.cart.restaurantName;
  });

  const presentItem = cartData.find((item) => {
    return item.name === name;
  });

  const [addBtnstatus, setAddBtnStatus] = useState(
    presentItem && cartRestaurant === restaurant ? true : false
  );

  const [isRestaurantChanged, setIsRestaurantChanged] = useState(false);

  const dispatch = useDispatch();

  const onClickAdd = () => {
    if (cartRestaurant !== restaurant && cartRestaurant !== "") {
      setIsRestaurantChanged(true);
    } else {
      setAddBtnStatus(true);
      dispatch({
        type: ADD_TO_CART,
        payload: {
          item: { ...props.item, quantity: 1, totalAmount: props.item.price },
          restaurant: restaurant,
        },
      });
    }
  };

  const onClickNo = () => {
    setIsRestaurantChanged(false);
  };
  const onClickYes = () => {
    setIsRestaurantChanged(false);
    setAddBtnStatus(true);
    dispatch({
      type: ADD_TO_CART,
      payload: {
        item: { ...props.item, quantity: 1, totalAmount: props.item.price },
        restaurant: restaurant,
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
      dispatch({
        type: REMOVE_ITEM,
        payload: name,
      });
    }
  };

  return (
    <>
      <div className="item d-flex">
        <div className="item-description">
          <div className="mb-2 ">
            {veg ? (
              <i
                className="veg-logo fa-solid fa-circle fa-2xs"
                style={{ color: "green" }}
              ></i>
            ) : (
              <i
                className="fa-sharp non-veg-logo fa-solid fa-play fa-xs fa-rotate-270"
                style={{ color: "#c70000" }}
              ></i>
            )}{" "}
            {best_seller && (
              <>
                {" "}
                <i
                  className="fa-solid fa-star fa-sm"
                  style={{ color: "rgb(250, 219, 42)" }}
                ></i>{" "}
                <b className="text-warning">Best Seller</b>
              </>
            )}
          </div>

          <h6 className="item-title"> {name}</h6>
          <b className="item-rate">
            <i
              className="fa-sharp fa-solid fa-indian-rupee-sign fa-sm"
              style={{ color: "#000000" }}
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

      {isRestaurantChanged && (
        <div className="promptForChangingRestaurant d-flex flex-column justify-content-between p-5">
          <div>
            <h4>Items already in cart</h4>
            <p>
              Your cart contains items from other restaurant. Would you like to
              reset your cart for adding items from this restaurant?
            </p>
          </div>

          <div className="d-flex gap-5">
            <button className="no-btn" onClick={onClickNo}>
              NO
            </button>
            <button className="yes-btn" onClick={onClickYes}>
              YES, START AFRESH
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default DisplayAllItems;
