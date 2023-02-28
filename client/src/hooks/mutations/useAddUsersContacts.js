import request from "../../helpers/request";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

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
      toast.success("Form submitted successfully");
    },
    onError: (e) => {
      toast.error("Form submit failed");
    },
  });
};
export default useAddUsersContacts;
