import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

import logo from "../../../Assest/logo1.png";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };       

  
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav-bar ${isSticky ? "nav-sticky" : ""}`} id="myHeader">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark ">
          <a href="/" className="navbar-brand">
            <span className="navmenu_logo">
                {" "}
                <img src={logo} alt="" />
              </span>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            onClick={toggleSidebar}
          >
            <i class="fa fa-bars" aria-hidden="true"></i>

          </button>

          <div
            className={`collapse navbar-collapse ${
              isSidebarOpen ? "show" : ""
            } justify-content-between`}
            id="navbarCollapse"
          >
            <div className="navbar-nav mr-auto">

                
            <Link to="/Home" className="nav-item nav-link sinlewordspace">
  Home
  {/* <ul className="dropdown-menu">
    <li><Link to="/InteriorDetailing" className="nav-link">Interior Detailing</Link></li>
    <li><Link to="/ExteriorDetailing" className="nav-link">Exterior Detailing</Link></li>
    <li><Link to="/InteriorDetailing" className="nav-link">Interior & Exterior Detailing</Link></li>
    <li><Link to="/WindowTining" className="nav-link">Window Tinting</Link></li>
    <li><Link to="/CermaicCoating" className="nav-link">Ceramic Coating</Link></li>
    <li><Link to="/DetailAftercare" className="nav-link">Detail Aftercare</Link></li>
    <li><Link to="/PPF" className="nav-link">PPF</Link></li>
    <li><Link to="/About" className="nav-link">About</Link></li>
  </ul> */}
</Link>

 <Link to="/studio" className="nav-item nav-link"> 
IN STUDIO SERVICES
  {/* <ul className="dropdown-menu">
    <li><Link to="/CermaicCoating" className="nav-link">CERAMIC COATINGS</Link></li>
    <li><Link to="/WindowTining" className="nav-link">WINDOW TINTING</Link></li>
    <li><Link to="/ExteriorDetailing" className="nav-link">EXTERIOR DETAILING</Link></li>
    <li><Link to="/InteriorDetailing" className="nav-link">INTERIOR DETAILING</Link></li>
    <li><Link to="/Ext&Int" className="nav-link">EXTERIOR & INTERIOR</Link></li>
    <li><Link to="/Paint" className="nav-link">PAINT CORRECTION</Link></li>
    <li><Link to="/Overspray" className="nav-link">OVERSPRAY REMOVAL</Link></li>
  </ul> */}
</Link> 

  <Link to="/MobileServices" className="nav-item nav-link">
  Mobile Services
  <ul className="dropdown-menu">
  <li><Link to="/ExteriorDetailing" className="nav-link">Exterior Detailing</Link></li>
    <li><Link to="/InteriorDetailing" className="nav-link">Interior Detailing</Link></li>
    <li><Link to="/Ext&Int" className="nav-link">Exterior & Interior Detailing</Link></li>
    <li><Link to="/WindowTining" className="nav-link">Window Tinting</Link></li>
    <li><Link to="/CermaicCoating" className="nav-link">Ceramic Coating & PPF</Link></li>
    <li><Link to="/DetailAftercare" className="nav-link">Detail Aftercare</Link></li>
    <li><Link to="/About" className="nav-link">About</Link></li>
  </ul>
</Link>



              {/* <Link to="/InteriorDetailing" className="nav-item nav-link "  >
                INTERIOR DETAILING
              </Link> */}
             {/* <Link to="/ExteriorDetailing" className="nav-item nav-link">
                EXTERIOR DETAILING
              </Link>  */}
              {/* <Link to="/InteriorDetailing" className="nav-item nav-link">
                INTERIOR & EXTERIOR DETAILING
              </Link> */}
              {/* <Link to="/WindowTining" className="nav-item nav-link">
                WINDOW TINING
              </Link>
              <Link to="/CermaicCoating" className="nav-item nav-link">
                CERAMIC COATING & PPF
              </Link> */}
              {/* <Link to="/DetailAftercare" className="nav-item nav-link">
                DETAIL AFTERCARE
              </Link>
              <Link to="/PPF" className="nav-item nav-link sinlewordspace">
                 PPF
              </Link>  */}
              <Link to="/Gallery" className="nav-item nav-link">
                Gallery
              </Link>
              <Link to="/About" className="nav-item nav-link">
                ABOUT
              </Link>
              
              <Link to="/Corporate" className="nav-item nav-link">
                CORPRATE & Heavy Vehicles
              </Link>
              
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavbarComponent;
