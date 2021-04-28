import React, { useState, useEffect } from "react";
import FormDevis from "./FormDevis";
import PoductCard from "./PoductCard";
import "./SserviceDesc.css";
import img13 from "../assets/hestia-1541522538-300x225.jpg";
import img14 from "../assets/rope-brake-1541784296.jpg";
import img15 from "../assets/rope-4-red-1541613358-600x450.jpg";
import img16 from "../assets/kitsdebaseplateforme-300x225.png";
import img17 from "../assets/Casque3-300x225.png";
import img18 from "../assets/positionnement-600x450.jpg";
import img19 from "../assets/temporary-1542103611-600x450.jpg";
import img20 from "../assets/crane-1542216922-600x450.jpg";
import { useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import ServiceApi from "../api/services";
import ClipLoader from "react-spinners/ClipLoader";
const SserviceDesc = () => {
  let { id } = useParams();
  const [service, setservice] = useState();
  const getServiceType = useApi(ServiceApi.getService);
  const getService = async () => {
    const res = await getServiceType.request(id);
    if (!res.ok) {
      console.log(res.data.message);
      return;
    }
    setservice(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    getService();
  }, []);
  return (
    <div>
      {service ? (
        <>
          <div className="apropospart1">
            <div className="apropospart1wrapper">
              <h1>{service.name}</h1>
              <p>Ligne de vie MAROC › {service.name}</p>
            </div>
          </div>

          <div className="description-sservice">
            <h2>{service.desc1 ? service.desc1 : ""}</h2>
            <h4>{service.desc2 ? service.desc2 : ""}</h4>
          </div>
          <div className="images-sservice">
            {service.images.map((s) => (
              <img
                src={"https://protected-mountain-22516.herokuapp.com/" + s}
                alt="image"
              />
            ))}
          </div>
          <div className="sservice-cara-devis">
            <div className="sservice-cara">
              <h2>Caractéristique</h2>
              <ul>
                {service.caracteristiques.map((c) => (
                  <li>{c}</li>
                ))}
              </ul>
            </div>
            <div className="sservice-devis">
              <FormDevis />
            </div>
            <div className="sservice-compostion">
              <h2>Composition du produit Ligne de vie sur Béton</h2>
              <div className="img-sservice">
                <img
                  src={
                    "https://protected-mountain-22516.herokuapp.com/" +
                    service.accessoires
                  }
                  alt="composition"
                />
              </div>
            </div>

            <div className="sservice-accessoires">
              <h2>Accessoires liés</h2>
              <div className="part7">
                <PoductCard link="/" img={img13} title="BIA" />
                <PoductCard
                  link="/"
                  img={img14}
                  title="DESCENDEUR ANTI-PANIQUE"
                />
                <PoductCard link="/" img={img15} title="CORDE STATIQUE" />
                <PoductCard link="/" img={img16} title="KIT SEMI-PRO" />
                <PoductCard link="/" img={img17} title="CASQUE DE SÉCURITÉ" />
                <PoductCard
                  link="/"
                  img={img18}
                  title="DISPOSITIF POSTIONNEMENT"
                />
                <PoductCard
                  link="/"
                  img={img19}
                  title="LIGNE DE VIE TEMPORAIRE"
                />
                <PoductCard link="/" img={img20} title="GRUE DE LEVAGE" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="spinner-container">
          <ClipLoader size={150} color="#ffc107" />
        </div>
      )}
    </div>
  );
};

export default SserviceDesc;
