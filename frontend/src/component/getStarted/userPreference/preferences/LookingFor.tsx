import { useState } from "react";
import {
  type IProp,
  lookingForOption,
} from "../../../../constants/hardcoded/constants";

const LookingFor = ({ index, setIndex }: IProp) => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="w-full">
      <div className="w-full min-h-[75dvh]">
        <h1 className="text-white font-bold text-2xl mb-2">
          What are you looking for?
        </h1>
        <h2 className="mb-8 text-[#B9B9C2]">
          All good if it changes. There's something for everyone.
        </h2>
        <div className="flex flex-wrap gap-4 lg:max-w-[800px]">
          {lookingForOption.map((element, index) => (
            <div
              key={index}
              onClick={() => setSelected(index)}
              className={`${
                selected === index ? "border-[#FE5164]" : "border-[#505965]"
              } flex flex-col items-center justify-center text-center cursor-pointer w-full max-w-[200px] h-[120px] border-2 rounded-2xl hover:bg-[#222529] transition`}
            >
              <h1 className="text-xl mb-2">{element.emoji}</h1>
              <h2 className="max-w-[100px] font-semibold text-white">
                {element.title}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <div className="w-full flex items-center justify-center min-h-[10dvh]">
        <button
          onClick={() => setIndex(index + 1)}
          className="w-full cursor-pointer max-w-[700px] bg-gradient-to-b from-[#FC5F70] to-[#E419BB] hover:from-[#E419BB] hover:to-[#FC5F70] py-3 font-semibold rounded-2xl transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LookingFor;
