import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

import { Link } from "react-router-dom";

const carData = [
  {

    image: require("../../../Assest/vcar.jpg"),
    // title: "Washing & Detailing",
    heading: "CAR DETAILING, CERAMIC COATINGS & WINDOW TINTING MELBOURNE",
    // description:
    //   "Revitalize the interior of your vehicle with our professional car detailing services",

   
  },
  // {
  //   image: require("../../../Assest/ExteriorDetailing.jpg"),
  //   title: "Washing & Detailing",
  //   heading: "Quality service for you",
   
  //   description: "Experience the ultimate pampering for your vehicle with our top-notch washing and detailing services. "
   
  // },
  // {
  //   image: require("../../../Assest/pexels-pixabay-326259.jpg"),
  //   title: "Washing & Detailing",
  //   heading: "Exterior & Interior Washing",
  //   description: "Transform your car with our comprehensive exterior and interior washing services. "
    
  // },
];

const SliderComponent = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  // };

  return (
    <div class="carousel hero_banner">
      <div class="container-fluid mw-100 overflow-hidden">
        {/* <Slider> */}
          {carData.map((item, index) => (
            <div key={index} className="carousel-item">
              <div className="carousel-img">
                <img src={item.image} alt="Image1"/>

                <div className="carousel-text">
                  <h2>{item.title}</h2>
                  <h1 className="mb-0 mt-2">{item.heading}</h1>
                  <p className="mb-5">{item.description}</p>
                  <Link className="btn btn-custom d-none">{item.buttonText}</Link>

                  <div className="hero-banner-bnts">
                  <Link to="/MobileServices" className="btn btn-custom  View-Mobile-Packages">
                   View Mobile PACKAGES
                  </Link>
                  <Link to="/studio" className="btn btn-custom">
                  IN STUDIO PACKAGES
                  </Link>
                </div></div>
              </div>
            </div>
          ))}
        {/* </Slider> */}
      </div>
    </div>
  );
};

export default SliderComponent;


 
