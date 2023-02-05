import request from "../../helpers/request";
import { useQuery } from "@tanstack/react-query";

const queryFn = () => {
  return request({ url: "/product" });
};

const useGetUser = () => {
  return useQuery({ queryKey: ["products"], queryFn });
};
export default useGetUser;
