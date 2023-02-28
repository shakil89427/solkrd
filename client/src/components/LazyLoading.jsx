import { Suspense } from "react";
import HashLoader from "react-spinners/HashLoader";

const LazyLoading = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className="fixed inset-0 flex items-center justify-center bg-white">
          <HashLoader size={40} color="#0D82FF" />
        </div>
      }
    >
      {children}
    </Suspense>
  );
};
export default LazyLoading;
