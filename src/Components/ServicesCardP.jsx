import React from "react";
import "./SericeCardP.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const ServicesCardP = ({
  image,
  title,
  description,

  linkTo,
  isProduct = false,
}) => {
  return (
    <div className="box-services">
      <div className="img-service-card-wrapper">
        <img src={image} alt="" />
        <div className="img-service-overlay">
          <Link to={linkTo}>
            <FontAwesomeIcon
              icon={faPlus}
              size="3x"
              color="white"
              id="icon-service-card"
            />
          </Link>
        </div>
      </div>
      <div
        className={
          isProduct
            ? "desciption-service-card-wrapper1"
            : "desciption-service-card-wrapper"
        }
      >
        {" "}
        <h3>
          {" "}
          <a href={linkTo} id="service-card-title">
            {title}{" "}
          </a>
        </h3>
        <p>{description ? description : null}</p>
      </div>
    </div>
  );
};

export default ServicesCardP;
