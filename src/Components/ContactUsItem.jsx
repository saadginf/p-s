import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactUsItem = ({ title, icon, preTtile, text, info }) => {
  return (
    <div className="contactusitem-container">
      <FontAwesomeIcon icon={icon} size="3x" color="#ffc107" />
      <div className="titile-contact-item">
        <h2>{title}</h2>
        <h1>{preTtile}</h1>
      </div>
      <p>{text}</p>
      <p style={{ color: "#ffc107", fontWeight: "bold", fontSize: "20px" }}>
        {info}
      </p>
    </div>
  );
};

export default ContactUsItem;
