import React, { useEffect, useState } from "react";
import ServicesCardP from "../Components/ServicesCardP";
import "./Services.css";
import useApi from "../hooks/useApi";
import productsApi from "../api/products";
import ClipLoader from "react-spinners/ClipLoader";
const Product = () => {
  const [productstype, setProductstype] = useState([]);
  const getProductsTypes = useApi(productsApi.getProductsType);
  const getPtype = async () => {
    const res = await getProductsTypes.request();
    if (!res.ok) {
      console.log(res.data.message);
      return;
    }
    setProductstype(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    getPtype();
  }, []);

  return (
    <div className="services-page-container">
      {productstype.length ? (
        productstype.map((p) => (
          <ServicesCardP
            key={p._id}
            linkTo={"/product/" + p._id}
            isProduct
            title={p.name}
            image={
              "https://protected-mountain-22516.herokuapp.com/" + p.images[0]
            }
          />
        ))
      ) : (
        <div className="spinner-container">
          <ClipLoader size={150} color="#ffc107" />
        </div>
      )}
    </div>
  );
};

export default Product;
