import { AiFillCreditCard, AiOutlineShareAlt, AiFillAndroid, AiFillCloud } from "react-icons/ai";

const items = [
  { text: "Share your Contact Card", icon: <AiFillCreditCard /> },
  { text: "Share your Social Media", icon: <AiOutlineShareAlt /> },
  { text: "Share Anything Anytime", icon: <AiOutlineShareAlt /> },
  { text: "Works with Android & IPhone", icon: <AiFillAndroid /> },
  { text: "Upload documents and Files", icon: <AiFillCloud /> },
];

const WhyChose = () => {
  return (
    <div className="container ">
      <div className="mt-5 bg-gray-100 pt-8 pb-14">
        <p className="text-center font-semibold text-blue-800 text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Why choose SolKRD?
        </p>
        <div className="mt-5 flex items-center justify-center flex-wrap gap-8 w-fit max-w-[1000px] mx-auto">
          {items.map((item) => (
            <div
              key={item.text}
              className="border w-full max-w-[280px] p-5 rounded-xl shadow-lg flex flex-col items-center justify-center gap-2 text-3xl h-[120px]"
            >
              {item.icon}
              <p className="text-base text-center font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default WhyChose;
