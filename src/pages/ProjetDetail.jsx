import React from "react";
import { Carousel } from "react-bootstrap";

import img1 from "../assets/carou-ligne-de-vie-750x420.jpg";
import img2 from "../assets/carou-ligne-de-vie-horizontale-11-750x420.jpg";
import DetailDuProjet from "../Components/DetailDuProjet";
import Avancement from "../Components/Avancement";
import MoreProducts from "../Components/MoreProjects";
const ProjetDetail = () => {
  return (
    <div className="row project-container">
      <div className="description-service-container col-lg-8 col-sm-12">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="right-service-container project-container-right col-lg-4 col-sm-12">
        <DetailDuProjet />
        <Avancement />
        <MoreProducts />
      </div>
    </div>
  );
};

export default ProjetDetail;
