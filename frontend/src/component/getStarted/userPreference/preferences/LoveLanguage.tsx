import {
  LoveLanguageOption,
  type IProp,
} from "../../../../constants/hardcoded/constants";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../redux/store";

import { updateField } from "../../../../features/welcome/welcomeSlice";
import { useState } from "react";

const LoveLanguage = ({ index, setIndex }: IProp) => {
  // RTK
  const love = useSelector((state: RootState) => state.welcome.loveLanguage);
  const dispatch = useDispatch();

  const [error, setError] = useState("");

  const handleNext = () => {
    if (!love) {
      setError("Please select at least one love language.");
      return;
    }
    setError("");
    setIndex(index + 1);
  };

  return (
    <div className="w-full">
      <div className="w-full min-h-[75dvh] mb-12">
        <h1 className="text-white font-bold text-2xl mb-2">
          What's your love language?
        </h1>
        <h2 className="mb-8 text-[#B9B9C2]">
          Select that resonate with how you express and receive love.
        </h2>
        <div className="lg:flex lg:flex-wrap lg:gap-x-6">
          {LoveLanguageOption.map((option, index) => (
            <div
              key={index}
              onClick={() =>
                dispatch(
                  updateField({ field: "loveLanguage", value: option.title })
                )
              }
              className={`${
                love === option.title ? "border-[#FE5164]" : "border-[#505965]"
              } px-4 py-3 cursor-pointer w-full max-w-[600px] lg:max-w-[500px] border-2 mb-2 rounded-lg`}
            >
              <h1 className="font-semibold">{option.title}</h1>
              <p className="text-[#B9B9C2]">{option.description}</p>
            </div>
          ))}
        </div>

        {/* Show error if any */}
        {error && (
          <p className="text-red-500 font-semibold mt-4 max-w-[600px]">
            {error}
          </p>
        )}
      </div>

      {/* Next Button */}
      <div className="w-full flex items-center justify-center min-h-[10dvh]">
        <button
          onClick={handleNext}
          className="w-full cursor-pointer max-w-[700px] bg-gradient-to-b from-[#FC5F70] to-[#E419BB] hover:from-[#E419BB] hover:to-[#FC5F70] py-3 font-semibold rounded-2xl transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LoveLanguage;
