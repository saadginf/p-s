import React from "react";
import "./SousServiceItem.css";
const SousServiceItem = ({ ss }) => {
  return (
    <div className="sous-service-container">
      <h5>{ss.title}</h5>
      <img
        src={"https://protected-mountain-22516.herokuapp.com/" + ss.images[0]}
        alt={ss.title}
      />
      <a className="sous-service-a" href={"/service/" + ss._id}>
        En savoir plus
      </a>
    </div>
  );
};

export default SousServiceItem;
