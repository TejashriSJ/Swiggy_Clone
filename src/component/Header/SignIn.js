function SignIn() {
  return (
    <>
      <div className="container form ">
        <form className="d-flex flex-column ">
          <div className="d-flex justify-content-between p-1">
            <div className="">
              <h2>Login</h2>
              <span>or</span>{" "}
              <span className="create-account">create an account</span>
            </div>
            <img
              class=""
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
              type="number"
              required
              tabindex="1"
              maxlength="10"
              autocomplete="off"
              placeholder="Phone number"
            />
            <label for="phone-number" className="text-secondary ">
              Phone number
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
        </form>
      </div>
    </>
  );
}
export default SignIn;
