import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillAndroid,
  AiFillApple,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-400">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-white font-medium flex flex-col items-center justify-start md:items-start">
            <p className="text-xl md:text-2xl font-semibold">Quick Links</p>
            <p className="mt-3 cursor-pointer">Contact Us</p>
            <p className="mt-1 cursor-pointer">Terms and condition</p>
            <p className="mt-1 cursor-pointer">Privacy Policy</p>
          </div>
          <div className="text-white flex flex-col items-center justify-start">
            <p className="text-xl md:text-2xl font-semibold">Social Links</p>
            <div className="flex items-center gap-1 text-3xl mt-3">
              <AiFillFacebook />
              <AiFillTwitterSquare />
              <AiFillInstagram />
              <AiFillLinkedin />
            </div>
          </div>
          <div className="flex items-start justify-center md:justify-end select-none">
            <div className="bg-white p-2 rounded">
              <div className="flex items-center justify-center bg-black text-white w-48 h-14 rounded gap-2 cursor-pointer">
                <AiFillAndroid className="text-4xl" />
                <div className="">
                  <p className="text-xs">Available on the</p>
                  <p className="font-semibold text-lg leading-none">Google Play</p>
                </div>
              </div>
              <div className="flex items-center justify-center bg-black text-white w-48 h-14 rounded gap-2 mt-2 cursor-pointer">
                <AiFillApple className="text-4xl" />
                <div className="">
                  <p className="text-xs">Download on the</p>
                  <p className="font-semibold text-lg leading-none">Google Play</p>
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
