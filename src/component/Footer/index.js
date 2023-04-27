import "./footer.css";

function Footer() {
  return (
    <div className="bg-black pt-4 w-100 d-none d-lg-block">
      <div className="container p-2">
        <div>
          <div>
            <div className="d-xl-flex flex-wrap justify-content-between flex-column flex-xl-row  ">
              <ul className="text-light">
                <small className="text-secondary">COMPANY</small>
                <li>About us</li>
                <li>Team</li>
                <li>Careers</li>
                <li>Swiggy Blog</li>
                <li>Bug Bounty</li>
                <li>Swiggy One</li>
                <li>Swiggy Corporate</li>
                <li>Swiggy Instamart</li>
                <li>Swiggy Genie</li>
              </ul>

              <ul className="text-light">
                <small className="text-secondary">CONTACT</small>
                <li>Help & Support</li>
                <li>Partner with us</li>
                <li>Ride with us</li>
              </ul>

              <ul className="text-light">
                <small className="text-secondary">LEGAL</small>
                <li>Terms & Conditions</li>
                <li>Refund & Cancellation</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>Offer Terms</li>
                <li>Phishing & Fraud</li>
                <li>Corporate – Swiggy Money Codes Terms and Conditions</li>
                <li>
                  Corporate - Swiggy Discount Voucher Terms and Conditions
                </li>
              </ul>

              <div className="d-xl-flex d-md-flex align-items-start justify-content-start flex-md-column">
                <img
                  alt=""
                  className="mb-4 ml-4"
                  height="50"
                  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
                />
                <img
                  alt=""
                  height="50"
                  className="mb-4 ml-4"
                  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
                />
              </div>
            </div>
            <div className="border-secondary border-top border-bottom d-flex flex-column">
              <div className=" text-white d-flex align-items-center justify-content-between">
                <ul>
                  <small className="text-secondary ">WE DELEVER TO</small>
                  <li>Abohar</li>
                  <li>Adilabad</li>
                  <li>Adityapur</li>
                  <li>Adoni</li>
                  <li>Agartala</li>
                </ul>
                <ul>
                  <li>Dehradun</li>
                  <li>Dehri</li>
                  <li>Delhi</li>
                  <li>Deoghar</li>
                  <li>Dhanbad</li>
                </ul>
                <ul>
                  <li>Khalilabad</li>
                  <li>Khamgaon</li>
                  <li>Khammam</li>
                  <li>Khandwa</li>
                  <li>Khanna</li>
                </ul>
                <ul>
                  <li>Purulia</li>
                  <li>Pusad</li>
                  <li>Puttur</li>
                  <li>Rae-Bareli</li>
                  <li>Raghunathpur</li>
                </ul>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between p-3">
              <img
                className=""
                width="142"
                alt=""
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"
              />
              <small className="text-light ">© 2023 Swiggy</small>

              <div className="icons d-flex gap-3">
                <i
                  class="fa-brands fa-facebook-f fa-sm"
                  style={{ color: "#ffffff" }}
                ></i>
                <i
                  class="fa-brands fa-pinterest fa-sm"
                  style={{ color: "#ffffff" }}
                ></i>
                <i
                  class="fa-brands fa-instagram fa-sm"
                  style={{ color: "#ffffff" }}
                ></i>
                <i
                  class="fa-brands fa-twitter fa-sm"
                  style={{ color: "#ffffff" }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
