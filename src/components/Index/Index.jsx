import React from "react";
import "./Index.css";
// import IMG_1 from "../../assets/img_1.jpg";
// import IMG_2 from "../../assets/img_2.jpg";
// import IMG_3 from "../../assets/img_3.jpg";
// import IMG_4 from "../../assets/img_4.jpg";
// import IMG_5 from "../../assets/img_5.jpg";
// import IMG_6 from "../../assets/img_6.jpg";
import PublicIcon from "@mui/icons-material/Public";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

function Index() {
  return (
    <div className="container">
      <div className="slider-wrapper">
        <div className="slider">
          {/* <img className="slider-img" src={IMG_1} alt="background" /> */}
          <div className="slider-content">
            <div className="slider-text">
              <h1>Logistic Company group</h1>
              <h2>Easy delivery for life and business</h2>
            </div>
            <div className="slider-btns">
              <div className="slider-btn slider-btn-partner">
                <h4>Become a partner</h4>
                <div className="slider-icon">
                  <ArrowForwardIcon />
                </div>
              </div>
              <div className="slider-btn slider-btn-country">
                <h4>Select a Country</h4>
                <div className="slider-icon">
                  <PublicIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="section">
          <div className="section-title">
            <h1>Logistic Company group of companies</h1>
          </div>
          <div className="sub-slider">
            <div className="sub-slider-block">
              <div className="sub-slider-title">
                <h2>Logistic Company</h2>{" "}
                <div className="slider-icon">
                  <ArrowForwardIcon />
                </div>
              </div>
              <div className="sub-slider-about">
                <h4>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eligendi corporis, fuga dolores sit commodi voluptatum debitis
                  minima ipsam accusantium nam, maxime ullam architecto quas et
                  maiores ipsa, placeat dolor iste veritatis repellendus quasi!
                  Ea, ipsa rerum ratione repudiandae commodi voluptatem possimus
                  earum voluptates eos, necessitatibus quod eius itaque
                  temporibus doloremque dolor.
                </h4>
              </div>
              <div className="sub-slider-points-wrapper">
                <div className="sub-title-points-title">
                  <h3>Company Advantages</h3>
                </div>
                <div className="sub-slider-points">
                  <div className="sub-slider-point">
                    <div className="sub-slider-point-icon">
                      <RocketLaunchIcon />
                    </div>
                    <div className="sub-slider-point-text">
                      10,800 pickpu points and branches throughout Ukraine
                    </div>
                  </div>
                  <div className="sub-slider-point">
                    <div className="sub-slider-point-icon">
                      <RocketLaunchIcon />
                    </div>
                    <div className="sub-slider-point-text">
                      10,800 pickpu points and branches throughout Ukraine
                    </div>
                  </div>
                  <div className="sub-slider-point">
                    <div className="sub-slider-point-icon">
                      <RocketLaunchIcon />
                    </div>
                    <div className="sub-slider-point-text">
                      10,800 pickpu points and branches throughout Ukraine
                    </div>
                  </div>
                  <div className="sub-slider-point">
                    <div className="sub-slider-point-icon">
                      <RocketLaunchIcon />
                    </div>
                    <div className="sub-slider-point-text">
                      10,800 pickpu points and branches throughout Ukraine
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sub-slider-block">
              <div className="sub-slider-title">
                <h2>Logistic Company</h2>{" "}
                <div className="slider-icon">
                  <ArrowForwardIcon />
                </div>
              </div>
              <div className="sub-slider-about">
                <h4>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eligendi corporis, fuga dolores sit commodi voluptatum debitis
                  minima ipsam accusantium nam, maxime ullam architecto quas et
                  maiores ipsa, placeat dolor iste veritatis repellendus quasi!
                  Ea, ipsa rerum ratione repudiandae commodi voluptatem possimus
                  earum voluptates eos, necessitatibus quod eius itaque
                  temporibus doloremque dolor.
                </h4>
              </div>
              <div className="sub-slider-points-wrapper">
                <div className="sub-title-points-title">
                  <h3>Company Advantages</h3>
                </div>
                <div className="sub-slider-points">
                  <div className="sub-slider-point">
                    <div className="sub-slider-point-icon">
                      <RocketLaunchIcon />
                    </div>
                    <div className="sub-slider-point-text">
                      10,800 pickpu points and branches throughout Ukraine
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
