import { BsArrowRight } from "react-icons/bs";
import demo1 from "../../assets/videos/demo1.mp4";

const Demo2 = () => {
  return (
    <div className="bg-gradient-to-r from-darkblue to-lightblue mt-10 lg:mt-16 xl:mt-20">
      <div className="container flex flex-col lg:flex-row-reverse items-center gap-10 py-8 sm:py-16 md:py-24 lg:py-32 xl:py-40">
        <video src={demo1} autoPlay muted loop className="rounded-xl w-full lg:w-1/2"></video>
        <div className="text-white xl:text-lg grow">
          <p
            style={{ lineHeight: "120%" }}
            className="font-semibold text-2xl sm:text-3xl md:text-4xl xl:text-5xl mt-5 max-w-[20ch] text-center mx-auto lg:ml-0 lg:text-left"
          >
            Networking has never been easier
          </p>
          <p
            style={{ lineHeight: "170%" }}
            className="mt-3 text-gray-100/90 text-center lg:text-left"
          >
            Want to share your Facebook or LinkedIn profiles easily? Luckily, the card allows you to
            connect all your social media accounts, websites and more. You can also add a profile
            picture and any other URLs you would like to share with a single tap.
          </p>
          <div className="flex text-blue-800 items-center justify-center gap-3 h-11 w-44 bg-white mt-5 rounded cursor-pointer select-none font-medium mx-auto lg:ml-0">
            <p>Shop Now</p>
            <BsArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Demo2;
