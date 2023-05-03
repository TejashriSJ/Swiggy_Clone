import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { EMPTY_CART, LOG_OUT } from "../../Redux/actionTypes";
import "./header.css";

function MyAccount(props) {
  const dispatch = useDispatch();
  const [logOutPrompt, setLogOutPrompt] = useState(false);

  const registeredUsers = useSelector((state) => {
    return state.user.users;
  });
  const loggedInUser = useSelector((state) => {
    return state.user.loggedInUser;
  });

  const currentUser =
    loggedInUser !== "Sign In" ? registeredUsers[loggedInUser] : "";

  const onClickLogOut = () => {
    setLogOutPrompt(true);
  };
  const onClickYes = () => {
    dispatch({ type: EMPTY_CART });
    dispatch({ type: LOG_OUT });
    props.setDisplayDetails(false);
    props.setLogOutStatus(false);
    setLogOutPrompt(false);
  };
  const onClickNo = () => {
    setLogOutPrompt(false);
  };

  return (
    <div className="account-details d-flex flex-column gap-5 ">
      <big
        className="align-self-start"
        onClick={() => {
          props.setDisplayDetails(false);
        }}
      >
        X
      </big>
      <div>
        <div className="user-details">
          <h5>{currentUser.name}</h5>
          <p className="text-dark">
            {loggedInUser}
            <span> | </span> <span> {currentUser.email}</span>
          </p>
        </div>
        <div className="user-options">
          <div>
            <b>My Account</b>
            <p className="text-secondary">Address,Favorites & Settings</p>
          </div>
          <div>
            <b>Payments & Refunds</b>
            <p className="text-secondary">Manage your Refunds, Payment Modes</p>
          </div>
          <div>
            <b>swiggy Money</b>
            <p className="text-secondary">
              View Account balance and Transaction History
            </p>
          </div>
          <div>
            <b>Help</b>
            <p className="text-secondary">FAQs & Links</p>
          </div>
          <div>
            <h6 onClick={onClickLogOut}>Log Out</h6>
          </div>
        </div>
      </div>
      {logOutPrompt && (
        <div className="background-blur">
          <div className="log-out-prompt">
            <h5>Are you sure you want to log out?</h5>
            <p>Your cart data will be lost if you log out!</p>
            <div className="d-flex justify-content-around">
              <button className="yesbtn" onClick={onClickYes}>
                Yes
              </button>{" "}
              <button className="nobtn" onClick={onClickNo}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default MyAccount;
