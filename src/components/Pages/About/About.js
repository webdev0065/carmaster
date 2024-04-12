import React, { useEffect } from "react";
import Header from "../../LayOut/Header/Header";
import Footer from "../../LayOut/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import car1 from "../../../Assest/interior.jpg";
import car2 from "../../../Assest/1st.jpg";

const About = () => {
 
    useEffect(() => {
      AOS.init();
    }, []);
  
  const contentData = {
    title: "Welcome to Detailing Master About us",
    description: `At Detailing Master, we understand that your car is more than just a mode of transportation – it's a reflection of your style and personality. That's why we're dedicated to providing top-tier car detailing services that go beyond mere cleanliness, elevating your driving experience to new heights of luxury and satisfaction. Car detailing services are much more precise and labor-intensive than getting a car wash. A car wash is normally an automated system that a car passes through to clean the exterior`,
    services: [
      {
        heading: "Exterior Detailing",
        description: "Restore your car's showroom shine with our exterior detailing services, including paint correction, protective coatings, and trim restoration."
      },
      {
        heading: "Interior Detailing",
        description: "Experience true comfort and luxury with our interior detailing treatments, featuring thorough cleaning, upholstery restoration, and leather conditioning."
      },
      {
        heading: "Paint Protection",
        description: "Preserve the integrity of your car's paintwork with our advanced paint protection solutions, including ceramic coatings and paint sealants."
      },
      {
        heading: "Window Tinting",
        description: "Enhance privacy, comfort, and style with our professional window tinting services, tailored to your specific preferences."
      },
      {
        heading: "Specialty Services",
        description: "From headlight restoration to engine bay detailing, we offer a range of specialty services to address every aspect of your vehicle's appearance and functionality."
      },
      {
        heading: "Engine Bay Detailing",
        description: "Revitalize your engine bay with our professional detailing services, ensuring peak performance and longevity of your vehicle's engine components."
      },
      {
        heading: "Headlight Restoration",
        description: "Illuminate the road ahead with our headlight restoration services, designed to improve visibility and enhance the appearance of your vehicle. Over time, headlights can become cloudy or yellowed due to oxidation, reducing their effectiveness and diminishing the overall look of your car. Our skilled technicians utilize advanced techniques to remove oxidation and restore clarity to your headlights, allowing for better light transmission and increased safety on the road. With our headlight restoration services, you can enjoy improved visibility, a refreshed look, and peace of mind knowing your headlights ."
      }
      
    ],
    images: [ car1,car2]
  };

  return (
    <>
      <Header />
      <div className="container  fade-up">
        <h1 data-aos="fade-up text-center ">{contentData.title}</h1>
        <div className="row">
          <p data-aos="fade-up">{contentData.description}</p>
          <div className="col-md-6 mt-4 ">
            {contentData.images.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index + 1}`} className="img-fluid mb-4 about-img" data-aos="fade-up" />
            ))}
          </div>
          <div className="col-md-6 mt-4">
            {contentData.services.map((service, index) => (
              <div key={index} data-aos="fade-up">
                <h2>{service.heading}</h2>
                <p>{service.description}</p>
                
              </div>
            ))}
          </div>
        
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
