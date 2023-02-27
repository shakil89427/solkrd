import Header from "../../components/Header";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <div className="fixed inset-x-0 z-10">
        <Header />
      </div>
      <div className="fixed inset-0 flex flex-col items-center justify-center px-2">
        <p className="text-mediumblue font-extrabold text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center">
          Sorry page not found !
        </p>
        <Link
          to="/"
          replace={true}
          className="bg-mediumblue w-44 py-2 mt-6 text-center text-lg text-white font-bold rounded"
        >
          Back To Home
        </Link>
      </div>
    </>
  );
};
export default Index;
