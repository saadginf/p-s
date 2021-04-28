import client from "./client";
const getProductsType = () => client.get("/productstype");
const getProductsByType = (id) => client.get("/productstype/" + id);
const getProduct = (id) => client.get("/products/" + id);
export default {
  getProductsType,
  getProductsByType,
  getProduct,
};
