import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import benifits_coverimg from "../../../Assest/benifits_coverimg.jpeg";
import Header from "../../LayOut/Header/Header";
import { useNavigate } from "react-router-dom";
import Footer from "../../LayOut/Footer/Footer";




const Corporate = () => {
    const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);

   const handleSeePackages = () => {
    navigate("/mailcont"); // Navigate to the Pricing component when "See Packages" is clicked
  };
  return (
    <>
      <Header/>
      <div className="master_benefits">
        <div className="container">      
          <h1 className="heading mb-3 mt-0" data-aos="fade-up">CORPORATE & HEAVY VEHICLES</h1>
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="content-column m-0 p-0 benefits_img">
                <img
                  src={benifits_coverimg}
                  alt=""
                  className="rounded img-fluid"
                  data-aos="fade-right" // Image animation
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="benefit" data-aos="fade-up" data-aos-delay="200">
                <div className="benefit_inner">
                  <FontAwesomeIcon icon={faTruck} className="icon" />
                  <h4> Welcome to our corporate and heavy vehicles section</h4>
                </div>
                <p className="py-3">
                 where we cater to the needs of businesses and industries requiring robust transportation solutions. Whether you're managing a fleet of trucks for logistics operations or overseeing a corporate vehicle fleet for your organization, we have you covered.
                  Our Services Include:
                  Fleet Management Solutions: We offer comprehensive fleet management services tailored to your specific needs. From vehicle maintenance scheduling to route optimization, we ensure maximum efficiency and cost-effectiveness for your fleet operations.
                  Heavy Vehicle Sales: Explore our range of heavy vehicles designed to handle the toughest jobs. Whether you need heavy-duty trucks for construction projects or specialized vehicles for industrial applications, we provide top-quality vehicles from leading manufacturers.
                  Corporate Vehicle Leasing: Simplify your corporate transportation needs with our vehicle leasing options. Choose from a diverse selection of vehicles, including sedans, SUVs, and vans, and enjoy flexible leasing terms to suit your business requirements.
                  Customization and Upfitting: Customize your fleet vehicles to meet your unique specifications. Our team of experts can assist with vehicle upfitting, branding, and modifications to ensure your corporate fleet reflects your brand identity and meets operational requirements.
                  Why Choose Us:
                  Experience: With years of experience in the industry, we understand the challenges businesses face when it comes to managing corporate and heavy vehicle fleets. Count on us for expert guidance and support every step of the way.
                  Reliability: We prioritize reliability and durability in all our products and services. Our vehicles undergo rigorous testing to ensure they meet the highest standards of performance and safety, giving you peace of mind on the road.
                  Customer Satisfaction: Your satisfaction is our top priority. We strive to deliver exceptional service and build long-lasting relationships with our clients. Trust us to provide reliable solutions tailored to your needs.
                  Explore our corporate and heavy vehicle offerings today and experience the difference our expertise can make for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button variant="primary" onClick={handleSeePackages}>
                      See Packages
    </Button>
    <Footer/>
    </>
  );
};

export default Corporate;
