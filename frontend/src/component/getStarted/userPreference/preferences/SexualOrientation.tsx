import { useState } from "react";
import { SexualOptions } from "../../../../constants/hardcoded/constants";

interface IProp {
  index: number;
  setIndex: (i: number) => void;
}

const SexualOrientation = ({ index, setIndex }: IProp) => {
  const [selected, setSelected] = useState<number[]>([]);
  const [showOnProfile, setShowOnProfile] = useState<boolean>(false);

  const handleSelect = (index: number) => {
    if (selected.includes(index)) {
      setSelected((prev) => prev.filter((item) => item !== index));
    } else {
      setSelected((prev) => [...prev, index]);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full min-h-[75dvh] mb-12">
        <h1 className="text-white font-bold text-2xl mb-2">
          What's your sexual orientation?
        </h1>
        <h2 className="mb-8 text-[#B9B9C2]">
          Select all that describe you to reflect your identity.
        </h2>
        <div className="lg:flex lg:flex-wrap lg:gap-x-6">
          {SexualOptions.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(index)}
              className={`${
                selected.includes(index)
                  ? "border-[#FE5164]"
                  : "border-[#505965]"
              } px-4 py-3 cursor-pointer w-full max-w-[600px] lg:max-w-[500px] border-2 mb-2 rounded-lg`}
            >
              <h1 className="font-semibold">{option.title}</h1>
              <p className="text-[#B9B9C2]">{option.description}</p>
            </div>
          ))}
        </div>

        {/* Checkbox to show on profile */}
        <div className="flex items-center mt-6">
          <input
            type="checkbox"
            id="showOnProfile"
            checked={showOnProfile}
            onChange={(e) => setShowOnProfile(e.target.checked)}
            className="w-5 h-5 mr-3 accent-[#FE5164] cursor-pointer"
          />
          <label
            htmlFor="showOnProfile"
            className="text-[#B9B9C2] cursor-pointer"
          >
            Show my orientation on my profile
          </label>
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

export default SexualOrientation;
