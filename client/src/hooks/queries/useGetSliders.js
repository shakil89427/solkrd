import request from "../../helpers/request";
import { useQuery } from "@tanstack/react-query";

const queryFn = () => {
  return request({ url: "/slider" });
};

const useGetUser = () => {
  return useQuery({ queryKey: ["slider"], queryFn });
};
export default useGetUser;
