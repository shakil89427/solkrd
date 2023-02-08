import { useState } from "react";
import FaqItem from "./FaqItem";

const data = {
  title: "Regardless of the plan, all new users",
  text: "Regardless of the plan, all new users get to try out our Premium features for free—for 30 days. You will not be asked to provide any billing information. When the 30 days are up, you’ll automatically lose access to the Premium features, but you can continue using Track on the Free plan.",
};

const Faq = () => {
  const [selected, setSelected] = useState(false);

  return (
    <div className="pt-8 pb-14 mt-5">
      <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-800 text-center">
        FAQ's
      </p>
      <div className="grid grid-cols-1 gap-y-3 mt-5 max-w-[900px] mx-auto">
        {new Array(5).fill(data).map((item, index) => (
          <FaqItem {...{ selected, setSelected, item, index }} key={index} />
        ))}
      </div>
    </div>
  );
};
export default Faq;
