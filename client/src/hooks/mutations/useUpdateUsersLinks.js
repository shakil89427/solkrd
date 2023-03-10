import request from "../../helpers/request";
import { useMutation } from "@tanstack/react-query";

const mutationFn = (data) => {
  return request({ url: "/user/userslinks", method: "PATCH", data });
};

const useUpdateUsersLinks = () => {
  return useMutation({ mutationFn });
};
export default useUpdateUsersLinks;
