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
            DISCLAIMER
          </p>
          <p className="text-center font-bold text-gray-500 mt-1">Last updated February 26, 2023</p>
          <div style={{ lineHeight: "170%" }} className="mt-12 text-lg text-black/80">
            <p className="text-lg font-extrabold">WEBSITE DISCLAIMER</p>
            <p className="mt-8">
              The information provided by Star SMPS Pvt Ltd ("<span className="font-bold">we</span>
              ," "<span className="font-bold">us</span>," or "<span className="font-bold">our</span>
              ") on {""}
              <Link to="/" className="text-mediumblue">
                {window.location.origin}
              </Link>{" "}
              (the "<span className="font-bold">Site</span>") and our mobile application is for
              general informational purposes only. All information on the Site and our mobile
              application is provided in good faith, however we make no representation or warranty
              of any kind, express or implied, regarding the accuracy, adequacy, validity,
              reliability, availability, or completeness of any information on the Site or our
              mobile application. UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY
              LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR OUR MOBILE
              APPLICATION OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE AND OUR MOBILE
              APPLICATION. YOUR USE OF THE SITE AND OUR MOBILE APPLICATION AND YOUR RELIANCE ON ANY
              INFORMATION ON THE SITE AND OUR MOBILE APPLICATION IS SOLELY AT YOUR OWN RISK.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Index;
