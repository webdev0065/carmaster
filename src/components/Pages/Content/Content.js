import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import car1 from "../../../Assest/interior.jpg";
import car2 from "../../../Assest/1st.jpg";
import BookingForm from '../../Pages/BookingForm/BookingForm';

const Content = ({
  banner,
  title,
  description,
  Image1,
  Image2,
  imgHeading1,
  imgHeading2,
  imgHeading3,
  ServiceTitle,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, // Adjust this value as per your needs
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  

  const [showForm, setShowForm] = useState(false); // State to control the visibility of the booking form

  const handleBookingSuccess = () => {
    setShowForm(false); // Close the modal after successful booking
  };
  const OnModalClose =()=> {
    setShowForm(false); // Close the modal after successful booking

  }

  const handleBookNowClick = () => {
    setShowForm(true); // Set showForm state to true when "Book NOW" button is clicked
  };

  return (
    <div className="container-fluid py-5 new_custom_class">
      <div className="container">
        <div className="row align-items-center m-d-block bobile_block">
          <div className="col-md-12 col-lg-12 interior_mob">
            <div className="inner_content_detailing">
              <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">
                Our Service
              </h6>
              <h1 className="mb-4 section-title">{title}</h1>
              <p>{description}</p>
              <button className="btn btn-primary mt-3" onClick={handleBookNowClick}>
                BOOK NOW
              </button>
            </div>
          </div>
          <div className="col-md-12 col-lg-12 pt-5 pt-lg-0 interior_mob mt-5">
            <Slider {...settings}>
              <div className="d-flex flex-column align-items-center text-center bg-light rounded overflow-hidden pt-4 image">
                <div className="icon-box bg-light text-secondary shadow mt-2 mb-4">
                  <i className="fa fa-2x fa-hotel"></i>
                </div>
                <h5 className="font-weight-bold mb-4 px-4">{imgHeading1}</h5>
                <img src={Image1} alt="Car 1" />
              </div>
              <div className="d-flex flex-column align-items-center text-center bg-light rounded overflow-hidden pt-4 image">
                <div className="icon-box bg-light text-secondary shadow mt-2 mb-4">
                  <i className="fa fa-2x fa-city"></i>
                </div>
                <h5 className="font-weight-bold mb-4 px-4">{imgHeading2}</h5>
                <img src={Image2} alt="Car 2" />
              </div>
              <div className="d-flex flex-column align-items-center text-center bg-light rounded overflow-hidden pt-4 image">
                <div className="icon-box bg-light text-secondary shadow mt-2 mb-4">
                  <i className="fa fa-2x fa-spa"></i>
                </div>
                <h5 className="font-weight-bold mb-4 px-4">{imgHeading3}</h5>
                <img src={Image1} alt="Car 1" />
              </div>
            </Slider>
            {showForm && <BookingForm ServiceTitle={ServiceTitle} handleBookingSuccess={handleBookingSuccess} OnModalClose={OnModalClose}/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
