import React from "react";
import "./LogisticCompanyIndex.css";
import LogisticCompanyBanner from "../LogisticCompanyBanner/LogisticCompanyBanner";

function LogisticCompanyIndex() {
  const LogisticCompanyIndexSection = () => {
    return (
      <div className="logistic-company-index-page-section">
        <div className="logistic-company-index-page-text"></div>
        <div className="logistic-company-index-page-bnts">
          <div className="logistic-company-index-page-slider-btns">
            <div className="logistic-company-index-page-slider-btn"></div>
            <div className="logistic-company-index-page-slider-btn"></div>
          </div>
          <div className="logistic-company-index-page-search">
            <div className="logistic-company-index-page-search-bar">
              <div className="logistic-company-index-page-search-icon"></div>
              <div className="logistic-company-index-page-search-input"></div>
              <div className="logistic-company-index-page-search-btn"></div>
            </div>
            <div className="logistic-company-index-page-ship-btns">
              <div className="logistic-company-index-page-ship-btn"></div>
              <div className="logistic-company-index-page-ship-btn"></div>
              <div className="logistic-company-index-page-ship-btn"></div>
              <div className="logistic-company-index-page-ship-btn"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <LogisticCompanyIndexSection />
      <LogisticCompanyBanner />
    </div>
  );
}

export default LogisticCompanyIndex;
