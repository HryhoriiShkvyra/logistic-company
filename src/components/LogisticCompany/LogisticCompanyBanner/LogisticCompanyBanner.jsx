import React from "react";
import "./LogisticCompanyBanner.css";
import { NavLink } from "react-router";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AppleIcon from "@mui/icons-material/Apple";

function LogisticCompanyBanner() {
  return (
    <div className="container">
      <div className="logistic-company-banner">
        <div className="logistic-company-banner-text">
          <h1>Nova Post in your package</h1>
          <h3>Nova Post in your package</h3>
          <NavLink className="logistic-company-banner-link">
            <h3 className="logistic-company-banner-link-text">
              More about the app
            </h3>{" "}
            <ArrowForwardIcon />{" "}
          </NavLink>
        </div>
        <div className="logistic-company-banner-btns">
          <div className="logistic-company-banner-btn">
            <div className="logistic-company-banner-btn-icon">
              <AppleIcon />{" "}
            </div>
            <div className="logistic-company-banner-btn-text">
              <div className="logistic-company-banner-btn-sub-title">
                Download on the
              </div>

              <div className="logistic-company-banner-btn-title">App Store</div>
            </div>
          </div>
          <div className="logistic-company-banner-btn">
            {" "}
            <div className="logistic-company-banner-btn-icon">
              <SportsEsportsIcon />{" "}
            </div>
            <div className="logistic-company-banner-btn-text">
              <div className="logistic-company-banner-btn-sub-title">
                GET IT ON
              </div>
              <div className="logistic-company-banner-btn-title">
                Google Play
              </div>
            </div>
          </div>
          <div className="logistic-company-banner-qr-code"></div>
        </div>
      </div>
    </div>
  );
}

export default LogisticCompanyBanner;
