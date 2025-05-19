import { useState } from "react";
import {
  type IProp,
  interests,
} from "../../../../constants/hardcoded/constants";

const WhatAreYouInto = ({ index, setIndex }: IProp) => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    const isSelected = selectedInterests.includes(interest);

    if (isSelected) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else if (selectedInterests.length < 5) {
      setSelectedInterests([...selectedInterests, interest]);
    }
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
          {selectedInterests.length}/5 selected
        </p>

        <div className="flex flex-wrap gap-3 max-w-[700px]">
          {interests.map((interest, index) => (
            <button
              key={index}
              onClick={() => toggleInterest(interest)}
              className={`${
                selectedInterests.includes(interest)
                  ? "border-[#FE5164]"
                  : "border-[#505965]"
              } py-2 px-4 rounded-full border-2 text-sm font-medium text-white hover:bg-[#222529] ${
                selectedInterests.length >= 5 &&
                !selectedInterests.includes(interest)
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              // disable button if 5 selected and selection hover is not already selected
              disabled={
                selectedInterests.length >= 5 &&
                !selectedInterests.includes(interest)
              }
            >
              {interest}
            </button>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <div className="mt-4 sm:mt-0 w-full flex items-center justify-center min-h-[10dvh]">
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

export default WhatAreYouInto;
