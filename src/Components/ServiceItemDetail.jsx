import React, { useEffect, useState } from "react";
import FormDevis from "./FormDevis";
import MoreServices from "./MoreServices";
import "./ServiceItemDetail.css";
import SousServiceItem from "./SousServiceItem";
import { useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import ServiceApi from "../api/services";
import ClipLoader from "react-spinners/ClipLoader";
const ServiceItemDetail = () => {
  let { id } = useParams();
  const [service, setservice] = useState();
  const getServiceType = useApi(ServiceApi.getServiceType);
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
    <div className="service-detail-container">
      {service ? (
        <>
          <div className="image-service-item">
            <img
              src={
                "https://protected-mountain-22516.herokuapp.com/" +
                service.images[0]
              }
              alt={service.title}
            />
          </div>
          <div className="row">
            <div className="description-service-container col-lg-8 col-sm-12">
              <h2>{service.title}</h2>
              {service.largeDesc.map((p, index) => (
                <p key={index}>{p}</p>
              ))}

              {service.assistance.length ? (
                <>
                  <h3>Assistance et Consultation</h3>
                  {service.assistance.map((p, index) => (
                    <p key={index}>{p}</p>
                  ))}
                </>
              ) : null}
              {service.services.length ? (
                <div className="sous-services-container">
                  {service.services.map((p, index) => (
                    <SousServiceItem key={index} ss={p} />
                  ))}
                </div>
              ) : null}
            </div>
            <div className="right-service-container col-lg-4 col-sm-12">
              <FormDevis />
              <MoreServices />
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
// col-lg-8 col-sm-12
export default ServiceItemDetail;
