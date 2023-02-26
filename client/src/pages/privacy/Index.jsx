import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Header />
      <div className="container mb-24 mt-10 lg:mt-16 xl:mt-20">
        <div className="max-w-[1000px] mx-auto">
          <p className="text-mediumblue font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center">
            PRIVACY POLICY
          </p>
          <p className="text-center font-bold text-gray-500 mt-1">Last updated February 26, 2023</p>
          <div style={{ lineHeight: "170%" }} className="mt-12 text-lg">
            <p>
              This privacy notice for Star SMPS Pvt Ltd (doing business as Solkrd) ("
              <span className="font-bold">Solkrd</span>," "<span className="font-bold">we</span>," "
              <span className="font-bold">us</span>," or "<span className="font-bold">our</span>"),
              describes how and why we might collect, store, use, and/or share ("
              <span className="font-bold">process</span>
              ") your information when you use our services ("
              <span className="font-bold">Services</span>"), such as when you:
            </p>
            <ul className="list-outside list-disc ml-5 my-10">
              <li>
                Visit our website at{" "}
                <Link to="/" className="text-mediumblue">
                  https://solkrd.com
                </Link>
                , or any website of ours that links to this privacy notice
              </li>
              <li className="my-2">
                Download and use our mobile application (Solkrd), or any other application of ours
                that links to this privacy notice
              </li>
              <li>
                Engage with us in other related ways, including any sales, marketing, or events
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Index;
