import axios from "axios";

const client = axios.create({ baseURL: `${window.location.origin}/api` });
console.log(window.location);

const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = localStorage.getItem("accessToken");
  const onSuccess = ({ data }) => data;
  const onError = (error) => {
    throw new Error(error?.response?.data?.message || "Something went wrong");
  };
  return client(options).then(onSuccess).catch(onError);
};

export default request;
