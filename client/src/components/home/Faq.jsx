import { useState } from "react";
import FaqItem from "./FaqItem";

const data = [
  {
    question: "What is the SolKRD Card made up of?",
    answer: "SolKRD Card is made up of PVC.",
    id: 1,
  },
  {
    question: "How many things can I save in SolKRD ?",
    answer:
      "You can save your personal information like social media links, contact details, emails, product details and much more.",
    id: 2,
  },
  {
    question: "Can I Update my profile on SolKRD ?",
    answer: "Yes, you can update your information on SolKRD anytime and anywhere.",
    id: 3,
  },
  {
    question: "Do I need to pay any monthly or yearly charges after buying a Card?",
    answer: "No, you don’t need to pay any charges. You can use the card forever.",
    id: 4,
  },
  {
    question: "How does SolKRD work ?",
    answer:
      "It works in 3 ways, 1) By tapping on any mobile device 2) By scanning QR code 3) By sharing your profile link.",
    id: 5,
  },
  {
    question: "Does it work on my device ?",
    answer: "SolKRD works on every Android or IOS device.",
    id: 6,
  },
  {
    question: "How can I place an order for SolKRD ?",
    answer:
      "You can place an order from an Android or IOS app. Download the app from PlayStore or AppStore.",
    id: 7,
  },
  {
    question: "Can I print my QR code & use it in my daily life ?",
    answer:
      "Yes, you can download your qr code from SolKRD Android or IOS app and you can simply print it. You can use your profile QR code in Your reception, any type of brochures or any place where you can easily place it.",
    id: 8,
  },
];

const Faq = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="pt-8 pb-14 mt-5">
      <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-800 text-center">
        FAQ's
      </p>
      <div className="grid grid-cols-1 gap-y-3 mt-5 max-w-[900px] mx-auto">
        {data.map((item) => (
          <FaqItem {...{ selected: selected === item.id, setSelected, item }} key={item.id} />
        ))}
      </div>
    </div>
  );
};
export default Faq;
