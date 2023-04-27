import "./header.css";
function MobileViewHeader() {
  return (
    <div className="mobile-header align-self-start p-2 w-100  d-flex d-lg-none align-items-center justify-content-between">
      <div className="d-flex flex-column">
        <div className="d-flex  align-items-center gap-2">
          <i class="fa-solid fa-location-dot" style={{ color: "#000000;" }}></i>
          <b>
            <big>Other</big>
          </b>
        </div>
        <p className="text-secondary">Bengaluru,Karnataka,India</p>
      </div>
      <div className="d-flex align-items-center gap-2 p-1">
        {" "}
        <i
          class="fa-thin fa-percent fa-sm"
          style={{ color: "#000205" }}
        ></i>{" "}
        <b>
          <big>Offers</big>
        </b>
      </div>
    </div>
  );
}

export default MobileViewHeader;
