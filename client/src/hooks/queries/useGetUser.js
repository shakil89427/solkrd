import request from "../../helpers/request";
import { useQuery } from "@tanstack/react-query";

const queryFn = ({ queryKey }) => {
  return request({ url: "/user", params: { userId: queryKey[1] } });
};

const useGetUser = (userId) => {
  return useQuery({ queryKey: ["user", userId], queryFn });
};
export default useGetUser;
