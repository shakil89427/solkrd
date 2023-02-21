import DotLoader from "react-spinners/DotLoader";

const LazyLoading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <DotLoader size={30} color="#0D82FF" />
    </div>
  );
};
export default LazyLoading;
