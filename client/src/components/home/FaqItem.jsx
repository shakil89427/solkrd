import { useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const FaqItem = ({ selected, setSelected, item, index }) => {
  const itemRef = useRef();

  return (
    <div
      onClick={() => setSelected(selected === index ? false : index)}
      key={index}
      className="p-5 cursor-pointer bg-gray-100 select-none rounded-lg"
    >
      <div className="flex items-center justify-between">
        <p className="select-none text-base">{item.title}</p>
        <AiOutlinePlus
          className={`duration-300 ${selected === index ? "rotate-45" : "rotate-0"}`}
        />
      </div>
      <p
        ref={itemRef}
        style={{
          height: selected === index ? itemRef?.current?.scrollHeight + 16 + "px" : "0px",
          marginTop: selected === index ? "8px" : "0px",
          paddingTop: selected === index ? "8px" : "0px",
          paddingBottom: selected === index ? "8px" : "0px",
        }}
        onClick={(e) => e.stopPropagation()}
        className="duration-300 text-sm bg-white px-2 overflow-hidden cursor-auto select-text"
      >
        {item.text}
      </p>
    </div>
  );
};
export default FaqItem;
