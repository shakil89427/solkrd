import HashLoader from "react-spinners/HashLoader";

const Loading = ({ size, color }) => {
  return <HashLoader size={size || 30} color={color || "#0D82FF"} />;
};
export default Loading;
