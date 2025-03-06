import React from "react";
import "./LogisticCompanyFooter.css";
import { NavLink } from "react-router";
import VISA from "../../../assets/footer/visa.png";
import MASTERCARD from "../../../assets/footer/mastercard.png";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AppleIcon from "@mui/icons-material/Apple";
import FlagIcon from "@mui/icons-material/Flag";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function LogisticCompanyFooter() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-rows">
          <div className="footer-row">
            <div className="footer-cols">
              <div className="footer-col-title">SEND</div>
              <NavLink className="footer-col-link">
                Documents and parcels up to 30 kg
              </NavLink>
              <NavLink className="footer-col-link">Cargo over 30 kg</NavLink>
              <NavLink className="footer-col-link">Send from address</NavLink>
              <NavLink className="footer-col-link">Delivery charges</NavLink>
              <NavLink className="footer-col-link">Delivery time</NavLink>
            </div>

            <div className="footer-cols">
              <div className="footer-col-title">Receive</div>
              <NavLink className="footer-col-link">
                Receive in Czech Republic
              </NavLink>
            </div>

            <div className="footer-cols">
              <div className="footer-col-title">International delivery</div>
              <NavLink className="footer-col-link">Send to Ukraine </NavLink>
              <NavLink className="footer-col-link">
                Shipping cost to Ukraine
              </NavLink>
              <NavLink className="footer-col-link">
                Receive from Ukraine
              </NavLink>
              <NavLink className="footer-col-link">
                Send to other countries
              </NavLink>
              <NavLink className="footer-col-link">
                Delivery cost to other countries
              </NavLink>
              <NavLink className="footer-col-link">
                Receive deliveries from other countries
              </NavLink>
            </div>

            <div className="footer-cols">
              <div className="footer-col-title">For Business clients</div>
              <NavLink className="footer-col-link">
                International delivery
              </NavLink>
              <NavLink className="footer-col-link">
                How to start cooperation
              </NavLink>
              <NavLink className="footer-col-link">API Integration</NavLink>
              <NavLink className="footer-col-link">
                Account for business clients
              </NavLink>
            </div>

            <div className="footer-cols">
              <div className="footer-col-title">More</div>
              <NavLink className="footer-col-link">
                Campaigns and promos
              </NavLink>
              <NavLink className="footer-col-link">About company</NavLink>
              <NavLink className="footer-col-link">
                General terms and conditions
              </NavLink>
              <NavLink className="footer-col-link">Privacy policy</NavLink>
              <NavLink className="footer-col-link">FAQ</NavLink>
              <NavLink className="footer-col-link">
                Settlement of disputes
              </NavLink>
              <NavLink className="footer-col-link">Career</NavLink>
            </div>

            <div className="footer-cols">
              <div className="footer-col-title">Language</div>
              <NavLink className="footer-col-link">Українська</NavLink>
              <NavLink className="footer-col-link">Česky</NavLink>
              <NavLink className="footer-col-link">English</NavLink>
            </div>
          </div>

          <div className="footer-row">
            <div className="footer-cols-wrapper">
              <div className="footer-cols">
                <div className="footer-col-title">
                  NOVA POST ON YOUR SMARTPHONE
                </div>
                <div className="footer-col-btns">
                  <div className="footer-col-btn">
                    <div className="footer-col-btn-icon">
                      <AppleIcon />{" "}
                    </div>
                    <div className="footer-col-btn-text">
                      <div className="footer-col-btn-sub-title">
                        Download on the
                      </div>
                      <div className="footer-col-btn-title">App Store</div>
                    </div>
                  </div>
                  <div className="footer-col-btn">
                    <div className="footer-col-btn-icon">
                      <SportsEsportsIcon />{" "}
                    </div>
                    <div className="footer-col-btn-text">
                      <div className="footer-col-btn-sub-title">GET IT ON</div>
                      <div className="footer-col-btn-title">Google Play</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-col-wrapper">
                <div className="footer-col">
                  <div className="footer-col-title">PHONES</div>
                  <div className="footer-col-text">
                    +44 000 000 0000
                    <div className="asterisk-on-top">*</div>
                  </div>
                  <div className="footer-col-sub-wrapper">
                    <div className="footer-col-sub-text">
                      <div className="asterisk-on-mid">*</div>
                      Mon-Fri:08:00-20:00
                    </div>
                    <div className="footer-col-sub-text">
                      Sat-Sub:09:00-18:00
                    </div>
                  </div>
                </div>

                <div className="footer-col">
                  <div className="footer-col-title">E-MAIL</div>
                  <div className="footer-col-text">0000_cz@mail.com</div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-row">
            <div className="footer-cols-wrapper">
              <div className="footer-col">
                <div className="footer-col-row">
                  <div className="footer-col-row-block">
                    © 2025 Privacy Policy
                  </div>
                  <div className="footer-col-row-block">
                    <img
                      className="card-logo-size"
                      src={MASTERCARD}
                      alt="card-logo"
                    />
                  </div>
                  <div className="footer-col-row-block">
                    <img
                      className="card-logo-size"
                      src={VISA}
                      alt="card-logo"
                    />
                  </div>
                </div>
              </div>
              <div className="footer-col">
                <div className="footer-lang-and-social">
                  <div className="footer-lang">
                    <div className="footer-lang-flag">
                      <FlagIcon />
                    </div>
                    <h2>Czech Republic</h2>
                  </div>
                  <div className="footer-social">
                    <FacebookIcon />
                  </div>
                  <div className="footer-social">
                    <InstagramIcon />
                  </div>
                  <div className="footer-social">
                    <LinkedInIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <h4>
              site based on -{" "}
              <a href="https://www.novapost.com" target="_blank">
                Nova Post
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogisticCompanyFooter;
