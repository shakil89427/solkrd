import { useRef } from "react";
import { GiFlexibleStar } from "react-icons/gi";
import { BsDroplet } from "react-icons/bs";
import { TbCapture } from "react-icons/tb";
import { MdNfc } from "react-icons/md";

const WhyChose = () => {
  const items = useRef([
    {
      title: "Flexible",
      text: "Easily update and share your digital business cards to any device, perfect for today's mobile and remote work environment.",
      icon: <GiFlexibleStar />,
    },
    {
      title: "Sustainable",
      text: "Choose an eco-friendly option and make a difference for the environment. Switch to miitap for a sustainable future.",
      icon: <BsDroplet />,
    },
    {
      title: "Unique",
      text: "Make a lasting impression with interactive features, and custom branding elements that will make your card unforgettable.",
      icon: <TbCapture />,
    },
    {
      title: "Digital",
      text: "Tap, scan, or click. Access your cards anytime with cloud-based storage and sharing options, making networking a breeze!",
      icon: <MdNfc />,
    },
  ]);
  return (
    <div className="mt-10 lg:mt-16 xl:mt-20 container">
      <p className="text-center font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-mediumblue">
        Why Choose Us
      </p>
      <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {items.current.map((item) => (
          <div
            key={item.title}
            className="bg-gray-100/40 rounded-xl p-5 lg:p-10 relative overflow-hidden"
          >
            <span className="text-5xl text-gray-600/90">{item.icon}</span>
            <p className="mt-7 mb-5 text-xl sm:text-2xl lg:text-3xl font-semibold text-lightblue">
              {item.title}
            </p>
            <p className="text-gray-600/90">{item.text}</p>
            <div className="absolute w-16 aspect-square bg-lightblue rounded-bl-full top-0 right-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default WhyChose;
