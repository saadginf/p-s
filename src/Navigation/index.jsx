import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSortDown } from "@fortawesome/free-solid-svg-icons";
import {
  NavContainer,
  Navlinks,
  MobileIcon,
  NavA,
  NavItem,
  SideBar as SideIcon,
} from "./NavigationElements";
import SideBar from "../SideBar";
import RightBar from "../RightBar";
import Dropdown from "./Dropdown";
import DropdownProducts from "./DropdownProducts";
import ScrollToTop from "../Components/ScrollToTop";
const NavbarV2 = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollTop, setScrollTop] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 220) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    if (offset > 500) {
      setScrollTop(true);
    } else {
      setScrollTop(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const [isOpen, setisOpen] = useState(false);
  const [isOpenR, setisOpenR] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdownProducts, setDropdownProducts] = useState(false);
  const toogle = () => {
    setisOpen(!isOpen);
    console.log(isOpen);
  };

  const toogleR = () => {
    setisOpenR(!isOpenR);
  };
  const onMouseEnter = () => setDropdown(true);

  const onMouseLeave = () => setDropdown(false);
  const onMouseEnteP = () => setDropdownProducts(true);

  const onMouseLeaveP = () => setDropdownProducts(false);

  return (
    <>
      {scrollTop && <ScrollToTop />}
      <NavContainer scrolled={scrolled}>
        <RightBar isOpen={isOpenR} toogle={toogleR} />
        <SideBar isOpen={isOpen} toogle={toogle} />
        <MobileIcon onClick={toogle}>
          <FontAwesomeIcon icon={faBars} size="2x" color="black" />
        </MobileIcon>
        <Navlinks>
          <NavItem>
            <NavA to="/">ACCUEIL</NavA>
          </NavItem>{" "}
          <NavItem>
            <NavA>A PROPOS</NavA>
          </NavItem>
          <NavItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <NavA>
              SERVICES{" "}
              <FontAwesomeIcon icon={faSortDown} size="lg" id="sort-icon" />
            </NavA>
            {dropdown && <Dropdown />}
          </NavItem>
          <NavItem onMouseEnter={onMouseEnteP} onMouseLeave={onMouseLeaveP}>
            <NavA>
              PRODUITS
              <FontAwesomeIcon icon={faSortDown} size="lg" id="sort-icon" />
            </NavA>
            {dropdownProducts && <DropdownProducts />}
          </NavItem>
          <NavItem>
            {" "}
            <NavA>PROJETS</NavA>
          </NavItem>
          <NavItem>
            {" "}
            <NavA>CONTACTEZ NOUS</NavA>
          </NavItem>
          <NavItem>
            {" "}
            <NavA>BLOG</NavA>
          </NavItem>
        </Navlinks>
        <SideIcon>
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            color="black"
            onClick={toogleR}
          />
        </SideIcon>
      </NavContainer>
    </>
  );
};

export default NavbarV2;
