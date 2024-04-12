import React from "react";
import Header from "../../LayOut/Header/Header";
import BookingForm from "../BookingForm/BookingForm";
import Content from "../Content/Content";
import car1 from "../../../Assest/interior.jpg";
import car2 from "../../../Assest/1st.jpg";
import Footer from "../../LayOut/Footer/Footer";
// import "./InteriorDetailing.css";
const WindowTining = () => {
  const contentData = {
    title: "Enhancing Style, Comfort, and Protection",
    description:  
      "Car window tinting is a service that involves applying a thin, transparent film to the windows of a vehicle. This film is composed of layers of polyester and other materials that are carefully designed to offer a variety of benefits to both the vehicle and its occupants Car window tinting is a service that involves applying a thin, transparent film to the windows of a vehicle. This film is composed of layers of polyester and other materials that are carefully designed to offer a variety of benefits to both the vehicle and its occupants.",
    imgHeading1: " UV Protection",
    imgHeading2: "Heat Reduction",
    imgHeading3: "Privacy and Security",
    Image1: car1,
    Image2: car2,
    ServiceTitle : "Window Tining"

  };
  return (
    <>
    <Header />
      {/* <h1>Interior Detailing</h1> */}
      <section className="window-page-bg before-class">
          <div className="container">
              <div className="inner-exterior">

              </div>
          </div>
      </section>
      <Content {...contentData} />
      <Footer />
    </>
  );
};

export default WindowTining;
