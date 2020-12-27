import React from "react";
import img1 from "../assets/img1.jpg";
import ServiceCard from "../Components/ServiceCard";
import "./HomePage.css";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/verticale-1-370x400.jpg";
import img4 from "../assets/pointancrage-370x400.jpg";
import img5 from "../assets/GARDEDECORPS-370x400.png";
import img6 from "../assets/training-3185170_640-370x400.jpg";
import img7 from "../assets/audit-4189560_640-370x400.jpg";
import img8 from "../assets/who-we-are.jpg";
import img9 from "../assets/ligne-de-vie-485x335.jpg";
import img10 from "../assets/ligne-de-vie-sur-r-485x335.jpg";
import img11 from "../assets/ligne-de-vie-verticale2-485x335.jpg";
import img12 from "../assets/ligne-de-vie3-485x335.png";

import img13 from "../assets/hestia-1541522538-300x225.jpg";
import ProjectCard from "../Components/ProjectCard";
import PoductCard from "../Components/PoductCard";
const HomePage = () => {
  return (
    <>
      <div className="part1">
        <div className="part1p">
          P&S solutions votre choix pour travailler en toute sécurité
        </div>
        <div className="part1img">
          <img src={img1} alt="#" width="100%" />
        </div>
      </div>
      <div class="part2">
        <h1>
          {" "}
          <span className="nos-colored"> NOS</span>{" "}
          <span className="nos-uncolored"> SERVICES</span>
        </h1>
        <p>
          Chez P&S solutions on vous offre une multitude de services dans le
          domaine de sécurité ANTICHUTE
        </p>
        <div className="sevices-cards">
          <ServiceCard
            title="Ligne de vie horizontale"
            desc="Ligne de vie horizontale au MAROC Etude et installation de la ligne de vie horizontale au MAROC chez P&S "
            href="/"
            background={img2}
          />
          <ServiceCard
            title="Ligne de vie verticale"
            desc="Etude et installation des lignes de vie verticale  au MAROC chez P&S  solutions. La ligne de vie verticale est "
            href="/"
            background={img3}
          />
          <ServiceCard
            title="Point d'ancrage"
            desc="Etude et installation point d’ancrage  au MAROC chez P&S  solutions. Le point d’ancrage permet la mise en sécurité des"
            href="/"
            background={img4}
          />
          <ServiceCard
            title="Protection collective"
            desc="Etude et installation des structures de protection collective au MAROC chez P&S  solutions. La protection collective est une installation"
            href="/"
            background={img5}
          />
          <ServiceCard
            title="Formation travail en hauteur"
            desc="La formation travail en hauteur de P&S solutions est assurée pour toute personne appelée à réaliser des travaux en"
            href="/"
            background={img6}
          />
          <ServiceCard
            title="Audit et conseil"
            desc="Audit et conseil travaux en hauteur au MAROC chez P&S solutions. Afin de satisfaire les exigences de nos clients"
            href="/"
            background={img7}
          />
        </div>
        <div className="plus-svc-btn">
          <a className="plus-svc-btn-a" href="/">
            PLUS DE SERVICE
          </a>
        </div>
      </div>
      <div className="part3">
        <div className="part3-txt">
          <h1>A PROPOS</h1>
          <p>
            P&S solutions est une société spécialisée dans le domaine de la
            sécurité et plus précisément le domaine ANTI-CHUTE.
          </p>
          <p>
            {" "}
            P&S solutions est crée par des ingénieurs dynamiques ayant exercé
            sur le marché Marocain dans les domaines de la construction ,
            installations antichute et les travaux de chaudronnerie.
          </p>
          <p>
            La diversité de notre expérience et la connaissance du marché nous
            permet d'offrir à nos clients une qualité de service unique dans le
            marché marocain en matière d’étude, conception, service et
            d’installation du matériel anti-chute .
          </p>
        </div>
        <div className="part3-img">
          <img src={img8} alt="who-we-are" />
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
      <div className="part5 part3">
        <h1>
          {" "}
          <span className="nos-colored"> NOS</span>{" "}
          <span className="nos-uncolored"> REALISATIONS</span>
        </h1>
      </div>
      {
        //  <div style={{ textAlign: "center", padding: "70px" }}>
        // <a
        // style={{ textAlign: "center", padding: "70px" }}
        //id="demo"
        //href="https://code-fx.github.io/Pure-CSS3-Animated-Border/"
        //class="ui-box border-inOutSpread"
        //>
        // <span class="ui-border-element">Animated Hyperlink</span>
        //</a>
        //</div>
      }
      <div className="part5">
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
      <div className="part5">
        <ProjectCard
          img={img12}
          link1="/"
          link2="/"
          titre="Ligne de vie horizontale sur bois"
        />
        <ProjectCard img={img9} link1="/" link2="/" titre="Point d’ancrage" />
        <ProjectCard img={img9} link1="/" link2="/" titre="Garde de corps" />
      </div>
      <div className="part6">
        <a id="part6a" href="/">
          Produits
        </a>
      </div>
      <div className="part7">
        <PoductCard link="/" img={img13} title="BIA" />
        <PoductCard link="/" img={img13} title="BIA" />
        <PoductCard link="/" img={img13} title="BIA" />
        <PoductCard link="/" img={img13} title="BIA" />
        <PoductCard link="/" img={img13} title="BIA" />

        <PoductCard link="/" img={img13} title="BIA" />
        <PoductCard link="/" img={img13} title="BIA" />

        <PoductCard link="/" img={img13} title="BIA" />
      </div>
      <div className="part8">
        <div className="part8-title">
          <h3>Abonnez-vous à notre NewsLetter</h3>
          <p>Abonnez vous maintenant et recevez les dernières nouveautés !</p>
        </div>
        <div className="part8-form">
          <form>
            <input
              className="form-control"
              id="email-input"
              type="email"
              placeholder="Entrer Votre Email"
            />

            <button className="btn btn-dark" id="submit-input" type="submit">
              S'abonner
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default HomePage;
