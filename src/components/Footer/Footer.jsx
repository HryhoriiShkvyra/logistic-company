import React from "react";
import "./Footer.css";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
// import XIcon from '@mui/icons-material/X';
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-up">
        <div className="container">
          <div className="footer-wrapper">
            <div className="footer-text">
              <h4>© 2025 New Post LLC All rights reserved</h4>
              <div className="footer-text-underline">
                <h4>Privacy Policy</h4>
              </div>
            </div>
            <div className="footer-btns">
              <div className="footer-social">
                <div className="footer-social-btn">
                  <FacebookOutlinedIcon />
                </div>
                <div className="footer-social-btn">
                  <InstagramIcon />
                </div>
                <div className="footer-social-btn">
                  <TwitterIcon />
                </div>
                <div className="footer-social-btn">
                  <YouTubeIcon />
                </div>
                <div className="footer-social-btn">
                  <LinkedInIcon />
                </div>
              </div>
              <div className="footer-partnership">Become a partner</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-down">
        <div className="container">
          <h4>
            site based on -{" "}
            <a href="https://www.novapost.com" target="_blank">
              Nova Post
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
