import axios from "axios";

const client = axios.create({ baseURL: "http://localhost:5000/api" });

const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = localStorage.getItem("accessToken");
  const onSuccess = ({ data }) => data;
  const onError = (error) => {
    throw new Error(error?.response?.data?.message || "Something went wrong");
  };
  return client(options).then(onSuccess).catch(onError);
};

export default request;
