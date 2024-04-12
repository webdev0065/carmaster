import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../LayOut/Footer/Footer";
import Header from "../../LayOut/Header/Header";


const Mailcont = () => {
  return (
    <>
      <Header />
      <div className="container-fluid mw-100 p-0 overflow-hidden">
        <section className="contact-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="section-heading">Contact Us</h2>
                <p className="text-muted">
                  For inquiries, please leave your email and phone number, and we'll get back to you as soon as possible.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="contact-item">
                  <Link to="mailto:detailingmastersvic@gmail.com" className="btn btn-primary btn-block">
                    <i className="far fa-envelope"></i> Email Us
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <div className="contact-item">
                  <Link to="tel:+61499382622" className="btn btn-primary btn-block">
                    <i className="fa fa-phone-alt"></i> Call Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Mailcont;
