import client from "./client";
const getAllProjects = () => client.get("/projects");
const getProjectById = (id) => client.get("/projects/" + id);
export default {
  getAllProjects,
  getProjectById,
};
