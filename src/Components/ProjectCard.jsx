import React from "react";
import "./ProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faLink } from "@fortawesome/free-solid-svg-icons";
const ProjectCard = ({ titre, link1, link2, img }) => {
  return (
    <div className="projectCArd">
      <img src={img} alt="" />
      <div className="poject-card-overlay">
        <div
          id="demo"
          href="https://code-fx.github.io/Pure-CSS3-Animated-Border/"
          class="ui-box border-inOutSpread"
        >
          <div id="span-verlay" class="ui-border-element">
            <a href={link2}> {titre ? titre : "Ligne de vie horizontale"}</a>
            <div className="icons-overlay">
              <a href={"/"}>
                <FontAwesomeIcon icon={faSearch} size="sm" color="white" />
              </a>
              {"     "}
              <a href={link1}>
                <FontAwesomeIcon icon={faLink} size="sm" color="white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
