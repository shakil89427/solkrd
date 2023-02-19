import request from "../../helpers/request";
import { useMutation } from "@tanstack/react-query";

const mutationFn = (data) => {
  return request({ url: "/user/userscontacts", method: "POST", data });
};

const useAddUsersContacts = (setShowContact, setName, setEmail, setPhone, setMessage) => {
  return useMutation({
    mutationFn,
    onSuccess: () => {
      setShowContact(false);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    },
  });
};
export default useAddUsersContacts;
