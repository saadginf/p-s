import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./ServiceCard.css";
const ServiceCard = ({ title, desc, href, background }) => {
  return (
    <div class="ourservicebg" style={{ backgroundImage: `url(${background})` }}>
      <div class="ourserviceitems">
        <a class="ourserviceitemsa" href={href}>
          <h1>{title}</h1>
        </a>
        <p id="ourservicebgp">{desc}</p>
        <a href={href} className="arrow-services">
          {" "}
          <FontAwesomeIcon
            icon={faArrowRight}
            size="2x"
            color="white"
            id="arrow-servicessvg"
          />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
