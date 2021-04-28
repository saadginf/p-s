import React from "react";
import {
  ProjectsWrapper,
  ProjectsItem,
  ProjectImage,
} from "../RightBar/RightBarElements";
import img1 from "../assets/img2.jpg";
const MoreProducts = () => {
  return (
    <div className="form-devis-container">
      <h2>Plus de Products</h2>
      <div className="separateur">
        <div className="inner-separateur"></div>
      </div>
      <ProjectsWrapper>
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
            src={img1}
            alt="ligne-de-vie-300x225"
            width="105px"
            height="90px"
          />
        </ProjectsItem>

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
            src={img1}
            alt="ligne-de-vie-300x225"
            width="105px"
            height="90px"
          />
        </ProjectsItem>
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
            src={img1}
            alt="ligne-de-vie-300x225"
            width="105px"
            height="90px"
          />
        </ProjectsItem>
      </ProjectsWrapper>
    </div>
  );
};

export default MoreProducts;
