import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Header />
      <div className="container px-5 mb-24 mt-10 lg:mt-16 xl:mt-20">
        <div className="max-w-[1000px] mx-auto">
          <p className="text-mediumblue font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center">
            TERMS AND CONDITIONS
          </p>
          <p className="text-center font-bold text-gray-500 mt-1">Last updated February 26, 2023</p>
          <div style={{ lineHeight: "170%" }} className="mt-12 text-lg text-black/80">
            <p className="text-center text-2xl my-40 font-semibold">Will update soon...</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Index;
