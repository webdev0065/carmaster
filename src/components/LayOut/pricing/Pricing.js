import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import BookingForm from "../../Pages/BookingForm/BookingForm";
import price1car from "../../../Assest/price1car.jpg";
import pricesmile from "../../../Assest/pricesmile.jpg";
import price2car from "../../../Assest/price2car.jpg";
import exterior from "../../../Assest/exterior.jpg";

const Pricing = () => {
  const [showForm, setShowForm] = useState(false);

  const [bookingSuccessful, setBookingSuccessful] = useState(false);

  const handleBookingSuccess = () => {
    setShowForm(false);
  };

  // const handleBookingFailure = () => {
  //   setBookingSuccessful(false); // Set the state to false
  // };
  const handleBookNowClick = () => {
    setShowForm(true); // Set showForm state to true when "Book NOW" button is clicked
    console.log(showForm);
  };
  const OnModalClose = () => {
    setShowForm(false);
  }
  return (
    <>
      <Header />
      <div className="container-fluid mw-100 p-0 overflow-hidden">
        <section className="pricing">
          <div className="container">
            <div class="slider-wrapper">
              <span>Speed Car Wash for Clean Sparkling</span>
              <div class="slider">
                <div class="text1">Sparkling</div>
                <div class="text2">Gleaming</div>
                <div class="text3">Lustrous</div>
              </div>
              <span>Shiny Clean Cars in a Hassle-Free Way</span>
            </div>
            Discover a revolutionary approach to car care with Speed Car Wash—a
            cutting-edge brand set to redefine your perception of vehicle
            cleaning. Our innovative mechanized car cleaning system employs
            state-of-the-art equipment, including high-pressure cleaning
            machines, advanced spray injection and extraction machines, powerful
            vacuum cleaners, and cutting-edge steam cleaners. Experience
            unparalleled pampering for your vehicle like never before.
            <div className="row">
              <div className="col-md-12">
                {/* Additional points */}
                <div className="row text-center d-flex justify-content-center align-items-center">
                  <div className="col-lg-2 col-md-6 col-sm-12">
                    <div className="banner_img_content">
                      <img
                        src={price1car}
                        alt="Best Experience"
                        className="rounded-circle img-thumbnail"
                        style={{ width: "150px", height: "150px" }}
                      />
                      <p>Best Experience</p>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-sm-12">
                    <div className="banner_img_content">
                      <img
                        src={pricesmile}
                        alt="Affordable Prices"
                        className="rounded-circle img-thumbnail"
                      />
                      <p>Affordable Prices</p>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-sm-12">
                    <div className="banner_img_content">
                      <img
                        src={exterior}
                        alt="Clean Cars"
                        className="rounded-circle img-thumbnail"
                      />
                      <p>Clean Cars</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-md-offset-1 ">
                    <div className="flipchar shiny_cars_img">
                      <img
                        src={price2car}
                        alt="Shiny Cars"
                        className="rounded-circle img-thumbnail "
                      />
                    </div>

                    <div className="banner_img_content  ">
                      <p className=" ">Shiny Cars</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="card_pricing_box">
          <div className="container-fluid">
            <div className="row row-gap-3">
              <div className="col-md-4">
                <div className="card pricing-card">
                  <div className="card-body">
                    <h2 className="card-title m-0">Basic Package</h2>
                    <p className="card-text">
                      Experience top-notch quality with our car solutions.
                    </p>
                    <p>
                      <span className="cardpric_e">$75</span>/ Monthly
                    </p>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        Discover the ultimate in car pampering{" "}
                      </li>
                      <li className="list-group-item">
                        Enjoy the convenience of our hassle-free services.
                      </li>
                      <li className="list-group-item">
                        Revitalize your car's appearance with our treatments.
                      </li>
                      <li className="list-group-item">
                        Experience the difference with our team .
                      </li>
                      <li className="list-group-item">
                        Indulge in luxury cleanliness and comfort.
                      </li>
                    </ul>
                    <button
                      className="btn btn-primary mt-3"
                      onClick={handleBookNowClick}
                    >
                      Book NOW
                    </button>
                    <p className="get_info m-0 pt-3">
                      Get Extra 10% off for Brand New Car
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card pricing-card">
                  <div className="card-body">
                    <h2 className="card-title m-0">Premium Package</h2>
                    <p className="card-text">
                      Elevate your car with our Premium Package.
                    </p>
                    <p>
                      <span className="cardpric_e">$125</span>/ Monthly
                    </p>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        Indulge in the finest car pampering services.
                      </li>
                      <li className="list-group-item">
                        Immerse yourself in unparalleled comfort .
                      </li>
                      <li className="list-group-item">
                        Experience peace of mind knowing .
                      </li>
                      <li className="list-group-item">
                        Discover the difference with our Premium Package.
                      </li>
                      <li className="list-group-item">
                        Join the ranks of satisfied customers.
                      </li>
                    </ul>

                    <button
                      className="btn btn-primary mt-3"
                      onClick={handleBookNowClick}
                    >
                      Book NOW
                    </button>
                    <p className="get_info m-0 pt-3">
                      Get Extra 10% off for Brand New Car
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card pricing-card popular">
                  <div className="card-body">
                    <h2 className="card-title m-0">Luxury Package</h2>
                    <p className="card-text">
                      Indulge in luxury with our exclusive Luxury Package.
                    </p>
                    <p>
                      <span className="cardpric_e">$225</span>/ Monthly
                    </p>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        Experience the pinnacle of sophistication .
                      </li>
                      
                      <li className="list-group-item">
                        Savor the feeling of prestige and elegance .
                      </li>
                      <li className="list-group-item">
                        Immerse yourself in unparalleled comfort and luxury .
                      </li>
                      <li className="list-group-item">
                        Discover the true meaning of excellence .
                      </li>
                      <li className="list-group-item">
                        Join the elite clientele who trust us .
                      </li>
                    </ul>

                    <button
                      className="btn btn-primary mt-3"
                      onClick={handleBookNowClick}
                    >
                      Book NOW
                    </button>
                    <p className="get_info m-0 pt-3">
                      Get Extra 10% off for Brand New Car
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {showForm && (
            <BookingForm
              ServiceTitle={"Car Detailing Services"}
              handleBookingSuccess={handleBookingSuccess}
              OnModalClose={OnModalClose}
            />
          )}{" "}
          {/* Display the BookingForm component when showForm state is true */}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
