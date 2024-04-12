import React, { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faHandshake,
  faClipboardCheck,
  faTruck,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import benifits_coverimg from "../../../Assest/benifits_coverimg.jpeg";

const Benefits = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="master_benfits">
      <div className="container">       
            <h1 className="heading mb-3 mt-0" data-aos="fade-up">DETAILING MASTERS BENEFITS</h1>
            <p className="heading care-about" data-aos="fade-up" data-aos-delay="200">We Care About Every Detailing</p>
            <div className="row align-items-center">
                <div className="col-md-5">
                  <div className="content-column m-0 p-0 benfits_img">
                    <img
                      src={benifits_coverimg}
                      alt=""
                      className="rounded img-fluid"
                      data-aos="fade-right" // Image animation
                    />
                  </div>
                </div>
                <div className="col-md-7">
                     <div className="row row-gap-4">
                         <div className="col-md-6">
                            <div className="benefit" data-aos="fade-up">
                              <div className="benefit_inner">
                                <FontAwesomeIcon icon={faShieldAlt} className="icon" />
                                <h4>Unbeatable Warranty Assurance</h4>                                
                              </div>
                              <p className="py-3">With our unbeatable warranty assurance, you can trust that any
                                    potential concerns or defects will be promptly addressed.
                                  </p>
                            </div>
                         </div>
                      
                         <div className="col-md-6">
                          <div className="benefit"  data-aos="fade-right"
                          data-aos-offset="300"
                           data-aos-easing="ease-in-sine">
                            <div className="benefit_inner">
                              <FontAwesomeIcon icon={faHandshake} className="icon" />
                              <h4>Unrivaled Services at Unbeatable Prices</h4>
                            </div>
                            <p className="py-3">Our team of skilled professionals goes above and beyond to
                                  deliver top-notch services that exceed your expectations.
                                </p>
                            </div>
                         </div>

                         <div className="col-md-6">
                            <div className="benefit" data-aos="fade-up">
                              <div className="benefit_inner">
                                <FontAwesomeIcon icon={faClipboardCheck} className="icon" />
                                <h4>Thorough 90-Point Vehicle Inspection</h4>
                              </div>
                              <p className="py-3">
                                  Our thorough 90-point vehicle inspection is designed to provide
                                  you with comprehensive insight into the condition of your
                                  vehicle.
                                </p>
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                          <div className="benefit" data-aos="fade-up" data-aos-delay="200">
                            <div className="benefit_inner">
                              <FontAwesomeIcon icon={faTruck} className="icon" />
                              <h4>Convenience at Your Doorstep</h4>
                            </div>
                            <p className="py-3">
                              Epitomizes our dedication to delivering unparalleled service
                              directly to you, wherever you may be. From scheduled
                              maintenance.
                            </p>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="benefit" data-aos="fade-up" data-aos-delay="200">
                            <div className="benefit_inner">
                              <FontAwesomeIcon icon={faTruck} className="icon" />
                              <h4>Convenience at Your Doorstep</h4>
                            </div>
                            <p className="py-3">
                              Epitomizes our dedication to delivering unparalleled service
                              directly to you, wherever you may be. From scheduled
                              maintenance.
                            </p>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="benefit" data-aos="fade-up" data-aos-delay="200">
                            <div className="benefit_inner">
                              <FontAwesomeIcon icon={faTruck} className="icon" />
                              <h4>Convenience at Your Doorstep</h4>
                            </div>
                            <p className="py-3">
                              Epitomizes our dedication to delivering unparalleled service
                              directly to you, wherever you may be. From scheduled
                              maintenance.
                            </p>
                          </div>
                        </div>

                     </div>
                  </div>

                  </div>
                </div>
              </div>
  );
};

export default Benefits;
