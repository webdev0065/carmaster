import React from "react";

import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS CSS
import {
  FaDollarSign,
  FaUsers,
  FaHeadset,
  FaMapMarkerAlt,
} from "react-icons/fa"; // Importing Font Awesome icons

const Details = () => {
  // Initialize AOS when the component mounts
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="why_choose_our_service">
        <div className="container">
          <div className="inner_choose_service">
            <h1 className="text-center text-capitalize mt-0 mb-4">Why choose our service?</h1>
            <p className="text-center heading mt-0">we give the better quality.</p>
            <div className="row choose_row md-gap-4">
              <div className="col-lg-3 col-md-6" data-aos="fade-up"> {/* Apply AOS animation to this column */}
                <div className="icon_box text-center">
                  <div>
                    <FaDollarSign style={{ fontSize: "2em" }} />
                    <h3 className="mt-3">Detail After Care</h3>
                  </div>
                  <p>
                  Aftercare: Preserve your car's gleam with our expert detailing.
                  </p>
                </div>
              </div> 

              <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100"> {/* Apply AOS animation to this column with a delay */}
                <div className="icon_box text-center">
                  <div>
                    <FaUsers style={{ fontSize: "2em" }} />
                    <h3 className="mt-3">Experienced staff</h3>
                  </div>
                  <p>We hire the best experts in everything concerning car rental.</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200"> {/* Apply AOS animation to this column with a delay */}
                <div className="icon_box text-center">
                  <div>
                    <FaHeadset style={{ fontSize: "2em" }} />
                    <h3 className="mt-3">Reliable support</h3>
                  </div>
                  <p>
                    Our team guarantees reliable support in addition to the offered services.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300"> {/* Apply AOS animation to this column with a delay */}
                <div className="icon_box text-center">
                  <div>
                    <FaMapMarkerAlt style={{ fontSize: "2em" }} />
                    <h3 className="mt-3">Convenience at Your Doorstep</h3>
                  </div>
                  <p>Top-notch service, anywhere, even for maintenance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
