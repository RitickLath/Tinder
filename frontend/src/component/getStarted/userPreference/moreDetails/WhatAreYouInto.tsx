import {
  type IProp,
  interests,
} from "../../../../constants/hardcoded/constants";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../redux/store";
import { updateInto } from "../../../../features/welcome/welcomeSlice";
import { useState } from "react";

const WhatAreYouInto = ({ index, setIndex }: IProp) => {
  // RTK
  const interested = useSelector((state: RootState) => state.welcome.into);
  const dispatch = useDispatch();

  const [error, setError] = useState("");

  const handleNext = () => {
    if (interested.length === 0) {
      setError("Please select at least one interest.");
      return;
    }
    setError("");
    setIndex(index + 1);
  };

  return (
    <div className="w-full">
      <div className="w-full min-h-[75dvh]">
        <h1 className="text-white font-bold text-2xl mb-2">
          What are you into?
        </h1>
        <h2 className="text-[#B9B9C2] mb-4">
          Select your interests to help match with like-minded people.
        </h2>
        <p className="text-[#FE5164] font-medium mb-6">
          {interested.length}/5 selected
        </p>

        <div className="flex flex-wrap gap-3 max-w-[700px]">
          {interests.map((interest, index) => (
            <button
              key={index}
              onClick={() => dispatch(updateInto(interest))}
              className={`${
                interested.includes(interest)
                  ? "border-[#FE5164]"
                  : "border-[#505965]"
              } py-2 px-4 rounded-full border-2 text-sm font-medium text-white hover:bg-[#222529] ${
                interested.length >= 5 && !interested.includes(interest)
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={
                interested.length >= 5 && !interested.includes(interest)
              }
            >
              {interest}
            </button>
          ))}
        </div>

        {/* Show error */}
        {error && <p className="text-red-500 font-semibold mt-4">{error}</p>}
      </div>

      {/* Next Button */}
      <div className="mt-4 sm:mt-0 w-full flex items-center justify-center min-h-[10dvh]">
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

export default WhatAreYouInto;
