import React from "react";
import "./Index.css";
// import IMG_1 from "../../assets/img_1.jpg";
// import IMG_2 from "../../assets/img_2.jpg";
// import IMG_3 from "../../assets/img_3.jpg";
// import IMG_4 from "../../assets/img_4.jpg";
// import IMG_5 from "../../assets/img_5.jpg";
// import IMG_6 from "../../assets/img_6.jpg";

import IMG_7 from "../../assets/supervisors/img_1.jpg";
// import IMG_8 from "../../assets/supervisors/img_2.jpg";
import IMG_9 from "../../assets/supervisors/img_3.jpg";
// import IMG_10 from "../../assets/supervisors/img_4.jpg";

import PublicIcon from "@mui/icons-material/Public";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
// import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FlagIcon from "@mui/icons-material/Flag";
import Navbar from "../navbar/navbar";
import Footer from "../Footer/Footer";

import { NavLink } from "react-router";

function Index() {
  const countries = [
    { country: "Ukraine", flag: "UA", link: "/ukraine", icon: "" },
    { country: "Moldova", flag: "MD", link: "/moldova", icon: "" },
    { country: "Poland", flag: "PL", link: "/poland", icon: "" },
    { country: "Lithuania", flag: "LT", link: "/lithuania", icon: "" },
    {
      country: "Czech Republic",
      flag: "CZ",
      link: "/czech-republic",
      icon: "",
    },
    { country: "Romania", flag: "RO", link: "/romania", icon: "" },
    { country: "Germany", flag: "DE", link: "/germany", icon: "" },
    { country: "Slovakia", flag: "SK", link: "/slovakia", icon: "" },
    { country: "Estonia", flag: "EE", link: "/estonia", icon: "" },
    { country: "Latvia", flag: "LV", link: "/latvia", icon: "" },
    { country: "Hungary", flag: "HU", link: "/hungary", icon: "" },
    { country: "Italy", flag: "IT", link: "/italy", icon: "" },
    {
      country: "United Kingdom",
      flag: "GB",
      link: "/united-kingdom",
      icon: "",
    },
    { country: "Spain", flag: "ES", link: "/spain", icon: "" },
    { country: "France", flag: "FR", link: "/france", icon: "" },
    { country: "Austria", flag: "AT", link: "/austria", icon: "" },
    { country: "Netherlands", flag: "NL", link: "/netherlands", icon: "" },
  ];

  const IndexPage = () => {
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
                    Nova Post in Ukraine is an express delivery company founded
                    in 2001. Its goal is to provide easy delivery for every
                    customer to a branch, parcel locker, or a specific address.
                    The company provides logistics and distribution services,
                    delivering both documents and the tiniest parcels, as well
                    as large cargos.
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
                        10,800 pickup points and branches throughout Ukraine
                      </div>
                    </div>
                    <div className="sub-slider-point">
                      <div className="sub-slider-point-icon">
                        <LocationOnOutlinedIcon />
                      </div>
                      <div className="sub-slider-point-text">
                        2 fulfillment centers
                      </div>
                    </div>
                    <div className="sub-slider-point">
                      <div className="sub-slider-point-icon">
                        <DashboardIcon />
                      </div>
                      <div className="sub-slider-point-text">
                        15,000 parcel lockers
                      </div>
                    </div>
                    <div className="sub-slider-point">
                      <div className="sub-slider-point-icon">
                        <CheckBoxOutlineBlankOutlinedIcon />
                      </div>
                      <div className="sub-slider-point-text">
                        412 million shipments in 2023
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
                    Nova Post in Europe is a logistics company that offers a
                    full range of logistics services for both private
                    individuals and business clients, ensuring fast and reliable
                    delivery of documents, parcels, and cargo across Europe, as
                    well as between the EU and Ukraine
                  </h4>
                </div>
                <div className="sub-slider-points-wrapper">
                  <div className="sub-title-points-title">
                    <h3>Company Advantages</h3>
                  </div>
                  <div className="sub-slider-points">
                    <div className="sub-slider-point">
                      <div className="sub-slider-point-icon">
                        <AccessTimeOutlinedIcon />
                      </div>
                      <div className="sub-slider-point-text">
                        Fast delivery of documents, parcels, and cargo up to
                        1,100 kg to Ukraine within 3 days or more
                      </div>
                    </div>
                    <div className="sub-slider-point">
                      <div className="sub-slider-point-icon">
                        <CreditCardOutlinedIcon />
                      </div>
                      <div className="sub-slider-point-text">
                        Convenient options for sending shipments at the branch,
                        via the mobile application, or Business account{" "}
                      </div>
                    </div>
                    <div className="sub-slider-point">
                      <div className="sub-slider-point-icon">
                        <StoreOutlinedIcon />
                      </div>
                      <div className="sub-slider-point-text">
                        Tracking and payment for parcels through the mobile app,
                        business account, or website{" "}
                      </div>
                    </div>
                    <div className="sub-slider-point">
                      <div className="sub-slider-point-icon">
                        <CalculateOutlinedIcon />
                      </div>
                      <div className="sub-slider-point-text">
                        We undertake all customs brokerage services{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="statistic-blocks">
            <div className="statistic-block">
              <div className="statistic-block-text text-block-colour">
                <h1>412 M</h1>
                <h3>of delivered parcels during 2023</h3>
              </div>
            </div>
            <div className="statistic-block">
              <div className="statistic-block-text">
                <h1>10 +</h1>
                <h3>countries which host Nova Post</h3>
              </div>
              <div className="statistic-block-text">
                <h1>40 000 +</h1>
                <h3>employees</h3>
              </div>
            </div>
            <div className="statistic-block">
              <div className="statistic-block-text">
                <h1>2.5 M +</h1>
                <h3>financial transactions per day</h3>
              </div>
              <div className="statistic-block-text">
                <h1>30 000</h1>
                <h3>operations per second processed by Nova Digital</h3>
              </div>
            </div>
            <div className="statistic-block">
              <div className="statistic-block-text">
                <h1>9 000 +</h1>
                <h3>vehicle fleet units</h3>
              </div>
              <div className="statistic-block-text">
                <h1>42 M +</h1>
                <h3>invested into Ukrainian Victory during 2023</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <h1>Supervisors</h1>
          <div className="people-slider-wrapper">
            <div className="people-slider">
              <div className="people-slide">
                <img className="people-slide-photo" src={IMG_7} alt="#" />
                <div className="people-slide-about">
                  <div className="people-slide-name">
                    <h1>Viacheslav Kondratuk</h1>
                  </div>
                  <div className="people-slide-position">CO-OWNER</div>
                  <div className="people-slide-text">
                    Viacheslav is a businessman with over 20 years of
                    experience, and a socially responsible entrepreneur. In
                    2001, together with his partner Volodymyr Pepper, he founded
                    Nova Post- express delivery company which is now the fastest
                    and the biggest in Ukraine. In 2016, together with 18
                    Ukrainian businessmen, Kondratuk founded and became
                    president of the Union of Ukrainian Entrepreneurs which now
                    includes more than 800 members. He is still holding this
                    position. Union's main task is to create a favorable
                    business environment in Ukraine and to protect the interests
                    of entrepreneurs.
                  </div>
                </div>
              </div>
              <div className="people-slide">
                <img className="people-slide-photo" src={IMG_9} alt="#" />
                <div className="people-slide-about">
                  <div className="people-slide-name">
                    <h1>Volodymyr Pepper</h1>
                  </div>
                  <div className="people-slide-position">CO-OWNER</div>
                  <div className="people-slide-text">
                    Volodymyr is a businessman with over 20 years of experience.
                    In 2001, together with his partner Viacheslav Pepper, he
                    founded Nova Post- express delivery company which is now the
                    fastest and the biggest in Ukraine. Volodymyr is a socially
                    responsible entrepreneur, who supports Ukraine since the
                    company was founded and continues to help during the war.
                    Volodymyr supports the principles of free economy and
                    reducing the role of the state in the economy of Ukraine.
                    Systematically supports the development of entrepreneurship
                    in Ukraine.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="availability-information">
            <h1>Countries of presence</h1>

            <div className="information-blocks-wrapper">
              <h3>Already present</h3>
              <div className="information-blocks">
                {countries.map((country, index) => (
                  <NavLink
                    className="information-block"
                    key={country.country + index}
                    to="/novapost"
                  >
                    <div className="information-block-icon">
                      <FlagIcon />
                    </div>
                    <div className="information-block-text">
                      <h4>{country.country}</h4>
                      {/* <div className="information-block-text-icon"> */}
                      <ArrowForwardIcon className="information-block-text-icon" />
                      {/* </div> */}
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="information-blocks-wrapper">
              <div className="information-block-title">
                <h3>Discovery of new country</h3>
                <div className="information-block-title-tip">Shortly</div>
              </div>
              <div className="information-blocks">
                <div className="information-block information-block-new">
                  <div className="information-block-icon">
                    <FlagIcon />
                  </div>
                  <div className="information-block-text">
                    <h4 className={{ fontWeight: "700" }}>Finland</h4>
                    {/* <div className="information-block-text-icon"> */}
                    <ArrowForwardIcon className="information-block-text-icon" />
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const IndexPageWrapper = () => {
    return (
      <div>
        <Navbar />
        <IndexPage />
        <Footer />
      </div>
    );
  };

  return <IndexPageWrapper />;
}

export default Index;
