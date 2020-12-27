import React from "react";

const InfoItem = ({ id, image, titre, soustitre, soustitre2 }) => {
  return (
    <div className="logoclassNameitems" id={id}>
      <div className="items">
        <img src={image} alt="location" />
      </div>
      <div className="items-titles">
        <h6 id="titre">
          {" "}
          <strong> {titre}</strong>
        </h6>
        <p id="soustitre">{soustitre}</p>

        <p id="soustitre">{soustitre2}</p>
      </div>
    </div>
  );
};

export default InfoItem;
