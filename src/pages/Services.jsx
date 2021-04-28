import React, { useEffect, useState } from "react";
import ServicesCardP from "../Components/ServicesCardP";
import "./Services.css";
import useApi from "../hooks/useApi";
import ServiceApi from "../api/services";
import ClipLoader from "react-spinners/ClipLoader";
const Services = () => {
  const [services, setservices] = useState([]);
  const getServicesTypes = useApi(ServiceApi.getServicesType);
  const getServices = async () => {
    const res = await getServicesTypes.request();
    if (!res.ok) {
      console.log(res.data);
      return;
    }
    setservices(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    getServices();
  }, []);
  return (
    <div className="services-page-container">
      {services.length ? (
        services.map((service) => (
          <ServicesCardP
            key={service._id}
            linkTo={"/catservices/" + service._id}
            title={service.name}
            description={service.smallDesc}
            id={service._id}
            image={
              "https://protected-mountain-22516.herokuapp.com/" +
              service.images[0]
            }
          />
        ))
      ) : (
        <ClipLoader size={150} color="#ffc107" />
      )}
    </div>
  );
};

export default Services;
