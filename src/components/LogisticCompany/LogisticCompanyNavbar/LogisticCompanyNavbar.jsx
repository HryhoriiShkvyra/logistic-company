import React from "react";
import "./LogisticCompanyNavbar.css";
import { NavLink } from "react-router";

import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";

function LogisticCompanyNavbar() {
  return (
    <div className="nova-post-navbar">
      <div className="nova-post-navbar-block">
        <div className="nova-post-navbar-btn">
          <h4>Send</h4>
        </div>
        <div className="nova-post-navbar-btn">
          <h4>Receive</h4>
        </div>
        <div className="nova-post-navbar-btn">
          <h4>International delivery</h4>
        </div>
        <div className="nova-post-navbar-btn">
          <h4>For business clients</h4>
        </div>
        <div className="nova-post-navbar-btn">
          <h4>More</h4>
        </div>
      </div>

      <NavLink className="nova-post-navbar-block" to="/">
        <div className="nova-post-navbar-btn">
          <h2 style={{ color: "var(--deep-red)", fontWeight: "900" }}>
            LOGISTIC COMPANY
          </h2>
        </div>
      </NavLink>

      <div className="nova-post-navbar-block">
        <div className="nova-post-navbar-btn">
          <button className="nova-post-navbar-btn-left nova-post-navbar-btn-left-border">
            ENG
          </button>
        </div>

        <div className="nova-post-navbar-btn">
          <button className="nova-post-navbar-btn-left nova-post-navbar-btn-left-no-border">
            <ExitToAppRoundedIcon /> SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogisticCompanyNavbar;
