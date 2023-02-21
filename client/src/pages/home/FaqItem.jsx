import { useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const FaqItem = ({ selected, setSelected, item }) => {
  const itemRef = useRef();

  return (
    <div
      onClick={() => setSelected(selected ? false : item.id)}
      className="p-5 cursor-pointer bg-gray-100/80 select-none rounded-lg"
    >
      <div className="flex items-center justify-between">
        <p className="select-none text-base">{item.question}</p>
        <AiOutlinePlus className={`duration-300 ${selected ? "rotate-45" : "rotate-0"}`} />
      </div>
      <p
        ref={itemRef}
        style={{
          height: selected ? itemRef?.current?.scrollHeight + 16 + "px" : "0px",
          marginTop: selected ? "8px" : "0px",
          paddingTop: selected ? "8px" : "0px",
          paddingBottom: selected ? "8px" : "0px",
        }}
        onClick={(e) => e.stopPropagation()}
        className="duration-300 text-sm bg-white px-2 overflow-hidden cursor-auto select-text"
      >
        {item.answer}
      </p>
    </div>
  );
};
export default FaqItem;
