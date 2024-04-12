import React from 'react';
import Header from "../../LayOut/Header/Header";
import Content from "../Content/Content";
import Footer from "../../LayOut/Footer/Footer";
import car1 from "../../../Assest/interior.jpg";
import car2 from "../../../Assest/1st.jpg";

function exteriorinterior() {

    const contentData = {
        title: "Awesome Car Paint Protection Film (PPF) Service For You",
        description: `PPF is typically made from a durable, self-healing material that can absorb impacts and prevent damage to the underlying paint. It is commonly applied to high-impact areas such as the front bumper, hood, side mirrors, and door edges, but can be installed on any painted surface of the vehicle.
            In addition to its protective properties, PPF is also known for its optical clarity, allowing the natural beauty of your vehicle's paint to shine through without any distortion. It is virtually invisible once installed, providing seamless protection without altering the appearance of your car.
            If you're looking to keep your vehicle looking its best and maintain its resale value, consider investing in Paint Protection Film. Our experienced technicians can professionally install PPF on your car, providing you with peace of mind and long-lasting protection.`,
        imgHeading1: "Vacuuming",
        imgHeading2: "Dashboard Detailing",
        imgHeading3: "Carpet Cleaning",
        Image1: car1,
        Image2: car2,
        ServiceTitle : "PPF"

      };
    
      return (
        <>
          <Header />
          {/* <h1>Paint Protection Film (PPF)</h1> */}
          <Content {...contentData} />
          <Footer />
        </>
      );
}

export default exteriorinterior;
