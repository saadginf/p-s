import React from "react";
import {
  CloseIcon,
  SideBarContainer,
  SidBarWrapper,
  SideBarLink,
} from "./SideBarElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const SideBarV1 = ({ isOpen, toogle }) => {
  return (
    <SideBarContainer isOpen={isOpen}>
      <CloseIcon>
        <FontAwesomeIcon
          icon={faTimes}
          size="sm"
          color="black"
          onClick={toogle}
        />
      </CloseIcon>

      <SidBarWrapper>
        <SideBarLink to="/">ACCEUIL</SideBarLink>
        <SideBarLink to="/">A PROPOS</SideBarLink>
        <SideBarLink to="/">SERVICES</SideBarLink>
        <SideBarLink to="/">PRODUITS</SideBarLink>
        <SideBarLink to="/">PROJETS</SideBarLink>
        <SideBarLink to="/">CONTACTEZ NOUS</SideBarLink>
        <SideBarLink to="/">BLOG</SideBarLink>
      </SidBarWrapper>
    </SideBarContainer>
  );
};

export default SideBarV1;
