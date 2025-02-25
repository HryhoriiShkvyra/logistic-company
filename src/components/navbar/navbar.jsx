import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      {/* <div className="container"> */}
      <div className="navbar-parts">
        <div className="navbar-part logo">
          <div className="logo">Logistic Company LLC</div>
        </div>
        <div className="navbar-part center">
          <div className="navbar-btn">Post in Ukraine</div>
          <div className="navbar-btn">Post in Europe</div>
          <div className="navbar-btn">PostPay</div>
          <div className="navbar-btn">Post Global</div>
          <div className="navbar-btn">Post Digital</div>
          <div className="navbar-btn">Post Airlines</div>
        </div>
        <div className="navbar-part">
          <div className="navbar-btn login">Login</div>
          <div className="navbar-btn registration">Registration</div>
          <div className="navbar-btn partner">Become a Partner</div>
        </div>
        <div className="navbar-part">
          <div className="navbar-btn">Eng</div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Navbar;
