import React from "react";
import workingdetailngs from "../../../Assest/workingdetailngs.mp4"; // Check the path


const Working = () => {
  return (
    <>
    <section className="how_we_work">
       <div className="container">
              <h1 className="heading mt-0 mb-0">What We Do</h1>
              <p className="subheading text-center wework_subheading ">Vehicle wash and detailing services</p>{" "}
            <div className="row align-items-center mt-5 md-mt-4">
              {/* Changed class name */}
              <div className="col-md-6">
                <div className="we_work_content">
                <p>From Grime to Shine in No Time.</p>
               
                 
                  <p>Unleashing the Beast of Clean Cars.</p>
                  <p>Make Heads Turn with Our Detailing Magic.</p>
                  <p>Shine On, Drive On.</p>
                  {/* Add more relevant content here */}
                </div>
              </div>

              <div className="col-md-6">
              <div className="video-column">
              <video
            autoPlay
            controls
            width="520"
            className="custom-video"
          >
            <source src={workingdetailngs} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

                </div>
              </div>
            </div>
       </div>
      </section>
    </>
  );
};

export default Working;
