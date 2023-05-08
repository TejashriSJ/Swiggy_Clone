import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import validator from "validator";
import { ADD_USER } from "../../Redux/actionTypes";

function SignUp(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { pathname, search } = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [isFormSubmit, setIsFormSubmit] = useState(false);

  const initLabels = {
    phoneNumber: "Phone Number",
    name: "Name",
    email: "Email",
  };
  const errorMessage = {
    phoneNumber: <p className="text-danger">Enter Your Phone Number</p>,
    name: <p className="text-danger">Invalid Name</p>,
    email: <p className="text-danger">Invalid Email Address</p>,
    duplicatePhno: <p className="text-danger">Mobile number already exist</p>,
    duplicateEmail: <p className="text-danger">Email id already exist</p>,
  };

  const [labels, setLabels] = useState(initLabels);

  const registeredUsers = useSelector((state) => {
    return state.user.users;
  });

  const onChangeInput = (event) => {
    setLabels({
      ...labels,
      [event.target.name]: initLabels[event.target.name],
    });

    if (event.target.name !== "phoneNumber") {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    } else if (
      validator.isNumeric(event.target.value) ||
      event.target.value === ""
    ) {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const onBlurInputField = (event) => {
    if (event.target.name === "phoneNumber") {
      if (formData.phoneNumber.length !== 10) {
        setLabels({
          ...labels,
          phoneNumber: errorMessage.phoneNumber,
        });
      } else if (formData.phoneNumber[0] === "0") {
        setLabels({
          ...labels,
          phoneNumber: <p className="text-danger">Invalid Phone Number</p>,
        });
      }
    } else if (
      event.target.name === "name" &&
      !validator.isAlpha(formData.name, "en-IN", { ignore: " " })
    ) {
      setLabels({
        ...labels,
        name: errorMessage.name,
      });
    } else {
      if (!validator.isEmail(formData.email)) {
        setLabels({
          ...labels,
          email: errorMessage.email,
        });
      }
    }
  };

  const onFormSubmit = (event) => {
    let allRegisteredEmails = Object.values(registeredUsers).map((user) => {
      return user.email;
    });

    if (allRegisteredEmails.includes(formData.email)) {
      setLabels({
        ...labels,
        email: errorMessage.duplicateEmail,
      });
      if (Object.keys(registeredUsers).includes(formData.phoneNumber)) {
        setLabels({
          ...labels,
          phoneNumber: errorMessage.duplicatePhno,
        });
      }
    } else if (
      formData.name !== "" &&
      formData.email !== "" &&
      formData.phoneNumber !== "" &&
      formData.phoneNumber.length === 10 &&
      validator.isAlpha(formData.name, "en-IN", { ignore: " " }) &&
      validator.isEmail(formData.email) &&
      formData.phoneNumber[0] !== "0" &&
      validator.isMobilePhone(formData.phoneNumber)
    ) {
      setIsFormSubmit(true);
      dispatch({
        type: ADD_USER,
        payload: {
          name: formData.name,
          email: formData.email,
          phoneNo: formData.phoneNumber,
        },
      });
    }
    event.preventDefault();
  };

  const onClickOk = () => {
    navigate({ pathname, search: search.toString() });
    setIsFormSubmit(false);
    props.setBtnStatus({ signUp: false, signIn: false });
  };
  return (
    <>
      <div className="container form mw-100">
        <form className="d-flex flex-column close" onSubmit={onFormSubmit}>
          <big
            onClick={() => {
              props.setBtnStatus({ signUp: false, signIn: false });
            }}
          >
            x
          </big>
          <div className="d-flex justify-content-between p-1">
            <div className="">
              <h2>Sign up</h2>
              <span>or</span>{" "}
              <span
                className="create-account"
                onClick={() => {
                  props.setBtnStatus({ signUp: false, signIn: true });
                }}
              >
                login to your account
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
              className="form-control text-secondary "
              id="phone-number"
              type="text"
              required
              maxLength="10"
              name="phoneNumber"
              value={formData.phoneNumber}
              autoComplete="off"
              placeholder="Phone number"
              onChange={onChangeInput}
              onBlur={onBlurInputField}
            />
            <label htmlFor="phone-number" className="text-secondary ">
              {labels.phoneNumber}
            </label>
            <div className="form-floating">
              <input
                className="form-control"
                type="text"
                maxLength="30"
                required
                placeholder="Name"
                id="name"
                name="name"
                value={formData.name}
                onChange={onChangeInput}
                onBlur={onBlurInputField}
              />
              <label className="text-secondary" htmlFor="name">
                {labels.name}
              </label>
            </div>
            <div className="form-floating">
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="email"
                name="email"
                value={formData.email}
                required
                onChange={onChangeInput}
                onBlur={onBlurInputField}
              />
              <label className="text-secondary" htmlFor="email">
                {labels.email}
              </label>
            </div>
          </div>
          <div className="d-flex flex-column">
            <a href="#" className="text-decoration-none referalTxt p-2">
              Have a referal code?
            </a>
            <button
              type="submit"
              className="sign-btn btn text-light m-2 "
              onClick={onFormSubmit}
            >
              CONTINUE
            </button>

            <small className="text-secondary p-1">
              By creating an account,I accept the
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
                  <h3 className="text-success">Registered Successfully</h3>

                  <button className=" prompt-btn" onClick={onClickOk}>
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
export default SignUp;
