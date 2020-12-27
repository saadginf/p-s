import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo.png";
import location from "../assets/placeholder.png";
import call from "../assets/call.png";
import clock from "../assets/clock.png";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import InfoItem from "./InfoItem";
import Bar from "./Bar";
import NavbarV2 from "../Navigation";
import SideBarV1 from "../SideBar";

const NavBar = () => {
  return (
    <div>
      <div className="top-bar">
        <div className="contact-mail">
          <FontAwesomeIcon icon={faEnvelope} size="sm" color="white" />
          <a href="contact@pssolutions.ma">contact@pssolutions.ma</a>
        </div>
        <div className="top-bar-social">
          <FontAwesomeIcon icon={faFacebook} size="sm" color="white" />
          <FontAwesomeIcon icon={faLinkedin} size="sm" color="white" />
          <FontAwesomeIcon icon={faTwitter} size="sm" color="white" />
          <FontAwesomeIcon icon={faYoutube} size="sm" color="white" />
        </div>
      </div>
      <div className="logo-info-items">
        <div className="logo-info">
          <img src={logo} alt="logo" />
        </div>
        <div className="info-items">
          <InfoItem
            image={location}
            titre="Notre Emplacement"
            soustitre="SIDI MAAROUF CASABLANCA"
          />
          <InfoItem
            image={call}
            titre="NOUS CONTACTER"
            soustitre="+212698784574"
            soustitre2="+212666196109"
          />
          <InfoItem
            image={clock}
            titre="HORAIRES"
            soustitre="Lundi-Samedi: 8:00-18:00"
            id="noborderright"
          />
        </div>
      </div>
      <NavbarV2 />
    </div>
  );
};

export default NavBar;
