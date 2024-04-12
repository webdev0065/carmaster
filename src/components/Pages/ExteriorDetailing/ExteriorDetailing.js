import React from "react";
import Header from "../../LayOut/Header/Header";
import Content from "../Content/Content";
import car1 from "../../../Assest/interior.jpg";
import car2 from "../../../Assest/1st.jpg";
import Footer from "../../LayOut/Footer/Footer";

const ExteriorDetailing = () => {
  const contentData = {
    title: "Restoring Brilliance and Protecting Elegance",
    description:
      "Exterior detailing involves the comprehensive cleaning and restoration of the outer surfaces of a vehicle, aiming to enhance its appearance, protect it from environmental damage, and maintain its resale value. This meticulous process focuses on every aspect of the vehicle's exterior, from the paintwork to the wheels and trim. Exterior detailing involves the comprehensive cleaning and restoration of the outer surfaces of a vehicle, aiming to enhance its appearance, protect it from environmental damage, and maintain its resale value. This meticulous process focuses on every aspect of the vehicle's exterior, from the paintwork to the wheels and trim.",
    imgHeading1: "Washing and Decontamination",
    imgHeading2: "Paint Correction",
    imgHeading3: "Trim and Wheel Detailing",
    Image1: car1,
    Image2: car2,                  
    ServiceTitle: "Exterior Detailing"
  };

  return (
    <>
      <Header />
      {/* <h1>Exterior Detailing</h1> */}
      <section className="exterior-page-bg before-class">
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

export default ExteriorDetailing;
