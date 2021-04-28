import React from "react";
import ProjectCard from "../Components/ProjectCard";
import img9 from "../assets/ligne-de-vie-485x335.jpg";
import img10 from "../assets/ligne-de-vie-sur-r-485x335.jpg";
import img11 from "../assets/ligne-de-vie-verticale2-485x335.jpg";
import img12 from "../assets/ligne-de-vie3-485x335.png";
import "./Projet.css";
const Projets = () => {
  return (
    <div className="projects-container">
      <div className="apropospart1">
        <div className="apropospart1wrapper">
          <h1>PROJETS</h1>
          <p>Ligne de vie MAROC › Projets</p>
        </div>
      </div>

      <div className="projects-page-container">
        <ProjectCard
          img={img9}
          link1="/"
          link2="/"
          titre="Ligne de vie horizontale"
        />
        <ProjectCard
          img={img10}
          link1="/"
          link2="/"
          titre="Ligne de vie horizontale sur acier"
        />
        <ProjectCard
          img={img11}
          link1="/"
          link2="/"
          titre="Ligne de vie verticale"
        />
      </div>
      <div className="projects-page-container2">
        <ProjectCard
          img={img12}
          link1="/"
          link2="/"
          titre="Ligne de vie horizontale sur bois"
        />
        <ProjectCard img={img9} link1="/" link2="/" titre="Point d’ancrage" />
        <ProjectCard img={img9} link1="/" link2="/" titre="Garde de corps" />
      </div>
    </div>
  );
};

export default Projets;
