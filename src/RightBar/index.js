import React from "react";
import {
  RightBarContainer,
  CloseIcon,
  ProjectsWrapper,
  ProjectsItem,
  ProjectImage,
  ContactItem,
  TextInfo,
  ContactWrapper,
} from "./RightBarElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faLocationArrow,
  faPhoneAlt,
  faFax,
  faClock,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import img1 from "../assets/ligne-de-vie-300x225.jpg";
import img2 from "../assets/ligne-de-vie-sur-r-300x225.jpg";
import img3 from "../assets/ligne-de-vie-verticale2-300x225.jpg";
import img4 from "../assets/ligne-de-vie3-300x225.png";
import img5 from "../assets/protection-collective-500x375.jpg";
import img6 from "../assets/point-ancrage-300x225.jpg";
const RightBar = ({ isOpen, toogle }) => {
  return (
    <RightBarContainer isOpen={isOpen}>
      <CloseIcon onClick={toogle}>
        <FontAwesomeIcon icon={faTimes} size="sm" color="white" />
      </CloseIcon>
      <ProjectsWrapper>
        <h5>PROJETS</h5>
        <ProjectsItem to="/">
          <ProjectImage
            src={img1}
            alt="ligne-de-vie-300x225"
            width="105px"
            height="90px"
          />
        </ProjectsItem>
        <ProjectsItem to="/">
          <ProjectImage
            src={img2}
            alt="ligne-de-vie-sur-r-300x225"
            width="105px"
            height="90px"
          />
        </ProjectsItem>
        <ProjectsItem to="/">
          <ProjectImage
            src={img3}
            alt="ligne-de-vie-verticale2-300x225"
            width="105px"
            height="90px"
          />
        </ProjectsItem>
        <ProjectsItem to="/">
          <ProjectImage
            src={img4}
            alt="ligne-de-vie-300x225"
            width="105px"
            height="90px"
          />
        </ProjectsItem>
        <ProjectsItem to="/">
          <ProjectImage
            src={img5}
            alt="ligne-de-vie-300x225"
            width="105px"
            height="90px"
          />
        </ProjectsItem>
        <ProjectsItem to="/">
          <ProjectImage
            src={img6}
            alt="ligne-de-vie-300x225"
            width="105px"
            height="90px"
          />
        </ProjectsItem>
      </ProjectsWrapper>
      <ContactWrapper>
        <h5>CONTACTEZ-NOUS</h5>
        <ContactItem>
          <FontAwesomeIcon icon={faLocationArrow} size="sm" color="white" />
          <TextInfo>Sidi Maarouf CASABLANCA</TextInfo>
        </ContactItem>
        <ContactItem>
          <FontAwesomeIcon icon={faPhoneAlt} size="sm" color="white" />
          <TextInfo>+212698784574</TextInfo>
        </ContactItem>
        <ContactItem>
          <FontAwesomeIcon icon={faFax} size="sm" color="white" />
          <TextInfo>+212666196109</TextInfo>
        </ContactItem>
        <ContactItem>
          <FontAwesomeIcon icon={faEnvelope} size="sm" color="white" />
          <TextInfo>contact@pssolutions.ma</TextInfo>
        </ContactItem>
        <ContactItem>
          <FontAwesomeIcon icon={faClock} size="sm" color="white" />
          <TextInfo>Lundi–Samedi: 8am – 6pm</TextInfo>
        </ContactItem>
        <ContactItem>
          <FontAwesomeIcon icon={faClock} size="sm" color="white" />
          <TextInfo>Dimanche: Fermé</TextInfo>
        </ContactItem>
      </ContactWrapper>
    </RightBarContainer>
  );
};

export default RightBar;
