import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.css";

const Services = () => {
  return (
    <>
      <div className="service">
        <div className="container">
          <div className="section-header text-center">
            <h2>
              " Luxurious Washing Solutions!"</h2>
            <p>What We Do?</p>
          </div>
          <div className="row row-gap-4">
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <i className="fas fa-car"></i>
                <h3>Exterior Washing</h3>
                <p>
                  Our Exterior Washing services are tailored to bring back the sparkle and
                  shine to your vehicle's exterior, ensuring it looks as good as new.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <i className="fas fa-car"></i>
                <h3>Interior Washing</h3>
                <p>
                  Elevate the aesthetic appeal of your car's interior with our Interior
                  Washing services, showcasing its beauty and elegance with every clean.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <i className="fas fa-broom"></i>

                <h3>Vacuum Cleaning</h3>
                <p>
                  Bid farewell to dust and debris with our advanced Vacuum Cleaning services,
                  designed to leave your car's interior spotless and allergen-free.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <i className="fas fa-chair"></i>
                <h3>Seats Washing</h3>
                <p>
                  Treat your car to a refreshing makeover with our professional Seats Washing service,
                  designed to revitalize and restore the beauty of your upholstery.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="service-item">
                <i class="fas fa-window-maximize"></i>{" "}

                <h3>Window Wiping</h3>
                <p>
                  Enhance your driving experience with our professional Window Wiping
                  service, ensuring crystal clear visibility for a safer journey.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="service-item">
                <i class="fas fa-tint"></i>
                <h3>Wet Cleaning</h3>
                <p>
                  Our wet cleaning process ensures a thorough cleanse,
                  promoting maximum hygiene and leaving no corner untouched.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="service-item">
                <i class="fas fa-oil-can"></i>
                <h3>Oil Changing</h3>
                <p>
                  Experience quick, convenient, and reliable oil changing service at our facility,
                  saving you time and hassle.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="service-item">
                <i class="fas fa-tools"></i>
                <h3>Brake Repairing</h3>
                <p>
                  Prioritize safety with our professional brake repairing service,
                  ensuring your vehicle stops reliably when you need it most.
                </p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="service-item">
                <i className="fas fa-wrench"> </i>
                <h3>polishing</h3>
                <p>
                  Revitalize your car's appearance and give it a fresh new look
                  with our expert polishing service, turning heads wherever you go.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
