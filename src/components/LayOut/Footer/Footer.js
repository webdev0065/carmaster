// import React from "react";
// import { Link } from "react-router-dom";


// const Footer = () => {
//   return (
//     <>
//       <div className="footer">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-3 col-md-6">
//               <div className="footer-contact">
//                 <h2>Get In Touch</h2>
//                 {/* <p>
//                   <i className="fa fa-map-marker-alt"></i>4/22A Emmet street, Golden Square, VIC 3555, Australia
//                 </p> */}
//                 <div class="top-bar-text">
//                <h3>Call Us</h3>
//                <p><Link to="tel:+61499382622">+61-499382622</Link></p>
//               </div>
//                 <div class="top-bar-text">
//                       <h3>Email Us</h3>
//                       <p><Link to="mailto:detailingmastersvic@gmail.com">detailingmastersvic@gmail.com</Link></p>
//                       </div> 
//                   <p>
//                   <i className="far fa-clock"></i>Monday to Saturday, 10am-10pm
//                 </p>
//               </div>
//             </div>
//             <div className="col-lg-3 col-md-6">
//               <div className="footer-link">
//                 <h2>Services</h2>
//                 <Link to="/InteriorDetailing">
//                   <i className="fas fa-car me-3"></i>Interior Detailing
//                 </Link>
//                 <Link to="/ExteriorDetailing">
//                   <i className="fas fa-car me-3"></i> Exterior Detailing
//                 </Link>
//                 <Link to="/WindowTining">
//                   <i className="fas fa-car me-3"></i> Window Tinting
//                 </Link>
//                 <Link to="/CermaicCoating">
//                   <i className="fas fa-car me-3"></i> Ceramic Coating
//                 </Link>
//                 <Link to="/InteriorDetailing">
//                   <i className="fas fa-car me-3"></i> Detail Aftercare
//                 </Link>
//               </div>
//             </div>
//             <div className="col-lg-3 col-md-6">
//               <div className="footer-link">
//                 <h2>Useful Links</h2>
//                 <a href="/terms-of-use"><i className="fas fa-file-alt me-3"></i> Terms of Use</a>
//                 <a href="/privacy-policy"><i className="fas fa-shield-alt me-3"></i> Privacy Policy</a>
//                 <a href="/cookies"><i className="fas fa-cookie me-3"></i> Cookies</a>
//               </div>
//             </div>
//             <div className="col-lg-3 col-md-6">
//               <div className="footer-link">
//                  <h2>Join Us</h2>
//                 <div className="footer-social mb-2">
//                   <a className="btn" href="#">
//                     <i className="fab fa-twitter"></i>
//                   </a>
//                   <a className="btn" href="#">
//                     <i className="fab fa-facebook-f"></i>
//                   </a>
//                   <a className="btn" href="#">
//                     <i className="fab fa-youtube"></i>
//                   </a>
//                   <a className="btn" href="#">
//                     <i className="fab fa-instagram"></i>
//                   </a>
//                   <a className="btn" href="#">
//                     <i className="fab fa-linkedin-in"></i>
//                   </a>
//                 </div>        
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <section className="map p-0">
//          <div className="container-fluid mw-100 p-0 overflow-hidden">
//          <div className="row">
//               {/* {/ Embed Google Map /} */}
//                 <div className="col-lg-12">
//                   <div className="footer-link mb-0">
//                     <iframe
//                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.1031991384307!2d144.24606410992106!3d-36.768091674885476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad750afd4cab701%3A0x401e0687d1a277d!2sUnit%204%2F22A%20Emmett%20St%2C%20Golden%20Square%20VIC%203555%2C%20Australia!5e0!3m2!1sen!2suk!4v1710240488097!5m2!1sen!2suk"
//                       width="100%"
//                       height="250"
//                       allowFullScreen=""
//                       loading="lazy"
//                       referrerPolicy="no-referrer-when-downgrade"
//                     ></iframe>
//                   </div>
//                 </div>
//           </div>
//          </div>
//       </section>

//       <section className="copyright text-center">
//           <div className="container-fluid">
//           <p className="m-0">
//             &copy; <a href="#">CarDetailing</a>, All Right Reserved. Designed By{" "}
//             <a href="https://atappisoft.com/index" target="_blank" rel="noopener noreferrer">AtAppiSoft</a>
//           </p>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Footer;


import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assest/logo1.png";


