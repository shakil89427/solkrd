import { BsArrowRight } from "react-icons/bs";
import demo1 from "../../assets/videos/demo1.mp4";

const Demo1 = () => {
  return (
    <div className="bg-gradient-to-r from-lightblue to-darkblue mt-10 lg:mt-16 xl:mt-20">
      <div className="container flex flex-col lg:flex-row items-center gap-10 py-8 sm:py-16 md:py-24 lg:py-32 xl:py-40">
        <video src={demo1} autoPlay muted loop className="rounded-xl w-full lg:w-1/2"></video>
        <div className="text-white xl:text-lg grow">
          <p
            style={{ lineHeight: "120%" }}
            className="font-semibold text-2xl sm:text-3xl md:text-4xl xl:text-5xl mt-5 max-w-[20ch] text-center mx-auto lg:ml-0 lg:text-left"
          >
            Find the right business card for you
          </p>
          <p
            style={{ lineHeight: "170%" }}
            className="mt-3 text-gray-100/90 text-center lg:text-left"
          >
            If you're like most people, you probably have a stack of business cards sitting in your
            wallet. And if you're like most people, those business cards are not doing much for you.
            They don't really help you stand out among the crowd. And they definitely don't help you
            get more customers.
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
export default Demo1;
