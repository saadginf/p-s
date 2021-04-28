import client from "./client";

const getServicesType = () => client.get("/servicescategorie");
const getServiceType = (id) => client.get("/servicescategorie/" + id);
const getService = (id) => client.get("/services/" + id);
export default {
  getServicesType,
  getServiceType,
  getService,
};
