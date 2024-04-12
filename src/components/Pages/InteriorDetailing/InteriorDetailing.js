import React from "react";
import Header from "../../LayOut/Header/Header";
import Content from "../Content/Content";
import Footer from "../../LayOut/Footer/Footer";
import car1 from "../../../Assest/interior.jpg";
import car2 from "../../../Assest/1st.jpg";

const InteriorDetailing = () => {
  const contentData = {
    title: "Awesome Car Interior Detailing Service For You",
    description:
      "Interior detailing is the meticulous process of cleaning and rejuvenating every surface inside a vehicle's cabin, aiming to restore its original beauty and ensure a comfortable, hygienic environment for passengers. Here's a detailed description: Thorough Vacuuming: The process begins with a comprehensive vacuuming of all interior surfaces, including carpets, upholstery, floor mats, and trunk space. This step removes loose dirt, dust, and debris from hard-to-reach areas. Deep Cleaning of Surfaces: Next, all surfaces such as dashboard, door panels, center console, and steering wheel are meticulously cleaned using appropriate cleaners and brushes. This step removes grime, fingerprints, and other stains, restoring a clean and fresh appearance. Leather Care: Leather seats and surfaces are treated with specialized cleaners and conditioners to remove dirt, and restore suppleness. Conditioning agents also help prevent cracking and maintain the natural luster of the leather. Fabric Upholstery Treatment: Fabric seats and carpets undergo spot treatment and steam cleaning to eliminate stains, spills, and odors. This process effectively lifts dirt and grime embedded deep within the fibers, leaving upholstery refreshed and sanitized.",
    imgHeading1: "Vacuuming",
    imgHeading2: "Deshboard Detailing",
    imgHeading3: "Carpet Cleaning",
    Image1: car1,
    Image2: car2,
    ServiceTitle : "Interior Detailing"
  };

  return (
    <>
      <Header />
      {/* <h1>Interior Detailing</h1> */}
      <section className="enterior-page-bg before-class">
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

export default InteriorDetailing;
