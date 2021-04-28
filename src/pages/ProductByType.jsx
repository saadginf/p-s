import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import img13 from "../assets/hestia-1541522538-300x225.jpg";
import PoductCard from "../Components/PoductCard";
import useApi from "../hooks/useApi";
import productsApi from "../api/products";
import ClipLoader from "react-spinners/ClipLoader";
import "./ProductByType.css";
const ProductByType = () => {
  let { id } = useParams();
  const [products, setproducts] = useState([]);
  const getProducts = useApi(productsApi.getProductsByType);
  const getPs = async () => {
    const res = await getProducts.request(id);
    if (!res.ok) {
      console.log(res.data.message);
      return;
    }
    setproducts(res.data.products);
    console.log(res.data);
  };
  useEffect(() => {
    getPs();
  }, []);
  return (
    <div className="products-by-type">
      <p>{products.length} résultats affichés</p>
      <div className="products-by-type-container">
        {products.length ? (
          products.map((p) => (
            <PoductCard
              key={p._id}
              link={"/detailProduct/" + p._id}
              img={
                "https://protected-mountain-22516.herokuapp.com/" + p.images[0]
              }
              title={p.name}
            />
          ))
        ) : (
          <div className="spinner-container">
            <ClipLoader size={150} color="#ffc107" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductByType;
