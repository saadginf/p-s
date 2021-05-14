import React from "react";
import img1 from "../assets/img1.jpg";
import ServiceCard from "../Components/ServiceCard";
import "./HomePage.css";
import img8 from "../assets/who-we-are.jpg";
import ProjectCard from "../Components/ProjectCard";
import PoductCard from "../Components/PoductCard";
import { MenuItems, projects, HomeProducts } from "../data";
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
          {MenuItems.map((s, i) => (
            <ServiceCard
              key={i}
              title={s.title}
              desc={s.desc}
              href={s.path}
              background={s.img}
            />
          ))}
        </div>
        <div className="plus-svc-btn">
          <a className="plus-svc-btn-a" href="/services">
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
          <a id="part4-btn" href="/contactus">
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
        {projects.map((p, i) => {
          if (i < 3) {
            return (
              <ProjectCard
                img={p.img}
                titre={p.title}
                key={i}
                link1={p.link}
                link2={p.link}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="part5">
        {projects.map((p, i) => {
          if (i >= 3) {
            return (
              <ProjectCard
                img={p.img}
                titre={p.title}
                key={i}
                link1={p.link}
                link2={p.link}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="part6">
        <a id="part6a" href="/">
          Produits
        </a>
      </div>
      <div className="part7">
        {HomeProducts.map((pr, i) => (
          <PoductCard key={i} link={pr.link} img={pr.img} title={pr.title} />
        ))}
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
