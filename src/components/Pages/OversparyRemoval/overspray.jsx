import React from "react";
import Header from "../../LayOut/Header/Header";
import BookingForm from "../BookingForm/BookingForm";
import Content from "../Content/Content";
import car1 from "../../../Assest/interior.jpg";
import car2 from "../../../Assest/1st.jpg";
import Footer from "../../LayOut/Footer/Footer";

const Overspary = () => {
  const contentData = {
    title: "Unmatched Protection and Shine",
    description:
      "Exterior detailing is a meticulous process dedicated to revitalizing the outer surfaces of an automobile, aiming to bring back its original shine and safeguard its aesthetic appeal against the elements. It's a comprehensive treatment that addresses every facet of a vehicle's exterior, from its paintwork to its wheels and beyond PPF is typically made from a durable, self-healing material that can absorb impacts and prevent damage to the underlying paint. It is commonly applied to high-impact areas such as the front bumper, hood, side mirrors, and door edges, but can be installed on any painted surface of the vehicle. In addition to its protective properties, PPF is also known for its optical clarity, allowing the natural beauty of your vehicle's paint to shine through without any distortion. It is virtually invisible once installed, providing seamless protection without altering the appearance of your car. If you're looking to keep your vehicle looking its best and maintain its resale value, consider investing in Paint Protection Film. Our experienced technicians can professionally install PPF on your car, providing you with peace of mind and long-lasting protection.",
    
      imgHeading1: " Thorough Cleaning and Decontamination",
    imgHeading2: " Paint Correction and Restoration",
    imgHeading3: "Protective Coatings and Sealants",
    Image1: car1,
    Image2: car2,
    ServiceTitle : "Cermaic Coating"

  };
  return (
    <>
      <Header />
      {/* <h1>Cermaic Coating</h1> */}
      <Content {...contentData} />
      <Footer/>
    </>
  );
};

export default Overspary;
