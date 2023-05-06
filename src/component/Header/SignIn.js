import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import validator from "validator";
import { Link } from "react-router-dom";
import { LOG_IN } from "../../Redux/actionTypes";

function SignIn(props) {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    phoneNumber: "",
  });
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const [formLabel, setFormLabel] = useState({ phoneNumber: "Phone Number" });
  const registerdUsers = useSelector((state) => {
    return state.user.users;
  });
  const onChange = (event) => {
    if (validator.isNumeric(event.target.value) || event.target.value === "") {
      setFormData({
        phoneNumber: event.target.value,
      });
    }
    setFormLabel({ phoneNumber: "Phone Number" });
  };

  const formOnSubmit = (event) => {
    event.preventDefault();

    if (formData.phoneNumber.length !== 10 || formData.phoneNumber === "") {
      setFormLabel({
        phoneNumber: <p className="text-danger">Enter Your Phone Number</p>,
      });
    } else if (!validator.isNumeric(formData.phoneNumber)) {
      setFormLabel({
        phoneNumber: <p className="text-danger">Invalid Mobile Number</p>,
      });
    } else {
      if (Object.keys(registerdUsers).includes(formData.phoneNumber)) {
        dispatch({
          type: LOG_IN,
          payload: formData.phoneNumber,
        });
        props.setLogOutStatus(true);
        setIsFormSubmit(true);
      } else {
        props.setBtnStatus({ signUp: true, signIn: false });
      }
    }
  };

  const onClickOk = () => {
    navigate({ pathname, search: search.toString() });
    setIsFormSubmit(false);
    props.setBtnStatus({ signUp: false, signIn: false });
  };

  return (
    <>
      <div className="container form mw-100">
        <form className="d-flex flex-column close " onSubmit={formOnSubmit}>
          <big
            onClick={() => {
              props.setBtnStatus({ signUp: false, signIn: false });
            }}
          >
            x
          </big>
          <div className="d-flex justify-content-between p-1">
            <div className="">
              <h2>Login</h2>
              <span>or</span>{" "}
              <span
                className="create-account"
                onClick={() => {
                  props.setBtnStatus({ signUp: true, signIn: false });
                }}
              >
                create an account
              </span>
            </div>
            <img
              className=""
              width="100"
              height="105"
              alt=""
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
            />
          </div>

          <div className="form-floating m-2 ">
            <input
              className="form-control text-secondary  "
              id="phone-number"
              type="text"
              required
              maxLength="10"
              autoComplete="off"
              placeholder="Phone number"
              value={formData.phoneNumber}
              onChange={onChange}
            />
            <label htmlFor="phone-number" className="text-secondary ">
              {formLabel.phoneNumber}
            </label>
          </div>
          <div className="d-flex flex-column">
            <button className="btn text-light m-2 ">LOGIN</button>
            <small className="text-secondary p-1">
              By clicking on Login,I accept the
              <a href="#" className="text-dark text-decoration-none">
                {" "}
                Terms & Conditions
              </a>{" "}
              &{" "}
              <a href="#" className="text-dark text-decoration-none">
                Privacy Policy
              </a>
            </small>
          </div>
          <div>
            {isFormSubmit && (
              <div className="blur-login-bg">
                <div className="d-flex log-prompt flex-column align-items-center justify-content-center">
                  <h4 className="text-success">Login Successfull!!</h4>

                  <button className="prompt-btn" onClick={onClickOk}>
                    OK
                  </button>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
export default SignIn;
