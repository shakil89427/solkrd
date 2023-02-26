import Header from "../../components/Header";
import Footer from "../../components/Footer";
import logocir from "../../assets/images/logocir.png";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import { BsDownload, BsPeople } from "react-icons/bs";
import { MdNfc } from "react-icons/md";
import demobg from "../../assets/images/demobg.jpeg";

const Index = () => {
  return (
    <>
      <Header />
      <div className="container mb-24 mt-10 lg:mt-16 xl:mt-20">
        <p className="text-mediumblue font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center">
          SolKrd Digital
        </p>
        <p className="mt-2 text-center font-semibold text-black/80">
          Say goodbye to running out of paper business cards! With your personalized and fully
          customizable virtual Solkrd profile, you'll always be ready to share your information.
          Simply tap your Solkrd card to the back of any smartphone and voila, your profile is
          instantly shared - even with those who don't have the app.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 my-16 sm:my-20 md:my-24 lg:my-28 gap-5 lg:gap-10 xl:gap-20 2xl:gap-28">
          {/* Android */}
          <div className="bg-mediumblue rounded-xl flex flex-col lg:flex-row items-center justify-center gap-5 py-10 lg:py-20 px-5">
            <img src={logocir} alt="" className="w-20 border-2 border-white rounded-full" />
            <a
              href="#"
              className="bg-white rounded-md flex items-center h-16 w-full max-w-[220px] p-3"
            >
              <AiFillAndroid className="text-5xl mr-2" />
              <div>
                <p className="text-sm">Download on the</p>
                <p className="text-xl font-bold text-black/80 leading-none">Google Play</p>
              </div>
            </a>
          </div>
          {/* Ios */}
          <div className="bg-mediumblue rounded-xl flex flex-col lg:flex-row items-center justify-center gap-5 py-10 lg:py-20 px-5">
            <img src={logocir} alt="" className="w-20 border-2 border-white rounded-full" />
            <a
              href="#"
              className="bg-white rounded-md flex items-center h-16 w-full max-w-[220px] p-3"
            >
              <AiFillApple className="text-5xl mr-2" />
              <div>
                <p className="text-sm">Available on the</p>
                <p className="text-xl font-bold text-black/80 leading-none">App Store</p>
              </div>
            </a>
          </div>
        </div>
        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 xl:gap-14 w-full lg:max-w-[90%] lg:mx-auto">
          <div className="flex items-center">
            <div>
              <p
                style={{ lineHeight: "150%" }}
                className="text-mediumblue font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl max-w-[25ch] mx-auto text-center md:ml-0 md:text-left"
              >
                Create and share your digital business card
              </p>
              {/* Download */}
              <div className="flex items-start gap-5 lg:gap-8 xl:gap-12 mt-5 lg:mt-8 xl:mt-12">
                <BsDownload className="text-xl sm:text-2xl lg:text-3xl shrink-0" />
                <div>
                  <p className="text-lg sm:text-xl lg:text-2xl font-extrabold text-black/80">
                    Download
                  </p>
                  <p
                    style={{ lineHeight: "170%" }}
                    className="mt-3 lg:mt-4 xl:mt-6 text-sm font-bold text-gray-600"
                  >
                    Download the free Solkrd app on the App Store or Google Play and set up your
                    personal profile by adding your links and contact details.
                  </p>
                </div>
              </div>
              {/* Active */}
              <div className="flex items-start gap-5 lg:gap-8 xl:gap-12 mt-5 lg:mt-8 xl:mt-12">
                <MdNfc className="text-xl sm:text-2xl lg:text-3xl shrink-0" />
                <div>
                  <p className="text-lg sm:text-xl lg:text-2xl font-extrabold text-black/80">
                    Activate
                  </p>
                  <p
                    style={{ lineHeight: "170%" }}
                    className="mt-3 lg:mt-4 xl:mt-6 text-sm font-bold text-gray-600"
                  >
                    Use the app to activate the chip and QR code of your Solkrd card. You can use
                    the same profile to activate multiple products!
                  </p>
                </div>
              </div>
              {/* Connect */}
              <div className="flex items-start gap-5 lg:gap-8 xl:gap-12 mt-5 lg:mt-8 xl:mt-12">
                <BsPeople className="text-xl sm:text-2xl lg:text-3xl shrink-0" />
                <div>
                  <p className="text-lg sm:text-xl lg:text-2xl font-extrabold text-black/80">
                    Connect
                  </p>
                  <p
                    style={{ lineHeight: "170%" }}
                    className="mt-3 lg:mt-4 xl:mt-6 text-sm font-bold text-gray-600"
                  >
                    Start connecting! Tap your Solkrd to the back of any smartphone to share your
                    profile or a single link. Others don't need an app or a Solkrd to access your
                    profile.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={demobg}
              alt=""
              className="w-full aspect-square rounded-xl object-cover object-center"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Index;

/* 
attachment,upi details page
privacy,terms
download page
 */
