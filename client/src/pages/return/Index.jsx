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
            RETURN POLICY
          </p>
          <p className="text-center font-bold text-gray-500 mt-1">Last updated February 26, 2023</p>
          <div style={{ lineHeight: "170%" }} className="mt-12 text-lg text-black/80">
            <p className="text-lg font-extrabold">REFUNDS</p>
            <p className="my-8">All sales are final and no refund will be issued.</p>
            <p className="text-lg font-extrabold">QUESTIONS</p>
            <p className="mt-8">
              If you have any questions concerning our return policy, please contact us at:
            </p>
            <p className="mt-5">
              <a
                href="mailto:contactsolkrd001@gmail.com"
                target="_blank"
                className="break-words text-mediumblue"
              >
                contactsolkrd001@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Index;
