import React, { useState, useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import InnerImageZoom from "react-inner-image-zoom";
import img13 from "../assets/iris-1541524403.jpg";
import Avis from "../Components/Avis";
import FormAvis from "../Components/FormAvis";
import FormDevis from "../Components/FormDevis";
import useApi from "../hooks/useApi";
import ProductsApi from "../api/products";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setproduct] = useState();
  const getProduct = useApi(ProductsApi.getProduct);
  const getProductById = async () => {
    const res = await getProduct.request(id);
    if (!res.ok) {
      console.log(res.data.message);
      return;
    }
    setproduct(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    getProductById();
  }, []);
  return (
    <div className="product-detail-container">
      {product ? (
        <>
          {" "}
          <div className="product-detail-img">
            <InnerImageZoom
              src={
                "https://protected-mountain-22516.herokuapp.com/" +
                product.images[0]
              }
            />
          </div>
          <div className="product-detail-title">
            <h3>{product.name}</h3>
            <p>
              Catégorie: <strong>{product.type.name}</strong>
            </p>
          </div>
          <div className="clear-both"></div>
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Description">
              <p></p>
              <p>
                {" "}
                Veuillez nous adresser un message avec votre demande pour
                obtenir un devis
              </p>
              {product.description.map((a) => (
                <p>{a}</p>
              ))}
              <p></p>
              <FormDevis />
            </Tab>
            <Tab eventKey="profile" title="Avis">
              <p></p>
              {product.avis.length ? (
                product.avis.map((a) => (
                  <Avis
                    key={a._id}
                    rating={a.rating}
                    date={a.date}
                    content={a.content}
                    name={a.client}
                  />
                ))
              ) : (
                <>
                  <p>Il n’y a pas encore d’avis.</p>
                  <p>
                    Soyez le premier à laisser votre avis sur{" "}
                    <strong>{product.name}</strong>{" "}
                  </p>
                </>
              )}

              <p>
                Votre adresse de messagerie ne sera pas publiée. Les champs
                obligatoires sont indiqués avec *
              </p>
              <FormAvis />
            </Tab>
          </Tabs>{" "}
        </>
      ) : null}
    </div>
  );
};

export default ProductDetail;
