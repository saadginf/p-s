import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";

import DetailDuProjet from "../Components/DetailDuProjet";
import Avancement from "../Components/Avancement";
import MoreProducts from "../Components/MoreProjects";
import projectsApi from "../api/projects";
import useApi from "../hooks/useApi";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const ProjetDetail = () => {
  let { id } = useParams();
  const [project, setproject] = useState();
  const getProject = useApi(projectsApi.getProjectById);
  const getProjectById = async () => {
    const res = await getProject.request(id);
    if (!res.ok) {
      console.log(res.data);
      return;
    }
    setproject(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    getProjectById();
  }, []);

  return (
    <div className="row project-container">
      {project ? (
        <>
          <div className="description-service-container col-lg-8 col-sm-12">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={
                    "https://protected-mountain-22516.herokuapp.com/" +
                    project.images[0]
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              {project.images[1] && (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={
                      "https://protected-mountain-22516.herokuapp.com/" +
                      project.images[1]
                    }
                    alt="Third slide"
                  />
                </Carousel.Item>
              )}
            </Carousel>
          </div>
          <div className="right-service-container project-container-right col-lg-4 col-sm-12">
            <DetailDuProjet name={project.name} />
            <Avancement />
            <MoreProducts />
          </div>{" "}
        </>
      ) : (
        <div
          className="spinner-container"
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ClipLoader size={150} color="#ffc107" />
        </div>
      )}
    </div>
  );
};

export default ProjetDetail;
