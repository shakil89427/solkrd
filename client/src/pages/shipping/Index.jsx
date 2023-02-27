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
            SHIPPING POLICY
          </p>
          <p className="text-center font-bold text-gray-500 mt-1">Last updated February 26, 2023</p>
          <div style={{ lineHeight: "170%" }} className="mt-12 text-lg text-black/80">
            <p>
              This Shipping & Delivery Policy is part of our Terms and Conditions ("Terms") and
              should be therefore read alongside our main Terms:{" "}
              <Link to="/terms" className="text-mediumblue break-words">
                {window.location.origin}/terms
              </Link>
              .
            </p>
            <p className="mt-5">
              Please carefully review our Shipping & Delivery Policy when purchasing our products.
              This policy will apply to any order you place with us.
            </p>
            <p className="font-bold mt-8 text-gray-500">WHAT ARE MY SHIPPING & DELIVERY OPTIONS?</p>
            <p className="mt-5">
              We offer various shipping options. In some cases a third-party supplier may be
              managing our inventory and will be responsible for shipping your products.
            </p>
            <p className="font-bold mt-8 text-gray-500">FREE SHIPPING?</p>
            <p className="mt-5">We offer free shipping on all orders.</p>
            <p className="font-bold mt-8 text-gray-500">DO YOU DELIVER INTERNATIONALLY?</p>
            <p className="mt-5">We do not offer international shipping.</p>
            <p className="font-bold mt-8 text-gray-500">WHAT HAPPENS IF MY ORDER IS DELAYED?</p>
            <p className="mt-5">
              If delivery is delayed for any reason we will let you know as soon as possible and
              will advise you of a revised estimated date for delivery.
            </p>
            <p className="font-bold mt-8 text-gray-500">QUESTIONS ABOUT RETURNS?</p>
            <p className="mt-5">
              If you have questions about returns, please review our Return Policy:
            </p>
            <Link to="/returnpolicy" className="text-mediumblue break-words">
              {window.location.origin}/returnpolicy
            </Link>
            <p className="font-bold mt-8 text-gray-500">
              HOW CAN YOU CONTACT US ABOUT THIS POLICY?
            </p>
            <p className="mt-5">
              If you have any further questions or comments, you may contact us by:
            </p>
            <li className="mt-5">
              Email:{" "}
              <a
                href="mailto:contactsolkrd001@gmail.com"
                target="_blank"
                className="text-mediumblue break-words"
              >
                contactsolkrd001@gmail.com
              </a>
            </li>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Index;
