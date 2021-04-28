import { useState } from "react";
const useApi = (apiFunc) => {
  const [data, setdata] = useState();
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(false);

  const request = async (...args) => {
    setloading(true);

    const response = await apiFunc(...args);
    setloading(false);
    seterror(!response.ok);
    setdata(response.data);

    return response;
  };

  return {
    data,
    error,
    loading,
    request,
  };
};
export default useApi;
