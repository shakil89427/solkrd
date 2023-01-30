import { useQuery } from "@tanstack/react-query";
import { doc, getDoc } from "firebase/firestore";
import useFirebase from "../stores/useFirebase";

const queryFn = async ({ queryKey }) => {
  const database = useFirebase.getState().database;
  const result = await getDoc(doc(database, "users", queryKey[1]));
  const data = result.data();
  if (!data) throw new Error("User not found");
  return data;
};

const useGetUser = (userId) => {
  return useQuery({ queryKey: ["user", userId], queryFn });
};
export default useGetUser;
