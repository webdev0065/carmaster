import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import img from "../../../Assest/AboutUs.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="about" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg col-md-12">
              <div className="about-img">
                <img src={img} alt="img" />
              </div>
            </div>
            <div className="col-lg col-md-12">
              <div className="aboutus_main ps-4">
                <div className="section-header text-left">
                  <p>About Us</p>
                  <h2>Car Washing and Detailing</h2>
                </div>
                <div className="about-content">
                <div className="benefit"  data-aos="fade-up"
                          data-aos-offset="300"
                           data-aos-easing="ease-in-sine">
                  <p>
                    Welcome to Detailing Masters, where excellence meets dedication. At Detailing Masters, we pride ourselves on upholding the highest standards of car care in the industry, earning us a distinguished reputation for excellence. Our commitment to exceptional service begins with our unwavering dedication to treating every customer like gold, ensuring your satisfaction remains our top priority. With a focus on delivering the highest quality service, we prioritize convenience, professionalism, and value in every interaction. Our goal is simple: to exceed your expectations at every turn. We stand behind our work with a guarantee of satisfaction.
                  </p>
                
                  <ul>
                    <li>
                      <i className="far fa-check-circle"></i>Seats Washing
                    </li>
                    <li>
                      <i className="far fa-check-circle"></i>Vacuum Cleaning
                    </li>
                    <li>
                      <i className="far fa-check-circle"></i>Interior Wet Cleaning
                    </li>
                    <li>
                      <i className="far fa-check-circle"></i>Window Wiping
                    </li>
                  </ul>
                  </div>
                  <Link to="/About" className="btn btn-custom">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
