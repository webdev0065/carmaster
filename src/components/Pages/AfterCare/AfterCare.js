import React from "react";
import Header from "../../LayOut/Header/Header";
import BookingForm from "../BookingForm/BookingForm";
import car1 from "../../../Assest/interior.jpg";
import car2 from "../../../Assest/1st.jpg";
import Content from "../Content/Content";
import Footer from "../../LayOut/Footer/Footer";

const AfterCare = () => {
  const contentData = {
    title: " Sustaining Brilliance and Preserving Perfection",
    description:
      "Detail aftercare is an essential component of maintaining the immaculate appearance and long-term protection provided by professional detailing services. It involves a combination of proactive measures and regular maintenance routines designed to uphold the integrity of a vehicle's exterior and interior surfaces, ensuring they remain in pristine condition for years to come.",
    imgHeading1: " Protective Measures",
    imgHeading2: "Regular Washing and Cleaning",
    imgHeading3: "Interior Maintenance and Protection",
       Image1: car1,
    Image2: car2,
    ServiceTitle : "Detail Aftercare"

  }; 

  
  return (
    <>
      <Header />
      {/* <h1>Interior Detailing</h1> */}
      <section className="after-page-bg before-class">
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
export default AfterCare;

