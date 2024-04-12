import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../LayOut/Home/Home";
import InteriorDetailing from "../Pages/InteriorDetailing/InteriorDetailing";
import ExteriorDetailing from "../Pages/ExteriorDetailing/ExteriorDetailing";
import WindowTining from "../Pages/WindowTining/WindowTining";
import About from "../Pages/About/About";
import CermaicCoating from "../Pages/CermaicCoating/CermaicCoating";
import BookingForm from "../Pages/BookingForm/BookingForm";
import AfterCare from "../Pages/AfterCare/AfterCare";
import Pricing from "../LayOut/pricing/Pricing"
import PPF from "../Pages/PPF/PPF";
import MobileServices from "../Pages/MobileServices/MobileServices";
import Instudio from "../Pages/Instudio/Instudio.jsx";
import Gallery from "../Pages/Gallery/Gallery.jsx";
import Overspray from "../Pages/OversparyRemoval/overspray.jsx";
import Paint from "../Pages/PaintCorrection/paint.jsx";
import ExtInt from "../Pages/ExtInt/exteriorinterior.jsx";
import Corporate  from "../Pages/CorporateHeavy/Corporate.jsx";
import Mailcont from "../Pages/Corporatecont/Mailcont.jsx";


const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/MobileServices" element={<MobileServices/>} />
          <Route path="/InteriorDetailing" element={<InteriorDetailing />} />
          <Route path="/ExteriorDetailing" element={<ExteriorDetailing />} />
          <Route path="/WindowTining" element={<WindowTining />} />
          <Route path="/PPF" element={<PPF />} />
          <Route path="/About" element={<About />} />
          <Route path="/CermaicCoating" element={<CermaicCoating />} />
          <Route path="/Booking" element={<BookingForm />} />
          <Route path="/DetailAfterCare" element={<AfterCare />} />
          <Route path="/Pricing" element={<Pricing/>} />
          <Route path="/studio" element={<Instudio/>} />
          <Route path="/Gallery" element={<Gallery/>} />
          <Route path="/Overspray" element={<Overspray/>} />
          <Route path="/Paint" element={<Paint/>} />
          <Route path="/Ext&Int" element={<ExteriorDetailing/>} />
          <Route path="/Corporate" element={<Corporate/>} />
          <Route path="/mailcont" element={<Mailcont/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
