import DotLoader from "react-spinners/DotLoader";

const LazyLoading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/50">
      <DotLoader size={30} color="blue" />
    </div>
  );
};
export default LazyLoading;
