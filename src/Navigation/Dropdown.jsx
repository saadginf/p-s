import React, { useState } from "react";
import { MenuItems } from "../data";
import "./Dropdown.css";
import { Link } from "react-router-dom";

function Dropdown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div
        onClick={handleClick}
        className={click ? "dropdownX-menu clicked" : "dropdownX-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <div key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Dropdown;
