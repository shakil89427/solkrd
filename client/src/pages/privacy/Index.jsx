import privacypolicybanner from "../../assets/images/privacypolicybanner.png";
import bigbg from "../../assets/images/bigbg.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Header />
      <div className="container px-0">
        <img
          loading="lazy"
          src={privacypolicybanner}
          alt=""
          className="w-full aspect-[4/1.6] lg:aspect-[4/1.4] object-cover object-center"
        />
      </div>
      <div className="container">
        <div
          style={{ backgroundImage: `url(${bigbg})` }}
          className="my-5 p-5 bg-cover bg-center bg-no-repeat"
        >
          <p className="text-mediumblue font-semibold text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center">
            Privacy Policy
          </p>
          <p
            style={{ lineHeight: "180%" }}
            className="p-10 mt-5 bg-white text-gray-700 rounded-lg text-lg max-w-[1200px] mx-auto"
          >
            Thank you for choosing to be part of our community at SolKrd ("Company," "we," "us," or
            "our"). We are committed to protecting your personal details and your right to privacy.
            If you have any questions or concerns about this privacy notice or our practices with
            regard to your personal information, please contact us or Visit our website at{" "}
            <Link to="/" className="text-mediumblue">
              solkrd.com
            </Link>
          </p>
          <p className="text-mediumblue font-semibold text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center mt-5">
            Points to remember:
          </p>
          <div
            style={{ lineHeight: "180%" }}
            className="p-10 mt-5 bg-white text-gray-700 rounded-lg text-lg max-w-[1200px] mx-auto"
          >
            <span>This privacy notice describes you how we might use your information if you:</span>
            <br />
            <br />
            <li>"Visit our website at https://solkrd.com"</li>
            <li>
              Engage with us in other related ways ― including any sales, marketing, or events.
            </li>
            <br />
            <span>In this privacy notice, if we refer to:</span>
            <br />
            <br />
            <li>
              "Website," we are referring to any website of ours that references or links to this
              policy.
            </li>
            <p className="mt-5">
              2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quaerat
              sapiente corporis quod, architecto sunt laboriosam ab. Magni perspiciatis illum
              aliquid. Vero, ipsum. Accusamus illum iusto optio ratione facere ut asperiores cumque
              earum in. Corrupti repudiandae quo cum at officiis cupiditate odit, harum numquam
              molestiae porro ullam nihil quasi, cumque quisquam consequuntur praesentium maxime
              quia error
            </p>
            <p className="mt-5">
              2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quaerat
              sapiente corporis quod, architecto sunt laboriosam ab. Magni perspiciatis illum
              aliquid. Vero, ipsum. Accusamus illum iusto optio ratione facere ut asperiores cumque
              earum in. Corrupti repudiandae quo cum at officiis cupiditate odit, harum numquam
              molestiae porro ullam nihil quasi, cumque quisquam consequuntur praesentium maxime
              quia error
            </p>
            <p className="mt-5">
              2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quaerat
              sapiente corporis quod, architecto sunt laboriosam ab. Magni perspiciatis illum
              aliquid. Vero, ipsum. Accusamus illum iusto optio ratione facere ut asperiores cumque
              earum in. Corrupti repudiandae quo cum at officiis cupiditate odit, harum numquam
              molestiae porro ullam nihil quasi, cumque quisquam consequuntur praesentium maxime
              quia error
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Index;
