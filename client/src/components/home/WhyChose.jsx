import whychoose1 from "../../assets/images/whychoose1.png";
import whychoose2 from "../../assets/images/whychoose2.png";
import whychoose3 from "../../assets/images/whychoose3.png";
import whychoose4 from "../../assets/images/whychoose4.png";
import whychoose5 from "../../assets/images/whychoose5.png";
import whychoosebg from "../../assets/images/whychoosebg.png";

const WhyChose = () => {
  return (
    <div
      style={{ backgroundImage: `url(${whychoosebg})` }}
      className="mt-5 p-5 lg:pt-12 lg:pb-16 bg-cover bg-center bg-no-repeat rounded-lg"
    >
      <p className="text-center font-semibold text-blue-800 text-lg sm:text-xl md:text-2xl lg:text-3xl">
        Why choose SolKRD?
      </p>
      <div className="mt-5 flex items-center justify-center flex-wrap gap-8 w-fit max-w-[1000px] mx-auto">
        <div className="bg-white border w-full max-w-[280px] p-5 rounded-xl shadow-lg flex flex-col items-center justify-center gap-2 text-3xl h-[130px]">
          <img loading="lazy" src={whychoose1} alt="" className="w-7 object-cover object-center" />
          <p className="text-base text-center font-medium">Share your Contact Card</p>
        </div>
        <div className="bg-white border w-full max-w-[280px] p-5 rounded-xl shadow-lg flex flex-col items-center justify-center gap-2 text-3xl h-[130px]">
          <img loading="lazy" src={whychoose2} alt="" className="w-7 object-cover object-center" />
          <p className="text-base text-center font-medium">Share your Social Media</p>
        </div>
        <div className="bg-white border w-full max-w-[280px] p-5 rounded-xl shadow-lg flex flex-col items-center justify-center gap-2 text-3xl h-[130px]">
          <img loading="lazy" src={whychoose3} alt="" className="w-6 object-cover object-center" />
          <p className="text-base text-center font-medium">Share Anything Anytime</p>
        </div>
        <div className="bg-white border w-full max-w-[280px] p-5 rounded-xl shadow-lg flex flex-col items-center justify-center gap-2 text-3xl h-[130px]">
          <img loading="lazy" src={whychoose4} alt="" className="w-8 object-cover object-center" />
          <p className="text-base text-center font-medium">Works with Android & IPhone</p>
        </div>
        <div className="bg-white border w-full max-w-[280px] p-5 rounded-xl shadow-lg flex flex-col items-center justify-center gap-2 text-3xl h-[130px]">
          <img loading="lazy" src={whychoose5} alt="" className="w-7 object-cover object-center" />
          <p className="text-base text-center font-medium">Upload documents and Files</p>
        </div>
      </div>
    </div>
  );
};
export default WhyChose;
