import React from "react";
import Header from "../Header/Header";
import AboutUs from "../AboutUs/AboutUs";
import CookieConsent from "react-cookie-consent";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";
import Slider from "../Slider/Slider";
import BookingCard from "../BookingCard/BookingCard";
import Details from "../Details/Details";
import Working from "../Working/Working";
import Benefits from "../Benefits/Benefits";
import CookiesBanner from "../../CookiesBanner/CookiesBanner"

const Home = () => {
  return (
    <>
      <Header />
      
      
      <Slider />
      <CookiesBanner/>

      <AboutUs />
      <Working />
      <BookingCard />
      
      <Services />
      <Benefits />
      <Details />

      
      <Footer />
    </>
  );
};

export default Home;
