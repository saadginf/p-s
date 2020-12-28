import React from "react";
import "./ScrollToTop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
const ScrollToTop = () => {
  return (
    <div
      className="scroll-to-top"
      onClick={() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }}
    >
      {" "}
      <FontAwesomeIcon icon={faArrowUp} size="2x" color="black" />
    </div>
  );
};

export default ScrollToTop;
