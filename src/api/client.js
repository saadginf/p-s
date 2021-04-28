import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://protected-mountain-22516.herokuapp.com/psapi",
});

export default apiClient;
