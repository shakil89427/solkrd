import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillAndroid,
  AiFillApple,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-400">
      <div className="container">
        <div className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-white font-medium flex flex-col items-center justify-start md:items-start">
              <p className="text-xl md:text-2xl font-semibold">Quick Links</p>
              <Link to="/contact" className="mt-3 cursor-pointer">
                Contact Us
              </Link>
              <Link to="/terms" className="mt-1 cursor-pointer">
                Terms and condition
              </Link>
              <Link to="/privacy" className="mt-1 cursor-pointer">
                Privacy Policy
              </Link>
            </div>
            <div className="text-white flex flex-col items-center justify-start">
              <p className="text-xl md:text-2xl font-semibold">Social Links</p>
              <div className="flex items-center gap-1 text-3xl mt-3">
                <a href="https://facebook.com/solkrd" target="_blank">
                  <AiFillFacebook />
                </a>
                <a href="https://twitter.com/solkrd" target="_blank">
                  <AiFillTwitterSquare />
                </a>
                <a href="https://instagram.com/solkrd" target="_blank">
                  <AiFillInstagram />
                </a>
                <a href="https://linkedin.com/solkrd" target="_blank">
                  <AiFillLinkedin />
                </a>
              </div>
            </div>
            <div className="flex items-start justify-center md:justify-end select-none">
              <div className="bg-white p-2 rounded">
                <div className="flex items-center justify-center bg-black text-white w-48 h-14 rounded gap-2 cursor-pointer">
                  <AiFillAndroid className="text-4xl" />
                  <div className="">
                    <p className="text-xs">Available on</p>
                    <p className="font-semibold text-lg leading-none">Google Play</p>
                  </div>
                </div>
                <div className="flex items-center justify-center bg-black text-white w-48 h-14 rounded gap-2 mt-2 cursor-pointer">
                  <AiFillApple className="text-4xl" />
                  <div className="">
                    <p className="text-xs">Download on the</p>
                    <p className="font-semibold text-lg leading-none">App Store</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
