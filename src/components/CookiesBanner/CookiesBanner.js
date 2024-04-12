import React from "react";
import CookieConsent from "react-cookie-consent";

const CookiesBanner = () => {
  const handleAccept = () => {
    // Handle any necessary actions when the user accepts cookies
    console.log("Cookies accepted!");
  };

  return (
    <CookieConsent classname="CookieConsent"
      location="bottom"
      buttonText="Allow Cookies"
      cookieName="myAwesomeCookieName2"
      style={{ background: "#202C45" }}
      buttonStyle={{ background: "#E81C2E", color: "white",fontSize: "15px" , borderradius: "2px"}}
      expires={7}
      onAccept={handleAccept}
    >
      We may place cookies for analysis of our visitor data, to improve our website and measure advertising performance. Overall, this data is used to provide a better website experience. For more information about the cookies we use !
      {/* <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span> */}
    </CookieConsent>
  );
};

export default CookiesBanner;