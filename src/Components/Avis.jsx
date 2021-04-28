import React from "react";
import "./Avis.css";
import user from "../assets/default-user.png";
import Ratings from "react-ratings-declarative";
const Avis = ({ name, rating }) => {
  return (
    <div className="avis-container">
      <img src={user} alt="user" />
      <div className="comment-container">
        <div className="rating-container">
          <i>{name}</i>
          <Ratings
            rating={rating}
            widgetRatedColors="gold"
            widgetDimensions="25px"
            widgetSpacings="1px"
          >
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
          </Ratings>
        </div>
        <span>date</span>
        <span>date</span>
      </div>
    </div>
  );
};

export default Avis;
