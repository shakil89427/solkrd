import request from "../../helpers/request";
import { useQuery } from "@tanstack/react-query";

const queryFn = () => {
  return request({ url: "/banner" });
};

const useGetBanners = () => {
  return useQuery({ queryKey: ["slider"], queryFn });
};
export default useGetBanners;
