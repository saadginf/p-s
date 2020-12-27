import React, { useState } from "react";
import { ProductsItems } from "./ProductsItems";
import "./Dropdown.css";
import { Link } from "react-router-dom";

function DropdownProducts() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div
        onClick={handleClick}
        className={click ? "dropdownY-menu clicked" : "dropdownY-menu"}
      >
        <h6>Equipement de Protection Individuelle</h6>
        {ProductsItems.map((item, index) => {
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

export default DropdownProducts;
