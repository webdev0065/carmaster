import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import Slider from "react-slick"; // Import Slider from react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import service1 from "../../../Assest/clientimage/service1.JPG"
import service2 from "../../../Assest/clientimage/service2.JPG"
import service3 from "../../../Assest/clientimage/service3.JPG"
import service4 from "../../../Assest/clientimage/service4.JPG"
import service5 from "../../../Assest/clientimage/service5.JPG"
import service6 from "../../../Assest/clientimage/service6.JPG"
import service7 from "../../../Assest/clientimage/service7.JPG"

import { useNavigate } from "react-router-dom";

const BookingCard = () => {
  const navigate = useNavigate();

  const handleSeePackages = () => {
    navigate("/Pricing"); // Navigate to the Pricing component when "See Packages" is clicked
  };
  const carDetails = [
        {
          title: "INTERIOR DETAILING",
          image: service5, // Use imported interior image directly
        },
        {
          title: "EXTERIOR DETAILING",
          image: service1, // Use imported exterior image directly
        },
        {
          title: "INTERIOR AND EXTERIOR ",
          image:service2, // Use imported window image directly
        },
        {
          title: "WINDOW TINTING",
          image: service3, // Use imported after detailing image directly
        },
        {
          title: "CERAMIC COATING",
          image: service4, // Use imported after detailing image directly
        },
        {
          title: "DETAIL AFTERCARE",
          image: service7, // Use imported after detailing image directly
        },
        {
          title: "PPF",
          image: service6, // Use imported after detailing image directly
        },
      ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of cards to show at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="booking_card">
        <div className="container">
        <h1 className="text-center mt-0">Discover the Splendor of Your Vehicle with Our Exclusive Detailing Packages</h1>
        <p className="text-center heading ">Gift your vehicle a premium spa experience with our expert technicians</p>
          <Slider {...settings}> {/* Pass settings to the Slider component */}
            {carDetails.map((detail, index) => (
              <div key={index}>
                <Card className="car-card ms-3">
                  <Card.Img
                    variant="top"
                    src={detail.image}
                  />
                  <Card.Body>
                    <Card.Title>{detail.title}</Card.Title>
                    {/* You can add description here if necessary */}
                    <Button
                      variant="primary"
                      onClick={handleSeePackages}
                    >
                      See Packages
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Slider>
    
        </div>
      </section>
    </>
  );
};

export default BookingCard;
// import React from "react";
// import { Card, Button } from "react-bootstrap";
// import Slider from "react-slick"; // Import Slider from react-slick
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import service1 from "../../../Assest/clientimage/service1.JPG"
// import service2 from "../../../Assest/clientimage/service2.JPG"
// import service3 from "../../../Assest/clientimage/service3.JPG"
// import service4 from "../../../Assest/clientimage/service4.JPG"
// import service5 from "../../../Assest/clientimage/service5.JPG"
// import service6 from "../../../Assest/clientimage/service6.JPG"
// import service7 from "../../../Assest/clientimage/service7.JPG"
// import "./BookingCard.css";

// import { useNavigate } from "react-router-dom";

// const BookingCard = () => {
//   const navigate = useNavigate();

//   const handleSeePackages = () => {
//     navigate("/Pricing"); // Navigate to the Pricing component when "See Packages" is clicked
//   };
//   const carDetails = [
//     {
//       title: "INTERIOR DETAILING",
//       image: service5, // Use imported interior image directly
//     },
//     {
//       title: "EXTERIOR DETAILING",
//       image: service1, // Use imported exterior image directly
//     },
//     {
//       title: "INTERIOR AND EXTERIOR ",
//       image:service2, // Use imported window image directly
//     },
//     {
//       title: "WINDOW TINTING",
//       image: service3, // Use imported after detailing image directly
//     },
//     {
//       title: "CERAMIC COATING",
//       image: service4, // Use imported after detailing image directly
//     },
//     {
//       title: "DETAIL AFTERCARE",
//       image: service7, // Use imported after detailing image directly
//     },
//     {
//       title: "PPF",
//       image: service6, // Use imported after detailing image directly
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4, // Number of cards to show at a time
//     slidesToScroll: 1,
//     autoplay: false,
//     autoplaySpeed: 1000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       <section className="booking_card">
//         <div className="container">
//         <h1 className="text-center mt-0">"Unleash Your Car's Brilliance with Our Detailing Packages!"</h1>
//         <p className="text-center heading ">Gift your vehicle a premium spa experience with our expert technicians</p>
//           <Slider {...settings}> {/ Pass settings to the Slider component /}
//             {carDetails.map((detail, index) => (
//               <div key={index}>
//                 <Card className="car-card ms-3">
//                   <Card.Img
//                     variant="top"
//                     src={detail.image}
//                   />
//                   <Card.Body>
//                     <Card.Title>{detail.title}</Card.Title>
//                     {/ You can add description here if necessary /}
//                     <Button
//                       variant="primary"
//                       onClick={handleSeePackages}
//                     >
//                       See Packages
//                     </Button>
//                   </Card.Body>
//                 </Card>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </section>
//     </>
//   );
// };

// export default BookingCard;
