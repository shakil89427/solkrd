import { useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const FaqItem = ({ selected, setSelected, item }) => {
  const itemRef = useRef();

  return (
    <div
      onClick={() => setSelected(selected ? false : item.id)}
      className="p-5 cursor-pointer bg-blue-100/40 select-none rounded-lg text-black/80"
    >
      <div className="flex items-center justify-between font-medium">
        <p className="select-none font-semibold">{item.question}</p>
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
        className="duration-300 bg-white px-2 overflow-hidden cursor-auto select-text font-medium rounded"
      >
        {item.answer}
      </p>
    </div>
  );
};
export default FaqItem;
