import React, { useState, useEffect } from "react";
import ProjectCard from "../Components/ProjectCard";

import "./Projet.css";
import ClipLoader from "react-spinners/ClipLoader";

import useApi from "../hooks/useApi";
import ProjectApi from "../api/projects";
const Projets = () => {
  const [projects, setProjects] = useState([]);
  const getAllProjects = useApi(ProjectApi.getAllProjects);
  const getProjects = async () => {
    const res = await getAllProjects.request();
    if (!res.ok) {
      console.log(res.data);
      return;
    }
    setProjects(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="projects-container">
      <div className="apropospart1">
        <div className="apropospart1wrapper">
          <h1>PROJETS</h1>
          <p>Ligne de vie MAROC › Projets</p>
        </div>
      </div>

      <div className="projects-page-container">
        {projects.length ? (
          projects.map((p, i) => {
            if (i < 3) {
              return (
                <ProjectCard
                  img={
                    "https://protected-mountain-22516.herokuapp.com/" +
                    p.images[0]
                  }
                  titre={p.name}
                  key={p._id}
                  link1={"/projects/" + p._id}
                  link2={"/projects/" + p._id}
                />
              );
            } else {
              return null;
            }
          })
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
      <div className="projects-page-container2">
        {projects.length
          ? projects.map((p, i) => {
              if (i >= 3) {
                return (
                  <ProjectCard
                    img={
                      "https://protected-mountain-22516.herokuapp.com/" +
                      p.images[0]
                    }
                    titre={p.name}
                    key={p._id}
                    link1={"/projects/" + p._id}
                    link2={"/projects/" + p._id}
                  />
                );
              } else {
                return null;
              }
            })
          : null}
      </div>
    </div>
  );
};

export default Projets;