const Footer = () => {
  return (
    <>
     <section className="map p-0">
         <div className="container-fluid mw-100 p-0 overflow-hidden">
         <div className="row">
              {/* {/ {/ Embed Google Map /} /} */}
                <div className="col-lg-12">
                  <div className="footer-link mb-0">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25572.797723614225!2d144.2595523332366!3d-36.75617807458304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad759eb3c77c5e3%3A0x50579a430a0d940!2sBendigo%20VIC%203550%2C%20Australia!5e0!3m2!1sen!2sin!4v1712727883215!5m2!1sen!2sin"
                      width="100%"
                      height="250"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
          </div>
         </div>
      </section>
      <div className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6">
              <div className="footer-contact">

              <span className="navmenu_logo">
                {" "}
                <img src={logo} alt="" />
              </span>
              <div className="footer-link">
                 <h2 className="social-media-heading mb-0 py-3 text-uppercase">Join Us</h2>
                <div className="footer-social mb-2 mt-0">
                  {/* <a className="btn" href="#">
                    <i className="fab fa-twitter"></i>
                  </a> */}
                  <a className="btn" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  {/* <a className="btn" href="#">
                    <i className="fab fa-youtube"></i>
                  </a> */}
                  <a className="btn" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a className="btn" href="#">
                  <i class="fa-brands fa-tiktok"></i>
                  </a>
                </div>        
              </div>
              <p className="m-0 copyright-text">
            &copy; <a href="#">CarDetailing</a>, All Right Reserved. Designed By{" "}
            <a href="https://atappisoft.com/index" target="_blank" rel="noopener noreferrer">AtAppiSoft</a>
          </p>
              {/* {/ <h2>Get In Touch</h2> /} */}
              {/* <p>
                  <i className="fa fa-map-marker-alt"></i>4/22A Emmet street, Golden Square, VIC 3555, Australia
                </p> */}
             
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="footer-link footer-add-links">
                {/* {/ <h2>Services</h2> /} */}
                <div class="top-bar-text">
              {/* <h3>Call Us</h3> */}
              <li className="footer-contact-links">
                <Link to="tel:+61499382622"> <i class="fa fa-phone-alt"></i></Link>
                <Link to="tel:+61499382622">+61-499382622</Link>
              </li>
              </div>
              <div class="top-bar-text">
                  {/* <h3>Email Us</h3> */}
                  <li className="footer-contact-links m-0 pb-2">
                    <Link to="mailto:detailingmastersvic@gmail.com"> <i class="far fa-envelope"></i></Link>
                    <Link to="mailto:detailingmastersvic@gmail.com">detailingmastersvic@gmail.com</Link>
                  </li>
                </div> 
                <p className="m-0 pb-2">
                  <i className="far fa-clock"></i><span className="days-formet">Monday to Saturday, 10am-10pm</span>
                </p>
                
                <li className="footer-home-links">
                <Link to="/ExteriorDetailing">
                   Exterior Detailing
                </Link>
                <Link to="/InteriorDetailing">
                  Interior Detailing
                </Link>
                <Link to="/WindowTining">
                  Window Tinting
                </Link>
                <Link to="/CermaicCoating">
                   Ceramic Coating & PPF
                </Link>
                <Link to="/DetailAftercare">
                   Detail Aftercare
                </Link>
                </li>
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-6"> */}
              {/* <div className="footer-link">
                <h2>Useful Links</h2>
                <a href="/terms-of-use"><i className="fas fa-file-alt me-3"></i> Terms of Use</a>
                <a href="/privacy-policy"><i className="fas fa-shield-alt me-3"></i> Privacy Policy</a>
                <a href="/cookies"><i className="fas fa-cookie me-3"></i> Cookies</a>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
      {/* <section className="map p-0"> */}
         {/* <div className="container-fluid mw-100 p-0 overflow-hidden">
         <div className="row">
              {/* {/ {/ Embed Google Map /} /} */}
                {/* <div className="col-lg-12">
                  <div className="footer-link mb-0">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.1031991384307!2d144.24606410992106!3d-36.768091674885476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad750afd4cab701%3A0x401e0687d1a277d!2sUnit%204%2F22A%20Emmett%20St%2C%20Golden%20Square%20VIC%203555%2C%20Australia!5e0!3m2!1sen!2suk!4v1710240488097!5m2!1sen!2suk"
                      width="100%"
                      height="250"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
          </div> */}
         {/* </div> */}
      {/* </section> */} 

      {/* <section className="copyright text-center">
          <div className="container-fluid">
          <p className="m-0">
            &copy; <a href="#">CarDetailing</a>, All Right Reserved. Designed By{" "}
            <a href="https://atappisoft.com/index" target="_blank" rel="noopener noreferrer">AtAppiSoft</a>
          </p>
        </div>
      </section> */}
    </>
  );
};

export default Footer;
