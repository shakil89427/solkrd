import { Suspense } from "react";
import DotLoader from "react-spinners/DotLoader";

const LazyLoading = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className="fixed inset-0 flex items-center justify-center bg-white">
          <DotLoader size={30} color="#0D82FF" />
        </div>
      }
    >
      {children}
    </Suspense>
  );
};
export default LazyLoading;
