import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillRedditSquare,
  AiTwotoneMail,
  AiFillPhone,
  AiTwotoneUpSquare,
} from "react-icons/ai";
import { BsFillGeoAltFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-darkblue w-full">
      <div className="container">
        <div className="py-20 grid grid-cols-1 md:grid-cols-3 border-b border-mediumblue gap-y-14 md:gap-y-0 md:gap-x-5 lg:gap-x-10">
          {/* 1 */}
          <div className="flex items-start justify-center text-white">
            <div>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold max-w-[15ch] mx-auto text-center md:ml-0 md:text-left">
                We would love to hear from you.
              </p>
              <p className="max-w-[25ch] mt-5 mb-10 text-sm lg:text-base mx-auto text-center md:ml-0 md:text-left font-medium">
                Feel free to reach out if you want to collaborate with us, or simply have a call.
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-3xl">
                <a href="#" className="hover:scale-105 duration-150">
                  <AiFillFacebook />
                </a>
                <a href="#" className="hover:scale-105 duration-150">
                  <AiFillTwitterSquare />
                </a>
                <a href="#" className="hover:scale-105 duration-150">
                  <AiFillInstagram />
                </a>
                <a href="#" className="hover:scale-105 duration-150">
                  <AiFillLinkedin />
                </a>
                <a href="#" className="hover:scale-105 duration-150">
                  <AiFillRedditSquare />
                </a>
                <Link to="/contact" className="hover:scale-105 duration-150">
                  <AiTwotoneMail />
                </Link>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="flex flex-col items-center justify-start">
            <p className="text-lg md:text-xl font-bold text-white">Quick Links</p>
            <Link
              to="/disclaimer"
              className="mt-4 md:mt-7 font-semibold md:text-lg text-gray-300 hover:text-white duration-150"
            >
              Disclaimer
            </Link>

            <Link
              to="/privacypolicy"
              className="mt-3 font-semibold md:text-lg text-gray-300 hover:text-white duration-150"
            >
              Privacy Policy
            </Link>

            <Link
              to="/returnpolicy"
              className="mt-3 font-semibold md:text-lg text-gray-300 hover:text-white duration-150"
            >
              Return Policy
            </Link>

            <Link
              to="/shippingpolicy"
              className="mt-3 font-semibold md:text-lg text-gray-300 hover:text-white duration-150"
            >
              Shipping Policy
            </Link>

            <Link
              to="/terms"
              className="mt-3 font-semibold md:text-lg text-gray-300 hover:text-white duration-150"
            >
              Terms & Conditions
            </Link>
          </div>
          {/* 3 */}
          <div className="flex items-start justify-center">
            <div>
              <p className="text-lg md:text-xl font-bold text-white text-center md:text-left">
                Company
              </p>
              <div className="flex items-start gap-3 mt-4 md:mt-7 text-gray-300">
                <AiTwotoneMail className="text-xl mt-0.5 md:mt-1" />
                <div>
                  <p className="md:text-lg font-semibold text-white">Email</p>
                  <p className="text-sm md:text-base font-medium">contactsolkrd001@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mt-4 text-gray-300">
                <AiFillPhone className="text-xl mt-0.5 md:mt-1" />
                <div>
                  <p className="md:text-lg font-semibold text-white">Call us</p>
                  <p className="text-sm md:text-base font-medium">+91 80538 71854</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mt-4 text-gray-300">
                <BsFillGeoAltFill className="text-xl mt-0.5 md:mt-1" />
                <div className="">
                  <p className="md:text-lg font-semibold text-white">Location</p>
                  <p className="text-sm md:text-base font-medium">Sonipat, Haryana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 flex items-center justify-center text-center text-gray-300 text-sm md:text-base">
          <p>© 2023. All Rights Reserved By Star SMPS Pvt. Ltd.</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
