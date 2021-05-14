import React from "react";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationArrow,
  faPhoneAlt,
  faFax,
  faClock,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footertop">
          <div className="aboutus">
            <h3>A PROPOS</h3>
            P&S solutions est une société marocaine à responsabilité limitée,
            qui est spécialisée dans le domaine de la sécurité et plus
            précisément le travail en hauteur.(lignes de vie,points
            d’ancrage,formation travail en hauteur au maroc,audit et conseil
            …..)
            <div className="footericones">
              <a href="https://web.facebook.com/PS-solutions-110294210835103/?view_public_for=110294210835103&_rdc=1&_rdr">
                <FontAwesomeIcon icon={faFacebook} size="lg" color="white" />
              </a>
              <a href="https://web.facebook.com/PS-solutions-110294210835103/?view_public_for=110294210835103&_rdc=1&_rdr">
                <FontAwesomeIcon icon={faLinkedin} size="lg" color="white" />
              </a>
              <a href="https://web.facebook.com/PS-solutions-110294210835103/?view_public_for=110294210835103&_rdc=1&_rdr">
                <FontAwesomeIcon icon={faTwitter} size="lg" color="white" />
              </a>
              <a href="https://web.facebook.com/PS-solutions-110294210835103/?view_public_for=110294210835103&_rdc=1&_rdr">
                <FontAwesomeIcon icon={faYoutube} size="lg" color="white" />
              </a>
            </div>
          </div>
          <div className="contactus">
            <h3 className="contactustitle">CONTACTEZ-NOUS</h3>
            <div className="contactuspart">
              <FontAwesomeIcon icon={faLocationArrow} size="sm" color="white" />
              <span className="contactussbtitle"> sidi maarouf casablanca</span>
            </div>
            <div className="contactuspart">
              <FontAwesomeIcon icon={faPhoneAlt} size="sm" color="white" />
              <span className="contactussbtitle">+212698784574</span>
            </div>
            <div className="contactuspart">
              <FontAwesomeIcon icon={faFax} size="sm" color="white" />

              <span className="contactussbtitle">+212666196109</span>
            </div>
            <div className="contactuspart">
              <FontAwesomeIcon icon={faEnvelope} size="sm" color="white" />
              <span className="contactussbtitle">contact@pssolutions.ma</span>
            </div>
            <div className="contactuspart">
              <FontAwesomeIcon icon={faClock} size="sm" color="white" />
              <span className="contactussbtitle">Lundi–Samedi: 8am – 6pm</span>
            </div>
            <div className="contactuspart">
              <FontAwesomeIcon icon={faClock} size="sm" color="white" />
              <span className="contactussbtitle">Dimanche: Fermé</span>
            </div>
          </div>
        </div>
        <div className="footerbottom">
          <div className="footerbottom content">
            Copryright © 2019, By theme-x | All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
