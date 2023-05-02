import { useSelector, useDispatch } from "react-redux";
import { LOG_OUT } from "../../Redux/actionTypes";
import "./header.css";

function MyAccount() {
  const dispatch = useDispatch();
  const registeredUsers = useSelector((state) => {
    return state.user.users;
  });
  const loggedInUser = useSelector((state) => {
    return state.user.loggedInUser;
  });

  const currentUser =
    loggedInUser !== "Sign In" ? registeredUsers[loggedInUser] : "";
  console.log(currentUser);

  return (
    <div className="account-details f-flex flex-column justify-content-between p-3 pt-5">
      <div className="user-details">
        <h5>{currentUser.name}</h5>
        <p>{loggedInUser}</p>
        <p>{currentUser.email}</p>
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
        <h6
          onClick={() => {
            dispatch({ type: LOG_OUT });
          }}
        >
          Log Out
        </h6>
      </div>
    </div>
  );
}
export default MyAccount;
