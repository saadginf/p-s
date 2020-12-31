import React from "react";
import "./Apropos.css";
import img1 from "../assets/whoweare.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Progress from "../Components/Progress";
const Apropos = () => {
  return (
    <div className="aproposContainer">
      <div className="apropospart1">
        <div className="apropospart1wrapper">
          <h1>A PROPOS</h1>
          <p>Ligne de vie MAROC › A PROPOS</p>
        </div>
      </div>

      <div className="apropospart2">
        <h1>
          {" "}
          <span className="nos-colored">QUI</span>{" "}
          <span className="nos-uncolored"> SOMMES NOUS?</span>
        </h1>
        <p>
          P&S solutions est une société marocaine à responsabilité limitée, qui
          est spécialisée dans le domaine de la sécurité et plus précisément le
          travail en hauteur.(lignes de vie,points d'ancrage,formation travail
          en hauteur au maroc,audit et conseil .....)
        </p>
      </div>

      <div class="apropospart3">
        <div>
          <img src={img1} alt="#" />
        </div>
        <div>
          <p>
            La Société P&S solutions S.A.R.L. est une Société mise sur pieds par
            des ingénieurs ayant exercé sur le marché Marocain dans les domaines
            de la construction , installation de ligne de vie , et les travaux
            de chaudronnerie.{" "}
          </p>
          <p>
            La diversité de notre expérience, la connaissance du marché, des
            besoins et des attentes du client prédispose la Société P&S
            solutions S.A.R.L. à contribuer à la satisfaction de ses clients en
            matière d’étude, de conception, de service et d’installation de
            ligne de vie en usant de l’expérience de ces propriétaires
            fondateurs.
          </p>
          <p>
            <ul>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCheck} /> Satisfaction client
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCheck} /> Qualité de service
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCheck} /> Respect des délais
              </li>
            </ul>
          </p>
          <p>
            Notre mission au sein de <span> P&S solutions</span>, c’est la
            satisfaction de nos clients en proposant des solutions dans le
            domaine de la sécurité qui répondent à leurs attentes, tout en
            gardant l’équilibre coût, qualité, délai.{" "}
          </p>
          <p>
            Ainsi que d’accompagner le client dans leurs projets durant toutes
            ses phases de l’étude jusqu’à la réalisation et l’installation et
            puis le service après-vente.
          </p>
        </div>
      </div>
      <div className="apropospart4">
        <div className="apropospart4side">
          <h2 id="apropospart4title">Nos Compétences</h2>
          <Progress
            title="Etude et installation des systèmes anti-chute"
            done="100"
          />
          <Progress title="Audit et conseil" done="100" />
          <Progress
            title="Etude et installation des systèmes d'étanchiété"
            done="100"
          />
          <Progress title="Maintenance des systèmes anti-chute" done="100" />
          <Progress
            title="Etude et installation des systèmes anti-chute"
            done="100"
          />
          <div className="client-priority">
            <p>
              Notre philosophie de travail est orienté client , la satisfaction
              client est notre ultime objectif
            </p>
          </div>
        </div>
      </div>
      <div className="part4">
        <div id="part4-txt-primary">
          <p>VOUS ETES EN RECHERCHE DES INSTALLATEURS ANTICHTE CERTIFIÉS</p>
        </div>
        <div id="part4-txt-secondry">
          <p>
            On vous fait l'étude de sécurité antichute{" "}
            <strong>GRATUITEMENT</strong> ,vous ne payez que l'installation
            faite par des installateurs <strong> certifiés </strong>.
          </p>
        </div>
        <div>
          <a id="part4-btn" href="/">
            OBTENIR UN DEVIS
          </a>
        </div>
      </div>
    </div>
  );
};

export default Apropos;
