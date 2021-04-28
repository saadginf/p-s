import React from "react";
import {
  faHome,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import ContactUsItem from "../Components/ContactUsItem";
import "./ContactUs.css";
const ContactUs = () => {
  return (
    <div>
      <div className="apropospart1">
        <div className="apropospart1wrapper">
          <h1>Contactez Nous</h1>
          <p>Ligne de vie MAROC › Contactez Nous</p>
        </div>
      </div>
      <div className="contact-us-items">
        <ContactUsItem
          icon={faHome}
          title="Adresse"
          preTtile="VISIT US"
          text="Vous pouvez nous visiter a notre local"
          info="SIDI MAAROUF CASABLANCA"
        />
        <ContactUsItem
          icon={faPhoneAlt}
          title="PHONE"
          preTtile="CALL US"
          text="Vous pouvez nous contacter par téléphone du lundi au samedi"
          info="+212698784574 +212777924145"
        />
        <ContactUsItem
          icon={faEnvelope}
          title="EMAIL"
          preTtile="CONTACT US"
          text="vous pouvez nous joindre aussi via email"
          info="contact@pssolutions.ma"
        />
      </div>
    </div>
  );
};

export default ContactUs;
